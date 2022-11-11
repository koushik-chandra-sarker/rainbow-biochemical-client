import React from 'react';
import {FlagOutlined, PhoneOutlined, RightOutlined, YahooOutlined} from "@ant-design/icons";
import ContactForm from "./contactForm";
import RequestsForm from "./requestsForm";
import DealershipForm from "./dealershipForm";



const Index = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-96 md:h-128  relative"
                 style={{backgroundImage: "url(/assets/imgs/contact1.jpg)"}}>
                <div
                    className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-6xl tracking-widest font-semibold text-white uppercase lg:text-3xl">contact</h1>

                    </div>
                </div>
            </div>
            <div className={'bg-gray-100 relative border-b border-gray-200'}>
                <div className={'mobile:w-8/12 w-full mx-auto flex  pb-20'}>
                    <div className={'mobile:w-5/12 w-full -mt-12 border-8 border-white h-128  rounded-xl'}>
                        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                                scrolling="no"
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5410265202772!2d90.4217473153853!3d23.79935299282049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c760a96fcb05%3A0x5dd5c60221aedf5c!2sRainbow%20Tissue%20Paper%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1631774435189!5m2!1sen!2sbd"
                        />
                    </div>
￼

                    <div className={'mobile:w-7/12 w-full bg-gray-100 text-gray-600 mobile:pl-8 mt-16 h-auto pb-16'}>
                        <h2 className={'text-2xl text-black pb-2'}>Seba Kimya San. Ve Tic. As.</h2>
                        <div className={'flex pb-4'}>
                            <div className={'pr-4 text-3xl text-red-600'}>
                                <FlagOutlined />
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Aydinli - KOSB Mah.Tuzla KImya sanayicileri O.S.B. Tuna Cad. No: 6 Aydinli-Tuzla ISTANBUL TURKEY</p>
                            </div>
                        </div>
                        <div className={'flex pb-4'}>
                            <div className={'pr-4 text-3xl text-red-600'}>
                                <PhoneOutlined/>
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Tel: +90(111)555 23 11</p>
                                <p className={'text-lg'}>Tel: +90(111)555 23 11</p>
                            </div>
                        </div>
                        <div className={'flex pb-4'}>
                            <div className={'pr-4 text-3xl text-red-600'}>
                                <YahooOutlined />
                             </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>E-Mail: info@miamidemo@gmail.com</p>
                                <p className={'text-lg'}>E-Mail: info@miamidemo@gmail.com</p>
                            </div>
                        </div>
                        <div className={'pt-16'}>
                            <button
                                className="w-full font-semibold  mx-auto text-white rounded-3xl flex justify-center  text-white  bg-red-600 py-4   text-sm">
                                See on navigation
                            </button>
                        </div>

                    </div>
                </div>

                <div className={'mobile:w-4/12 w-full mx-auto flex flex-wrap pb-8 justify-between'}>
                    <div>
                        <button className={'text-black '}>CONTACT FORM</button>
                    </div>
                    <div>
                        <button className={'text-black'}>REQUESTS& SUGGESTIONS</button>
                    </div>
                    <div>
                        <button className={'text-black'}>DEALERSHIP REQUEST FORM</button>
                    </div>
                </div>
            </div>

            <ContactForm/>
            <RequestsForm/>
            <DealershipForm/>

        </div>
    );
};

export default Index;