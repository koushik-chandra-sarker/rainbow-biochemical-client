import React from 'react';
import cls from "classnames";
import Image from "next/image";
import iconPhone from "../../../public/assets/icons/icon-phone.png";
import iconMail from "../../../public/assets/icons/icon-mail.png";
import iconShare from "../../../public/assets/icons/icon-share.png";
import p1 from "../../../public/assets/imgs/p1.jpg";
import p2 from "../../../public/assets/imgs/p2.jpg";
import p3 from "../../../public/assets/imgs/p3.jpg";
import p4 from "../../../public/assets/imgs/p4.jpg";
import logo from "../../../public/assets/imgs/logo_h.jpg";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from "swiper";
import {CopyrightOutlined, FacebookFilled, InstagramFilled, TwitterSquareFilled} from "@ant-design/icons";


const Footer = () => {
  return (<footer className={cls("")}>
    <hr className={"my-20"}/>

    {/*footer top portion*/}
    <div className={"top container mx-auto grid grid-cols-3 gap-4"}>
      <div className={cls("")}>
        <div className={cls("flex items-center gap-4")}>
          <div className={cls("w-18 h-18 border-2 rounded-full text-3xl p-4   flex justify-center items-center")}>
            <Image src={iconPhone} alt="Phone Icon"/>
          </div>
          <h3 className={cls("font-bold text-xl")}>FREE CONSUMER HELPLINE</h3>
        </div>
        <hr className={"my-8"}/>
        <p className={cls("text-gray-500 text-base")}>
          Lorem ipsum dolor sit amet, dolor consectetur adipisicing elit. Aperiam,
          asperiores atque autem consequatur cumque dolorum
        </p>
      </div>


      <div className={cls("")}>
        <div className={cls("flex items-center gap-4")}>
          <div className={cls("w-18 h-18 border-2 rounded-full text-3xl p-4 flex justify-center items-center")}>
            <Image src={iconMail} alt="Phone Icon"/>
          </div>

          <h3 className={cls("font-bold text-xl")}>SUBSCRIBE TO E-NEWS</h3>
        </div>
        <hr className={"my-8"}/>
        <form action="">
          <div className="relative  sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input type="text" id="footer-field" name="footer-field" placeholder={"Your E-mail address"}
                   className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-green-600 focus:border-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <button
              className="mt-5 flex-shrink-0 inline-flex tracking-widest transition-all text-gray-50 hover:text-gray-700 font-bold uppercase bg-gray-400 hover:bg-green-500 border-0 py-2 px-6 focus:outline-none  rounded-badge">
              Register
            </button>
          </div>
        </form>
      </div>


      <div className={cls("")}>
        <div className={cls("flex items-center gap-4")}>
          <div className={cls("w-18 h-18 border-2 rounded-full text-3xl p-4 flex justify-center items-center")}>
            <Image src={iconShare} alt="Phone Icon"/>
          </div>
          <h3 className={cls("font-bold text-xl")}>FOLLOW US</h3>
        </div>
        <hr className={"my-8"}/>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={"h-32 w-32"}>
              <Image src={p1} alt={"p1"} className={"w-full h-full object-contain"}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"h-32 w-32"}>
              <Image src={p2} alt={"p1"} className={"w-full h-full object-contain"}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"h-32 w-32"}>
              <Image src={p3} alt={"p1"} className={"w-full h-full object-contain"}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={"h-32 w-32"}>
              <Image src={p4} alt={"p1"} className={"w-full h-full object-contain"}/>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
    <hr className={'my-20'}/>
    {/*footer bottom portion*/}
    <section className="bottom top w-8/12 mx-auto ">
      {/*Brand Intro*/}
      <section className={"flex"}>
        <Image src={logo} alt={"Brand Logo"} className={"w-40 border-r-2 pr-4"}/>
        <div className={"ml-4 flex items-center"}>
          <p className={cls("text-gray-500 text-base")}>
            Lorem Chemical has been manufacturing<br/>
            innovative products in the field of industrial and retail.
          </p>
        </div>
      </section>
      {/*footer contents*/}
      <section className={"grid grid-cols-4 gap-4 mt-20"}>
        <section>
          <h3 className={cls("font-bold text-base")}>Products</h3>
          <hr className={"my-5"}/>
          <ul className={cls("text-gray-500 text-sm")}>
            <li className={"mb-2"}>MARKET PRODUCTS</li>
          </ul>
        </section>
        <section>
          <h3 className={cls("font-bold text-base")}>Biochemical</h3>
          <hr className={"my-5"}/>
          <ul className={cls("text-gray-500 text-sm")}>
            <li className={"mb-2"}>Home</li>
            <li className={"mb-2"}>About Us</li>
            <li className={"mb-2"}>Client</li>
          </ul>
        </section>
        <section>
          <h3 className={cls("font-bold text-base")}>Contact</h3>
          <hr className={"my-5"}/>
          <div className={"flex flex-col"}>
            <div className={"text-xs leading-6"}>
              <p>
                Ka-70/1, Progati Sharani ( 2nd & 3rd Floor), Kuril, Vatara
                Dhaka-1229, Bangladesh, <br/>
                <b>Phone: </b> +880 2 550 00 000 <br/>
                <b>Email: </b> demo@mail.com
              </p>
              <hr className={"my-2"}/>
              <p className={"mt-2"}>
                528/545, S.K. Mujib Road , Dewanhut,
                Chittagong , Bangladesh <br/>
                <b>Mobile: </b> 01819 888045. <br/>
                <b>Phone: </b>031 2510787
              </p>
              <hr className={"my-2"}/>
              <p>
                Haque Tower, 3rd Floor, Alir Jahal, Cox’s Bazar <br/>
                <b>Mobile: </b>+8801847166798, +8801839564836
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className={cls("font-bold text-base")}>Social Media</h3>
          <hr className={"my-5"}/>
          <ul className={cls("text-gray-500 text-sm")}>
            <li className={"mb-2 hover:text-indigo-500"}>
              <a href={"#"} className={"flex items-center gap-2"}>
                <FacebookFilled className={"text-2xl"}/>
                <span>Facebook</span>
              </a>
            </li>
            <li className={"mb-2 hover:text-pink-600"}>
              <a href={"#"} className={"flex items-center gap-2"}>
                <InstagramFilled className={"text-2xl"}/>
                <span>Instagram</span>
              </a>
            </li>
            <li className={"mb-2 hover:text-blue-400"}>
              <a href={"#"} className={"flex items-center gap-2"}>
                <TwitterSquareFilled className={"text-2xl"}/>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>

    {/*  Copyright*/}
    <section className={"w-full flex justify-center items-center py-2  mt-20 bg-green-100"}>
      <p><CopyrightOutlined/> 2021 Develop by Waysis-IT Solution</p>
    </section>
  </footer>);
};

export default Footer;