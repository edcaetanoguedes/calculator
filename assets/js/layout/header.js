import styles from "@/styles/Layout.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [expansive, setExpansive] = useState(false);

  return (
    <header className={styles.header}>
      {expansive && (
        <div className={`${styles.expansive_menubar}`}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2 className={styles.title}><span>Projeto</span> Calculadora</h2>
              <p className={styles.author}>Autor <Link href="https://github.com/edcaetanoguedes">Ednaldo Guedes</Link></p>
            </div>

            <div className={styles.main}>
              <div className={styles.social}>
                <Link href="https://www.linkedin.com/in/ednaldocaetanoguedes">
                  <Image src="/icons/linkedin-svgrepo-com.svg" width={32} height={32} alt="Linkedin" />
                </Link>
                <Link href="https://www.instagram.com/ednaldocaetanoguedes">
                  <Image src="/icons/instagram-svgrepo-com.svg" width={30} height={30} alt="Instagram" />
                </Link>
              </div>
            </div>

            <div className={styles.footer}>
              <button className={styles.finish} onClick={() => setExpansive(!expansive)}>x</button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.headline}>
          <div className={styles.social}>
            <Link href="https://www.linkedin.com/in/ednaldocaetanoguedes">
              <Image src="/icons/linkedin-svgrepo-com.svg" width={32} height={32} alt="Linkedin" />
            </Link>
            <Link href="https://www.instagram.com/ednaldocaetanoguedes">
              <Image src="/icons/instagram-svgrepo-com.svg" width={30} height={30} alt="Instagram" />
            </Link>
          </div>
        </div>

        <div className={styles.menu}>
          <div>
            <h1>Calculadora <span>em React</span></h1>
            <button className={`mob ${styles.menubar}`} onClick={() => {
              setExpansive(!expansive);
              /*setTimeout(() => {
                setExpansive(false);
              }, 8000)*/
            }}>
              <FontAwesomeIcon icon={faBars} width={40} height={40} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}