import '../styles/globals.css';
import Layout from "../components/layout/Layout";
import {ProSidebarProvider} from "react-pro-sidebar";

function MyApp({Component, pageProps}) {
  return (<ProSidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProSidebarProvider>)
}

export default MyApp;
