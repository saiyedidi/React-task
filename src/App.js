import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Nav/Navbar"
import Home from "./components/Home/Home"
import Questions from './components/Questions/index'
import CaseFlow from './components/CaseFlow/CaseFlow'

const App = ()=>{
  return(
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="questions" element={<Questions />} />
        <Route path="caseflow" element={<CaseFlow />} />
      </Routes>
    </div>

  )
}
export default App