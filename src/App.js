import styles from "./App.module.css";
import Home from "./components/Main/Main";

function App() {
  return (
    <div className={styles["main"]}>
      <Home />
    </div>
  );
}

export default App;
