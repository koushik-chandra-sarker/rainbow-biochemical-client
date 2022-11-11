import React from 'react';
import Slider from "../Slider/Slider";
import ClientSlider from "./ClientSlider";

const Index = () => {
    return (
        <div>
            <div className={'w-full'}>
               <ClientSlider/>
            </div>
            <div className={'bg-blue-700 py-20'}>
                <h2 className={'text-center text-xl italic text-white'}>Our Few Client Lists</h2>
                <div className={'w-8/12 mx-auto mt-10 flex flex-wrap py-2'}>
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((v,i)=>(
                        <div className={'w-1/4 mt-2'}>
                            <div className={'mr-2 bg-white'}>
                                <img src={'/assets/imgs/IFAD-Multi-Products-Ltd.png'} className={'h-36 p-2 scale-50 hover:scale-75 ease-in duration-500 w-full'}/>
                            </div>

                        </div>
                    ))}

                    {/*<div className={'w-1/4 '}>*/}
                    {/*    <div className={'mr-2 bg-white'}>*/}
                    {/*        <img src={'/assets/imgs/psesi.jpg'} className={'h-36  p-2 w-full'}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    {/*<div className={'w-1/4 '}>*/}
                    {/*    <div className={'mr-2 bg-white'}>*/}
                    {/*        <img src={'/assets/imgs/radisonblue.jpg'} className={'h-36 p-2  w-full'}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    {/*<div className={'w-1/4 '}>*/}
                    {/*    <div className={'mr-2 bg-white'}>*/}
                    {/*        <img src={'/assets/imgs/Unilever-Logo.jpg'} className={'h-36 p-2 w-full'}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </div>
            </div>

        </div>
    );
};

export default Index;