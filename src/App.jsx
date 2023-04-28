import AppBebida from "./components/AppBebida"
import { BebidasProvider } from "./context/BebidasProvider"

const App = () => {
  return (
      <BebidasProvider>
         <AppBebida/>
      </BebidasProvider>
  )
}

export default App