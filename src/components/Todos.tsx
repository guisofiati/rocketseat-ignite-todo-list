import styles from "./Todos.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { TodoType, Todo } from "./Todo";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuid } from 'uuid';
import { EmptyTodos } from "./EmptyTodos";

export function Todos() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todoContent, setTodoContent] = useState<string>("");

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    const newTodo: TodoType = {
      id: uuid(),
      content: todoContent,
      isCompleted: false,
    }

    setTodos((prevState) => [...prevState, newTodo]);
    setTodoContent("");
  }

  function handleTodoContent(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTodoContent(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleDeleteTodo(todoId: string) {
    const todosWithoutDeletedOne = todos.filter(todo => {
      return todo.id !== todoId;
    });

    setTodos(todosWithoutDeletedOne);
  }

  function handleCompleteTodo(todoId: string) {
    setTodos((prevState) => prevState.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    })
    );
  }

  const todosCreated = todos.length;
  const todosCompleted = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className={styles.todos}>
      <form className={styles.form} onSubmit={handleCreateNewTodo}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={todoContent}
          onChange={handleTodoContent}
          onInvalid={handleNewTodoInvalid}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={18} weight="bold" />
        </button>
      </form>

      <div className={styles.todoInfo}>
        <div>
          <p>Tarefas criadas</p>
          <span>{todosCreated}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>{todosCompleted} de {todosCreated}</span>
        </div>
      </div>

      <ul>
        {todosCreated === 0 ? <EmptyTodos /> : todos.map(todo => {
          return (
            <li key={todo.id}>
              <Todo
                id={todo.id}
                content={todo.content}
                isCompleted={false}
                onDeleteTodo={handleDeleteTodo}
                onCompleteTodo={handleCompleteTodo}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}