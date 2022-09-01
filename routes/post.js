const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.post("/createPost", (req, res) => {
  console.log(req.body);
  const {stock,image,title,description,cPrice,sPrice,type1,type2} = req.body
  const post = new Post({
    title,
    stock,
    description,
    cPrice,
    sPrice,
    image,
    type1,
    type2
    // postedBy: req.user,
  });
  post.save().then((result) => {
    res.json({ post: result });
  })
  .catch(err => console.log(err))
});
var mysort = { title: 1 };
router.get("/allPost", (req, res) => {
  Post.find().sort(mysort).then((posts) => {
    res.json(posts);
  });
});

router.get("/myPost", requireLogin, (req, res) => {
  console.log(req);
  Post.find({postedBy:req.user._id}).then((posts) => {
    res.json(posts);
    // console.log(posts);
    // return posts;
  });
});
router.delete("/allPost", (req,res)=>{
  Post.deleteMany().then(()=>console.log("deleted"))
})

router.delete("/deletePost/:postId",(req,res)=>{
  console.log("here");
  Post.findOne({_id:req.params.postId})
  .exec((err,post)=>{
    post.remove();
  })
})
module.exports = router;
