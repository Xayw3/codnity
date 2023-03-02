import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import Footer from './components/Footer/Footer';
import EpisodePage from './pages/EpisodesPage/EpisodesPage';
import LocationsPage from './pages/LocationsPage/LocationsPage';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
        <Route path="/locations" element={<LocationsPage />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
