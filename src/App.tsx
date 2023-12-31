import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/index'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Produtos from './pages/Produtos/Index'
import './css/main.css'
import BuscarProdutos from './pages/BuscarProdutos'
import EditarProdutos from './pages/EditarProdutos'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/buscarProdutos" element={<BuscarProdutos />} />
          <Route
            path="/produtos/editarProdutos/:id"
            element={<EditarProdutos />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
