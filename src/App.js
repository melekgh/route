import NavBar from "./components/NavBar/NavBar";
import MoviCard from "./components/MoviCard/MoviCard";
import { useState } from "react";
import ModalCard from "./components/Modal/ModalCard";
import MoviData from "./components/MoviData/MoviData";
import './App.css'
import {Routes,Route} from 'react-router-dom'
import MovieDetails from "./components/Moviedetails/MovieDetails";

function App() {
  const [cardList, setcardList] = useState(MoviData);
  const addCard = (Card) => {
    setcardList([Card, ...cardList]);
  };

  const [titleshearch, settitleshearch] = useState("");
  const handleTitle = (input) => {
    settitleshearch(input);
  };

  const [ratingSearch, setratingSearch] = useState(null);
  const handleRating = (input) => {
    setratingSearch(input);
  };

  return (
    <div>
      <NavBar handleTitle={handleTitle} handleRating={handleRating} />
      <div className="plButton">
        <ModalCard addCard={addCard} />
        {console.log(cardList)}
      </div>
      <div className="MvCard">
        <Routes>
<Route path ="/" element={<MoviCard
            cardList={cardList}
            titleshearch={titleshearch}
            ratingSearch={ratingSearch}
          />}
/>

        <Route path="/movie" element ={<MovieDetails/> }/>  
        </Routes>
      </div>
    </div>
  );
}

export default App;
