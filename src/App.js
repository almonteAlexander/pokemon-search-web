import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header'
import SearchControl from './components/SearchControl/SearchControl'
import PokemonResults from './components/PokemonResults/PokemonResults'
import PokemonSearch from './components/PokemonSearch/PokemonSearch'
import ModalWindow from './components/ModalWindow/ModalWindow'
import Error from './components/Error/Error'

function App() {
  
  const [Query, setQuery] = useState('');
  const [PokemonList, setPokemonList] = useState([]);
  const [Pokemon, setPokemon] = useState({});
  const [PrevUrl, setPrevUrl] = useState('');
  const [NextUrl, setNextUrl] = useState('');
  const [IsLoading, setIsLoading] = useState(false);

  const [Modal, setModal] = useState(
    {visible: false, Component: <></>, items: {}}
  );

  return (
    <div className="App">
      <Router>
        <Header />

        <SearchControl 
        Query={Query}
        setQuery={setQuery}
        setPokemon={setPokemon}
        setPokemonList={setPokemonList}
        setPrevUrl={setPrevUrl}
        setNextUrl={setNextUrl}
        setModal={setModal}
        setIsLoading={setIsLoading}
        />

        {Modal.visible &&
        <ModalWindow 
        Component={Modal.Component}
        items={Modal.items}/>
        }

        <Switch>
          <Route exact path="/">
            <PokemonResults 
            PokemonList={PokemonList}
            setPokemonList={setPokemonList}
            Prev={{PrevUrl, setPrevUrl}}
            Next={{NextUrl, setNextUrl}}
            IsLoading={IsLoading}
            setIsLoading={setIsLoading}
            />
          </Route>

          <Route path="/search">
            {Query ?
            <PokemonSearch 
            pokemon={Pokemon}
            IsLoading={IsLoading}/>
            :
            <Redirect to="/" />
            }
          </Route>
            

          <Route path="/error">
            {Query ?
            <Error />
            :
            <Redirect to="/" />
            }
          </Route>

          <Redirect to="/" />
        </Switch>

      </Router>
    </div>
  );
}

export default App;