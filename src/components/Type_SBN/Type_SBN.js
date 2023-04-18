import { useState, useEffect } from "react";
import styles from "./Type_SBN.module.css";
import { Switch } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const TypeSBN = (props) => {
  const [value, setValue] = useState("order");
  const [focus, setFocus] = useState(false);
  const [required, setRequired] = useState(true);
  const onFocus = (e) => {
    setFocus(true);
    console.log(e.target.value);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = (e) => {
    setFocus(false);
    console.log(e.target.value);
  };
  const onChangeRequired = (e) => {
    setRequired((prev) => !prev);
  };
  return (
    <div className={styles.main}>
      <div className={styles.main__left}>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className={
            styles.main__left__input +
            " " +
            (focus ? styles.main__left__input__focus : "")
          }
          type="text"
          value={value}
          onChange={onChange}
        ></input>
        <select
          name="datatype"
          id="datatype"
          className={styles.main__left__select}
        >
          <option value="STRING">STRING</option>
          <option value="NUMBER">NUMBER</option>
          <option value="BOOLEAN">BOOLEAN</option>
          <option value="OBJECT">OBJECT</option>
        </select>
      </div>
      <div className={styles.main__right}>
        <span className={styles.text__black}>Required</span>
        <Switch
          checked={required}
          onChange={onChangeRequired}
          defaultChecked
          size="small"
        />
        {/* <button className={styles["main__right__add"]}>+</button> */}
        <div className={styles["main__right__img__container"]}>
          <img src="/delete.png"></img>
        </div>
      </div>
    </div>
  );
};

export default TypeSBN;
