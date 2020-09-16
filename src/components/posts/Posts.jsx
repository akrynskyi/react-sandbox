import React, { Component } from 'react';
import './Posts.scss';

import { Post } from '../post';
import { Loader } from '../loader';

class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await resp.json();
    this.setState({ posts, loading: false });
  }

  render() {
    const { posts, loading } = this.state;

    return (
      <div className="posts">
        {
          loading 
          ? <Loader />
          : <ul>
              {posts.map(({id, ...body}) => (
                <li className="posts__post" key={id}>
                  <Post {...body} />
                </li>
              ))}
            </ul>
        }
      </div>
    );
  }

}

export default Posts;