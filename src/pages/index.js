import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import ParticleContainer from "@/components/ParticleContainer";
import home from "../../public/images/backgrounds/home1.jpg";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeadAnimation, slideAnimation } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>KXR | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />

      <div className="w-screen h-screen -z-50 fixed overflow-hidden">
        <img src="../../images/backgrounds/home1.jpg" className="object-cover h-full w-full object-top" />
      </div>

      <div className="w-full h-full overflow-hidden">
        <main className="flex items-center text-dark w-full min-h-[95vh] py-24 ">
          <Layout className="p-0 md:p-1.5 sm:p-8">
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className="w-1/2 md:w-full bg-transparent"></div>
              <motion.div
                className="w-[60%] flex flex-col items-center self-center xl:w-full lg:text-center heading glassmorphism p-8"
                {...slideAnimation("right", 0.7)}
              >
                <AnimatedText
                  text="Turning Vision Into Reality."
                  className="!text-7xl uppercase !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:text-3xl"
                />

                <motion.p
                  className="my-4 text-xl font-medium md:!text-sm sm:!texr-xs"
                  {...slideAnimation("right", 0.7)}
                >
                  We are a group of people who are insanely motivated to explore
                  how we can engineer realities and experiences using tech.
                </motion.p>

                <motion.div
                  className="flex item-center self-start mt-4 lg:self-center"
                  {...HeadAnimation("right", 0.7)}
                >
                  <Link
                    href="/about"
                    className="flex items-center rounded-md bg-primary text-light hover:bg-transparent p-2 px-6 text-lg border-2 border-primary border-solid  hover:text-primary md:p-2 md:px-4 md:text-base duration-500 font-[50] tracking-[0.075rem]"
                  >
                    More
                    <LinkArrow className="w-6 ml-1" />{" "}
                  </Link>
                  <Link
                    href="/contact"
                    target={"_blank"}
                    className="m-4 ml-6 text-lg  capitalize text-dark hover:text-primary underline underline-offset-4 md:text-base font-[50] tracking-[0.075rem] duration-500"
                  >
                    contact
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </Layout>
        </main>
      </div>
    </>
  );
}
