import { useState } from 'react';
import './App.css';
import Frame from './Frame/Frame';

const App = () => {
	const [result, setResult] = useState(0);

	return (
   	<div className="App">
		<Frame result = {result} setResult = {setResult}/>
    </div>
  );
};

export default App;
