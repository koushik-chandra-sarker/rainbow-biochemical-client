import React from 'react';
import {HomeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import ContactForm from "./contactForm";
import Head from "next/head";
import {
  getRunningQueriesThunk,
  getSiteDetails,
  useGetSiteDetailsQuery
} from "../../services/siteDetails/siteDetailsApi";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";
import _ from "lodash"
import cls from 'classnames'
import {isEven} from "../../utils/common";
import ServerError from "../../components/ServerError/ServerError";
import {wrapper} from "../../services/store";

const Index = ({}) => {
  const {data, isLoading, isSuccess, isError, error} = useGetSiteDetailsQuery();

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
      {isLoading && <Loading/>}
      {isSuccess && (!_.isEmpty(data) && !_.isEmpty(data[0]?.contact) ?
          <div className={'bg-gray-100 relative border-b border-gray-200'}>
            {
              data[0]?.contact?.map((contact, index) => (
                <div
                  className={cls('mobile:w-8/12 w-11/12 mx-auto mobile:flex  pb-20 gap-10', !isEven(index) ? "flex-row-reverse" : "")}>
                  <div
                    className={'mobile:w-5/12 w-full mobile:-mt-12 mt-10 border-8 border-white mobile:h-128 h-96  rounded-xl'}>
                    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                            scrolling="no"
                            src={contact?.map_url}
                    />
                  </div>
                  <div
                    className={'mobile:w-7/12 w-full bg-gray-100 text-gray-600 mobile:pl-8 mobile:p-0 p-2 mt-16 h-auto pb-16'}>
                    <h2 className={'text-xl text-black pb-2'}>DHAKA OFFICE</h2>
                    <div className={'flex pb-4 items-center'}>
                      <div className={'pr-4 text-2xl text-gray-500'}>
                        <HomeOutlined/>
                      </div>
                      <div>
                        <p className={'text-lg'}>{contact?.address}</p>
                      </div>
                    </div>
                    <div className={'flex pb-4 items-center'}>
                      <div className={'pr-4 text-2xl text-gray-500'}>
                        <PhoneOutlined/>
                      </div>
                      <div>
                        <p className={'text-lg'}>Mobile: {contact?.mobile}</p>
                        <p className={'text-lg'}>Phone: {contact?.phone}</p>
                      </div>
                    </div>
                    <div className={'flex pb-4  items-center'}>
                      <div className={'pr-4 text-2xl text-gray-500'}>
                        <MailOutlined/>
                      </div>
                      <div>
                        <p className={'text-lg'}>E-Mail: {contact?.email}</p>
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
              ))
            }
          </div> : <NotFound/>
      )}
      {isError && <div><ServerError errorStatus={error.status} error={error.error}/></div>}
      <ContactForm/>
    </div>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  ({dispatch}) => async (context) => {
    dispatch(getSiteDetails.initiate());
    await Promise.all(dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
export default Index;