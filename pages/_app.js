import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/Layout";
import {wrapper} from "../services/store";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'animate.css';
import {Provider} from "react-redux";

function App({Component, ...rest}) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  )
}

export default wrapper.withRedux(App);
