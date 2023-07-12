import MyRoutes from "./utils/MyRoutes"
import './index.css'
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <MyRoutes/>
    </div>
    </BrowserRouter>
  )
}

export default App
