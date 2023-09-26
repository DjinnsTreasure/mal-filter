import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Button
          data={data}
          setData={setData}
          responseData={data}
          isLoading={false}
        />
        <button
          onClick={() => {
            console.log(data.titles);
          }}
        >
          View Data
        </button>
        {!data ? null : <p>{data.title}</p>}
        {!data ? null : <p>{data.rating}</p>}
        {!data ? null : (
          <p>
          {data.status}: {data.aired.string}
          </p>
        )}
        {!data ? null : <p>{data.duration}</p>}
        {!data ? null : (
          <div>
            <p>Genres:</p>
            <ul>
              {data.genres.length === 0 ? (
                <li>None</li>
              ): (data.genres.map((item, index) => (
                <li key={index}>{item.name}</li>
              )))}
            </ul>
          </div>
        )}
        {!data ? null : (
            <img src={data.images.jpg.image_url} alt="cover"/>
        )}
        {!data ? null : <p>Rank: {data.rank}</p>}
        {!data ? null : <p>Score: {data.score}</p>}
        {!data ? null : <p>Synopsis: {data.synopsis}</p>}
        {!data ? null : (
          <div>
            <p>Alt Titles:</p>
            <ul>
              {data.titles.length <= 1 ? (
                <li>None</li>
              ): (data.titles.slice(1).map((item, index) => (
                <li key={index}>{item.type}: {item.title}</li>
              )))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
