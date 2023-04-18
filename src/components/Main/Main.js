import styles from "./Main.module.css";
import TypeSBN from "../Type_SBN/Type_SBN";
import { useState } from "react";
const Main = () => {
  const [fields, setFields] = useState([
    { name: "order", type: "STRING", required: true },
  ]);
  const addNewField = () => {
    setFields((fields) => {
      const newFields = [...fields];
      newFields.push({ name: "order", type: "STRING", required: true });
      return newFields;
    });
  };
  const updateFields = (id, name, type, required) => {
    setFields((fields) => {
      const newFields = [...fields];
      newFields[id] = { name, type, required };
      return newFields;
    });
  };
  const deleteField = (id) => {
    setFields((fields) => {
      const newFields = [...fields];
      newFields.splice(id, 1);
      return newFields;
    });
  };
  const printToConsole = () => {
    console.log(fields);
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles["container"]}>
        <div className={styles["main"]}>
          <div className={styles["main__header"]}>
            <span>Field name and type</span>
            <button
              onClick={addNewField}
              className={styles["main__header__add"]}
            >
              +
            </button>
          </div>
          <div className={styles["main__body"]}>
            <ol>
              {fields.map((field, index) => (
                <li key={index}>
                  <TypeSBN
                    updateFields={updateFields}
                    deleteField={deleteField}
                    key={index}
                    id={index}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <button onClick={printToConsole} className={styles.main__btn}>
        Print
      </button>
    </div>
  );
};

export default Main;
