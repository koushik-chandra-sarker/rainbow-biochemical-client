import Head from 'next/head'
import Layout from "../components/layout/Layout";
import Slider from "./Slider/Slider";
import {HeartOutlined} from "@ant-design/icons";
import CardSlider from "./Slider/CardSlider";

import React from "react";
export default function Home() {
    const title = 'Rainbow | Home'
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <div className={''}>
                    <div className={''}>
                        <Slider/>
                    </div>
                </div>


                <div className={'bg'}>
                    <div className={'bg-white pt-8 pb-8'}>
                        <CardSlider/>
                        <div className={'w-8/12  mx-auto mobile:flex sm:px-0 px-2 my-16'}>
                            {[1,1,1,1].map((v,i)=>(
                                <div className="mobile:w-1/4 w-full">
                                    <div className={'pl-24 '}>
                                        <div className={' text-center p-3  text-5xl h-24 w-24 text-green-600 hover:text-blue-600 rounded-full border-2 border-green-600 items-center'}>
                                            <HeartOutlined />
                                        </div>
                                    </div>
                                    <h2 className={'text-2xl text-center  py-4'}>SEBA QUALITY</h2>
                                    <p className={'text-sm w-7/12 mx-auto text-gray-400 text-center pb-4'}>The most important principle that brought Seba Kimya to today is the quality.</p>
                                   <a><button
                                        className="w-7/12 mx-auto rounded-3xl flex justify-center  mx-auto text-green-600 hover:text-white  bg-white py-4 focus:outline-none hover:bg-blue-700    text-sm">
                                        READ MORE
                                    </button>
                                   </a>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            </Layout>
        </div>
    )
}
