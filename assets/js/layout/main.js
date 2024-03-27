import styles from "@/styles/Layout.module.css";

export default function Main({ children }) {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  )
}