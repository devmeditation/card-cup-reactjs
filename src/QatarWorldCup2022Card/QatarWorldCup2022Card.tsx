import { useState } from "react";
import styles from "./qatarWorldCup2022Card.module.css";

import logoSVG from "./assets/logo.svg";
import devMeditationImg from "./assets/devMeditation0.jpg";
import { DevMeditationNameSVG } from "./components/DevmeditationNameSVG";

export function QatarWorldCup2022Card() {
  const [cardSelected, setCardSelected] = useState(false);
  const [svgColorFill, setSvgColorFill] = useState("#fff");
  const [myCats, setMyCats] = useState(false);

  function handleBackgroundImgUri() {
    setCardSelected(!cardSelected);
    if (cardSelected) {
      setSvgColorFill("#ffffff");
    } else {
      setSvgColorFill("#F7DD43");
    }
  }

  function handleMyCats() {
    setMyCats(!myCats);
  }

  return (
    <main
      className={
        myCats
          ? `${styles.container} ${styles.myCatsContainer}`
          : styles.container
      }
    >
      <header
        className={styles.header}
        onClick={handleMyCats}
      >
        <img src={logoSVG} alt="Logo do app Figurinhas da Copa 2022" />
        <DevMeditationNameSVG svgColorFill={svgColorFill} />
      </header>

      {myCats ? (
        <div
          className={`${styles.card} ${styles.myCats}`}
        >
          <img src={devMeditationImg} alt="Foto Dev Meditation" />
        </div>
      ) : (
        <div
          className={
            cardSelected
              ? `${styles.card} ${styles.ignite}`
              : `${styles.card} ${styles.explorer}`
          }
          onClick={handleBackgroundImgUri}
        >
          <img src={devMeditationImg} alt="Foto Dev Meditation" />

          <div className={styles.info}>
            <h4>Dev Meditation</h4>
            <p>Developer - BCL-ST</p>
          </div>
        </div>
      )}
    </main>
  );
}
