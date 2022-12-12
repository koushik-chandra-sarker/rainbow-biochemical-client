import React from 'react'
import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Biochemical | About</title>
        <meta name="description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        {/*create meta for SEO*/}
        <meta name="keywords"
              content="Biochemical about, about Biochemical, about Biochemical company, about Biochemical company in Bangladesh, about Biochemical company in Dhaka, about Biochemical company in Asia, about Biochemical company in the world"/>
        <meta name="author" content="Biochemical"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="distribution" content="web"/>
        <meta name="rating" content="general"/>
        {/*create meta for facebook*/}
        <meta property="og:title" content="Biochemical | About"/>
        <meta property="og:description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta property="og:image" content="https://biochemicalbd.com/images/logo.png"/>
        <meta property="og:url" content="https://biochemicalbd.com/about"/>
        <meta property="og:site_name" content="Biochemical | About"/>
        <meta property="og:type" content="website"/>
        {/*create meta for twitter*/}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@biochemical"/>
        <meta name="twitter:creator" content="@biochemical"/>
        <meta name="twitter:title" content="Biochemical | About"/>
        <meta name="twitter:description"
              content="Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import, supply, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta name="twitter:image" content="https://biochemicalbd.com/images/logo.png"/>
      </Head>
      <div className="w-full bg-center bg-cover h-72 md:h-128 relative"
           style={{backgroundImage: "url(/assets/imgs/aboutUs.jpg)"}}>
        <div
          className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1
              className="mobile:text-6xl text-3xl tracking-widest font-semibold text-white uppercase lg:text-3xl">ABOUT
              US</h1>

          </div>
        </div>
      </div>
      <div className={'bg-gray-100 relative'}>
        <div className={'mobile:w-8/12 w-full mx-auto mobile:flex '}>
          <div
            className={'mobile:w-3/12 w-full hidden mobile:block mobile:ml-24  mobile:-mt-10 mt-10 bg-white h-72  pl-4 rounded-xl'}>
            <ul className={"flex flex-col ml-4 mt-10 gap-4 border-l-2 cursor-pointer "}>
              <Link href={'/'}
                    className={"text-gray-600 hover:text-green-600 uppercase text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-green-600  p-2 pl-5"}>
                Home
              </Link>
              <Link href={'/contact'}
                    className={"text-gray-600 hover:text-green-600 uppercase text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-green-600  p-2 pl-5"}>
                Contact
              </Link>
              <Link href={'/client'}
                    className={"text-gray-600 hover:text-green-600 uppercase text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-green-600  p-2 pl-5"}>
                Clients
              </Link>
            </ul>
          </div>
          <div className={'mobile:w-9/12 w-full bg-gray-100 text-gray-500 mt-20 h-auto pb-16 mobile:pt-0 pt-10'}>
            <h2 className={'text-center text-black font-semibold text-xl uppercase'}>About Us</h2>
            <p className={'text-sm px-8 pt-8 text-justify'}>
              Biochemical is a well-diversified company involved in import, trading, indenting, and services. Our
              mission is to protect and care for people through leading hygiene, infection prevention, and cleaning
              solutions. We have a wide product range of Cleaning Chemicals, Mops & Tools, Machines, Hot-Melt adhesives,
              Hotel Amenities, and various types of industrial products on demand.
            </p>
            <p className={'text-sm px-8 pt-6 text-justify'}>
              <span className={'font-semibold text-base pr-2'}>Mission :</span>
              To give complete cleaning and hygiene solutions to any industry or residential property and supply any
              organization with any type of commodity on demand.
            </p>
            <p className={'text-sm px-8 pt-6 text-justify'}>
              <span className={'font-semibold text-base pr-2'}>Vision :</span>
              To develop in the sector and continue to be a leading producer, importer, supplier, and service provider
              in the nation in terms of dependability turnaround product & service.
            </p>
            <p className={'text-sm px-8 pt-6 text-justify'}>
              <span className={'font-semibold text-base pr-2'}>Channel Partner :</span>
              Bio Chemical is an authorized distributor of Diversey, One World Infinite, Seba, and Ecolab.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;