import { Route, Routes } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import LineStops from './components/pages/LineStops'
import LineStatuses from './components/pages/LineStatuses'
import Station from './components/pages/Station'
import Favourites from './components/pages/Favourites'
import './scss/App.scss'

const App = () => (
  <div className='App'>
    <header>
      <Nav />
    </header>
    <Routes>
      <Route path='/line/:id' element={<LineStops />} />
      <Route path='/station/:url' element={<Station />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='*' element={<LineStatuses />} />
    </Routes>
    <Footer />
  </div>
)

export default App
