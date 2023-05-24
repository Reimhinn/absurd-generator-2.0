import React, { useState } from "react";
import "../styles/words-article.css";
import { useDispatch, useSelector } from "react-redux";
import { addVerb, addNoun, addThird } from "../redux/reducers/packs-reducer";
import minus from "../assets/minus.png";

function WordsArticle({ type }) {
    const placeholder = "ajouter un " + type.slice(0, -1);
    const idContainer = type + "Container";
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const packId = 1;

    const word = inputValue;

    const packs = useSelector((state) => state.packs);

    function addNewWord(event) {
        if (event.key === "Enter") {
            if (inputValue !== "") {
                const action =
                    type === "verbes"
                        ? addVerb({ packId, verb: inputValue })
                        : type === "noms"
                        ? addNoun({ packId, noun: inputValue })
                        : type === "compléments"
                        ? addThird({ packId, third: inputValue })
                        : null;

                if (action) {
                    dispatch(action);
                    setInputValue("");
                    console.log(packs);
                }
            }
        }
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div className="article-container">
            <h2 id="word-type-title">+ {type.toUpperCase()}</h2>
            <input
                onKeyDown={addNewWord}
                type="text"
                value={inputValue}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <div className="words-container" id={idContainer}>
                <ul>
                    {type === "verbes"
                        ? packs[0].verbs.map((verb) => (
                              <li key={verb}>
                                  {verb}
                                  <img src={minus} alt="Supprimer" />
                              </li>
                          ))
                        : type === "noms"
                        ? packs[0].nouns.map((noun) => (
                              <li key={noun}>
                                  {noun}
                                  <img src={minus} alt="Supprimer" />
                              </li>
                          ))
                        : packs[0].thirds.map((third) => (
                              <li key={third}>
                                  {third}
                                  <img src={minus} alt="Supprimer" />
                              </li>
                          ))}
                </ul>
            </div>
        </div>
    );
}

export default WordsArticle;
