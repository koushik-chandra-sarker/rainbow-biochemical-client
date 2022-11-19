import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/Layout";
import {ProSidebarProvider} from "react-pro-sidebar";
import {wrapper} from "../services/store";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function App({Component, pageProps}) {
  return (<ProSidebarProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ProSidebarProvider>)
}

export default wrapper.withRedux(App);
