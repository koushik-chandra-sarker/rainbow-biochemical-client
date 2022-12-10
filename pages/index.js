import Head from 'next/head'
import dynamic from "next/dynamic";
import {CrownOutlined, ExperimentOutlined, HeartOutlined, HomeOutlined} from "@ant-design/icons";
import React from "react";
import {getRunningQueriesThunk, getSiteDetails, useGetSiteDetailsQuery} from "../services/siteDetails/siteDetailsApi";
import {wrapper} from "../services/store";
import _ from "lodash";

const CardSlider = dynamic(() => import("../components/Slider/CardSlider"))
const Slider = dynamic(() => import("../components/Slider/Slider"))
const Feature = dynamic(() => import("../components/Feature/Feature"))
const AuthorizedChannelPartner = dynamic(() => import("../components/Slider/AuthorizedChannelPartner"))
const Loading = dynamic(() => import("../components/Loading/Loading"))
const NotFound = dynamic(() => import("../components/NotFound/NotFound"))
const ServerError = dynamic(() => import("../components/ServerError/ServerError"))

const serviceList = [
  {
    id: 1,
    title: 'Biochemical QUALITY',
    description: "Quality is the most crucial tenet that gave Biochemical its current state.",
    icon: <CrownOutlined/>,
  },
  {
    id: 2,
    title: 'Biochemical SAFETY',
    description: "The right people with the right qualifications are employed by Biochemical in the appropriate positions.",
    icon: <HeartOutlined/>,
  }
  ,
  {
    id: 3,
    title: 'ENVIRONMENT',
    description: "In the operations, we adhere to a sensitive and environmentally sustainable procedure.",
    icon: <HomeOutlined/>,
  }

  ,
  {
    id: 4,
    title: 'R&D',
    description: "Biochemical operates in a world-class business that recognizes its importance.",
    icon: <ExperimentOutlined/>,
  }

]

const Home = ({}) => {
  const {data, isLoading, isSuccess, isError, error} = useGetSiteDetailsQuery();
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
          <Slider slider={data && data[0]?.homeSlider}/>
        </div>
      </div>
      {isLoading && <div><Loading/></div>}
      {isSuccess && (!_.isEmpty(data) ?
          <div className={'bg'}>
            <div className={'bg-gray-100 pt-8 pb-8'}>
              <CardSlider slider={data[0]?.homeCardSlider}/>
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
              {
                data && data[0]?.channelPartner &&
                <div className={'desktop:w-11/12 mx-auto w-full mb-20'}>
                  <h2 className={'text-center text-gray-400 uppercase pb-8'}>Authorized Channel Partner</h2>
                  <AuthorizedChannelPartner slider={data && data[0]?.channelPartner}/>
                </div>
              }
            </div>
          </div> : <NotFound/>
      )}
      {isError && <div><ServerError errorStatus={error.status} error={error.error}/></div>}
    </div>
  )

}

export const getServerSideProps = wrapper.getServerSideProps(
  ({dispatch,}) => async ({req, res}) => {
    dispatch(getSiteDetails.initiate());
    await Promise.all(dispatch(getRunningQueriesThunk()));
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
    return {
      props: {},
    };
  }
);


export default Home;