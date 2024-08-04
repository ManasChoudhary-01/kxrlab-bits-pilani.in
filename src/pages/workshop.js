import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import TabButton from "@/components/TabButton";
import WorkshopCard from "@/components/WorkshopCard";
import projects from "../../public/images/backgrounds/projects.jpg";
import styles from "../styles/Workshop.module.css";

import kt from "../../public/images/kt.jpeg";
import ANKUR from "../../public/images/team/ANKUR.jpeg";
import JAY_AGARWAL from "../../public/images/team/JAY_AGARWAL.jpg";

const workshopData = {
    blender: [
        {
            id: "1",
            img1: kt,
            sname1: "Kamlesh Tiwari",
            img2: ANKUR,
            sname2: "Ankur Basavarsu",
            team: "blender",
            desc: "Dive into the world of 3D modeling and animation with our hands-on Blender workshop. Learn the basics of Blender, from interface navigation to creating stunning 3D assets. Perfect for beginners and those looking to enhance their skills!",
            date: "11th August",
            form: "https://docs.google.com/forms/d/e/1FAIpQLSc1CVt764kNHZ0Ygs8LbZC_wfi_s-_aHJLWe0MZxliT771YJw/viewform",
            topic1: "Introduction",
            time1: "9:30 AM - 10:00 AM",
            line11: "Background, Applications",
            line12: "Tools, Projects",
            topic2: "Introduction to Blender",
            time2: "10:00 AM - 11:30 AM",
            line21: "Introduction to Blender",
            line22: "Exploring the software interface and menus.",
            topic3: "Programming with Blender",
            time3: "11:30 AM - 1:00 PM",
            line31: "Basic 3D modeling commands, sculpting.",
            line32: "Rendering, exporting, and Unity file formats.",
            topic4: "Break",
            time4: "1:00 PM - 2:00 PM",
            line41: "Eat And Enjoy",
            line42: "Networking",
            topic5: "Hands-On Session",
            time5: "2:00 PM - 5:00 PM",
            line51: "Design a clocktower model for use in Unity.",
            line52: "Feedback and Q&A Session"
        },
    ],

    unity: [
        {
            id: "1",
            img1: kt,
            sname1: "Kamlesh Tiwari",
            img2: JAY_AGARWAL,
            sname2: "Jay Agarwal",
            team: "unity",
            desc: "Master the art of game development with our comprehensive Unity workshop. This session will cover everything from the basics of the Unity interface to creating interactive AR/VR experiences. Ideal for anyone wanting to bring their ideas to life!",
            date: "25th August",
            form: "https://docs.google.com/forms/d/e/1FAIpQLSc1CVt764kNHZ0Ygs8LbZC_wfi_s-_aHJLWe0MZxliT771YJw/viewform",
            topic1: "Introduction",
            time1: "9:30 AM - 10:00 AM",
            line11: "Project Idea, Concept and goals",
            line12: "Mathematical Background",
            topic2: "Introduction to Unity",
            time2: "10:00 AM - 11:30 AM",
            line21: "Background and Setting up the environment",
            line22: "Exploring the software interface and options.",
            topic3: "Introduction to Unity",
            time3: "11:30 AM - 1:00 PM",
            line31: "Programming with Unity",
            line32: "Creating a basic game in unity",
            topic4: "Break",
            time4: "1:00 PM - 2:00 PM",
            line41: "Eat And Enjoy",
            line42: "Networking",
            topic5: "Hands-On Session",
            time5: "2:00 PM - 5:00 PM",
            line51: "Creating a basic AR app for mobile",
            line52: "Feedback and Q&A Session"
        },
    ],

    hackathon: [
        {
            id: "1",
            img: "",
            sname: "",
            team: "null",
            desc: " HACK-XR 2024: Our premier AR/VR hackathon where you can win amazing cash prizes and exclusive goodies! Note: Only students who register for the workshops will be eligible to participate in HACK-XR 2024.",
            date: "",
            form: "",
            topic1: "",
            time1: "",
            line11: "",
            line12: "",
            topic2: "",
            time2: "",
            line21: "",
            line22: "",
            topic3: "",
            time3: "",
            line31: "",
            line32: "",
            topic4: "",
            time4: "",
            line41: "",
            line42: "",
            topic5: "",
            time5: "",
            line51: "",
            line52: ""
        },
    ]
};

const Workshop = () => {
    const [selectedTeam, setSelectedTeam] = useState('blender');

    function handleSelect(selectedButton) {
        setSelectedTeam(selectedButton);
    }

    return (
        <>
            <Head>
                <title>KXR | Workshop</title>
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
                        text="AR/VR WORKSHOP!"
                        className="my-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <menu className={styles.menu}>
                        <TabButton isSelected={selectedTeam === 'blender'} onSelect={() => handleSelect('blender')}>Workshop on Blender</TabButton>
                        <TabButton isSelected={selectedTeam === 'unity'} onSelect={() => handleSelect('unity')}>Workshop on Unity</TabButton>
                        <TabButton isSelected={selectedTeam === 'hackathon'} onSelect={() => handleSelect('hackathon')}>Hackathon</TabButton>
                    </menu>
                    <div className={styles.details}>
                        {workshopData[selectedTeam].map(data => (
                            <WorkshopCard
                                key={data.id}
                                img1={data.img1}
                                sname1={data.sname1}
                                img2={data.img2}
                                sname2={data.sname2}
                                team={data.team}
                                desc={data.desc}
                                date={data.date}
                                form={data.form}
                                topic1={data.topic1}
                                time1={data.time1}
                                line11={data.line11}
                                line12={data.line12}
                                topic2={data.topic2}
                                time2={data.time2}
                                line21={data.line21}
                                line22={data.line22}
                                topic3={data.topic3}
                                time3={data.time3}
                                line31={data.line31}
                                line32={data.line32}
                                topic4={data.topic4}
                                time4={data.time4}
                                line41={data.line41}
                                line42={data.line42}
                                topic5={data.topic5}
                                time5={data.time5}
                                line51={data.line51}
                                line52={data.line52}
                            />
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default Workshop;
