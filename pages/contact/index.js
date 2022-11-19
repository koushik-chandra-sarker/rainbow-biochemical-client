import React from 'react';
import {
    HomeOutlined,
    PhoneOutlined,
    YahooOutlined
} from "@ant-design/icons";
import ContactForm from "./contactForm";




const Index = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-96 md:h-128  relative"
                 style={{backgroundImage: "url(/assets/imgs/contact1.jpg)"}}>
                <div
                    className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="mobile:text-6xl text-3xl tracking-widest font-semibold text-white uppercase lg:text-3xl">contact</h1>

                    </div>
                </div>
            </div>
            <div className={'bg-gray-100 relative border-b border-gray-200'}>
                <div className={'mobile:w-8/12 w-full mx-auto mobile:flex  pb-20'}>
                    <div className={'mobile:w-5/12 w-full mobile:-mt-12 mt-10 border-8 border-white h-128  rounded-xl'}>
                        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                                scrolling="no"
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5410265202772!2d90.4217473153853!3d23.79935299282049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c760a96fcb05%3A0x5dd5c60221aedf5c!2sRainbow%20Tissue%20Paper%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1631774435189!5m2!1sen!2sbd"
                        />
                    </div>
￼

                    <div className={'mobile:w-7/12 w-full bg-gray-100 text-gray-600 mobile:pl-8 mobile:p-0 p-2 mt-16 h-auto pb-16'}>
                        <h2 className={'text-xl text-black pb-2'}>DHAKA OFFICE</h2>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <HomeOutlined />
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Ka-70/1, Progati Sharani ( 2nd & 3rd Floor), Kuril, Vatara
                                    Dhaka- 1229, Bangladesh,</p>
                            </div>
                        </div>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <PhoneOutlined/>
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Mobile: +8801-71606-7146</p>
                                <p className={'text-lg'}>Phone: +8801-71776-7731</p>
                            </div>
                        </div>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <YahooOutlined />
                             </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>E-Mail: miami@dhaka.net</p>
                                <p className={'text-lg'}>E-Mail: miami@dhaka.net</p>
                            </div>
                        </div>
                        <div className={'pt-16'}>
                            <button
                                className="w-full font-semibold  mx-auto text-white rounded-3xl flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                                See on navigation
                            </button>
                        </div>

                    </div>
                </div>
                <div className={'mobile:w-8/12 w-full mx-auto mobile:flex  pb-20'}>
                    <div className={'mobile:w-7/12 w-full mt-10 bg-gray-100 text-gray-600 mobile:pr-8 mobile:p-0 p-2 mt h-auto pb-16'}>
                        <h2 className={'text-xl text-black pb-2'}>CHITTAGONG OFFICE</h2>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <HomeOutlined />
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Chittagong: 528/545, S.K. Mujib Road , Dewanhut,
                                    Chittagong , Bangladesh</p>
                            </div>
                        </div>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <PhoneOutlined/>
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Mobile: +01819 888045</p>
                                <p className={'text-lg'}>Phone: 031 2510787</p>
                            </div>
                        </div>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <YahooOutlined />
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Web-site: www.miamibd.com</p>
                                <p className={'text-lg'}>Web-site: info@miamidemo@gmail.com</p>
                            </div>
                        </div>
                        <div className={'pt-16'}>
                            <button
                                className="w-full font-semibold  mx-auto text-white rounded-3xl flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                                See on navigation
                            </button>
                        </div>

                    </div>
                    <div className={'mobile:w-5/12 w-full  border-8 border-white h-128  rounded-xl'}>
                        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5410265202772!2d90.4217473153853!3d23.79935299282049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c760a96fcb05%3A0x5dd5c60221aedf5c!2sRainbow%20Tissue%20Paper%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1631774435189!5m2!1sen!2sbd"
                        />
                    </div>
                </div>
                <div className={'mobile:w-8/12 w-full mx-auto mobile:flex  pb-20'}>
                    <div className={'mobile:w-5/12 w-full  border-8 border-white h-128  rounded-xl'}>
                        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5410265202772!2d90.4217473153853!3d23.79935299282049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c760a96fcb05%3A0x5dd5c60221aedf5c!2sRainbow%20Tissue%20Paper%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1631774435189!5m2!1sen!2sbd"
                        />
                    </div>
                    ￼

                    <div className={'mobile:w-7/12 w-full bg-gray-100 text-gray-600 mobile:pl-8 mobile:p-0 p-2 mt-16 h-auto pb-16'}>
                        <h2 className={'text-xl text-black pb-2'}>Cox's Bazar</h2>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <HomeOutlined />
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg pt-2'}>Cox's Bazar: Haque Tower, 3rd Floor,
                                    Alir Jahal, Cox’s Bazar</p>
                            </div>
                        </div>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <PhoneOutlined/>
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Mobile : +8801847166798</p>
                                <p className={'text-lg'}>Mobile : +8801839564836</p>
                            </div>
                        </div>
                        <div className={'flex pb-4 items-center'}>
                            <div className={'pr-4 text-2xl text-gray-500'}>
                                <YahooOutlined />
                            </div>
                            <div className={'pr-24'}>
                                <p className={'text-lg'}>Web-site: www.miamibd.com</p>
                                <p className={'text-lg'}>Web-site: info@miamidemo@gmail.com</p>
                            </div>
                        </div>
                        <div className={'pt-16'}>
                            <button
                                className="w-full font-semibold  mx-auto text-white rounded-3xl flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                                See on navigation
                            </button>
                        </div>

                    </div>
                </div>




                <div className={'mobile:w-4/12 w-full mx-auto flex  pb-8 justify-center'}>
                    <div>
                        <button className={'text-black '}>CONTACT FORM</button>
                    </div>
                </div>
            </div>

            <ContactForm/>
            {/*<RequestsForm/>*/}
            {/*<DealershipForm/>*/}

        </div>
    );
};

export default Index;