import React from 'react';
import CharacterList from './CharacterList.jsx';
import CharacterProfile from './CharacterProfile.jsx';
import CharacterWorld from './CharacterWorld.jsx';
import CharacterMovies from './CharacterMovies.jsx';

const App = () => 
  <div className="container">
    <div className="row">
      <CharacterList />
      <CharacterProfile />
    </div>
    <div className="row">
      <CharacterWorld />
      <CharacterMovies />
    </div>
  </div>

export default App;