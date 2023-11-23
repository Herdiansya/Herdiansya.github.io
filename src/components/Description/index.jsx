import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";

export default function index() {
  const phrase =
    "Hello my name is Mohammad Herdiansyah Julianto Saputra. Iam 18 years old, and now iam still school in Vocational High School 8 Malang.   I start my study at age 4 in Playgroup in Sidoarjo, at age 5 i school in TK Darul Ulum in Sidoarjo.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description} id="biografi">
      <div className={styles.body}>
        <p className="biografi">
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Because my grandfather and my grandmother want to move in Malang, so iam with my parents follow them and i continue my study in Malang until now.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>Biografi</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
