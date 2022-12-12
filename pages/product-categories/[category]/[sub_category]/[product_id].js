import React, {useEffect} from 'react';
import ProductSlider from "../../../../components/Slider/ProductSlider";
import RelatedProducts from "../../../../components/RelatedProducts";
import {useRouter} from "next/router";
import Head from "next/head";
import {getProductById, getRunningQueriesThunk, useGetProductByIdQuery} from "../../../../services/product/productApi";
import Loading from "../../../../components/Loading/Loading";
import NotFound from "../../../../components/NotFound/NotFound";
import ServerError from "../../../../components/ServerError/ServerError";
import {wrapper} from "../../../../services/store";

const Index = () => {
  const router = useRouter()
  const {product_id} = router.query
  useEffect(() => {
  }, [product_id])
  const {data, isLoading, isSuccess, isError, error} = useGetProductByIdQuery(product_id)
  return (
    <div>
      <Head>
        <title>Biochemical | Product - {product_id}</title>
        <meta name="description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        {/*create meta for SEO*/}
        <meta name="keywords"
              content="Product, Biochemical Product, Biochemical Product in Bangladesh, Biochemical Product in Asia, Biochemical Product in Dhaka, Biochemical Product in Chittagong, Biochemical Product in Cox's Bazar, Biochemical Product in Bangladesh, Biochemical Product in Asia, Biochemical Product in Dhaka, Biochemical Product in Chittagong, Biochemical Product in Cox's Bazar"/>
        <meta name="author" content="Biochemical"/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="distribution" content="web"/>
        <meta name="rating" content="general"/>
        {/*create meta for facebook*/}
        <meta property="og:title" content="Biochemical | Product - {product_id}"/>
        <meta property="og:description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta property="og:image" content="https://biochemicalbd.com/images/logo.png"/>
        <meta property="og:url" content="https://biochemicalbd.com"/>
        <meta property="og:siterelated_products_name" content="Biochemical"/>
        <meta property="og:type" content="website"/>
        {/*create meta for twitter*/}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Biochemical | Product - {product_id}"/>
        <meta name="twitter:description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta name="twitter:image" content="https://biochemicalbd.com/images/logo.png"/>
        <meta name="twitter:site" content="https://biochemicalbd.com"/>
        <meta name="twitter:creator" content="Biochemical"/>

      </Head>


      {isLoading && <div><Loading/></div>}
      {isSuccess && (!_.isEmpty(data) ?
          <div className={'bg-gray-100 py-16 tablet:px-10 desktop:px-0'}>
            <div className={'desktop:w-8/12 mx-auto w-full flex flex-wrap bg-white my-10'}>
              <div className={'tablet:w-1/2 w-full p-10'}>
                <ProductSlider images={data?.images}/>
              </div>
              <div className={'tablet:w-1/2 w-full px-2 py-8'}>
                <div className={'py-4 px-8 border-l border-gray-200'}>
                  <h2 className={'text-black text-xl font-semibold pb-2 tracking-wide'}> {data?.name}</h2>
                  {data?.catalog && <a href={data?.catalog} className={'text-blue-500 text-base pb-2 tracking-wide'}>View
                    Product Catalog</a>}
                  <div className={'mt-4 product-des'} dangerouslySetInnerHTML={{__html: data?.description}}/>
                  <div className={'grid grid-cols-2 text-sm mt-8 gap-5'}>
                    {data?.specification.map((spec, index) => (
                      <div
                        key={index}
                        className="text-sm text-gray-900 capitalize tracking-wide">{spec.name}: <strong>{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {data?.related_products && <div className={'desktop:w-8/12 mx-auto w-full'}>
              <h2 className={'text-center text-gray-400 uppercase pb-8'}>Other Products</h2>
              <RelatedProducts products={data?.related_products}/>
            </div>}

          </div> : <NotFound/>

      )}
      {isError && <div><ServerError errorStatus={error.status} error={error.error}/></div>}
    </div>);
};
export const getServerSideProps = wrapper.getServerSideProps(
  ({dispatch}) => async ({req, res}) => {
    dispatch(getProductById.initiate());
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