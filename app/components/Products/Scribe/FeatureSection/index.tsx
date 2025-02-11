import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const FeatureSection = () => {
  const features = [
    {
      title: "Efficiency",
      img: "/images/scribe/feature1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, voluptas quod voluptates molestias quo a distinctio. Id molestiae excepturi dolores quam. Officiis, ipsum atque?",
    },
    {
      title: "Efficiency",
      img: "/images/scribe/feature1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, voluptas quod voluptates molestias quo a distinctio. Id molestiae excepturi dolores quam. Officiis, ipsum atque?",
    },
    {
      title: "Efficiency",
      img: "/images/scribe/feature1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, voluptas quod voluptates molestias quo a distinctio. Id molestiae excepturi dolores quam. Officiis, ipsum atque?",
    },
  ];
  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <h4>Why Scribe?</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            odit enim consequatur quo perspiciatis animi laborum, id officiis
            nostrum debitis!
          </p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <h4>{feature.title}</h4>
              <Image
                src={feature.img}
                alt={feature.title}
                width={500}
                height={500}
              />
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
