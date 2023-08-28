"use client";
import Image from "next/image";
import Link from "next/link";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useRef, useState } from "react";

const blogContent = {
  heading: {
    headingSubTitle: "Our Writeups",
    headingTitle: "Our Latest Articles",
    description:
      "We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.",
  },
  recentBlog: [
    {
      permalink: "#_",
      featuredId: "/images/post-1-min.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      excerpt:
        "Learn the best practices and simple steps to safeguard your home and loved one from potential break-ins and thef",
      author: {
        img: "/images/person-1-min.jpg",
        name: "Alisa Richardson",
        titleRole: "Editor, CEO, Co-Funder",
      },
    },
    {
      permalink: "#_",
      featuredId: "/images/post-2-min.jpg",
      title:
        "The Ultimate Guide to Choosing the Right Life Insurance for Your Family",
      excerpt:
        "Understanding the various types of life insurance policies and finding the perfect coverage to ensure...",
      author: {
        img: "/images/person-2-min.jpg",
        name: "Jane Cooper",
        titleRole: "Editor, CEO, Co-Funder",
      },
    },
    {
      permalink: "#_",
      featuredId: "/images/post-3-min.jpg",
      title:
        "A Comprehensive Guide to Choosing the Right Family Health Insurance Plan",
      excerpt:
        "This post could cover tips and factors to consider when selecting health insurance for the entire family, including coverage options, deductibles, and copayments.",
      author: {
        img: "/images/person-3-min.jpg",
        name: "Davon McKenny",
        titleRole: "Editor, CEO, Co-Funder",
      },
    },
    {
      permalink: "#_",
      featuredId: "/images/post-1-min.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      excerpt:
        "Learn the best practices and simple steps to safeguard your home and loved one from potential break-ins and thef",
      author: {
        img: "/images/person-2-min.jpg",
        name: "Alisa Richardson",
        titleRole: "Editor, CEO, Co-Funder",
      },
    },
    {
      permalink: "#_",
      featuredId: "/images/post-2-min.jpg",
      title: "Understanding Homeowners Insurance",
      excerpt:
        "This blog post might explain the basics of homeowners insurance, what it covers, and why it's crucial for safeguarding your family and home.",
      author: {
        img: "/images/person-3-min.jpg",
        name: "Jane Cooper",
        titleRole: "Editor, CEO, Co-Funder",
      },
    },
    {
      permalink: "#_",
      featuredId: "/images/post-3-min.jpg",
      title: "Securing Your Family's Finances with Disability Insurance",
      excerpt:
        "his blog post might explore disability insurance options, highlighting its role in protecting the family's financial stability in case of a disability-related loss of income.",
      author: {
        img: "/images/person-1-min.jpg",
        name: "David McKenny",
        titleRole: "Editor, CEO, Co-Funder",
      },
    },
  ],
};

const RecentBlog = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBegining, setIsBegining] = useState(null);
  const sliderRef = useRef(null);

  useState(() => {
    setIsEnd(sliderRef.current.swiper.isEnd);
    setIsBegining(sliderRef.current.swiper.isBegining);
  });

  const previousHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  });

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  });

  return (
    <section className="py-20 bg-light overflow-x-hidden ">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10 ">
          <div className="lg:w-5/12 mb:10 lg:mb-0 ">
            <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10   ">
              {blogContent.heading.headingSubTitle}
            </span>
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5 ">
              {blogContent.heading.headingTitle}
            </h2>
            <p className=" text-body leading-relaxed ">
              {blogContent.heading.description}
            </p>
          </div>

          <div className="lg:w-5/12 text-left lg:text-right ">
            <div className="inline-flex ml-auto space-x-3 ">
              <div
                onClick={previousHandler}
                className={` ${
                  isBegining == true
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto "
                    : "opacity-100 hover:bg-primary "
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center  `}
              >
                <BiChevronLeft
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isBegining == true
                      ? "group-hover:text-primary "
                      : "group-hover:text-white"
                  } `}
                ></BiChevronLeft>
                          </div>
                          
                          <div
                onClick={nextHandler}
                className={` ${
                  isEnd == true
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto "
                    : "opacity-100 hover:bg-primary "
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center  `}
              >
                <BiChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isEnd == true
                      ? "group-hover:text-primary "
                      : "group-hover:text-white"
                  } `}
                ></BiChevronRight>
              </div>
            </div>
          </div>
              </div>
              <Swiper breakpoints={{
                  640: {
                      width: 640,
                      slidesPerView:1
                  },
                  768: {
                      width: 768,
                      slidesPerView:2
                  },
                  968: {
                      width: 968,
                      slidesPerView:2
                  },
              }} ref={sliderRef}
                  speed={700}
                  onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
                  className=" z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light "
              >
                  {
                      blogContent.recentBlog.map((blog, idx) => {
                          return <SwiperSlide key={i} className=" overflow-visible h-full " >
                              <div className="rounded-lg p-5 bg-white relative mt-10 ">
                                  <Link href={blog.permalink} className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4" >
                                      <Image src={blog.featuredId} ></Image>
                                  </Link>
                              </div>
                          </SwiperSlide>
                      })
                  }
              </Swiper>
      </div>
    </section>
  );
};

export default RecentBlog;
