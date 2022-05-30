import React from "react";
import { Router } from "next/router";
import { debounce } from "lodash";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import "nextra-theme-docs/style.css";

const progressStart = debounce(() => nProgress.start(), 250);

const progressDone = () => {
    nProgress.done();
    progressStart.cancel();
    window.scrollTo(0, 0);
};

Router.events.on("routeChangeStart", progressStart);
Router.events.on("routeChangeComplete", progressDone);
Router.events.on("routeChangeError", () => nProgress.done());

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
