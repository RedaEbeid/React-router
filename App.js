import NewPost from './NewPost.js'
import DeletePost from './DeletePost.js';
import PostList from "./PostList"
import PostDetails from "./PostDetails.js"
import { postsContext } from "./Context/Context.js";
import NotFound from "./NotFound.js";
import "./App.css";
import Header from './Header'
import Home from "./Home.js"
import Freinds from "./Freinds.js";
import About from "./About.js";
import { Route,Routes, Link } from "react-router-dom";

function App () {

  let postData = [{ id: 0,title: 'Post 1', body: 'the addition of Hooks, Function components are now almost equivalent to Class components.' },{ id: 1, title: 'Post 2', body: 'React documentation is written and maintained by the React team and external contributors.' },{ id: 2, title: 'Post 3', body: 'Instead of manipulating the browsers DOM directly React creates a virtual DOM in memory.' }]
  
  return (
    <postsContext.Provider value={postData}>
      <div className="App">
        <Header />

        <div className="displayFlex">
          <Link to="/home">
            <button>Home</button>
          </Link>

          <Link to="/posts">
            <button>PostList</button>
          </Link>

          <Link to="/about">
            <button>About</button>
          </Link>

          <Link to="/freinds">
            <button>Freinds</button>
          </Link>
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/freinds" element={<Freinds />} />
          
          <Route path="/posts">
            <Route index element={<PostList />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
            <Route path="delete" element={<DeletePost />} />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
            
      </div>
    </postsContext.Provider>
  );
}
export default App;




