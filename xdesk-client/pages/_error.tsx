import React from "react";
import Error from 'next/error';

interface StatusCode {
  statusCode?: number;
}
function ErrorPage({ statusCode }: any) {
  return <Error statusCode={statusCode}></Error>;
}

ErrorPage.getInitialProps = ({ res, err }: { res: StatusCode; err: StatusCode }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default ErrorPage;