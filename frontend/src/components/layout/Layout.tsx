import TopBar from "../topbar/TopBar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="px-7 sm:px-20 md:px-10 lg:px-30 xl:px-50 w-full min-h-screen bg-black max-w-screen">
        <TopBar />
        {/* chỉ cho main được scroll */}
        <main>
          <Outlet />
        </main>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
