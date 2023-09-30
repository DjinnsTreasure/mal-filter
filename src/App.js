import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import Trailer from "./components/Trailer";
import Themes from "./components/Themes";
import AltTitles from "./components/AltTitles";
import Genres from "./components/Genres";
import CoverImage from "./components/CoverImage";
import TypeFilter from "./components/Filters/TypeFilter";
import RatingFilter from "./components/Filters/RatingFilter";
import MinRange from "./components/Filters/MinRange";
import MaxRange from "./components/Filters/MaxRange";

function App() {
  const [data, setData] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedMinNumber, setSelectedMinNumber] = useState(''); // Initial value
  const [selectedMaxNumber, setSelectedMaxNumber] = useState(''); // Initial value

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };
  const handleMinNumberChange = (event) => {
    setSelectedMinNumber(event.target.value);
  };
  const handleMaxNumberChange = (event) => {
    setSelectedMaxNumber(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TypeFilter onChange={handleTypeChange} />
        <RatingFilter onChange={handleRatingChange} />
        <MinRange onChange={handleMinNumberChange}/>
        <MaxRange onChange={handleMaxNumberChange}/>
        <Button data={data} setData={setData} responseData={data} isLoading={false} 
          selectedType={selectedType} selectedRating={selectedRating}
          selectedMinNumber={selectedMinNumber} selectedMaxNumber={selectedMaxNumber}
        />
        {!data ? null : <a href={data.url}>{data.title}</a>}
        {!data ? null : <p>{data.type}</p>}
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
