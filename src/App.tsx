import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { Task } from "./components/Task";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <TaskForm />
        <Task />
      </div>
    </>
  )
}
