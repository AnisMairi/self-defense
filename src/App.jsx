import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import LcFormaProPage from './pages/LcFormaProPage'
import LcSportsConnexionPage from './pages/LcSportsConnexionPage'
import GscuritPage from './pages/GscuritPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="lc-forma-pro" element={<LcFormaProPage />} />
        <Route path="lc-sports-connexion" element={<LcSportsConnexionPage />} />
        <Route path="gscurit" element={<GscuritPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
