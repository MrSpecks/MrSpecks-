import React from 'react';
import Layout from "../components/Layout";
import { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({Component, pageProps}: AppProps) {
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
}