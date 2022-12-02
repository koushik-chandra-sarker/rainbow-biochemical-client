import React from 'react';
import {HomeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import ContactForm from "./contactForm";
import Head from "next/head";
import {useGetSiteDetailsQuery} from "../../services/siteDetails/siteDetailsApi";


const Index = () => {
  const {data, isLoading, isSuccess, isError} = useGetSiteDetailsQuery();

  return (
    <div>
      <Head>
        <title>Biochemical | Contact</title>
        <meta name="description"
              content="Ka-70/1, Progati Sharani ( 2nd & 3rd Floor), Kuril, Vatara Dhaka- 1229, Bangladesh,"/>
        {/*create meta keyword for contact*/}
        <meta name="keywords"
              content="Biochemical, Contact, address, address of biochemical, address of biochemical in Bangladesh, address of biochemical in Dhaka, address of biochemical in Asia, address of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia, Contact of biochemical in Asia, Contact, Contact of biochemical, Contact of biochemical in Bangladesh, Contact of biochemical in Dhaka, Contact of biochemical in Asia"/>

        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="1 days"/>
        <meta name="author" content="Biochemical"/>

      </Head>
      <div className="w-full bg-center bg-cover h-96 md:h-128  relative"
           style={{backgroundImage: "url(/assets/imgs/contact1.jpg)"}}>
        <div
          className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1
              className="mobile:text-6xl text-3xl tracking-widest font-semibold text-white uppercase lg:text-3xl">contact</h1>

          </div>
        </div>
      </div>
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <div className={'bg-gray-100 relative border-b border-gray-200'}>
          <div className={'mobile:w-8/12 w-full mx-auto mobile:flex  pb-20'}>
            <div className={'mobile:w-5/12 w-full mobile:-mt-12 mt-10 border-8 border-white h-128  rounded-xl'}>
              <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                      scrolling="no"
                      src={data && data[0]?.contact[0]?.map_url}
              />
            </div>

            <div
              className={'mobile:w-7/12 w-full bg-gray-100 text-gray-600 mobile:pl-8 mobile:p-0 p-2 mt-16 h-auto pb-16'}>
              <h2 className={'text-xl text-black pb-2'}>DHAKA OFFICE</h2>
              <div className={'flex pb-4 items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <HomeOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg'}>{data && data[0]?.contact[0]?.address}</p>
                </div>
              </div>
              <div className={'flex pb-4 items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <PhoneOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg'}>Mobile: {data && data[0]?.contact[0]?.mobile}</p>
                  <p className={'text-lg'}>Phone: {data && data[0]?.contact[0]?.phone}</p>
                </div>
              </div>
              <div className={'flex pb-4  items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <MailOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg'}>E-Mail: {data && data[0]?.contact[0]?.email}</p>
                </div>
              </div>
              <div className={'pt-16'}>
                <button
                  className="w-full font-semibold  mx-auto text-white rounded-3xl flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                  See on navigation
                </button>
              </div>

            </div>
          </div>
          <div className={'mobile:w-8/12 w-full mx-auto mobile:flex  pb-20'}>
            <div
              className={'mobile:w-7/12 w-full mt-10 bg-gray-100 text-gray-600 mobile:pr-8 mobile:p-0 p-2 mt h-auto pb-16'}>
              <h2 className={'text-xl text-black pb-2'}>CHITTAGONG OFFICE</h2>
              <div className={'flex pb-4 items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <HomeOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg'}>{data && data[0]?.contact[1]?.address}</p>
                </div>
              </div>
              <div className={'flex pb-4 items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <PhoneOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg'}>Mobile: {data && data[0]?.contact[1]?.mobile}</p>
                  <p className={'text-lg'}>Phone: {data && data[0]?.contact[1]?.phone}</p>
                </div>
              </div>
              <div className={'flex pb-4 items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <MailOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg'}>Email: {data && data[0]?.contact[1]?.email}</p>
                </div>
              </div>
              <div className={'pt-16'}>
                <button
                  className="w-full font-semibold  mx-auto text-white rounded-3xl flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                  See on navigation
                </button>
              </div>

            </div>
            <div className={'mobile:w-5/12 w-full  border-8 border-white h-128  rounded-xl'}>
              <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                      scrolling="no"
                      src={data && data[0]?.contact[1].map_url}
              />
            </div>
          </div>
          <div className={'mobile:w-8/12 w-full mx-auto mobile:flex  pb-20'}>
            <div className={'mobile:w-5/12 w-full  border-8 border-white h-128  rounded-xl'}>
              <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                      scrolling="no"
                      src={data && data[0]?.contact[2]?.map_url}
              />
            </div>

            <div
              className={'mobile:w-7/12 w-full bg-gray-100 text-gray-600 mobile:pl-8 mobile:p-0 p-2 mt-16 h-auto pb-16'}>
              <h2 className={'text-xl text-black pb-2'}>Cox's Bazar</h2>
              <div className={'flex pb-4 items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <HomeOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg pt-2'}>{data && data[0]?.contact[2]?.address}</p>
                </div>
              </div>
              <div className={'flex pb-4 items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <PhoneOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg'}>Mobile: {data && data[0]?.contact[2]?.mobile}</p>
                  <p className={'text-lg'}>Phone: {data && data[0]?.contact[2]?.phone}</p>
                </div>
              </div>
              <div className={'flex pb-4 items-center'}>
                <div className={'pr-4 text-2xl text-gray-500'}>
                  <MailOutlined/>
                </div>
                <div className={'pr-24'}>
                  <p className={'text-lg'}>Email: {data && data[0]?.contact[2]?.email}</p>
                </div>
              </div>
              <div className={'pt-16'}>
                <button
                  className="w-full font-semibold  mx-auto text-white rounded-3xl flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                  See on navigation
                </button>
              </div>

            </div>
          </div>


          <div className={'mobile:w-4/12 w-full mx-auto flex  pb-8 justify-center'}>
            <div>
              <button className={'text-black '}>CONTACT FORM</button>
            </div>
          </div>
        </div>
      )}
      {isError && <div>Something want wrong...</div>}


      <ContactForm/>
      {/*<RequestsForm/>*/}
      {/*<DealershipForm/>*/}

    </div>
  );
};

export default Index;