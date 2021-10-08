import React from 'react'
import './rightbar.css'
import { Users } from '../../dummydata'
import Online from '../online/Online'
export default function Rightbar() {
    return (
        <div className="Rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" className="birthdayImg" alt="" />
                    <span className="birthdayText"> { " "} <b>pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                   {
                       Users.map( user => <Online key={user.id} user={user}/>)
                   }
                </ul>
            </div>
        </div>
    )
}
