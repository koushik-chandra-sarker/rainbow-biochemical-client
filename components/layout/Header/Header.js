import styles from './Header.module.scss'
import cls from 'classnames';
import {FaPhoneSquareAlt} from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import SearchBox from "./searchbox/SearchBox";
import {RiArrowDownSLine} from "@react-icons/all-files/ri/RiArrowDownSLine";

import Image from 'next/image';
const Header = () => {
  return (<>
    <header className={cls(styles.navbar)}>
      <div className={cls("container mx-auto h-full")}>
        <div className={cls("flex items-center justify-between h-full")}>
          {/*logo*/}
          <div className={cls("flex items-center")}>
            <a href="#" className={cls("flex items-center")}>
              <Image src="/assets/imgs/logo.jpg" alt="logo"
                     width={70}
                     height={70}/>
            </a>
          </div>
          {/*menu*/}
          <div className={cls("h-full flex items-center")}>
            <ul
              className={cls("h-full flex items-center justify-between uppercase font-semibold text-base space-x-16")}>
              <li className={cls("mr-4 h-full flex items-center")}>
                <a href="#" className={cls("text-gray-600")}>Products</a>
              </li>
              <li className={cls(styles.dropdown, "mr-4 h-full flex items-center")}>
                <a href="#" className={cls("text-gray-600 flex items-center ")}>
                  <span>Dropdown</span>
                  <RiArrowDownSLine className={cls(styles.dropdown_icon, "ml-1 w-6 h-6")}/>
                </a>

                <div className={cls("absolute container   bg-red-500", styles.dropdown_item)}>
                  <div className={cls(" container bg-white flex h-72 mx-auto rounded-b-xl")}>
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
                         style={{background: "url(/assets/imgs/demo1.jpg)"}}></div>
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
            <a href="tel:+8801711-000000" className={cls("flex items-center text-gray-400")}>
              <FaPhoneSquareAlt className={cls("h-5 w-5 mr-2")}/>
              <span>+8801711-000000</span>
            </a>
            <div className={"relative h-full"}>
              <SearchBox/>
            </div>
          </div>
        </div>
      </div>

    </header>
  </>);
};

export default Header;