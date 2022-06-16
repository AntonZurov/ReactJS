import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
/*    let posts = [
        {id: 0, post: 'How are you?', likesCount:12},
        {id: 1, post: 'Its my first post',likesCount:11},
        {id: 2, post: 'blabla',likesCount:1},
        {id: 3, message: 'dada',likesCount:111},

    ]*/
    let postsElements = props.map (p => <Post post={p.post} like={p.like}/>);
  return (

    <div className={style.postBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <textarea></textarea>
      </div>

      <div>
        <button> Add post</button>
        <button> Del post</button>
        </div>      
      <div className={style.posts}>
          {postsElements}
      </div>

    </div>
  )
}

export default MyPosts;