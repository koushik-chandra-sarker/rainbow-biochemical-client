import React from 'react';
import about_us from '../../public/assets/imgs/about-as.jpg'
import Image from "next/image";

const Feature = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="  py-24 mx-auto flex flex-wrap">
          <div className="tablet:w-1/2 w-full mb-10 tablet:mb-0 rounded-tablet overflow-hidden">
            <Image alt="feature" className="tablet:object-cover object-contain object-center tablet:h-128 h-60 w-full"
                   src={about_us}/>
          </div>
          <div
            className="flex flex-col flex-wrap tablet:py-6 -mb-10 tablet:w-1/2 tablet:pl-12 tablet:text-left text-center">
            <div className="flex flex-col mb-10 tablet:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import,
                  supply, marketing and trading various kinds of Products & services to national & multinational company
                  in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in
                  Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 tablet:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Miami Associates (BD) started its journey in the beginning of 1990 with the objective to import,
                  supply, marketing and trading various kinds of Products & services to national & multinational company
                  in Bangladesh. Presently Miami Associates (BD) is operating its Business with permanent setup in
                  Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 tablet:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Miami Associates (BD) is the appointed agent of BASF’s Intermediates division in Bangladesh.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 tablet:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Miami Associates (BD) also has business of Hot-melt adhesive, Poultry Feed Ingredients and Doctor
                  blade for rotogravure & flexo printing machine and also capable to supply various types’ products on
                  demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;