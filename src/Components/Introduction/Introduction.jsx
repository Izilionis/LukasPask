import React from "react";
import styles from "./Indtroduction.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Introduction() {
  return (
    <div className={styles.background}>
      <div className={styles.introduction}>
        <div class="ratio ratio-16x9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gsnqXt7d1mU?si=HMC3-XKbws37C5Pv&loop=1&playlist=gsnqXt7d1mU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
