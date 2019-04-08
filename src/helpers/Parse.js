import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import { Link } from 'react-router-dom';

//const BrowserRouter = require("react-router-dom").BrowserRouter;
//const Route = require("react-router-dom").Route;
//const Link = require("react-router-dom").Link;

const shouldBeHighLighted = (str) =>
    str.match(/((@)|(#)|(https?:\/\/))[\w.]+/gi);
    
const highlightedStr = (str) =>
    str
            .split(/\s/g)
            .map((word, index) => {
                if (shouldBeHighLighted(word)) {
                    return <button key={index} className="highlight">{word} </button>
            

                }
                return <span key={index}>{word} </span>
            
            });



export {
    shouldBeHighLighted,
    highlightedStr,
};            
    