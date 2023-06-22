import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.tasks}>
      <header className={styles.taskInfos}>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>

      <ul>
        <li>
          <input type="checkbox" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <Trash size={24} />
        </li>

        <li>
          <input type="checkbox" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <Trash size={24} />
        </li>

        <li>
          <input type="checkbox" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <Trash size={24} />
        </li>

        <li>
          <input type="checkbox" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <Trash size={24} />
        </li>

        <li>
          <input type="checkbox" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <Trash size={24} />
        </li>
      </ul>
    </div>
  )
}