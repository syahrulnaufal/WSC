import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import Chatbot from './pages/Chatbot'
import Beranda from './pages/Beranda'
import RuangBelajar from './pages/RuangBelajar'
import RuangMateri from './pages/RuangMateri'
import RuangKelas from './pages/RuangKelas'
import Tentang from './pages/Tentang'
import BrainAcademy from './pages/BrainAcademy'
import MateriBelajarPage from './pages/MateriBelajarPage'
import './style.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Beranda/>}/>
        <Route path="/" index element={<Beranda />} />
        <Route path="/ruang-belajar" element={<RuangBelajar/>} />
        <Route path='/ruang-belajar/:kelas' element={<RuangMateri/>} />
        <Route path='/ruang-belajar/:kelas/:materi' element={<MateriBelajarPage/>} />
        <Route path="/ruang-kelas" element={<RuangKelas />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/brain-academy" element={<BrainAcademy />} />
      </Routes>
    </BrowserRouter>
)
