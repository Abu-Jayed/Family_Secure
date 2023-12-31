"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const heroContent = {
    text: {
      subheading: "Welcome to FamSec",
      heading: "Protection Families, Securing Futures",
      description:
        "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs. Our expert team is committed to creating a solid foundation of security and peace of mind for you and your loved ones.",
    },
    images: {
      img1: "/images/hero-img-1-min.jpg",
      img2: "/images/hero-img-2-min.jpg",
      img3: "/images/hero-img-3-min.jpg",
      img4: "/images/hero-img-4-min.jpg",
      img5: "/images/hero-img-5-min.jpg",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "slide",
      once: true,
    });
  });

  return (
    <>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-5/12 mb-10 lg:mb-0">
              {heroContent.text.subheading && (
                <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]  " data-aos="fade-up">
                  {heroContent.text.subheading}{" "}
                </span>
              )}

              {heroContent.text.heading && (
                <h1 className="text-4xl lg:text-5xl  font-bold text-heading mb-7" data-aos="fade-up"
                data-aos-delay="100"> 
                  {heroContent.text.heading}
                </h1>
              )}

              <p className="leading-relaxed text-body mb-10 " data-aos="fade-up"
                          data-aos-delay="200" >
                {heroContent.text.description}
              </p>

              <div className="flex space-x-3 " data-aos="fade-up"
                          data-aos-delay="300">
                <Link
                  href="/"
                  className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-xl inline-block hover:-top-[2px] relative top-0  "
                  data-aos="fade-up"
                >
                  Get Started
                </Link>

                <Link
                  data-aos="fade-up"
                  href="/"
                  className="py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-xl inline-block hover:-top-[2px] relative top-0  "
                >
                  How It Work
                </Link>
              </div>
            </div>

            <div className="lg:w-6/12 space-y-2">
              <div className="flex space-x-2 items-stretch">
                {heroContent.images.img1 && (
                  <div className="w-8/12">
                    <Image
                      width={397}
                      height={406}
                      src={heroContent.images.img1}
                      alt="father kissing her son"
                      className="object-cover h-full w-full rounded-2xl "
                      data-aos="fade-right"
                    ></Image>
                  </div>
                )}

                <div className="w-4/12 self-end space-y-2">
                  <div className="grid grid-cols-2 gap-2 ">
                    {heroContent.images.img2 && (
                      <div>
                        <Image
                          src={heroContent.images.img2}
                          alt="family photo in a flower field"
                          width={437}
                          height={437}
                          className="object-cover h-full w-full rounded-2xl"
                          data-aos="fade-down"
                          data-aos-delay="100"
                        ></Image>
                      </div>
                    )}

                    <div data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" className="bg-yellowLight rounded-2xl rounded-tr-[200px]  "></div>
                  </div>
                  {heroContent.images.img3 && (
                    <div>
                      <Image
                        src={heroContent.images.img3}
                        alt="two child sibling hugging each other"
                        width={374}
                        height={392}
                        className="w-full h-full  rounded-2xl "
                        data-aos="fade-left"
                          data-aos-delay="200"
                      ></Image>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-4/12">
                  <div className="grid gap-2 grid-cols-2">
                    <div data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000" className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                    {heroContent.images.img4 && (
                      <div>
                        <Image
                          src={heroContent.images.img4}
                          alt=""
                          width={394}
                          height={394}
                          className="object-cover h-full w-full rounded-2xl"
                          data-aos="fade-up"
                          data-aos-delay="300"
                        ></Image>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-5/12">
                  {heroContent.images.img5 && (
                    <Image
                      src={heroContent.images.img5}
                      alt=""
                      width={446}
                      height={495}
                      className="object-cover h-full w-full rounded-2xl "
                      data-aos="fade-up"
                          data-aos-delay="400"
                    ></Image>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
