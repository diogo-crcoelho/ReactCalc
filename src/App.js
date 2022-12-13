import { useState } from 'react';
import './App.css';
import Frame from './Frame/Frame';

const App = () => {
	const [result, setResult] = useState('');

	return (
   	<div className="App">
		<Frame result = {result} setResult = {setResult}/>
    </div>
  );
};

export default App;
