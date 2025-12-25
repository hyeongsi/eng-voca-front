import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const { data, isLoading, error } = useFetch<{ day: number }[]>(
    "http://localhost:5174/days"
  );

  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생</p>;
  if (!data) return null;

  return (
    <ul>
      {data.map(({ day }) => (
        <li key={day}>
          <Link to={`/day/${day}`}>Day {day}</Link>
        </li>
      ))}
    </ul>
  );
}
