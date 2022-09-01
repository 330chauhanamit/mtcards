import Post from './Post';
import { useState,useEffect } from "react";
const Posts = ({finalPost}) => {

  const [limit, setLimit] = useState(12)
  // const onBuy = () => {
  //   window.open(
  //     "https://wa.me/+918353064406?text=I'm%20interested%20in%20your%20for%20product"
  //   );
  //   // window.location.href ="https://wa.me/+918353064406?text=I'm%20interested%20in%20your%20for%20product";
  // };

  return (
    <>
      <div className="post-container">
          {finalPost && finalPost.length>0 && (
            <ul className="">
              {finalPost.filter((item, idx) => idx < limit).map((item, ind) => (
                <li key={ind}>
                  <div>
                    <Post item={item}/>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {finalPost?.length ==0 && <h1 className='empty-post'>Please Select Other Options</h1>}
      </div>
        {limit < finalPost.length &&<button className="w-100 btn btn-primary" onClick ={() =>setLimit(limit+12)}>Load More</button>}
    </>
  );
};

export default Posts;
