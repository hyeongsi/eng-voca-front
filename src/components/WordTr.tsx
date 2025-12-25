import { useState } from "react";
import type { Word } from "../types/word";
import "./WordTr.css";

export default function WordTr(propWord: Word) {
  const [word, setWord] = useState<Word>(propWord);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(word.isDone);

  function toggleIsShow() {
    setIsShow(!isShow);
  }

  function toggleIsDone() {
    fetch(`http://localhost:5174/words/${word.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) setIsDone(!isDone);
    });
  }

  function deleteWord() {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    fetch(`http://localhost:5174/words/${word.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("삭제되었습니다");
        setWord({ ...word, id: 0 });
      }
    });
  }

  if (word.id === 0) return null;

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleIsDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleIsShow}>{isShow ? "숨기기" : "보기"}</button>
        <button onClick={deleteWord}>삭제</button>
      </td>
    </tr>
  );
}
