import React from 'react';

import ClientSlider from "./ClientSlider";
import Head from "next/head";
import {
  getRunningQueriesThunk,
  getSiteDetails,
  useGetSiteDetailsQuery
} from "../../services/siteDetails/siteDetailsApi";
import error from "../../public/assets/imgs/404.webp"
import Loading from "../../components/Loading/Loading";
import _ from "lodash"
import Image from "next/image"
import NotFound from "../../components/NotFound/NotFound";
import ServerError from "../../components/ServerError/ServerError";
import {wrapper} from "../../services/store";

const Index = ({}) => {
  const {data, isLoading, isSuccess, isError, error} = useGetSiteDetailsQuery();

  return (
    <div>
      <Head>
        <title>Biochemical | Client</title>
        <meta name="description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        {/*create meta for SEO*/}
        <meta name="keywords"
              content="Biochemical client, client, client list of biochemical, biochemical client list, biochemical client list in Bangladesh, biochemical client list in Asia, biochemical client list in Dhaka, biochemical client list in Chittagong, biochemical client list in Cox's Bazar, biochemical client list in Bangladesh, biochemical client list in Asia, biochemical client list in Dhaka, biochemical client list in Chittagong, biochemical client list in Cox's Bazar"/>
        <meta name="author" content="Biochemical"/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="distribution" content="web"/>
        <meta name="rating" content="general"/>
        {/*create meta for facebook*/}
        <meta property="og:title" content="Biochemical | Client"/>
        <meta property="og:description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta property="og:image" content="https://biochemicalbd.com/images/logo.png"/>
        <meta property="og:url" content="https://biochemicalbd.com/client"/>
        <meta property="og:site_name" content="Biochemical | Client"/>
        <meta property="og:type" content="website"/>
        {/*create meta for twitter*/}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Biochemical | Client"/>
        <meta name="twitter:description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta name="twitter:image" content="https://biochemicalbd.com/images/logo.png"/>
        <meta name="twitter:site" content="https://biochemicalbd.com/client"/>
        <meta name="twitter:creator" content="Biochemical"/>
        {/*{data && data[0].careerSlider}*/}
      </Head>
      <div className={'w-full'}>
        <ClientSlider/>
      </div>
      {isLoading && <Loading/>}
      {isSuccess && (!_.isEmpty(data) && !_.isEmpty(data[0]?.client) ?
          <div className={'bg-blue-white py-20'}>
            <h2 className={'text-center text-2xl italic text-gray-400'}>Our Few Client Lists</h2>
            <div className={'w-8/12 mx-auto mt-10 flex flex-wrap '}>
              {
                data[0]?.client.map((v, i) => (
                  <div className={'mobile:w-1/4 w-full  mt-4'} key={i}>
                    <div className={'mx-2'}>
                      <div className={'shadow bg-white'}>
                        <Image src={v.image} height={2} width={50}
                               className={'h-36 p-2 object-contain scale-50 hover:scale-75 ease-in duration-500 w-full'}/>
                      </div>
                    </div>
                  </div>
                ))}

            </div>
          </div> : <NotFound/>
      )}
      {isError && <div>
        <ServerError error={error.status}/>
      </div>
      }

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