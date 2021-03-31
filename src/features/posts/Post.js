import {useSelector, useDispatch} from 'react-redux';
import {add, deleteCurrent, deleteAll} from './postsSlice';
import {useState,Fragment} from 'react';
import {nanoid} from 'nanoid';

function Post(props) {

  const [inputValue, setInputValue] = useState('');
  const posts = useSelector(state => {
    //
    return state.posts.values
  }); //


  const dispatch = useDispatch();
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
              <h1>{el}</h1>
              <button onClick={() => {
               dispatch(deleteCurrent(index))
              }}>delete</button>
          </Fragment>
          )

        })}
      </div>
      <button onClick={() => dispatch(deleteAll())}>clear store</button>
    </div>
  )

}
export default Post