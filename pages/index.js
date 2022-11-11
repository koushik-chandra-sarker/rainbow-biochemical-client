import Head from 'next/head'
import Layout from "../components/layout/Layout";
import Slider from "./Slider/Slider";
import {HeartOutlined, RightOutlined} from "@ant-design/icons";
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
                    {/*<div className={'relative '}>*/}
                    {/*    <button*/}
                    {/*        className="w-32 rounded-3xl align-center items-center flex justify-center  text-white  bg-red-600 py-4   text-sm">*/}
                    {/*        Send*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>


                <div className={'bg'}>
                    <div className={'bg-white pt-8 pb-8'}>
                        <CardSlider/>
                        <div className={'w-8/12 mx-auto  flex sm:px-0 px-2 my-16'}>
                            {[1,1,1,1].map((v,i)=>(
                                <div className="sm:w-1/4 w-full">
                                    <div className={'pl-24'}>
                                        <div className={' text-center p-3  text-5xl h-24 w-24 text-gray-300 rounded-full border-2 border-gray-300 items-center'}>
                                            <HeartOutlined />
                                        </div>
                                    </div>
                                    <h2 className={'text-2xl text-center  py-4'}>SEBA QUALITY</h2>
                                    <p className={'text-sm w-7/12 mx-auto text-gray-400 text-center pb-4'}>The most important principle that brought Seba Kimya to today is the quality.</p>
                                    <button
                                        className="w-7/12 mx-auto rounded-3xl flex justify-center  mx-auto text-red-600 hover:text-white bg-white py-4 focus:outline-none hover:bg-red-600   text-sm">
                                        READ MORE
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            </Layout>
        </div>
    )
}
