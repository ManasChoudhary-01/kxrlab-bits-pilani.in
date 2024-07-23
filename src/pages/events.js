import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import measuring from "../../public/images/projects/AR-tape-measurement.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Events from "@/components/Events";
import Publications from "@/components/Publications";
import ParticleContainer from "@/components/ParticleContainer";

import projects from "../../public/images/backgrounds/projects.jpg";
import event1 from "../../public/images/projects/event1.jpeg";
import smithy from "../../public/images/projects/Smithy.jpg";
import drone from "../../public/images/projects/Drone.png";
import navigation from "../../public/images/projects/Campus_Navigation.png";
import { slideAnimation, HeadAnimation } from "@/components/motion";
import event2 from "../../public/images/Events/event32.jpg";
import event21 from "../../public/images/Events/event21.jpg"
import event22 from "../../public/images/Events/event22.jpg"
import event23 from "../../public/images/Events/event23.jpg"

const FramerImage = motion(Image);

// const slideAnimation = (direction, duration) => ({
//   initial: { opacity: 0, x: direction === 'left' ? -100 : 100 },
//   animate: { opacity: 1, x: 0 },
//   transition: { duration },
// });

const FeaturedEvent = ({
  type,
  title,
  summary,
  img1,
  img2,
  img3,
  img4,
  link,
  sourceLink,
  button,
  source,
}) => {
  return (
    <motion.article className="w-full flex justify-between items-center glassmorphism shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:ronded-2xl xs:p-4 xs:w-[90%] m-0">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden lg:w-full"
      >
        {/* <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.9 }}
          // transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          {...slideAnimation("left", 0.5)}
        /> */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide style={{display: (img1 === null) ? "none" : null}}>
            <motion.img
              src={img1.src}
              alt="img"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              {...slideAnimation('left', 0.5)}
            />
          </SwiperSlide>
          <SwiperSlide style={{display: (img2 === "null") ? "none" : null}}>
            <motion.img
              src={img2.src}
              alt="img"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              // {...slideAnimation('left', 0.5)}
            />
          </SwiperSlide>
          <SwiperSlide style={{display: (img3 === "null") ? "none" : null}}>
            <motion.img
              src={img3.src}
              alt="img"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              // {...slideAnimation('left', 0.5)}
            />
          </SwiperSlide>
          <SwiperSlide style={{display: (img4 === "null") ? "none" : null}}>
            <motion.img
              src={img4.src}
              alt="img"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              // {...slideAnimation('left', 0.5)}
            />
          </SwiperSlide>
        </Swiper>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <motion.span
          className="font-medium text-xl text-primaryDark xs:text-base"
          {...slideAnimation("right", 0.5)}
        >
          {type}
        </motion.span>
        <Link href={link} target="_blank">
          <motion.h2
            className="my-2 w-full text-left text-4xl font-bold hover:underline hover:underline-offset-2"
            {...slideAnimation("right", 0.5)}
          >
            {title}
          </motion.h2>
        </Link>
        <motion.p
          className="my-2 font-medium text-dark sm:text-sm"
          {...slideAnimation("right", 0.5)}
        >
          {summary}
        </motion.p>
        <motion.div
          className="mt-2 flex items-center"
          {...HeadAnimation("right", 0)}
        >
          {sourceLink ? (
            <Link href={sourceLink} target="_blank" className="w-10">
              {" "}
              {source ? <LinkedInIcon /> : <GithubIcon />}{" "}
            </Link>
          ) : (
            <div></div>
          )}
          {button ? (
            <Link
              href={link}
              target="_blank"
              className="mx-4 flex items-center rounded-md bg-primary text-light hover:bg-transparent p-2 px-6 text-lg border-2 border-primary border-solid hover:text-primary md:p-2 md:px-4 md:text-base duration-500 font-[50] tracking-[0.075rem]"
            >
              {" "}
              {button}{" "}
            </Link>
          ) : (
            <div></div>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
};

const events = () => {
  return (
    <div className="">
      <Head>
        <title>KXR | Events</title>
        <meta name="description" content="later" />
      </Head>

      <TransitionEffect />

      <div className="w-screen h-screen -z-50 top-0 fixed overflow-hidden">
        <Image
          src={projects}
          className="object-cover object-top fixed top-0 h-full w-full"
        />
      </div>

      <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-32 ">
          <AnimatedText
            text="EVENTS!"
            className="my-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-8">
            <div className="col-span-12">
              <FeaturedEvent
                type="Talk Session"
                title="Extended Reality"
                summary="An educational event on Extended Reality (XR) technology was a success, featuring discussions on basics, applications, success stories, motivation, coding tools, best practices, and challenging problems. The event expanded our understanding of the potential of AR/VR."
                img1={event1}
                img2="null"
                img3="null"
                img4="null"
                link="https://drive.google.com/file/d/1FgmlWu6GiPfdxaDTISJuLLgIu98vpqCH/view?pli=1"
                sourceLink="https://www.linkedin.com/feed/update/urn:li:activity:7071875912685821952?utm_source=share&utm_medium=member_desktop"
                button="Recording"
                source="linkedin"
              />
            </div>

            <div className="col-span-12">
              <FeaturedEvent
                type="Oasis Event"
                title="Pixel Play Stalls"
                summary="An educational event on Extended Reality (XR) technology was a success, featuring discussions on basics, applications, success stories, motivation, coding tools, best practices, and challenging problems. The event expanded our understanding of the potential of AR/VR."
                img1={event2}
                img2={event21}
                img3={event22}
                img4={event23}
                link=""
                sourceLink=""
                button=""
                source=""
              />
            </div>
          </div>
        </Layout>
        {/* <Layout>
            <Events />
            <Publications />
          </Layout> */}
      </main>
    </div>
  );
};

export default events;
