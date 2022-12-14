import '../styles/globals.scss';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'animate.css';
import 'aos/dist/aos.css';
import {wrapper} from "../services/store";
import AOS from 'aos';
import React, {useEffect} from "react";
import {Slide, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/router";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/layout/Layout"))
const InitialLoading = dynamic(() => import("../components/Loading/InitialLoading"))

function App({Component, pageProps}) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    AOS.init({ones: false});
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (router.isReady) setLoading(false);
    }, 1000)
  }, [router.isReady]);
  return (
    <>
      {loading && <InitialLoading/>}
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          className="impct-toast"
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
          transition={Slide}
        />
      </Layout>
    </>

  )
}

export default wrapper.withRedux(App);


