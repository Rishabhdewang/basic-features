const { Model } = require('objection')
const knex = require("knex");
const commentmodel= require('../models/commentmodel')

const comment  = async (req,res) => {

    const userid = req.body.UserId;
    const postid = req.body.PostId;
    const comments = req.body.CommentContent;
    
    const commentContent = await commentmodel.query().insert({
        CommentContent : comments,
        PostId : postid ,  
        UserId : userid   
    });

    console.log("commented on post");
    res.send(commentContent);

}

module.exports = comment;