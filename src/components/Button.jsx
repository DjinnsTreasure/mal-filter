import React, { useState, useEffect } from 'react';

function Button(props) {
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.jikan.moe/v4/anime`;
  // let filters = `?rating=rx`;
  let filters = `?`
  filters += props.selectedType ? `&type=${props.selectedType}` : '';
  filters += props.selectedRating
    ? props.selectedRating === 'sfw'
      ? `&sfw`
      : `&rating=${props.selectedRating}`
    : '';
  filters += props.selectedMinNumber ? `&min_score=${props.selectedMinNumber}` : '';

  let filteredURL = url + filters
  let pageNumber = 1;
  console.log(filteredURL)

  useEffect(() => {
    console.log(props.data); // Log the data array when it changes
  }, [props.data]);

  function getRandom() {
    setIsLoading(true);
    fetch(filteredURL)
      .then((resp) => resp.json())
      .then((responseData) => {
        if (responseData.pagination.items.count === 0) {
          props.setData(null)
          setIsLoading(false);
        }
        pageNumber = responseData.pagination.last_visible_page;
        getData();
      })
      .catch(() => {
        console.warn();
        setIsLoading(false);
      });
  }

  function getData(){
    let fetchURL = `${filteredURL}&page=${Math.floor(Math.random() * pageNumber)}`
    fetch(fetchURL)
      .then((resp) => resp.json())
      .then((responseData) => {
        let index = Math.floor(Math.random() * 24);
        props.setData(responseData.data[index])
        setIsLoading(false);
      })
      .catch(() => {
        console.warn();
        setIsLoading(false);
      });
  }



  return (
    <div>
      <button onClick={getRandom} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Click to Fetch Data'}
      </button>
    </div>
  );
}

export default Button;
