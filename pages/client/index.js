import React from 'react';
import ClientSlider from "./ClientSlider";

const Index = () => {
    return (
        <div>
            <div className={'w-full'}>
               <ClientSlider/>
            </div>
            <div className={'bg-blue-white py-20'}>
                <h2 className={'text-center text-2xl italic text-green-600'}>Our Few Client Lists</h2>
                <div className={'w-8/12 mx-auto mt-10 flex flex-wrap py-2'}>
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((v,i)=>(
                        <div className={'mobile:w-1/4 w-full shadow-2xl mt-2'}>
                            <div className={'mr-2 bg-green-500'}>
                                <img src={'/assets/imgs/IFAD-Multi-Products-Ltd.png'} className={'h-36 p-2 scale-50 hover:scale-75 ease-in duration-500 w-full'}/>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default Index;