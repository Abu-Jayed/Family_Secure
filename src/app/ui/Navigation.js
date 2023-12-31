"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

const Navigation = () => {
  const navigationMenu = [
    {
      href: "#",
      label: "Home",
    },
    {
      href: "#",
      label: "How we work",
    },
    {
      href: "#",
      label: "Our Mission",
    },
    {
      href: "#",
      label: "About",
    },
    {
      href: "#",
      label: "Contact",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [navOpen, dimensions.width]);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <Link href="/">
                <Image
                  src={logo}
                  width={157}
                  height={30}
                  alt="website logo"
                ></Image>
              </Link>
            </div>
            {/* navigation menu */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item) => {
                  return (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* CTA */}
            <div>
              <Link
                href="#"
                className="px-5 py-4 bg-primary text-white rounded-lg hidden lg:inline-block"
              >
                Get Started
              </Link>
              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiBars3 className="text-3xl"></HiBars3>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* for mobile/tablet nav menu */}
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden fixed w-screen z-[9999]"
        }
      >
        <div
          onClick={mobileMenuHandler}
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
        ></div>

        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed  ">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              onClick={mobileMenuHandler}
              className="flex items-center space-x-3"
            >
              <GrClose></GrClose>
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                      href={item.href}
                    >
                      <span>{item.label}</span>
                      <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3  ">
                        <BiChevronRight></BiChevronRight>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
