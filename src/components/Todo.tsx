import { Trash } from "@phosphor-icons/react";
import styles from "./Todo.module.css";

export interface TodoType {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TodoProps extends TodoType {
  onDeleteTodo: (todoId: string) => void;
  onCompleteTodo: (todoId: string) => void;
}

export function Todo({ id, content, isCompleted = false, onDeleteTodo, onCompleteTodo }: TodoProps) {
  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  function handleCompleteTodo() {
    onCompleteTodo(id);
  }

  return (
    <div className={styles.todo}>
      <input type="checkbox" onChange={handleCompleteTodo} />
      <p>
        {content}
      </p>
      <Trash size={18} onClick={handleDeleteTodo} />
    </div>
  )
}