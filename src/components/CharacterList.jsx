import React from 'react';
import { connect } from 'react-redux';
import { 
  setCurrentCharacter,
  getCharacterProfile
 } from '../reducer/character/actions'

const CharacterList = ({ characters, setCharacter }) =>
  <div id="character-list" className="col-md-6">
    <h1> Characters </h1>
    <ul>
       { characters.map((character, id) => 
        <li key={character.name} onClick={setCharacter(id + 1 )}>
          {character.name}
        </li>
       )}
    </ul>
  </div>

const mapStateToProps = ({ characters }) => ({
  characters
});

const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);