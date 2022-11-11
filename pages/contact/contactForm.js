import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const ContactForm = () => {
    return (

        <div>
            <div className={'w-8/12 mx-auto flex mt-10'} >
                <div className={'w-1/2 mr-4'}>
                    <input
                        type="text"  name="phone" placeholder={'RELEVANT DEPARTMENT'}
                        className="w-full text-sm mb-4 text-white  placeholder-white  pl-8 rounded-md border border-gray-300 global-color focus:border-black
                          text-base outline-none bg-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                    <input
                        type="text"  name="phone" placeholder={'NAME& SURNAME'}
                        className="w-full text-sm mb-4 text-white placeholder-white placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                          text-base outline-none bg-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <input
                        type="text"  name="phone" placeholder={'YOUR ACTIVITY'}
                        className="w-full text-sm mb-4 text-white placeholder-white placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                          text-base outline-none bg-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <textarea
                        type="text"  name="phone" placeholder={'ADDRESS'}
                        className="w-full text-sm placeholder-white placeholder   pl-8 rounded-md border border-gray-300  focus:border-black
                         text-base outline-none bg-gray-400 text-white pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <ReCAPTCHA className={'mt-4'} sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}/>
                </div>
                <div className={'w-1/2 ml-4'}>
                    <input
                        type="text"  name="phone" placeholder={'CORPORATION NAME'}
                        className="w-full mb-4 text-sm text-white placeholder-white placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                          text-base outline-none bg-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                    <input
                        type="text"  name="phone" placeholder={'PHONE NUMBER'}
                        className="w-full mb-4 text-sm text-white placeholder-white placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                          text-base outline-none bg-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <input
                        type="text"  name="phone" placeholder={'E-MAIL ADDRESS'}
                        className="w-full mb-4 text-sm text-white placeholder-white placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                          text-base outline-none bg-gray-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <textarea
                        type="text"  name="phone" placeholder={'YOUR REQUEST'}
                        className="w-full text-sm placeholder-white placeholder   pl-8 rounded-md border border-gray-300  focus:border-black
                         text-base outline-none bg-gray-400 text-white pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <div className={'pt-10 '}>
                        <button
                            className="w-32 rounded-3xl align-center items-center flex justify-center  text-white  bg-red-600 py-4   text-sm">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;