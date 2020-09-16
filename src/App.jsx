import React, { Component } from 'react';
import { Posts } from './components/posts';

class App extends Component {

  constructor(props) { 
    super(props);

    this.state = {
      postsVisible: false
    };
  }

  postsVisibleToggle = () => {
    this.setState(({postsVisible}) => ({ postsVisible: !postsVisible }));
  }

  render() {
    const { postsVisible } = this.state;

    return (
      <div className="container">
        <div className="toolbar">
          <button 
            onClick={this.postsVisibleToggle}
          >Show posts</button>
        </div>
        { postsVisible && <Posts /> }
      </div>
    );
  }

}

export default App;
