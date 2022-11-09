import styles from './Header.module.scss'
import cls from 'classnames';
import {FaPhoneSquareAlt} from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import {RiArrowDownSLine} from "@react-icons/all-files/ri/RiArrowDownSLine";
import {useEffect, useState} from "react";
import SearchBox from "./searchbox/SearchBox";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.background = 'rgba(16, 16, 16, 0.5)';
    } else {
      document.body.style.background = 'white';
    }
  }, [isMenuOpen]);
  return (<>
    <header className={cls(styles.navbar)}>
      <div className={cls("container mx-auto h-full")}>
        <div className={cls("flex items-center justify-between h-full")}>
          {/*logo*/}
          <div className={cls("flex items-center")}>
            <a href="#" className={cls("flex items-center")}>
              <img src="/assets/imgs/logo.jpg" alt="logo" className={cls("h-20")}/>
            </a>
          </div>
          {/*menu*/}
          <div className={cls("h-full flex items-center")}>
            <ul
              className={cls("h-full flex items-center justify-between uppercase font-semibold text-base space-x-16")}>
              <li className={cls("mr-4 h-full flex items-center")}>
                <a href="#" className={cls("text-gray-600")}>Products</a>
              </li>
              <li onMouseOver={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}
                  className={cls(styles.dropdown, "mr-4 h-full flex items-center")}>
                <a href="#" className={cls("text-gray-600 flex items-center ")}>
                  <span>Dropdown</span>
                  <RiArrowDownSLine className={cls(styles.dropdown_icon, "ml-1 w-6 h-6")}/>
                </a>
                {/*Sub Menu*/}
                <div
                  className={cls("absolute container bg-white flex h-72 mx-auto rounded-b-xl shadow-2xl", styles.dropdown_item)}>
                  <div className={cls("w-1/2  ml-28 mt-10 ")}>
                    <ul className={cls("flex flex-col  gap-4 border-l-2 cursor-pointer ")}>
                      <li
                        className={cls("text-gray-600 hover:text-gray-700 text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-gray-700  p-2 pl-5")}>
                        Home
                      </li>
                      <li
                        className={cls("text-gray-600 hover:text-gray-700 text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-gray-700  p-2 pl-5")}>
                        About
                      </li>
                      <li
                        className={cls("text-gray-600 hover:text-gray-700 text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-gray-700  p-2 pl-5")}>
                        Clients
                      </li>
                    </ul>

                  </div>
                  <div className={cls(styles.right, "w-1/2 h-52 bg-blue-500")}
                       style={{background: "url(/assets/imgs/demo1.jpg)"}}>
                  </div>
                </div>
              </li>
              <li className={cls("mr-4 h-full flex items-center")}>
                <a href="#" className={cls("text-gray-600")}>Contact</a>
              </li>
            </ul>
          </div>

          {/*  whatsapp and search box*/}
          <div className={cls("flex items-center")}>
            <a href="tel:+8801711-000000" className={cls("flex items-center text-gray-400 mr-16")}>
              <FaPhoneSquareAlt className={cls("h-5 w-5 mr-2")}/>
              <span>+8801711-000000</span>
            </a>
            <div className={"relative h-full"}>
              <div className={"absolute right-0 -top-5 "}>
                <SearchBox/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  </>);
};

export default Header;