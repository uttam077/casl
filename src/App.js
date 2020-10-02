import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AbilityContext } from './components/AbilityContext';
import { CaslDemo } from './components/CaslDemo';
import { ability } from './components/defineAbility';

function App() {
  return (
    <div className="App">
      <AbilityContext.Provider value={ability}>
        <CaslDemo />
      </AbilityContext.Provider>
    </div>
  );
}

export default App;
