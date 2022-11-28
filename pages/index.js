import Head from 'next/head'
import Slider from "../components/Slider/Slider";
import {CrownOutlined, ExperimentOutlined, HeartOutlined, HomeOutlined} from "@ant-design/icons";
import CardSlider from "../components/Slider/CardSlider";

import React from "react";
import Feature from "../components/Feature/Feature";
import AuthorizedChannelPartner from "../components/Slider/AuthorizedChannelPartner";
import {getRunningQueriesThunk, getSiteDetails, useGetSiteDetailsQuery} from "../services/siteDetails/siteDetailsApi";
import {useRouter} from "next/router";
import {wrapper} from "../services/store";

const serviceList = [
  {
    id: 1,
    title: 'Biochemical QUALITY',
    description: "The most important principle that brought Biochemical to today is the quality.",
    icon: <CrownOutlined/>,
  },
  {
    id: 2,
    title: 'Biochemical SAFETY',
    description: "In Biochemical employs right persons having right qualifications in right positions.",
    icon: <HeartOutlined/>,
  }
  ,
  {
    id: 3,
    title: 'ENVIRONMENT',
    description: "We follow a sensitive and environmentally friendly process in the production processes.",
    icon: <HomeOutlined/>,
  }

  ,
  {
    id: 4,
    title: 'R&D',
    description: "In Biochemical, we operate in a world-class business that recognizes the importance.",
    icon: <ExperimentOutlined/>,
  }

]
const Home = ({}) => {
  const router = useRouter();
  const {data} = useGetSiteDetailsQuery();
  const title = 'Biochemical | Home'
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        {/*create meta for SEO*/}
        <meta name="keywords"
              content="Biochemical, Chemical, Chemicals, Chemical Company, Chemical Companies, Chemical Industry, Chemical Industry Companies, Chemical Industry Company, Chemical Industry in Dhaka, Chemical Industry in Bangladesh, Chemical Industry in Asia, Chemical Industry`"/>
        <meta name="author" content="Biochemical"/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="distribution" content="web"/>
        <meta name="rating" content="general"/>
        {/*create meta for facebook*/}
        <meta property="og:title" content={title}/>
        <meta property="og:description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta property="og:image" content="https://www.biochemical.com.bd/images/logo.png"/>
        <meta property="og:url" content="https://www.biochemical.com.bd/"/>
        <meta property="og:site_name" content="Biochemical | Home"/>
        <meta property="og:type" content="website"/>
        {/*create meta for twitter*/}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@biochemical"/>
        <meta name="twitter:creator" content="@biochemical"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta name="twitter:image" content="https://www.biochemical.com.bd/images/logo.png"/>
        <meta name="twitter:url" content="https://www.biochemical.com.bd/"/>
      </Head>
      <div className={''}>
        <div className={''}>
          <Slider img={data && data[0].homeSlider}/>
        </div>
      </div>


      <div className={'bg'}>
        <div className={'bg-gray-100 pt-8 pb-8'}>
          <CardSlider img={ data && data[0].homeCardSlider}/>
          <div className={'w-11/12 mt-20 mx-auto grid desktop:grid-cols-4 tablet:grid-cols-2 gap-10 '}>
            {serviceList.map((value, i) => (
              <div className="w-full flex items-center flex-col" key={i}>
                <div
                  className={'flex justify-center items-center text-5xl h-24 w-24 text-gray-400 rounded-full border-2 border-gray-300'}>
                  {value.icon}
                </div>
                <h2 className={'text-2xl text-center  py-4 uppercase'}>{value.title}</h2>
                <p className={'text-sm w-7/12 mx-auto text-gray-400 text-center pb-4'}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <div className={"tablet:mt-20 w-11/12 mx-auto"}>
            <Feature/>
          </div>
          <div className={'desktop:w-11/12 mx-auto w-full mb-20'}>
            <h2 className={'text-center text-gray-400 uppercase pb-8'}>Authorized Channel Partner</h2>
            <AuthorizedChannelPartner img={data && data[0].authorizedSlider}/>
          </div>
        </div>
      </div>
    </div>
  )

}
export const getServerSideProps = wrapper.getServerSideProps(
  ({dispatch}) => async (context) => {
    dispatch(getSiteDetails.initiate());
    await Promise.all(dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);


export default Home;