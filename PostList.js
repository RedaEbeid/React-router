import { Link } from "react-router-dom";
import { postsContext } from "./Context/Context";
import { useContext } from "react";

export default function PostList () {

    const PostsContext = useContext(postsContext);

    let postList = PostsContext.map( (post) => {
        return (
            <Link key={post.id} to={`${post.id}`} >
                <div className="post">
                    <h2 className="postTitle">{post.title}</h2>
                </div>
            </Link>
        )
    });
    return (<> {postList} </>);
}
