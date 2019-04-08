import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Tweet.css';

class Tweet extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        remove: PropTypes.func.isRequired,
    };
    
    state = {
        isFocus: false,
    }
    handleFocus = ({ type }) => {
        this.setState({ isFocus: type === 'mouseenter'})
    }
    
    render() {
        const { avatar, fullname, username, date,  content, index, remove } = this.props;
        const { isFocus } = this.state;
        return (
                <div className="tweet">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="data">
                        <div className="infos">
                            <strong className="fullname">{fullname}</strong>
                            <small className="gray"> @{username}</small>
                            <small className="gray"> - {date} </small>
                            {username === 'Zwaldo' && (
                                    <FontAwesome
                                    className="gray trash"
                                    name={isFocus ? 'trash' : 'trash-o'}
                                    onMouseEnter={this.handleFocus}
                                    onMouseLeave={this.handleFocus}
                                    onClick={() => remove(index)}
                             />    
                                )
                            }
                        </div>
                        <div className="content">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
                )
    }
}



        




export default Tweet;