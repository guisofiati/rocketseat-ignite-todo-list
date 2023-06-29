import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Todos />
      </div>
    </>
  )
}
