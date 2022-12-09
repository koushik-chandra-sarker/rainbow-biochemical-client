import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from '../../Product.module.scss'
import cls from "classnames";
import Head from "next/head";
import {
  getProductsByCategoryName,
  getRunningQueriesThunk,
  useGetProductsByCategoryNameQuery
} from "../../../../services/product/productApi";
import Loading from "../../../../components/Loading/Loading";
import NotFound from "../../../../components/NotFound/NotFound";
import _ from "lodash"
import ServerError from "../../../../components/ServerError/ServerError";
import {wrapper} from "../../../../services/store";

const Index = ({}) => {
  const router = useRouter()
  const {sub_category} = router.query
  const {data, isLoading, isSuccess, isError, error} = useGetProductsByCategoryNameQuery(sub_category)
  return (<div>
    <Head>
      <title>Biochemical | Product Category - {sub_category}</title>
      <meta name="description"
            content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
      {/*create meta for SEO*/}
      <meta name="keywords"
            content="Product Categories, Biochemical Product Categories, Biochemical Product Categories in Bangladesh, Biochemical Product Categories in Asia, Biochemical Product Categories in Dhaka, Biochemical Product Categories in Chittagong, Biochemical Product Categories in Cox's Bazar, Biochemical Product Categories in Bangladesh, Biochemical Product Categories in Asia, Biochemical Product Categories in Dhaka, Biochemical Product Categories in Chittagong, Biochemical Product Categories in Cox's Bazar"/>
      <meta name="author" content="Biochemical"/>
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="English"/>
      <meta name="revisit-after" content="7 days"/>
      <meta name="distribution" content="web"/>
      <meta name="rating" content="general"/>
      {/*create meta for facebook*/}
      <meta property="og:title" content="Biochemical | Product Category - {category}"/>
      <meta property="og:description"
            content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
      <meta property="og:image" content="https://biochemicalbd.com/assets/imgs/p2.jpg"/>
      <meta property="og:url" content="https://biochemicalbd.com/product-categories/{category}"/>
      <meta property="og:site_name" content="Biochemical"/>
      <meta property="og:type" content="website"/>
      {/*create meta for twitter*/}
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Biochemical | Product Category - {category}"/>
      <meta name="twitter:description"
            content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
      <meta name="twitter:image" content="https://biochemicalbd.com/assets/imgs/p2.jpg"/>
      <meta name="twitter:site" content="@biochemicalbd"/>
      <meta name="twitter:creator" content="@biochemicalbd"/>


    </Head>
    {isLoading && <div><Loading/></div>}
    {isSuccess && (!_.isEmpty(data) ?
        <div className={'bg-gray-100 py-10'}>
          {/*<div className={'mobile:w-8/12 mx-auto w-full flex  my-10'}>
            <div className={'mobile:w-1/4 w-full px-2'}>
              <input
                type="text" name="phone" placeholder={'RELEVANT DEPARTMENT'}
                className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className={'mobile:w-1/4 w-full px-2'}>
              <input
                type="text" name="phone" placeholder={'RELEVANT DEPARTMENT'}
                data-dropdown-toggle="dropdownDefaultCheckbox"
                className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className={'mobile:w-1/4 w-full px-2'}>
              <input
                type="text" name="phone" placeholder={'RELEVANT DEPARTMENT'}
                className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transit  console.log(router.asPath)
                          ion-colors duration-200 ease-in-out"/>
            </div>
            <div className={'mobile:w-1/4 w-full px-2'}>
              <button
                type="text" name="phone" placeholder={'RELEVANT DEPARTMENT'}
                className="w-full text-sm mb-4 text-white  bg-red-600 pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">Search
              </button>
            </div>

          </div>*/}
          <div className={'tablet:w-8/12 w-11/12 mx-auto  text-center text-xl text-black'}>
            <h2
              className={'w-full border py-5 tablet:text-3xl text-xl uppercase font-bold text-gray-500 bg-white'}>{sub_category}</h2>
          </div>
          <div className={'pb-16'}>
            <div className={'tablet:w-8/12 w-11/12 mx-auto  grid mobile:grid-cols-3 grid-cols-1 py-2 gap-5'}>
              {
                data && data.map((v, i) => (
                  <div className={'w-full mt-8 h-full bg-white'} key={i}>
                    <Link href={`${router.asPath}/${v.id}`}
                          className={cls(styles.product, "cursor-pointer h-full")}>
                      <div className={' h-full'}>
                        <Image src={v.thumbnail} alt={"dd"} height={2} width={1700}
                               className={'h-80 object-contain p-8  w-full'}/>
                        <h2 className={'text-center px-8 pb-2 text-gray-500'}>{v.name}</h2>
                        <div className={'justify-center flex'}>
                          <button
                            className={cls(styles.button, "w-32 uppercase font-semibold align-center items-center flex justify-center  text-gray-500  bg-white py-4 text-sm")}>
                            Details
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>

                ))}
            </div>
          </div>
        </div> : <NotFound/>
    )}
    {isError && <div>
      <ServerError errorStatus={error.status} error={error.error}/>
    </div>
    }

  </div>);
};
export const getServerSideProps = wrapper.getServerSideProps(
  ({dispatch}) => async ({req, res}) => {
    dispatch(getProductsByCategoryName.initiate());
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
export default Index;