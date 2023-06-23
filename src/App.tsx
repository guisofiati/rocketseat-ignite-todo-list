import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { ToDo } from "./components/ToDo";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ToDo />
      </div>
    </>
  )
}
