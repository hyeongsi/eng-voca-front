import { Link } from "react-router-dom";
import "./Header.css";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <div className={"header"}>
      <h1>
        <Link to="/">{title}</Link>
      </h1>

      <div className={"button-group"}>
        <button>단어 추가</button>
        <button>Day 추가</button>
      </div>
    </div>
  );
}

export default Header;
