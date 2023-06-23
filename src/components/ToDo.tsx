import { PlusCircle } from "@phosphor-icons/react";
import styles from "./ToDo.module.css";
import { Task } from "./Task";

export function ToDo() {
  return (
    <div className={styles.todos}>
      <form className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={18} weight="bold" />
        </button>
      </form>

      <div className={styles.taskInfos}>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </div>

      <ul>
        <li>
          <Task />
        </li>

        <li>
          <Task />
        </li>

        <li>
          <Task />
        </li>

        <li>
          <Task />
        </li>

        <li>
          <Task />
        </li>
      </ul>
    </div>
  )
}