import './App.css'

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Template from './template/Main'
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'
import PlantSanitation from './routes/PlantSanitation'

function App() {
  return (
    <Router>
      <div className="bootstrap-wrapper">
        <Template>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="a-starpro" element={<AboutUs />} />
            <Route path="servicos">
              <Route path="saneamento-vegetal" element={ <PlantSanitation /> } />
            </Route>
          </Routes>
        </Template>
      </div>
    </Router>
  )
}

export default App
