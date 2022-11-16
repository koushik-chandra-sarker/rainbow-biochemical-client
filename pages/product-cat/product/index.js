import React from 'react';

const Index = () => {
  return (
    <div>
      <div className={'bg-gray-100 py-10'}>
          <div className={'mobile:w-8/12 mx-auto w-full flex  my-10'}>
              <div className={'mobile:w-1/4 w-full px-2'}>
                  <input
                      type="text"  name="phone" placeholder={'RELEVANT DEPARTMENT'}
                      className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className={'mobile:w-1/4 w-full px-2'}>
                  <input
                      type="text"  name="phone" placeholder={'RELEVANT DEPARTMENT'} data-dropdown-toggle="dropdownDefaultCheckbox"
                      className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className={'mobile:w-1/4 w-full px-2'}>
                  <input
                      type="text"  name="phone" placeholder={'RELEVANT DEPARTMENT'}
                      className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className={'mobile:w-1/4 w-full px-2'}>
                  <button
                      type="text"  name="phone" placeholder={'RELEVANT DEPARTMENT'}
                      className="w-full text-sm mb-4 text-white  bg-red-600 pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">Search</button>
              </div>

          </div>

          <div className={'pb-16'}>
              <div className={'w-8/12 mx-auto mt-10 flex flex-wrap py-2'}>
                  {[1,1,1,1,1,1].map((v,i)=>(
                      <div className={'mobile:w-1/3 w-full mt-8'} key={i}>
                          <div className={'mx-4 bg-white'}>
                              <img src={'/assets/imgs/p2.jpg'} className={'h-96 px-12  w-full'}/>
                              <h2 className={'text-center px-8 pb-2'}>Multi Surface & Odor Eliminator Concentrated</h2>
                              <div className={' justify-center flex'}>
                                  <button
                                      className="w-32 uppercase font-semibold align-center items-center flex justify-center  text-gray-400  bg-white py-4 text-sm">
                                      Details
                                  </button>
                              </div>
                          </div>

                      </div>
                  ))}

              </div>
          </div>
      </div>
    </div>
  );
};

export default Index;