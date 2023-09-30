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
  const [selectedType, setSelectedType] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedMinNumber, setSelectedMinNumber] = useState(""); // Initial value
  const [selectedMaxNumber, setSelectedMaxNumber] = useState(""); // Initial value

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
        <MinRange onChange={handleMinNumberChange} />
        <MaxRange onChange={handleMaxNumberChange} />
        <Button
          data={data}
          setData={setData}
          responseData={data}
          isLoading={false}
          selectedType={selectedType}
          selectedRating={selectedRating}
          selectedMinNumber={selectedMinNumber}
          selectedMaxNumber={selectedMaxNumber}
        />
        <div className="container">
          {!data ? null : (
            <div className="left-column">
              <h1 className="title"><a href={data.url} rel="noreferrer" target="_blank">{data.title}</a></h1>
              <CoverImage data={data} />
              <p>Synopsis: {data.synopsis}</p>
              <AltTitles data={data} />
            </div>
          )}
          {!data ? null : (
            <div className="right-column">
              <p><span className="minititle">Media Type:</span> {data.type}</p>
              <p><span className="minititle">Rating:</span> {data.rating}</p>
              <p>
              <span className="minititle">{data.status}:</span> {data.aired.string}
              </p>
              <p><span className="minititle">Duration:</span> {data.duration}</p>
              <Genres data={data} />
              <p><span className="minititle">Rank:</span> {data.rank}</p>
              <p><span className="minititle">Score:</span> {data.score}</p>
              <Themes data={data} />
              <Trailer data={data} />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
