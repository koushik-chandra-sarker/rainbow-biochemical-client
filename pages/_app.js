import '../styles/globals.scss';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/Layout";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'animate.css';
import 'aos/dist/aos.css';
import {wrapper} from "../services/store";
import AOS from 'aos';
import {useEffect} from "react";
import {Slide, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App({Component, pageProps}) {

  useEffect(() => {
    AOS.init({ones: false});
  }, []);


  return (// <Provider store={store}>
    <>
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

    // </Provider>
  )
}

export default wrapper.withRedux(App);
// export default App;
//
// function App({Component, pageProps}) {
//   ;
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }
//
// export default wrapper.withRedux(App);

