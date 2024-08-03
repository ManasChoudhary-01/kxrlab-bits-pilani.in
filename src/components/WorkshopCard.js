import React from "react";
import styles from "../styles/Workshop.module.css";

export default function WorkshopCard({ img, team, sname, desc, date, form, topic1, time1, line11, line12, topic2, time2, line21, line22, topic3, time3, line31, line32, topic4, time4, line41, line42 }) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.content}>
                    <div className={styles.desc}>{desc}</div>
                    <div className={styles.bottom}>
                        <h6><span>Date: </span>{date}</h6>
                        <a href={form} target="_blank">Register Here</a>
                    </div>
                </div>
                <div className={styles.speaker}>
                    <img src={img} alt={`${team} image`}></img>
                    <p><span>Speaker: </span>{sname}</p>
                </div>

            </div>
            <div className={styles.events}>
                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic1}</h6>
                        <p>{time1}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line11}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line12}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic2}</h6>
                        <p>{time2}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line21}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line22}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic3}</h6>
                        <p>{time3}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line31}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line32}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic4}</h6>
                        <p>{time4}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line41}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line42}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
