import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    const characterCounter = this.props.maxChars - this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={event => this.handleChange(event)}
          type="text"
          name="message" 
          id="message" 
          value={this.state.tweet} 
        />
        <br></br><br></br>
        {characterCounter} characters left.
      </div>
    );
  }
}

export default TwitterMessage;
