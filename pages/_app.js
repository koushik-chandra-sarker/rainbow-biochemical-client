import '../styles/globals.css';
import Layout from "../components/layout/Layout";
import {wrapper} from "../services/store";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function App({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default wrapper.withRedux(App);
