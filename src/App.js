import {loadPosts} from "./Actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


function App() {
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts())
  }, [])


  return (
    <div className="App">
     <div> Списко постов: </div>
      <div className="loading">{loading ? 'Идет загрузка....': (posts.map(post => {
        return (
            <div className='body'>
              {post.body}
            </div>
        )
      }))}</div>
    </div>
  );
}

export default App;
