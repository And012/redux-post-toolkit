import {useSelector, useDispatch} from 'react-redux';
import {add, deleteAll} from './postsSlice';
import {useState,Fragment, useCallback} from 'react';
import {nanoid} from 'nanoid';
import SinglePost from './SinglePost';

function Post(props) {

  const [inputValue, setInputValue] = useState('');
  const posts = useSelector(state => {
    //
    return state.posts.values
  }); //


  const dispatch = useDispatch()
  return (
    <div>
      <input value={inputValue} onChange={(e) => {
      setInputValue(e.target.value);
      }}/>

      <button onClick={() => {
        dispatch(add(inputValue));
        setInputValue('');
      }}>add post</button>
      <div>
        {posts.map((el, index) => {
          //using Fragment instead of <></> giving us advantage to use key on it
          return (
            <Fragment key={nanoid()}>
              <SinglePost dispatch={dispatch} index={index} post={el}/>

          </Fragment>
          )

        })}
      </div>
      <button onClick={() => dispatch(deleteAll())}>clear store</button>
    </div>
  )

}
export default Post