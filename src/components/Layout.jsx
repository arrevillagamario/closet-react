import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../public/img/logo3.png";
import sun from "../../public/img/sun_121156.png";
import moon from "../../public/img/weather_night_icon_137032.png";

const Layout = () => {
  let location = useLocation();
  console.log(location);
  const [theme, setTheme] = useState("light");
  const [clase, setClase] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTimeout(() => {
        setTheme("dark");
      }, 2000);
    } else {
      setTimeout(() => {
        setTheme("light");
      }, 2000);
    }
    setClase(true);
    setTimeout(() => {
      setClase(false);
    }, 2000);
  };

  return (
    <div>
      <nav
        className=" text-white flex justify-between items-center "
        style={{ backgroundColor: "#d22f62" }}
      >
        <div className="mx-3">
          <img src={logo} alt="Logo de la empresa" className="h-24" />
        </div>
        <div className="space-x-2 mx-6">
          <Link
            to={"/"}
            className={`${
              location.pathname === "/" ? "text-black bg-pink-200" : ""
            } hover:bg-pink-200 hover:text-black p-2 rounded-md`}
          >
            Home
          </Link>
          <Link
            to={"/collection"}
            className={`${
              location.pathname === "/collection"
                ? "text-black bg-pink-200"
                : ""
            } hover:bg-pink-200 hover:text-black p-2 rounded-md`}
          >
            Collection
          </Link>
          <Link
            to={"/about"}
            className={`${
              location.pathname === "/about" ? "text-black bg-pink-200" : ""
            }  hover:bg-pink-200 hover:text-black p-2 rounded-md`}
          >
            About us
          </Link>
          <Link
            to={"/contact"}
            className={`${
              location.pathname === "/contact" ? "text-black bg-pink-200" : ""
            }  hover:bg-pink-200 hover:text-black p-2 rounded-md`}
          >
            Contact
          </Link>
          <Link>
            <button
              onClick={handleTheme}
              className={
                clase
                  ? "click animate-jump-out animate-once animate-duration-[2000ms]"
                  : "animate-jump-in animate-once animate-duration-[2000ms]"
              }
            >
              {theme === "light" ? (
                <>
                  <img src={moon} alt="" className="w-10" />
                </>
              ) : (
                <>
                  <img src={sun} alt="" className="w-10" />
                </>
              )}
            </button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
