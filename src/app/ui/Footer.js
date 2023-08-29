"use client";
import Image from "next/image";
import Link from "next/link";

import { BiChevronRight } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from "react-icons/hi2";

const footerContent = {
    about: {
        logo: "/images/logo.svg",
        description: "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
        cta: {
            herf: "#_",
            label: "Learn More"
        }
    },
    footerLink: [
        {
            heading: "Company",
            links: [
                {
                    herf: "#_",
                    label: "Home"
                },
                {
                    herf: "#_",
                    label: "How we work"
                },
                {
                    herf: "#_",
                    label: "Our mission"
                },
                {
                    herf: "#_",
                    label: "About"
                },
                {
                    herf: "#_",
                    label: "Careers"
                },
                {
                    herf: "#_",
                    label: "Contact"
                },
            ]
        },
        {
            heading: "Resources",
            links: [
                {
                    herf: "#_",
                    label: "Blog"
                },
                {
                    herf: "#_",
                    label: "Support"
                },
                {
                    herf: "#_",
                    label: "Terms & Condition"
                },
                {
                    herf: "#_",
                    label: "Privacy Policy"
                },
            ]
        },
    ],
    contact: {
        heading: "Contact",
        description: "Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",
        address: {
            street: "23 Main Street, Cityville, State, Zip Code",
            phone: "(555) 123-4567",
            website: "https://polite-jalebi-ba52be.netlify.app/"
        }
    },
    copyright: {
        label1: "Copyright 2023. Designed with",
        label2: "By Abu Jayed All Right reserved"
    }
}

const Footer = () => {
    return <footer className="mt-8 pt-8 ">
        <div className="container px-4 mx-auto  ">
            <div className="block lg:flex gap-20 mb-10 pb-10">
                <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                    <Link href="/" className="mb-4 inline-block " >
                        <Image src={footerContent.about.logo} alt="" width={157} height={30} ></Image>
                    </Link>
                    <p className="leading-relaxed mb-7 ">
                        {footerContent.about.description}
                    </p>
                    <p>
                        <Link className="flex space-x-2 outline-none items-center font-semibold text-primary group " href={footerContent.about.cta.herf}>
                            <span>{footerContent.about.cta.label}</span>
                            <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary ">
                                <BiChevronRight className="text-lg"></BiChevronRight>
                            </span>
                        </Link>
                    </p>
                </div>
                <div className="w-full lg:w-4/12 mb-10 lg:mb-0 ">
                    <div className="grid grid-cols-2 gap-10 ">
                        {footerContent.footerLink.map((footerLink, i) => (
                            <div key={i}>
                                <h3 className="font-semibold text-heading mb-5 ">{footerLink.heading}</h3>
                                <ul className="p-0 m-0">
                                    {footerLink.links.map((link, i) => (
                                        <li key={i}>
                                            <Link className="group flex items-center duration-300 transition-all ease-in-out hover:text-primary " href={link.herf}>
                                                <span>{link.label}</span>
                                                <span className=" left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3 ">
                                                    <BiChevronRight className="text-xl"></BiChevronRight>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-4/12 w-full">
                    <h3 className=" font-semibold text-heading mb-5 " >
                        {footerContent.contact.heading}
                    </h3>
                    <p className="leading-relaxed mb-7 ">
                        {footerContent.contact.description}
                    </p>
                    <ul>
                        <li className=" flex items-start space-x-3 mb-5 ">
                            <HiLocationMarker className="text-xl text-primary"></HiLocationMarker>
                            <span>{ footerContent.contact.address.street}</span>
                        </li>
                        <li className=" flex items-start space-x-3 mb-5 ">
                            <HiPhone className="text-xl text-primary"></HiPhone>
                            <span>{ footerContent.contact.address.phone}</span>
                        </li>
                        <li className=" flex items-start space-x-3 mb-5 ">
                            <HiMiniGlobeAmericas className="text-xl text-primary"></HiMiniGlobeAmericas>
                            <span>{ footerContent.contact.address.website}</span>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
  </footer>
};

export default Footer;
