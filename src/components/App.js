import React from 'react';
import {render} from 'react-dom';
import Container from '../components/Container'; 


function App() {
    return (
      <div className="App">
        <Container/>
      </div>
    );
}
render(<App/>, document.getElementById('root'))
export default App;
