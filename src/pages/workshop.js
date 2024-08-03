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

const workshopData = {
    blender: [
        {
            id: "1",
            img: "https://drive.google.com/thumbnail?sz=w1000&id=1d5sSaCFVdYqT8-t4b9l4N5qnIP8wuZuA",
            sname: "Manas Choudhary",
            team: "blender",
            desc: "Dive into the world of 3D modeling and animation with our hands-on Blender workshop. Learn the basics of Blender, from interface navigation to creating stunning 3D assets. Perfect for beginners and those looking to enhance their skills!",
            date: "11th August",
            form: "",
            topic1: "Making Virtual Piano",
            time1: "09:00 AM - 12:00 PM",
            line11: "Introduction To Unity Scripting",
            line12: "Vuforia Virtual Buttons",
            topic2: "Augmented Reality Basics",
            time2: "01:00 PM - 03:00 PM",
            line21: "AR Frameworks Overview",
            line22: "Creating AR Experiences with ARKit",
            topic3: "Advanced Unity Techniques",
            time3: "03:30 PM - 05:00 PM",
            line31: "Shader Programming",
            line32: "Physics and Animations in Unity",
            topic4: "Project Showcase",
            time4: "05:30 PM - 06:30 PM",
            line41: "Presenting Your VR/AR Projects",
            line42: "Feedback and Q&A Session"
        },
    ],

    unity: [
        {
            id: "1",
            img: "",
            sname: "",
            team: "",
            desc: "Master the art of game development with our comprehensive Unity workshop. This session will cover everything from the basics of the Unity interface to creating interactive AR/VR experiences. Ideal for anyone wanting to bring their ideas to life!",
            date: "25th August",
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
            line42: ""
        },
    ],

    hackathon: [
        {
            id: "1",
            img: "",
            sname: "",
            team: "",
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
            line42: ""
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
                                img={data.img}
                                sname={data.sname}
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
                            />
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default Workshop;
