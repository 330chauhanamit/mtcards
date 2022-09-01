import { useState } from "react";
import PopupCard from './PopupCard'
import './post.css';

const Post = ({item}) =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="post-card">
            <div className="post-content">

                <div className="post-img" onClick={() => setIsOpen(true)}>
                    <img className="lazyload" data-src={item.image[0]}/>
                </div>
                {isOpen && <PopupCard item={item} setIsOpen= {setIsOpen}/>}
                {/* <div className="post-button">
                <input type="button" value="Like" />
                <input
                    className="buy-btn"
                    onClick={() => onBuy()}
                    type="button"
                    value="Buy Now"
                    />
                <input type="button" value="Share" />
                </div> */}
                <div className="post-title">
                    <p>MT. {item.title}</p>
                    <p>Rs. {item.sPrice}/-</p>
                </div>
            </div>
            
        </div>
    )
}
export default Post;