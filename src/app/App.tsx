import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import styles from "./App.module.scss"

function App() {

  return (
      <div className={styles.absoluteWrapper}>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
