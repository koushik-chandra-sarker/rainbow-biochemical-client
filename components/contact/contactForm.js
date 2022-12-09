import React, {useEffect, useState} from 'react';
import {useCreateMessageMutation} from "../../services/message/messageApi";
import {toast} from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [createMessage, {data, isSuccess, isError, error}] = useCreateMessageMutation();
  const [text, setText] = useState({
    firstName: "", lastName: "", companyName: "", phoneNumber: "", subject: "", email: "", address: "", message: ""
  })
  const sendMessage = (e) => {
    e.preventDefault();
    createMessage(text)
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success("Message sent successfully")
      setText({
        firstName: "", lastName: "", companyName: "", phoneNumber: "", subject: "", email: "", address: "", message: ""
      })
    } else if (isError) {
      toast.error(JSON.stringify(error.data))
    }
  }, [isSuccess, isError])
  return (
    <div>
      <div className={'flex p-8 justify-center'}>
        <button className={'text-black  tablet:text-3xl text-base uppercase'}>CONTACT FORM</button>
      </div>
        <div className={'mobile:w-8/12 w-full mx-auto mt-10'} >
            <div className={'w-full mobile:flex'}>
                <div className={'mobile:w-1/2 w-full mobile:mr-4  mr-0 '}>
                    <input
                        type="text" name="firstName" placeholder={'FIRST NAME'}
                        onChange={event => {
                            setText({...text, firstName: event.target.value})
                        }}
                        value={text.firstName}
                        className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className={'mobile:w-1/2 w-full mobile:ml-4 mobile:mx-0 mx-4'}>
                    <input
                        type="text" name="lastName" placeholder={'LAST NAME'}
                        onChange={event => {
                            setText({...text, lastName: event.target.value})
                        }}
                        value={text.lastName}
                        className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400 placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className={'w-full mobile:flex '}>
                <div className={'mobile:w-1/2 w-full mobile:mr-4 mobile:mx-0 mx-4'}>
                    <input
                        type="text" name="" placeholder={'COMPANY NAME'}
                        onChange={event => {
                            setText({...text, companyName: event.target.value})
                        }}
                        value={text.companyName}
                        className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className={'mobile:w-1/2 w-full mobile:ml-4 mobile:mx-0 mx-4'}>
                    <input
                        type="text" name="subject" placeholder={'SUBJECT'}
                        onChange={event => {
                            setText({...text, subject: event.target.value})
                        }}
                        value={text.subject}
                        className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400 placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className={'w-full mobile:flex '}>
                <div className={'mobile:w-1/2 w-full mobile:mr-4 mobile:mx-0 mx-4'}>
                    <input
                        type="text" name="phone" placeholder={'PHONE NUMBER'}
                        onChange={event => {
                            setText({...text, phoneNumber: event.target.value})
                        }}
                        value={text.phoneNumber}
                        className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className={'mobile:w-1/2 w-full mobile:ml-4 mobile:mx-0 mx-4'}>
                    <input
                        type="email" name="email" placeholder={'E-MAIL ADDRESS'}
                        onChange={event => {
                            setText({...text, email: event.target.value})
                        }}
                        value={text.email}
                        className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400 placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className={'w-full mobile:flex mobile:mx-0 mx-4'}>
                <div className={'mobile:w-1/2 w-full mobile:mr-4 mobile:mx-0 mx-4'}>
                    <textarea
                        type="text" name="phone" placeholder={'ADDRESS'}
                        onChange={event => {
                            setText({...text, address: event.target.value})
                        }}
                        value={text.address}
                        className="w-full text-sm placeholder-gray-400   pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 text-gray-400 pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className={'mobile:w-1/2 w-full mobile:ml-4 mobile:mx-0 mx-8'}>
                    <textarea
                        type="text" name="message" placeholder={'MESSAGE'}
                        onChange={event => {
                            setText({...text, message: event.target.value})
                        }}
                        value={text.message}
                        className="w-full text-sm placeholder-gray-400   pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 text-gray-400 pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

            </div>
            <div className={'pt-4 justify-end flex'}>
                <button
                    onClick={sendMessage}
                    className="w-32 rounded-3xl align-center items-center flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                    Send
                </button>
            </div>

        </div>
    </div>
  );
};

export default ContactForm;