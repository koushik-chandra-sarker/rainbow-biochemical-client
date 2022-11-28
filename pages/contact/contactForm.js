import React, {useState} from 'react';
import {useCreateMessageMutation} from "../../services/message/messageApi";

const ContactForm = () => {
    const [createMessage, data] = useCreateMessageMutation();
    const [text, setText] = useState({
        firstName:"", lastName:"", companyName:"", phoneNumber:"", subject:"", email:"", address:"", message:""
    })
    const sendMessage= (e)=>{
        e.preventDefault();
        createMessage(text)
    }

    return (
        <div>
            <div className={'mobile:w-8/12 w-full mx-auto mobile:flex  mt-10'} >
                <div className={'mobile:w-1/2 w-full mobile:mr-4 mobile:mx-0 mx-4'}>
                    <input
                        type="text"  name="firstName" placeholder={'FIRST NAME'}
                        onChange={event=>{
                            setText({...text, firstName: event.target.value})
                        }}
                        value={text.firstName}
                        className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                    <input
                        type="text"  name="" placeholder={'COMPANY NAME'}
                        onChange={event=>{
                            setText({...text, companyName: event.target.value})
                        }}
                        value={text.companyName}
                        className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <input
                        type="text"  name="subject" placeholder={'SUBJECT'}
                        onChange={event=>{
                            setText({...text, subject: event.target.value})
                        }}
                        value={text.subject}
                        className="w-full text-sm mb-4 text-gray-400 placeholder-gray-400  pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <textarea
                        type="text"  name="phone" placeholder={'ADDRESS'}
                        onChange={event=>{
                            setText({...text, address: event.target.value})
                        }}
                        value={text.address}
                        className="w-full text-sm placeholder-gray-400   pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 text-gray-400 pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                </div>
                <div className={'mobile:w-1/2 w-full mobile:ml-4 mobile:mx-0 mx-4'}>
                    <input
                        type="text"  name="lastName" placeholder={'LAST NAME'}
                        onChange={event=>{
                            setText({...text, lastName: event.target.value})
                        }}
                        value={text.lastName}
                        className="w-full mb-4 text-sm text-gray placeholder-gray-400 placeholder pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                    <input
                        type="text"  name="phone" placeholder={'PHONE NUMBER'}
                        onChange={event=>{
                            setText({...text, phoneNumber: event.target.value})
                        }}
                        value={text.phoneNumber}
                        className="w-full mb-4 text-sm text-gray-400 placeholder-gray-400  pl-8 rounded-md border border-gray-300 global-color focus:border-black
                           outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <input
                        type="email"  name="email" placeholder={'E-MAIL ADDRESS'}
                        onChange={event=>{
                            setText({...text, email: event.target.value})
                        }}
                        value={text.email}
                        className="w-full mb-4 text-sm text-gray-400 placeholder-gray-400 pl-8 rounded-md border border-gray-300 global-color focus:border-black
                          outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <textarea
                        type="text"  name="message" placeholder={'MESSAGE'}
                        onChange={event=>{
                            setText({...text, message: event.target.value})
                        }}
                        value={text.message}
                        className="w-full text-sm placeholder-gray-400   pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 text-gray-400 pb-16 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <div className={'pt-4 justify-end flex'}>
                        <button
                            onClick={sendMessage}
                            className="w-32 rounded-3xl align-center items-center flex justify-center  text-white  bg-blue-600 py-4   text-sm">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;