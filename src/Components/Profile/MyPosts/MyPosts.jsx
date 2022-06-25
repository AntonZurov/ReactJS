import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let postsElements = props.postsData.map (p => <Post post={p.post} like={p.likesCount}/>);
    let newPostElement = React.createRef();
        let addPost = () => {
            props.addPost();
               };

        let onPostChange = () =>{
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
            newPostElement.current.value='';
        }

    return (

    <div className={style.postBlock}>

      <h3>
        My posts
      </h3>
      <div>
        <textarea onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText}/>

      </div>

      <div>
        <button onClick={addPost}> Add post</button>
        <button> Del post</button>
      </div>

      <div className={style.posts}>
          {postsElements}
      </div>

    </div>
  )
}

export default MyPosts;