import './App.css';
import NavBar from './components/NavBar/navbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme"; //Se lo pasamos ahora a ThemeProvider como Prop
import SearchResults from './components/SearchResults/SearchResults';
import Home from './components/Home/Home';
import { SearchProvider } from './components/SearchContext/SearchContext';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PokemonList from './components/PokemonList/PokemonList';

const App = () => {

  return (
   <SearchProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="search" element={<SearchResults />}/>
          <Route path="list" element={<PokemonList />}/>

        </Routes>
        
      </Router>

    </ThemeProvider>
    </SearchProvider>

  );
}

export default App;
