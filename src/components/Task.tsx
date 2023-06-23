import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <Trash size={18} />
    </div>
  )
}