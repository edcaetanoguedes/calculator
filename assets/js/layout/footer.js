import styles from "@/styles/Layout.module.css"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={`${styles.technologies}`}>
          <h2>Tecnologias utilizadas</h2>
          <div className={styles.item}>
            <span>React</span>
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height="40" width="40" alt="react logo" />
          </div>
          <div className={styles.item}>
            <span>NextJs</span>
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" width="40" alt="next js logo" />
          </div>
          <div className={styles.item}>
            <span>Javascript</span>
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="40" alt="javascript logo" />
          </div>
          <div className={styles.item}>
            <span>Git</span>
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="40" alt="git logo" />
          </div>
          <div className={styles.item}>
            <span>VSCode</span>
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" width="40" alt="VsCode logo" />
          </div>
        </div>
      </div>
    </footer>
  )
}