import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/Layout";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'animate.css';
import {wrapper} from "../services/store";

function App({Component, pageProps}) {
  return (
    // <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
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

