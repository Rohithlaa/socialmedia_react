import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import { Posts } from '../../dummydata'
import './feed.css'

export default function Feed() {
    return (
        <div className="FeedWrapper">
            <Share />
            { Posts.map( post =>  <Post key={post.id} post={post}/>)}
        </div>
    )
}
