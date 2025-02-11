import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const OurTeamSection = () => {
  const teamMembers = [
    {
      name: "James Norrison",
      position: "Software Engineer",
      description: "Lead Engineer and Design",
      image: "/images/team/team-1.png",
    },
    {
      name: "James Norrison",
      position: "Software Engineer",
      description: "Lead Engineer and Design",
      image: "/images/team/team-1.png",
    },
    {
      name: "James Norrison",
      position: "Software Engineer",
      description: "Lead Engineer and Design",
      image: "/images/team/team-1.png",
    },
    {
      name: "James Norrison",
      position: "Software Engineer",
      description: "Lead Engineer and Design",
      image: "/images/team/team-1.png",
    },
  ];
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <h4>Our Team</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            odit enim consequatur quo perspiciatis animi laborum, id officiis
            nostrum debitis!
          </p>
        </div>

        <div className={styles.teamMembers}>
          {teamMembers.map((teamMember, index) => (
            <div key={index} className={styles.teamMember}>
              <Image
                src={teamMember.image}
                alt={teamMember.name}
                width={500}
                height={500}
              />
              <div className={styles.teamMemberDetails}>
                <h4>{teamMember.name}</h4>
                <span>{teamMember.position}</span>
                <span>{teamMember.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
