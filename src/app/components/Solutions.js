import Image from "next/image";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

const solutionContent = {
  text: {
    headingSubTitle: "Our Solutions",
    headingTitle:
      "From safeguarding your home with state-of-the-art alarm systems",
    description:
      "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being.",
    features: [
      {
        title: "Home Fire Safety",
      },
      {
        title: "Cybersecurity Solutions",
      },
      {
        title: "Emergency Preparedness",
      },
      {
        title: "Identity Theft Protection",
      },
    ],
    cta: {
      btn1: {
        href: "#_",
        lebel: "Get Started",
      },
      btn2: {
        href: "#_",
        lebel: "How it Works?",
      },
    },
  },
  images: {
    img1: "/images/solution-img-1-min.jpg",
    img2: "/images/solution-img-2-min.jpg",
    img3: "/images/solution-img-3-min.jpg",
  },
  experience: {
    year: "25+",
    label: "year of experience",
  },
};

const Solutions = () => {
  return <section className="py-32 bg-light overflow-x-hidden ">
    <div className="container px-4 mx-auto">
      <div className="lg:flex  "></div>
    </div>
  </section>;
};

export default Solutions;
