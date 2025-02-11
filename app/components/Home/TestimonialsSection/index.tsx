import React from "react";
import styles from "./index.module.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta obcaecati eius assumenda pariatur itaque eveniet rerum repellat, quae deleniti inventore enim nam maxime dolorem laboriosam consectetur minus sapiente perspiciatis laudantium. Minima quod cumque placeat eum laudantium veniam recusandae ullam!"',
      name: "John Doe",
      position: "Resident Doctor",
    },
  ];

  return (
    <section className={styles.mainDiv}>
      <div className={`boxWrapper ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <h4>Testimonials</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            odit enim consequatur quo perspiciatis animi laborum, id officiis
            nostrum debitis!
          </p>
        </div>

        <div className={styles.testimonials}>
          <div className={styles.testimonialsLeft}>
            <h4 className={styles.highlightText}>What Our Clients Say</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              laudantium praesentium minima quo. Magnam, fugit?
            </p>
          </div>

          <div className={styles.testimonialWrapper}>
            <div>
              <p className={styles.testimonialText}>
                {'"'}Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe dicta obcaecati eius assumenda pariatur itaque eveniet
                rerum repellat, quae deleniti inventore enim nam maxime dolorem
                laboriosam consectetur minus sapiente perspiciatis laudantium.
                Minima quod cumque placeat eum laudantium veniam recusandae
                ullam!{'"'}
              </p>
            </div>

            <hr />

            <div className={styles.testimonialFooter}>
              <div>
                <h5>John Doe</h5>
                <span className={styles.secondaryText}>Resident Doctor</span>
              </div>
              <div>
                {testimonials.map((_, index) => (
                  <div key={index} className={styles.pointers}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
