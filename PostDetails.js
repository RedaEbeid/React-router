import { useParams } from "react-router-dom"
import { useContext } from "react";
import { postsContext } from "./Context/Context";

export default function PostDetails () {
    const Posts = useContext(postsContext);

    const { postId } = useParams();
    
    const post = Posts.find((p) => {
        return p.id == postId;
    });

    if (post) {
        return (<>
                    <h2> {post.title} </h2>
                    <p> {post.body} </p>
                </>
        )
    } else { return (<h2>The Post id : {postId} is not exist</h2>) };
}
