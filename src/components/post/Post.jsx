import "./post.css";
import { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummydata";

export default function Post({post}) {
  const[like, setLike] = useState(post.like)
  const[isliked, setIsliked] = useState(false)

  const likehandler = () =>{
    setLike( isliked ? like-1 : like+1)
    setIsliked(!isliked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter( user => user.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">{Users.filter( user => user.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span> <br />
          <img className="postCenterImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" onClick={likehandler}/>
            <img className="likeIcon" src="/assets/heart.png" alt="" onClick={likehandler}/>
            <span className="postLikeCounter">{like} people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
