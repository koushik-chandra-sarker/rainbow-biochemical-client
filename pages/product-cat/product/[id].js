import React from 'react';

const Index = () => {
  return (
    <div>
         <div className={'bg-gray-100 py-16'}>
                 <div className={'mobile:w-8/12 mx-auto w-full flex bg-white my-10'}>
                       <div className={'mobile:w-1/2 w-full p-10'}>
                           <img src={'/assets/imgs/p2.jpg'}className={'h-96 w-full'}/>
                       </div>
                        <div className={'mobile:w-1/2 w-full px-2 py-8'}>
                            <div className={'py-4 px-8 border-l border-gray-200'}>
                                <h2 className={'text-black font-semibold pb-2'}>Dishwasher Gel Detergent</h2>
                                <p>
                                    Sır Bio Dishwasher Gel Detergent is formulated with plant based ingredients to provide an excellent cleaning without leaving any residue.
                                    The gel form, designed with inspiration from the unique structure of nature, does not contain harmful chemicals, dissolves easily in water
                                    and offers a sparkling and high-performance cleaning without scratching your dishes. Thanks to the biopolymer it contains, it gives natural
                                    and perfect results on your dishes with glass protection, steel shine, low temperature effect, and removes stubborn oils and tough dirt.
                                </p>
                                <div className={'flex text-sm justify-between mt-8'}>
                                    <h2 className={'text-gray-400'}>Weight: <span className={'font-semibold text-black'}>500 Kg</span></h2>
                                    <h2 className={'text-gray-400'}>Barcode Number: <span className={'font-semibold text-black'}>908987656</span></h2>

                                </div>
                                <div className={'flex text-sm justify-between mt-4'}>
                                    <h2 className={'text-gray-400'}>Brand: <span className={'font-semibold text-black'}>Miami</span></h2>
                                    <h2 className={'text-gray-400'}>Using Area: <span className={'font-semibold text-black'}>Home</span></h2>

                                </div>
                            </div>
                         </div>
                 </div>


                 <div className={' w-full my-16'}>
                     <h2 className={'text-center text-gray-400 uppercase pb-8'}>Other Products</h2>
                     <div className={'mobile:w-8/12 mx-auto w-full flex bg-white  p-10'}>
                         {[1,1,1,1,1].map((v,i)=>(
                             <div className={'justify-between w-full p-4'}>
                                 <img src={'/assets/imgs/p2.jpg'}className={'h-44 w-full'}/>
                                 <h2 className={'text-center pt-4'}>Bathroom Cleaner</h2>
                             </div>

                         ))}
                     </div>
                 </div>


         </div>
    </div>
  );
};

export default Index;