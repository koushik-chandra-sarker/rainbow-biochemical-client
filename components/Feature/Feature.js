import React from 'react';
import about_us from '../../public/assets/imgs/about-usw.jpg'
import Image from "next/image";

const Feature = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="  py-24 mx-auto flex flex-wrap">
          <div className="tablet:w-1/2 w-full mb-10 tablet:mb-0 rounded-tablet overflow-hidden">
            <Image alt="feature"
                   className="tablet:object-cover object-contain object-center tablet:h-106 h-60 w-full border shadow"
                   src={about_us}/>
          </div>
          <div
            className="flex flex-col flex-wrap tablet:py-6 -mb-10 tablet:w-1/2 tablet:pl-12 tablet:text-left text-center">
            <div className="flex flex-col mb-8 tablet:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Biochemical is a well-diversified company involved in import, trading, indenting, and services. Our
                  mission is to protect and care for people through leading hygiene, infection prevention, and cleaning
                  solutions. We have a wide product range of Cleaning Chemicals, Mops & Tools, Machines, Hot-Melt
                  adhesives, Hotel Amenities, and various types of industrial products on demand.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 tablet:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  To give complete cleaning and hygiene solutions to any industry or residential property and
                  supply any organization with any type of commodity on demand.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 tablet:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  To develop in the sector and continue to be a leading producer, importer, supplier, and
                  service provider in the nation in terms of dependability turnaround product & service
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 tablet:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Bio Chemical is an authorized distributor of Diversey, One World Infinite, Seba, and Ecolab.
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