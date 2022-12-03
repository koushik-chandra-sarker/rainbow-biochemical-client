import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import sebaLogo from '../../public/assets/imgs/seba_logo.png'
import diversyLogo from '../../public/assets/imgs/diversy_logo.png'
import logo from '../../public/assets/imgs/logo.jpg'
import {useRouter} from "next/router";
import {
  getProductCategories,
  getRunningQueriesThunk,
  useGetProductCategoriesQuery
} from "../../services/product/productApi";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";
import _ from "lodash"
import {isEven} from "../../utils/common";
import ServerError from "../../components/ServerError/ServerError";
import {wrapper} from "../../services/store";

const category = [
  {
    id: 1,
    name: 'Seba',
    image: sebaLogo,
  },
  {
    id: 1,
    name: 'Diversy',
    image: diversyLogo,
  },
  {
    id: 1,
    name: 'Biochemical',
    image: logo,
  }
]

const Index = ({}) => {
  const {data, isLoading, isSuccess, isError, error} = useGetProductCategoriesQuery();
  const router = useRouter();


  return (
    <div className={'bg-gray-100 pb-10'}>
      <Head>
        <title>Biochemical | Product Categories</title>
        <meta name="description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        {/*create meta for SEO*/}https://file.rainbowgroup-bd.com/biochemical/images/chennel-1.png
        <meta name="keywords"
              content="Product Categories, Biochemical Product Categories, Biochemical Product Categories in Bangladesh, Biochemical Product Categories in Asia, Biochemical Product Categories in Dhaka, Biochemical Product Categories in Chittagong, Biochemical Product Categories in Cox's Bazar, Biochemical Product Categories in Bangladesh, Biochemical Product Categories in Asia, Biochemical Product Categories in Dhaka, Biochemical Product Categories in Chittagong, Biochemical Product Categories in Cox's Bazar"/>
        <meta name="author" content="Biochemical"/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="thumbnail7 days"/>
        <meta name="distribution" content="web"/>
        <meta name="rating" content="general"/>
        {/*create meta for facebook*/}
        <meta property="og:title" content={category}/>
        <meta property="og:description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta property="og:image" content="https://www.biochemical.com.bd/images/logo.png"/>
        <meta property="og:url" content="https://www.biochemical.com.bd/"/>
        <meta property="og:site_name" content="Biochemical | Product Categories"/>
        <meta property="og:type" content="website"/>
        {/*create meta for twitter*/}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={category}/>
        <meta name="twitter:description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta name="twitter:image" content="https://www.biochemical.com.bd/images/logo.png"/>
        <meta name="twitter:site" content="https://www.biochemical.com.bd/"/>
        <meta name="twitter:creator" content="Biochemical"/>

      </Head>
      {isLoading && <div><Loading/></div>}
      {isSuccess && (!_.isEmpty(data) ?
          <div className={'bg-gray-100'}>
            <h2 className={'text-center text-xl text-black pt-10 '}>MARKET PRODUCTS</h2>
            <div className={'mobile:w-8/12 full mx-auto  flex flex-wrap'}>
              {
                data && data.map((category, i) => (
                  <div className={'mobile:w-1/2 my-10 w-full'} key={i}
                       data-aos={isEven(i) ? "fade-right" : "fade-left"}
                       data-aos-offset="100"
                       data-aos-easing="ease-in-sine"
                  >
                    <Link href={`${router.asPath}/${category.name}`}>
                      <div className={'mx-4 bg-white h-124 mb-8'}>
                        <Image src={category.thumbnail} alt={"aa"} height={2} width={1500}
                               className={'h-124 object-contain hover:border-4 border-white w-full transition-all ease-linear duration-100'}/>
                        <h2 className={'text-center bg-white text-xl  text-black py-4 border-t'}>{category.name}</h2>
                      </div>
                    </Link>
                  </div>
                ))}
              {/*{category.map((v, i) => (*/}
              {/*    <div className={'mobile:w-1/2 my-10 w-full'} key={i}*/}
              {/*         data-aos={isEven(i) ? "fade-right" : "fade-left"}*/}
              {/*         data-aos-offset="100"*/}
              {/*         data-aos-easing="ease-in-sine"*/}
              {/*    >*/}
              {/*      <Link href={`${router.asPath}/${v.name}`}>*/}
              {/*        <div className={'mx-4 bg-white h-124 mb-8'}>*/}
              {/*          <Image src={v.image} alt={"aa"}*/}
              {/*                 className={'h-124 object-contain hover:border-4 border-white w-full transition-all ease-linear duration-100'}/>*/}
              {/*          <h2 className={'text-center bg-white text-xl  text-black py-4 border-t'}>{v.name}</h2>*/}
              {/*        </div>*/}
              {/*      </Link>*/}
              {/*    </div>*/}
              {/*))}*/}

            </div>
          </div> : <NotFound/>
      )}
      {isError && <div><ServerError error={error.status}/></div>}

    </div>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  ({dispatch}) => async (context) => {
    dispatch(getProductCategories.initiate());
    await Promise.all(dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
export default Index;