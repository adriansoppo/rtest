import React from "react";
import ReactDOM from "react-dom";

const mountNode = document.getElementById("app");
const post = JSON.parse(mountNode.getAttribute('data-post'));

class HelloMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: post.content,
      id: post.id,
      content: post.content
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    jQuery.ajax({
      type: "POST",
      url: ajaxurl,
      data: {"action" : "my_action", "id": this.state.id, "content" : this.state.value},
      success: function(response) {
          console.log(jQuery('#publishing-action'));
          jQuery('#publishing-action input').trigger('click');
      }
    });
  }

  render() {
    return (
      <div>
        <div style={{marginTop: 40, marginBottom: 20}}>{this.state.content}</div>
        <form onSubmit={this.handleSubmit}>
          <textarea style={{width: '100%', height: '300px'}} type="text" value={this.state.value} onChange={this.handleChange} />
          <input className="button button-primary button-large" type="submit" value="Save " />
        </form>
      </div>
    );
  }

}
ReactDOM.render(<HelloMessage />, mountNode);
