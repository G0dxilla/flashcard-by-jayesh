
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlashcardUI from "../components/Card_UI/FlashcardUI";

const MyFlashCard = () => {
  const navigate = useNavigate(); // to return the imperative method to change the location
  

  const flashcards = useSelector((state) => state.flashcard.flashcards); // getting state from store

  const [showAll, setShowAll] = useState(false);

  const showLimit = !showAll ? 6 : flashcards.length; // setting showlimit of cards on the page

  // Handler to delete a flashcard
 

  return (
    <section className="flex flex-col mt-16">
      {/* If the length of flashcards is greater than 0, it will show all flashcards; otherwise, it will show a message to create flashcards */}
      {flashcards.length > 0 ? (
        <div>
          <div className="flex flex-wrap">
            {flashcards.slice(0, showLimit).map(({ card, id }, i) => (
              <div key={id} className="mr-4 mb-4">
                <FlashcardUI flashcard={card} />
                
              </div>
            ))}
          </div>
          <div className="flex justify-end mr-10">
            <button
              className="w-16 mt-1 font-semibold text-lg text-red-600 outline-none border-none active:outline-none active:border-none"
              onClick={() => setShowAll(!showAll)}
            >
              See all
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-cyan-100 shadow-lg p-20">
          <h1 className="font-semibold text-xl text-blue-600">
            No Flashcard is available to show, Go to
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              --CREATE FLASHCARD--
            </span>
            to Create New Flashcard
          </h1>
        </div>
      )}
    </section>
  );
};

export default MyFlashCard;
