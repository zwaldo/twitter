import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Home from '../../containers/Home';
import Tweet from '../../components/Tweet';
import './App.css';
import  { tweets } from '../../constants';
import { shouldBeHighLighted, highlightedStr } from '../../helpers/Parse';

//import TweetBox from '../../components/TweetBox';



const App = () => ( 
        

        <main>
            
            <Home>
                {tweets.map((tweet, index) => (
                    <Tweet {...tweet} key={index} />
                    ) )}
            </Home>
            

        </main>
);

App.propTypes = {
    children: PropTypes.node.isRequired
};




export default App;