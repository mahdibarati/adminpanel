import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";
import "../app/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/app/layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </Provider>
  );
}
// <Provider store={store}>
//   <Component {...pageProps} />
// </Provider>
export default MyApp;
