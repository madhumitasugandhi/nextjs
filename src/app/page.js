'use client'
import styles from "./page.module.css";
import EventsFunctionsStates from "@/components/EventsFunctionsStates";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h2>Madhumita  Sugandhi</h2>
       <p>-Done practice on how to create Next App</p>
       <EventsFunctionsStates/>
      </main>
    </div>
  );
}
