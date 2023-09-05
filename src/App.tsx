import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/index'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Produtos from './pages/Produtos/Index'
import './css/main.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
