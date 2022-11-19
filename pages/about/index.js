import React from 'react'

const Index = () => {
    return (
        <div>
              <div className="w-full bg-center bg-cover h-72 md:h-128 relative"
                   style={{backgroundImage: "url(/assets/imgs/aboutUs.jpg)"}}>
                  <div
                      className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                      <div className="text-center">
                          <h1 className="mobile:text-6xl text-3xl tracking-widest font-semibold text-white uppercase lg:text-3xl">ABOUT US</h1>

                      </div>
                  </div>
              </div>
            <div className={'bg-gray-100 relative'}>
                <div className={'mobile:w-8/12 w-full mx-auto mobile:flex '}>
                    <div className={'mobile:w-3/12 w-full hidden mobile:block mobile:ml-24  mobile:-mt-10 mt-10 bg-white h-72  pl-4 rounded-xl'}>
                        <ul className={"flex flex-col ml-4 mt-10 gap-4 border-l-2 cursor-pointer "}>
                            <li
                                className={"text-gray-600 hover:text-green-600 uppercase text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-green-600  p-2 pl-5"}>
                                Home
                            </li>
                            <li
                                className={"text-gray-600 hover:text-green-600 uppercase text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-green-600  p-2 pl-5"}>
                                About us
                            </li>
                            <li
                                className={"text-gray-600 hover:text-green-600 uppercase text-gray-400 border-l-2 border-transparent -ml-0.5 hover:border-green-600  p-2 pl-5"}>
                                Clients
                            </li>
                        </ul>
                    </div>
                    <div className={'mobile:w-9/12 w-full bg-gray-100 text-gray-500 mt-20 h-auto pb-16 mobile:pt-0 pt-10'}>
                        <h2 className={'text-center text-black font-semibold text-xl uppercase'}>About Us</h2>
                        <p className={'text-sm px-8 pt-8 text-justify'}>
                            <span className={'font-semibold text-base'}>Miami Associates (BD)</span> is a well-diversified company involved in import, trading, indenting and services.
                            Our core businesses are among the region’s market leaders. Founded in 1990 as trading company, Miami Associates (BD) has since grown from a small trading
                            company into a reputable trading, indenting, supply and service provider company. From local selling, we have expanded to become one of the renowned trading companies
                            that supply its high quality products in Bangladesh. Miami Associates (BD) has established successful co-operations in Dhaka,
                            Chittagong and Cox’s Bazar. Today, our businesses are increasing at a rapid pace.<br/><br/>
                            With its good relationship and distribution with Diversey (India & UK), Sysco and factories worldwide it has find ground to be
                            capable to supply wide product ranging from Cleaning Chemicals, Mops & Tools, Machines, Hot-Melt Adhesive, Doctor Blade, Hotel Amenities,
                                Poultry Feed Ingredients and various types industrial products on demand.
                            <br/><br/>
                            Over the years, we have built a reputation of trust to buyer worldwide in terms of good, efficient, and prompt supply of goods
                            upon payment made. Miami Associates (BD) with its efficient management team and strong financial strength are ready to take up
                            any new challenges the world has to offer.
                        </p>
                        <p className={'text-sm px-8 pt-8 text-justify'}>
                            <span className={'font-semibold text-base pr-2'}>Mission :</span>
                            To offer end to end cleaning & hygiene solutions to any organizations/residential houses. To provide all sorts of commodities to any organizations on demand.
                        </p>
                        <p className={'text-sm px-8 pt-8 text-justify'}>
                            <span className={'font-semibold text-base pr-2'}>vision :</span>
                            To become and remain a leading manufacturer, importer, supplier & service provider in the country in terms of Reliability Turnaround product & service Continue to excel industry standards
                        </p>
                        <p className={'text-sm px-8 pt-8 text-justify'}>
                            <span className={'font-semibold text-base pr-2'}>Channel Partner :</span>
                            Miami Associates (BD) is the authorized distributor of Diversey India PVT. LTD. and fully equipped to offer complete commercial cleaning & hygiene solutions in any types of organizations by providing quality products, machineries and support services. Diversey is one of the world leading manufacturer & supplier of commercial cleaning and hygiene solutions.
                        </p>
                        <p className={'text-sm px-8 pt-8 text-justify'}>
                            <span className={'font-semibold text-base pr-2'}>We are also authorized distributor & channel partner of the following Company :</span>
                            Sysco(Hotel Amenities), Nanpao & Selic (Manufacturer Hot-Melt Adhesive), Arron & Convertec (Doctor Blade).

                        </p>
                        <p className={'text-sm px-8 pt-8 text-justify'}>
                            <span className={'font-semibold text-base pr-2 pb-4'}>Membership : Miami Associates (BD) is Member of the Following Organization<br/></span><br/>
                            <span>1. Dhaka Chamber of Commrece.<br/></span>
                            <span>2. AHCAB (Animal Health Companies Association of Bangladesh).</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Index;