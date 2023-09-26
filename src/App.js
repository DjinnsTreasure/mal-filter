import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  
  return (
    <div className="App">
      <header className="App-header">
        <Button data={data} setData={setData} responseData={data} isLoading={false} />
        <button onClick={()=>{console.log(data.titles)}}>View Data</button>
        {/* {!data ? null : <p>{data.title}</p>}
        {!data ? null : <p>{data.rating}</p>} */}
      </header>
    </div>
  );
}

export default App;
