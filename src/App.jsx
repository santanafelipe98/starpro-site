import './App.css'

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Template from './template/Main'
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'
import PhytossanitaryTreatment from './routes/PhytossanitaryTreatment'
import UrbanPestControl from './routes/UrbanPestControl'
import PlantSanitation from './routes/PlantSanitation'
import WaterTankCleaning from './routes/WaterTankCleaning'
import SanitizationOfEnviroments from './routes/SanitizationOfEnviroments'
import PageNotFound from './routes/404'

function App() {
  return (
    <Router>
      <div className="bootstrap-wrapper">
        <Template>
          <Routes>
            <Route index path="/" exact element={<Home />} />
            <Route path="a-starpro" element={<AboutUs />} />
            <Route path="servicos">
              <Route path="tratamento-fitossanitario" element={ <PhytossanitaryTreatment /> } />
              <Route path="controle-de-pragas-urbanas" element={ <UrbanPestControl /> }/>
              <Route path="sanitizacao-de-ambientes" element={<SanitizationOfEnviroments />} />
              <Route path="saneamento-vegetal" element={ <PlantSanitation /> } />
              <Route path="limpeza-e-desinfeccao-de-caixa-dagua" element={ <WaterTankCleaning /> } />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Template>
      </div>
    </Router>
  )
}

export default App
