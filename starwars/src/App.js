import React, { useState, useEffect } from "react";
import Persons from "./components/Persons/Persons";
import axios from "axios";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";
import PageLoader from "./components/Loader/Loader";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [disablePrev, setdisablePrev] = useState(true);
  const [disableNext, setdisableNext] = useState(false);
  const noOfPeoplePerPage = 10;
  let pagesCount;

  useEffect(
    () => {
      axios
        .get(`https://swapi.co/api/people/?page=${pageNumber}`)
        .then(response => {
          const people = response.data;
          console.log(pageNumber);

          setPeople(people.results);
          setdisablePrev(true);
          setdisableNext(false);
          if (pageNumber > 1) setdisablePrev(false);
          if (pageNumber >= Math.ceil(pagesCount / noOfPeoplePerPage)) setdisableNext(true);
          console.log(people.results.length);
        })
        .catch(err => {
          console.log(err);
        });
    },
    [pageNumber]
  );

  function next() {
    if (pageNumber >= Math.ceil(pagesCount / noOfPeoplePerPage)) {
      alert("returning max page length");
      return;
    }

    setPageNumber(pageNumber + 1);
  }

  function prev() {
    if (pageNumber <= 1) {
      alert("invalid page number");
      return;
    }
    setPageNumber(pageNumber - 1);
  }
  if(people.length === 0) return <PageLoader />
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="container">
        <Persons people={people} />
      </div>
        <PaginationButtons
          disableNext={disableNext}
          disablePrev={disablePrev}
          next={next}
          prev={prev}
          noOfContentsDisplayed={people.length}
          page={pageNumber}
        />
      </div>
  );
};

export default App;
