import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const RequestsForm = () => {
    return (
        <div>
            <div className={'mobile:w-8/12 w-full mx-auto mt-10'} >
                <div className={'w-full mobile:flex '}>
                    <div className={'mobile:w-1/2 w-full mobile:mr-4 mobile:mx-0 mx-4'}>
                        <input
                            type="text"  name="phone" placeholder={'RELEVANT DEPARTMENT'}
                            className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className={'mobile:w-1/2 w-full mobile:ml-4 mobile:mx-0 mx-4'}>
                        <input
                            type="text"  name="phone" placeholder={'NAME& SURNAME'}
                            className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400 placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className={'mobile:mx-0 mx-4'}>
                      <textarea
                          type="text"  name="phone" placeholder={'ADDRESS'}
                          className="w-full text-sm placeholder-gray-400 placeholder   pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 text-gray-400 pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className={'flex flex-wrap justify-between mobile:mx-0 mx-2'}>
                    <ReCAPTCHA className={'mt-4'} sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}/>
                    <div className={'pt-4 '}>
                        <button
                          object-cover  className="w-32 rounded-3xl align-center items-center flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                            Send
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default RequestsForm;