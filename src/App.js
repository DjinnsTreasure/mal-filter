import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import Trailer from "./components/Trailer";
import Themes from "./components/Themes";
import AltTitles from "./components/AltTitles";
import Genres from "./components/Genres";
import CoverImage from "./components/CoverImage";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Button data={data} setData={setData} responseData={data} isLoading={false} />
        {!data ? null : <a href={data.url}>{data.title}</a>}
        {!data ? null : <p>{data.rating}</p>}
        {!data ? null : ( <p> {data.status}: {data.aired.string} </p> )}
        {!data ? null : <p>{data.duration}</p>}
        {!data ? null : <Genres data={data}/>}
        {!data ? null : <CoverImage data={data} />}
        {!data ? null : <p>Rank: {data.rank}</p>}
        {!data ? null : <p>Score: {data.score}</p>}
        {!data ? null : <p>Synopsis: {data.synopsis}</p>}
        {!data ? null : <AltTitles data={data}/>}
        {!data ? null : <Themes data={data}/>}
        {!data ? null : <Trailer data={data} />}
      </header>
    </div>
  );
}

export default App;
