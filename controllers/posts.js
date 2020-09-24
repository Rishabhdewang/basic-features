const {
    Model
} = require('objection')
const knex = require("knex");
const postmodel = require('../models/postmodel');
const {
    to
} = require('../global_functions')

const posts = async (req, res) => {

    const UserId = req.body.UserId;
    const post = req.body.PostContent;
    const postContent = await postmodel.query().insert({
        PostContent: post,
        UserId: UserId
    });

    res.send(postContent);

}

const showpost = async (req, res) => {

    const userid = req.body.UserId;
    const [error, post] = await to(postmodel.query().where("UserId", userid).skipUndefined().withGraphFetched("user").throwIfNotFound());
    if (error) return res.send(error)

    res.send(post)
}

module.exports = {
    posts,
    showpost
};