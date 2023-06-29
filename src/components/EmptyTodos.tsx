import clipboard from "../assets/clipboard.svg";
import styles from "./EmptyTodos.module.css";

export function EmptyTodos() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="Imagem de um fichário" />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}