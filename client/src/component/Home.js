import Posts from "./Posts";
import CreatePost from "./CreatePost";

import { useState,useEffect } from "react";
import Loading from "./Loading";
const axios = require("axios");
// Router.push()

const Home = ({filter}) => {
  const [finalPost, setFinalPost] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async() => {
    await fetchPost();
  }, [filter]);


  // const getname = (id) => {
  //   const temp = sessionStorage.getItem("token");
  //   const token = JSON.parse(temp).data.token;
  //   axios
  //     .get(`http://localhost:8000/user/${id}`, {
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //     .then((data) => setName(data.data.name));
  //   // return data.data.name;
  // };
  const fetchPost = async () => {
    // const temp = sessionStorage.getItem("token");
    // const token = JSON.parse(temp).data.token;
    setLoading(true)
    await axios
      .get("/allPost", {
        headers: {
          // Authorization: token,
        },
      })
      .then((res) => {
        // setPost(res.data);
        // setFinalPost(res.data);
        if(filter) setFinalPost(res.data.filter((item)=>(item.type1=== filter || item.type2 ===filter)));
        else setFinalPost(res.data)// console.log(post.filter((item)=>(item.type1=== filter || item.type2 ===filter)));
        setLoading(false)
      });
  };
  return (
    <div className="home-container col-12">
      {loading && <Loading/>}
      {/* <h1>Hello {props.name}</h1>
      <h1>{props.userName}</h1> */}
          <Posts finalPost={finalPost} filter={filter}/>
      </div>
  );
};

export default Home;
