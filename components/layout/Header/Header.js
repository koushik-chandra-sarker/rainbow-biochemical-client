import styles from './Header.module.scss'
import cls from 'classnames';
import {FaPhoneSquareAlt} from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import {RiArrowDownSLine} from "@react-icons/all-files/ri/RiArrowDownSLine";
import {useEffect, useRef, useState} from "react";
import Image from 'next/image'
import logo from "../../../public/assets/imgs/logo_h.jpg";
import Search from "../../Search/Search";
import {useProSidebar} from "react-pro-sidebar";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownOverlay = useRef();
  const {collapseSidebar} = useProSidebar();
  useEffect(() => {
    dropdownOverlay.current.style.transform = isMenuOpen ? 'scale(1)' : 'scale(0)';
  }, [isMenuOpen]);
  return (<>
    <Sidebar/>
    <header className={cls(styles.navbar)}>
      {/*desktop nabvar*/}
      <div className={cls("tablet:w-8/12 w-11/12 hidden desktop:block mx-auto h-full")}>
        <div className={cls("flex flex-wrap items-center justify-between h-full")}>
          {/*logo*/}
          <div className={cls("flex items-center")}>
            <a href="#" className={cls("flex items-center")}>
              <Image src={logo} alt="Biochemical logo" className={cls("w-36")}/>
            </a>
          </div>
          {/*menu*/}
          <div className={cls("h-full flex items-center")}>
            <ul
              className={cls("h-full flex  items-center justify-between uppercase font-semibold text-base space-x-16")}>
              <li className={cls("mr-4 h-full flex items-center")}>
                <Link href="#" className={cls("text-gray-600")}>Products</Link>
              </li>
              <li onMouseOver={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}
                  className={cls(styles.dropdown, "mr-4 h-full flex items-center")}>
                <Link href="#" className={cls("text-gray-600 flex items-center ")}>
                  <span>Biochemical</span>
                  <RiArrowDownSLine className={cls(styles.dropdown_icon, "ml-1 w-6 h-6")}/>
                </Link>
                {/*Sub Menu*/}
                <div
                  className={cls("absolute container bg-white flex h-72 mx-auto rounded-b-xl shadow-2xl", styles.dropdown_item)}>
                  <div className={cls("w-1/2  ml-28 mt-10 ")}>
                    <ul className={cls("flex flex-col  gap-4 border-l-2 cursor-pointer ")}>
                      <li
                        className={cls("text-gray-600 hover:text-gray-700 text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-gray-700  p-2 pl-5")}>
                        <Link href={"/"}>Home</Link>
                      </li>
                      <li
                        className={cls("text-gray-600 hover:text-gray-700 text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-gray-700  p-2 pl-5")}>
                        <Link href={"/about"}>About</Link>
                      </li>
                      <li
                        className={cls("text-gray-600 hover:text-gray-700 text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-gray-700  p-2 pl-5")}>
                        <Link href={"/client"}>Clients</Link>
                      </li>
                    </ul>

                  </div>
                  <div className={cls(styles.right, "w-1/2 h-52 bg-blue-500")}
                       style={{background: "url(/assets/imgs/demo1.jpg)"}}>
                  </div>
                </div>
              </li>
              <li className={cls("mr-4 h-full flex items-center")}>
                <Link href="/contact" className={cls("text-gray-600")}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={cls(styles.overlay)} ref={dropdownOverlay}></div>

          {/*  whatsapp and search box*/}
          <div className={cls("flex items-center")}>
            <a href="tel:+8801711-000000" className={cls("flex items-center text-gray-400 mr-16")}>
              <FaPhoneSquareAlt className={cls("h-5 w-5 mr-2")}/>
              <span>+8801711-000000</span>
            </a>
            <div className={"relative h-full"}>
              <div className={"absolute right-0 -top-5 "}>
                <Search/>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/*Mobile Navbar*/}
      <div className={cls("tablet:container px-4 block desktop:hidden mx-auto h-full")}>
        {/*<Sidebar/>*/}
        <div className={cls("flex flex-wrap items-center justify-between h-full")}>
          <div className={cls(styles.hamburger)}>
            <label htmlFor="check">
              <input type="checkbox" id="check" onClick={() => collapseSidebar()}/>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className={cls("flex items-center")}>
            <Link href="/" className={cls("flex items-center")}>
              <Image src={logo} alt="Biochemical logo" className={cls("w-36")}/>
            </Link>
          </div>
          <div className={cls("flex items-center")}>
            {/*  whatsapp and search box*/}
            <div className={cls("flex items-center")}>
              {/*<a href="tel:+8801711-000000" className={cls("flex items-center text-gray-400 mr-16")}>*/}
              {/*  <FaPhoneSquareAlt className={cls("h-5 w-5 mr-2")}/>*/}
              {/*  <span>+8801711-000000</span>*/}
              {/*</a>*/}
              <div className={"relative h-full"}>
                <div className={"absolute right-0 -top-5 "}>
                  <Search/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </header>
  </>);
};

export default Header;