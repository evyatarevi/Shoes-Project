import { Outlet } from "react-router-dom";

import { Nav } from "../../index";

const MainLayout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
