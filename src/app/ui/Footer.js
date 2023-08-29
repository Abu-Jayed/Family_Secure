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
  return <div></div>;
};

export default Footer;
