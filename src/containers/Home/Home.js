import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import moment from 'moment';
import './Home.css';

import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';

class Home extends Component {
  state = {
      tweets,
  };


publish = (tweet) => { 
   const { tweets } = this.state;
    this.setState({
        tweets:[{
            avatar:'https://image.flaticon.com/icons/svg/1470/1470688.svg',
            username:'Zwaldo',
            fullname:'El Captain',
            content:tweet,
            date: moment().format('DD/MM/YYYY'), 
        },
                ...tweets,
        ]
    });
};

remove = index => { 
       const { tweets } = this.state;
       
       this.setState({ tweets: tweets.filter((tweet, i) => i !== index) });
};


render() {
    const { tweets } =this.state;
    
    return (
            <div className="hompage">
                <TweetBox publish={this.publish} />
                <div className="tweets">
                    {tweets.map((tweet, index) => (
                        <Tweet 
                            key={index}
                            index={index}
                            remove={this.remove}
                            {...tweet}
                        />
                    ))}
                </div>
            </div>
    
        );
    }
}    



export default Home;