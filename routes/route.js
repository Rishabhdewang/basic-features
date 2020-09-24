const uploadprofile = require("../controllers/uploadprofile");
const signup = require("../controllers/signup");
const posts = require("../controllers/posts");
const comment = require("../controllers/comment");
// const reply = require("../controllers/reply");
const router = require("express").Router();

router.post("/uploadpic", uploadprofile.bichka ,uploadprofile.uploadpic);
router.post("/signup",signup);
router.post("/posts",posts.posts);
router.post("/showposts",posts.showpost);
router.post("/comment",comment);

module.exports = router;