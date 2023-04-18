import styles from "./Main.module.css";
import TypeSBN from "../Type_SBN/Type_SBN";

const Main = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["main"]}>
        <div className={styles["main__header"]}>
          <span>Field name and type</span>
          <button className={styles["main__header__add"]}>+</button>
        </div>
        <div className={styles["main__body"]}>
          <ol>
            <li>
              <TypeSBN />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Main;
