import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './css/main.css'
import Dashboard from './pages/Dashboard'
import Produtos from './pages/Produtos/Index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
