import { Link } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import { InferGetServerSidePropsType } from 'next';
import Login from './account/login';

type Data = {
  access_token?: string,
  refresh_token?: string,
}
export const getServerSideProps = async () => {
  const data: Data = {};//await userService.login('test@xsky.com', '123123');
  return {
    props: {
      data
    }
  };
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>XDESK</title>
        <meta name="description" content="XSKY Integrated Service Desk." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  )
}
