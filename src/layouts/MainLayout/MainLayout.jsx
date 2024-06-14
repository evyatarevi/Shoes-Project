import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>Nav</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
