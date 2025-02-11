import FeatureSection from "@/app/components/Products/Scribe/FeatureSection";
import HeaderSection from "@/app/components/Products/Scribe/HeaderSection";
import OverviewSection from "@/app/components/Products/Scribe/OverviewSection";
import SubscriptionSection from "@/app/components/Products/Scribe/SubscriptionSection";
import TrialSection from "@/app/components/Products/Scribe/TrialSection";
import React from "react";
import styles from "./page.module.css";

const ScribePage = () => {
  return (
    <div className={styles.mainDiv}>
      <HeaderSection />
      <OverviewSection />
      <FeatureSection />
      <TrialSection />
      <SubscriptionSection />
    </div>
  );
};

export default ScribePage;
