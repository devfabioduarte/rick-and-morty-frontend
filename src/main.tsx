import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { Loading } from './components/Loading'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  </BrowserRouter>
)
