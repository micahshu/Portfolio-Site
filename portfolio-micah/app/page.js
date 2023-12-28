import styles from './page.module.css'
import Home from './Components/Home'
export default function App() {
  return (
    <main className={styles.main}>
      <div className={styles.border}>
      <Home />
      </div>
      
    </main>
  )
}
