import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.scss'
import './App.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Employee from './pages/Employee.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path='employee' element={<Employee />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
