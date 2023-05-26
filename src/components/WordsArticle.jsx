import React, { useState, useEffect } from "react";
import "../styles/words-article.css";
import { useDispatch, useSelector } from "react-redux";
import {
    addVerb,
    addNoun,
    addThird,
    filterActivePacks,
    filterActiveVerbs,
    filterActiveNouns,
    filterActiveThirds,
    deleteActiveVerb
} from "../redux/reducers/packs-reducer";
import minus from "../assets/minus.png";

function WordsArticle({ type }) {
    const placeholder = "ajouter un " + type.slice(0, -1);
    const idContainer = type + "Container";
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const packsSelector = useSelector((state) => state.packs);

    const activeVerbs = useSelector((state) => state.packs.activeVerbs);
    const activeNouns = useSelector((state) => state.packs.activeNouns);
    const activeThirds = useSelector((state) => state.packs.activeThirds);

    useEffect(() => {
        dispatch(filterActivePacks());
    }, [packsSelector.packs]);

    useEffect(() => {
        dispatch(filterActiveVerbs());
    }, []);

    useEffect(() => {
        dispatch(filterActiveNouns());
    }, []);

    useEffect(() => {
        dispatch(filterActiveThirds());
    }, []);

    function uploadWordsFilter() {
        dispatch(filterActiveVerbs())
        dispatch(filterActiveNouns())
        dispatch(filterActiveThirds())
        console.log(activeVerbs)
    }

    function addNewWord(event) {
        if (event.key === "Enter") {
            if (inputValue !== "") {
                const action =
                    type === "verbes"
                        ? addVerb({ packId: 1, verb: inputValue })
                        : type === "noms"
                        ? addNoun({ packId: 1, noun: inputValue })
                        : type === "compléments"
                        ? addThird({ packId: 1, third: inputValue })
                        : null;

                if (action) {
                    dispatch(action);
                    setInputValue("");
                    uploadWordsFilter()
 
                }
            }
        }
    }

    function deleteWord(e) {
        const parentElement = e.target.parentNode
        const verb = e.target.dataset.verb
        console.log(verb)
        dispatch(deleteActiveVerb(verb))
        uploadWordsFilter()
        
        parentElement.remove()
        
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
                {type === "verbes" && (
                    <ul>
                        {activeVerbs.map((activeVerb) => (
                            <li key={activeVerb} >
                                {activeVerb}
                                <img src={minus} alt="Supprimer" onClick={deleteWord} data-verb={activeVerb} />
                            </li>
                        ))}
                    </ul>
                )}
                {type === "noms" && (
                    <ul>
                        {activeNouns.map((activeNoun) => (
                            <li key={activeNoun}>
                                {activeNoun}
                                <img src={minus} alt="Supprimer" />
                            </li>
                        ))}
                    </ul>
                )}
                {type === "compléments" && (
                    <ul>
                        {activeThirds.map((activeThird) => (
                            <li key={activeThird}>
                                {activeThird}
                                <img src={minus} alt="Supprimer" />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default WordsArticle;
