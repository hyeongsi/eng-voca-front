import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { Word } from "../types/word";
import WordTr from "./WordTr";

export default function Day() {
  const { day } = useParams<{ day: string }>();

  const { data, isLoading, error } = useFetch<Word[]>(
    `http://localhost:5174/words?day=${day}`
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;
  if (!data) return null;

  return (
    <div>
      <h2>{"Day " + day}</h2>
      {data && data?.length > 0 && (
        <table border={1}>
          <tbody>
            {data.map((word: Word) => {
              return <WordTr key={word.id} {...word} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
