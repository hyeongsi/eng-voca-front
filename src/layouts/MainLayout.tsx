import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <Header title="토익 영단어(고급)" />
      <Outlet />
    </>
  );
}
