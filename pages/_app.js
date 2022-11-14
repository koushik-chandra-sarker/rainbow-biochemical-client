import '../styles/globals.css';
import Layout from "../components/layout/Layout";
import {ProSidebarProvider} from "react-pro-sidebar";
import {wrapper} from "../services/store";

function App({Component, pageProps}) {
  return (<ProSidebarProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ProSidebarProvider>)
}

export default wrapper.withRedux(App);
