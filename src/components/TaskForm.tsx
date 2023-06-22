import { PlusCircle } from "@phosphor-icons/react";
import styles from "./TaskForm.module.css";

export function TaskForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </form>
  )
}