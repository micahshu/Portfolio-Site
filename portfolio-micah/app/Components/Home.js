import styles from '../page.module.css'


export default function Home() {
    return (
      
        <div className={styles.gridParent}>
            <div className={styles.grid1}>
                <h1>Micah Shumaker</h1>
                <h2>Web Dev</h2>
            </div>
            
            <div className={styles.grid3}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </p>
            </div>
        </div>
      
    )
}