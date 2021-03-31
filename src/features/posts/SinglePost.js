import {deleteCurrent, editValue} from './postsSlice';
import {useState} from 'react';
function SinglePost({post, index, dispatch}) {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(post);
  return (
    <>
      {edit ? <input value={inputValue} onChange={(e) => {
        setInputValue(e.target.value);
      }}/> :
      <h1>{post}</h1>
      }

      <button onClick={() => {
        dispatch(deleteCurrent(index))
      }}>delete</button>

      {edit ? <button onClick={() => {
        dispatch(editValue({newValue: inputValue, index}))
      }}>save</button>
      : <button onClick={() => {
        setEdit(prevState => !prevState);
      }}>edit</button>}
    </>
  )
}
export default SinglePost