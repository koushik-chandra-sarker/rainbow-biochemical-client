import React, {useEffect} from 'react';
import ProductSlider from "../../components/ProductSlider";
import RelatedProducts from "../../components/RelatedProducts";
import {useRouter} from "next/router";
import Head from "next/head";
import {useGetProductByIdQuery} from "../../../../services/product/productApi";

const Index = () => {
  const router = useRouter()
  const {product_id} = router.query
  useEffect(() => {
  }, [product_id])
  const {data} = useGetProductByIdQuery(product_id)
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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="distribution" content="web"/>product_id
        <meta name="rating" content="general"/>
        {/*create meta for facebook*/}
        <meta property="og:title" content="Biochemical | Product - {product_id}"/>
        <meta property="og:description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta property="og:image" content="https://biochemicalbd.com/images/logo.png"/>
        <meta property="og:url" content="https://biochemicalbd.com"/>
        <meta property="og:site_name" content="Biochemical"/>
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
      <div className={'bg-gray-100 py-16 tablet:px-10 desktop:px-0'}>
        <div className={'desktop:w-8/12 mx-auto w-full flex flex-wrap bg-white my-10'}>
          <div className={'tablet:w-1/2 w-full p-10'}>
            {/*<img src={data && data.images[0].url}className={'h-96 w-full'}/>*/}
            <ProductSlider img={data && data.images[0].url}/>
          </div>
          <div className={'tablet:w-1/2 w-full px-2 py-8'}>
            <div className={'py-4 px-8 border-l border-gray-200'}>
              <h2 className={'text-black font-semibold pb-2'}category> {data && data.name}</h2>
              <p>
                {data && data.description}
              </p>
              <div className={'flex text-sm justify-between mt-8'}>
                <h2 className={'text-gray-400'}>Weight: <span className={'font-semibold text-black'}>{data && data.specification[0].value}</span></h2>
                <h2 className={'text-gray-400'}>Barcode Number: <span
                  className={'font-semibold text-black'}>{data && data.specification[0].name}</span></h2>

              </div>
              <div className={'flex text-sm justify-between mt-4'}>
                <h2 className={'text-gray-400'}>Brand: <span className={'font-semibold text-black'}>{data && data.specification[1].name}</span></h2>
                <h2 className={'text-gray-400'}>Using Area: <span className={'font-semibold text-black'}>{data && data.specification[1].value}</span>
                </h2>

              </div>
            </div>
          </div>
        </div>


        <div className={'desktop:w-8/12 mx-auto w-full'}>
          <h2 className={'text-center text-gray-400 uppercase pb-8'}>Other Products</h2>
          <RelatedProducts/>
        </div>
      </div>
    </div>
  );
};

export default Index;