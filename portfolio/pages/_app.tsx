import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}