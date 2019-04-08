import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TweetBox.css';


class TweetBox extends Component {
    static propTypes = {
      publish: PropTypes.func.isRequired
    };
    
    
    state = {
            value: '',
        };
        
    handleChange = ({ target: { value } }) => {
        this.setState ({ value: value });
    };
    
    handleSubmit = () => {
      const { value }  = this.state;
      const { publish } = this.props;
      
      console.log(this.props);
      
      
      if (value.length && value.length <= 140){
          publish(value);
          
          this.setState({ value: '' });
      }
    };
    
        
    render(){
        const { value } = this.state;
        
        return(
                
                <div className="tweetbox">
                <textarea
                    rows = {3}
                    placeholder = "Composez votre tweet"
                    value = {value}
                    onChange={this.handleChange}
                    className = {value.length > 140 ? 'alert' : undefined}
                 />
                    <div className="action">
                    <span className="compteur">{140 - value.length} / 140 </span>
                    <button
                        type="button"
                        disabled={!value.length || value.length > 140}
                        onClick={this.handleSubmit}
                        >
                    Tweet            
                    </button>
                    
                    </div>
                </div>
        
        );
        
    }
    
}

export default TweetBox;