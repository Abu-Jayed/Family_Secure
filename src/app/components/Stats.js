'use client'
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stateContent = {
  stats: [
    {
      number: "99.9%",
      label: "Child Safety Solutions",
    },
    {
      number: "3,912",
      label: "Happy Customers",
    },
    {
      number: "4.8",
      label: "Rating Reviews",
    },
  ],
  getStarted: {
    heading: "Get started with our service?",
    description:
      "We understand that protecting your loved ones is of utmost importance.",
    img: "/images/illustration-woman.svg",
    cta: {
      cta_href: "#_",
      cta_label: "Learn more",
    },
  },
};

const Stats = () => {

  useEffect(() => {
    AOS.init({
    duration: 700,
      easing: "slide",
      once: true,
    });
  });

  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0 ">
            <div className="grid grid-cols-3">
              {
                stateContent.stats.map((stat, i) => {
                  i *= 100
                  return (
                    <div key={i} className="text-center lg:text-left" data-aos="fade-up" data-aos-delay={i} >
                      <strong className="text-primary text-4xl xl:text-[52px] font-bold block leading-tight ">
                        {stat.number}
                      </strong>
                      <span>{stat.label}</span>
                    </div>
                  ) 
                }
                 )
              }
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className=" bg-light py-10 lg:px-7 !pr-28 md:pr-32 lg:pr-40 rounded-lg relative "  >
              {stateContent.getStarted.img && (
                <Image data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200" src={stateContent.getStarted.img} alt="business women not found" width={96} height={288.84} className="absolute right-0 lg:right-6 -top-14 w-24 " />
              )}
              {stateContent.getStarted.heading && ( 
                <h3 data-aos="fade-left" className="text-heading font-bold text-xl mb-3 ">
                  {stateContent.getStarted.heading}
                </h3>
              )}

              {stateContent.getStarted.description && ( 
                <p data-aos="fade-left" data-aos-delay="400" className="text-md mb-5 ">
                  {stateContent.getStarted.description}
                </p>
              )}

              {stateContent.getStarted.cta.cta_label && ( 
                <Link href="#_" className="flex space-x-2 outline-none items-center font-semibold text-primary group ">
                  <span>{stateContent.getStarted.cta.cta_label}</span>
                  <span className=" w-6 h-6 rounded-full bg-primary text-white inline-flex justify-center items-center duration-300 transition-all ease-in-out group-hover:bg-secondary ">
                    <BiChevronRight className="text-lg"></BiChevronRight>
                  </span>
                </Link>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
