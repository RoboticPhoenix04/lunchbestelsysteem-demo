import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.scss'
import './App.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Employee from './pages/Employee.jsx'
import ManagementHomePage from './pages/ManagementHomePage.jsx'
import ManagementMenuPage from './pages/ManagementMenuPage.jsx';
import MenuItemEditPage from './pages/MenuItemEditPage.jsx';

const dishes = [
  { id: 1, name: 'Tomatensoep', description: 'Tomatensoep is een heerlijke en klassieke soep die wordt gemaakt van rijpe tomaten. De soep heeft een zachte, frisse smaak en wordt vaak verrijkt met kruiden zoals basilicum en oregano. Door de romige textuur is tomatensoep een populair voorgerecht voor jong en oud. Vaak wordt de soep geserveerd met verse broodjes of knapperige croutons. De combinatie van zoete en lichtzure smaken zorgt voor een aangename smaakbeleving. Tomatensoep is niet alleen lekker, maar bevat ook verschillende vitamines en antioxidanten. Hierdoor is het een smakelijke en voedzame keuze voor elke maaltijd.', price: 12.95 },
  { id: 2, name: 'Tonijnsalade', description: 'Lorem ipsum dolor sit amet.', price: 15.65 },
  { id: 3, name: 'Kipwrap', description: 'Lorem ipsum dolor sit amet.', price: 18.95 },
  { id: 4, name: 'Tomatensoep', description: 'Lorem ipsum dolor sit amet.', price: 12.95 },
  { id: 5, name: 'Tonijnsalade', description: 'Lorem ipsum dolor sit amet.', price: 15.65 },
  { id: 6, name: 'Kipwrap', description: 'Lorem ipsum dolor sit amet.', price: 18.95 },
  { id: 7, name: 'Tomatensoep', description: 'Lorem ipsum dolor sit amet.', price: 12.95 },
  { id: 8, name: 'Tonijnsalade', description: 'Lorem ipsum dolor sit amet.', price: 15.65 },
  { id: 9, name: 'Kipwrap', description: 'Lorem ipsum dolor sit amet.', price: 18.95 }
];

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='employee' element={<Employee />} />
        <Route path='managementhome' element={<ManagementHomePage />} />
        <Route path='managementmenu' element={<ManagementMenuPage dishes={dishes} />} />
        <Route path='managementmenu/:id/edit' element={<MenuItemEditPage dishes={dishes} />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
