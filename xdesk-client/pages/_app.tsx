
import React from 'react';
import Head from "next/head";
import Router, { NextRouter } from "next/router";
import App from "next/app";
import type { AppProps } from 'next/app';
import PageChange from '../components/PageChange';
import { StyledEngineProvider, createTheme, ThemeProvider } from "@mui/material/styles";
import ReactDOM from 'react-dom';
import '../styles/globals.css';
import '../theme/css/default.css';

interface Props {
  Component?: any;
  router?: NextRouter;
  ctx?: any;
}

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'));
});
Router.events.on("routeChangeComplete", () => {
  document.body.classList.remove("body-page-transition");
  ReactDOM.render(<></>, document.getElementById('page-transition'));
});
Router.events.on("routeChangeError", () => {
  document.body.classList.remove("body-page-transition");
  ReactDOM.render(<></>, document.getElementById('page-transition'));
});
class MyApp extends App<AppProps & Props> {
  constructor(props: AppProps) {
    super(props)
  }
  static async getInitialProps(props: Props) {
    const { Component, ctx } = props;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    const theme = createTheme();
    const Layout = Component.layout || ((props: { children: any }) => <>{props.children}</>);
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>XDESK</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

export default MyApp;
