import React, {useEffect, useState} from 'react';
import cls from "classnames";
import Image from "next/image";
import iconPhone from "../../../public/assets/icons/icon-phone.png";
import iconMail from "../../../public/assets/icons/icon-mail.png";
import iconShare from "../../../public/assets/icons/icon-share.png";
import logo from "../../../public/assets/imgs/logo_h.jpg";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from "swiper";
import {CopyrightOutlined, FacebookFilled, InstagramFilled, TwitterSquareFilled} from "@ant-design/icons";
import {useGetSiteDetailsQuery} from "../../../services/siteDetails/siteDetailsApi";
import {useCreateSubscriberMutation} from "../../../services/subsciber/subscriberApi";
import {toast} from "react-toastify";
import Link from "next/link";


const Footer = () => {
  const {data} = useGetSiteDetailsQuery();
  const [createEmail, {data1, isSuccess, isError, error}] = useCreateSubscriberMutation();
  const [state, setState] = useState({
    email: ""
  })
  const sendEmail = (e) => {
    e.preventDefault();
    createEmail(state);

  }
  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully subscribed");
      setState({
        email: ""
      })
    } else if (isError) {
      toast.error(JSON.stringify(error.data1))
    }
  }, [isSuccess, isError])
  return (
    <footer className={cls("")}>
      <hr className={"my-20"}/>

      {/*footer top portion*/}
      <div
        className={"top tablet:w-8/12 w-11/12  mx-auto grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:py-4 grid-cols-1   gap-10"}>
        <div className={cls("")}>
          <div className={cls("flex items-center gap-4")}>
            <div className={cls("w-18 h-18 border-2 rounded-full text-3xl p-4   flex justify-center items-center")}>
              <Image src={iconPhone} alt="Phone Icon"/>
            </div>
            <h3 className={cls("font-bold text-xl")}>FREE CONSUMER HELPLINE</h3>
          </div>
          <hr className={"desktop:my-8 my-3"}/>
          <p className={cls("text-gray-500 text-base")}>
            Whenever you wish, Any complain, suggestion or thanks for Miami Associates (BD),you can forward it to us via
            the Free Consumer Helpline.
          </p>
        </div>


        <div className={cls("")}>
          <div className={cls("flex items-center gap-4")}>
            <div className={cls("w-18 h-18 border-2 rounded-full text-3xl p-4 flex justify-center items-center")}>
              <Image src={iconMail} alt="Phone Icon"/>
            </div>
            <h3 className={cls("font-bold text-xl")}>SUBSCRIBE TO E-NEWS</h3>
          </div>
          {/*"footer-field"*/}
          <hr className={"desktop:my-8 my-3"}/>
          {/*<form action="" onSubmit={sendEmail}>*/}
          <div className="relative  sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input
              onChange={event => {
                setState({...state, email: event.target.value})
              }} value={state.email} type="text" id="footer-field" name="email" placeholder={"Your E-mail address"}
              className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-green-600 focus:border-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <button
              onClick={sendEmail}
              className="mt-5 flex-shrink-0 inline-flex tracking-widest transition-all text-gray-50 hover:text-gray-700 font-bold uppercase bg-gray-400 hover:bg-green-500 border-0 py-2 px-6 focus:outline-none  rounded-badge">
              Register
            </button>
          </div>
          {/*</form>*/}
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
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true
            }}
            modules={[Autoplay, Navigation]}
            className="footerSwiper" // {data && data.data && data.data[0].facebook}
          >
            {
              // {data && data.data && data.data[0].facebook}

              data && data[0]?.footerSlider.map((v, i) => (
                <SwiperSlide key={i}>
                  <Link href={`/product-categories${v.product_url}`} className={"h-28 w-28"}>
                    <Image src={v.image} alt={'p1'}
                           height={2}
                           width={500}
                           className={"w-full h-full object-contain"}
                    />
                  </Link>
                </SwiperSlide>
              ))}


          </Swiper>

        </div>
      </div>
      <hr className={'my-20'}/>
      {/*footer bottom portion*/}
      <section className="bottom top tablet:w-8/12 w-11/12 mx-auto ">
        {/*Brand Intro*/}
        <section className={"flex flex-wrap gap-5"}>
          <Image src={logo} alt={"Brand Logo"} className={"w-40 tablet:border-r-2 pr-4"}/>
          <div className={"tablet:ml-4 flex items-center"}>
            <p className={cls("text-gray-500 text-base")}>
              Biochemical has been manufacturing<br/>
              innovative products in the field of industrial and retail.
            </p>
          </div>
        </section>
        {/*footer contents*/}
        <section className={"grid desktop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-4 mt-20"}>
          <section className={"tablet:block flex flex-col justify-center items-center"}>
            <h3 className={cls("font-bold text-base")}>Products</h3>
            <hr className={"my-5 w-full"}/>
            <ul className={cls("text-gray-500 text-sm")}>
              <li className={"mb-2"}><Link href={"/product-categories"}>MARKET PRODUCTS</Link></li>
            </ul>
          </section>
          <section className={"tablet:block flex flex-col justify-center items-center"}>
            <h3 className={cls("font-bold text-base")}>Biochemical</h3>
            <hr className={"my-5 w-full"}/>
            <ul className={cls("text-gray-500 text-sm tablet:block flex gap-5")}>
              <li className={"mb-2"}>Home</li>
              <li className={"mb-2"}>About Us</li>
              <li className={"mb-2"}>Client</li>
            </ul>
          </section>
          <section className={"tablet:block flex flex-col justify-center items-center tablet:text-left"}>
            <h3 className={cls("font-bold text-base")}>Contact</h3>
            <hr className={"my-5 w-full"}/>
            {
              data &&
              <div className={"flex flex-col"}>
                <div className={"text-xs leading-6"}>
                  <div
                    className={" tablet:block flex flex-col justify-center items-center text-center tablet:text-left"}>
                    <p>{data[0]?.contact[0]?.address}<br/>
                      <b>Phone: </b> {data[0]?.contact[0]?.phone}<br/>
                      <b>Email: </b> {data[0]?.contact[0]?.email}
                    </p>
                  </div>
                  <Link href={"/contact"} className={"flex justify-center mt-3 text-blue-500"}>
                    See more
                  </Link>
                </div>
              </div>
            }

          </section>
          <section className={"tablet:block flex flex-col justify-center items-center mt-5 tablet:mt-0"}>
            <h3 className={cls("font-bold text-base")}>Social Media</h3>
            <hr className={"my-5 w-full"}/>
            <ul className={cls("text-gray-500 text-sm tablet:block flex gap-3")}>
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
        <CopyrightOutlined className={'mr-2'}/> CopyRight {new Date().getFullYear()} Biochemical. All Rights Reserved.
        Develop by <a href="https://iamkoushik.com" target={"_blank"} className={"pl-1 text-blue-600"}> Koushik</a>
      </section>
    </footer>);
};

export default Footer;