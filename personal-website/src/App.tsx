import './styles/App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main>
        <ScrollToTop />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
