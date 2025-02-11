import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const SubscriptionSection = () => {
  const subscriptionPlans = [
    {
      title: "Basic",
      imageUrl: "/images/scribe/feature1.png",
      price: 10,
      features: [
        "Lorem Ipsum is simply dummy text",
        "The printing and  typesetting. Lorem",
        "Ipsum is simply dummy text of the",
        "Printing and  typesetting",
      ],
      redirectUrl: "/",
      highlight: false,
    },
    {
      title: "Standard",
      imageUrl: "/images/scribe/feature1.png",
      price: 20,
      features: [
        "Lorem Ipsum is simply dummy text",
        "The printing and  typesetting. Lorem",
        "Ipsum is simply dummy text of the",
        "Printing and  typesetting",
      ],
      redirectUrl: "/",
      highlight: true,
    },
    {
      title: "Premium",
      imageUrl: "/images/scribe/feature1.png",
      price: 30,
      features: [
        "Lorem Ipsum is simply dummy text",
        "The printing and  typesetting. Lorem",
        "Ipsum is simply dummy text of the",
        "Printing and  typesetting",
      ],
      redirectUrl: "/",
      highlight: false,
    },
  ];
  return (
    <section className="boxWrapper">
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h4>Why Scribe?</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            odit enim consequatur quo perspiciatis animi laborum, id officiis
            nostrum debitis!
          </p>
        </div>

        <div className={styles.subscriptionGrid}>
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.plan} ${
                plan.highlight ? styles.highlight : ""
              }`}
            >
              <h4>{plan.title}</h4>
              <Image
                src={plan.imageUrl}
                alt={plan.title}
                width={500}
                height={500}
              />
              <div>
                <span className={styles.price}>{plan.price}$ </span>
                <span className={styles.planFrequency}>/month</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link href={plan.redirectUrl} className="ctaBtn">
                <span>Buy Now</span>
                <GoArrowUpRight className="ctaArrow" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
