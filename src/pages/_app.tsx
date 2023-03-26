/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AppType } from "next/app";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default MyApp;
