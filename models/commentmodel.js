const { Model }  = require('objection');
const  user =  require("./usermodel");
const post = require('./postmodel');

class Comment extends Model{
    static get tableName(){
        return "Comments"
    }

    static get relationMappings(){
        return {
            post : {
                Relation : Model.HasManyRelation,
                modelClass : post,
                join : {
                    from : Comments.id,
                    to :  Posts.id
                } 
            }
        }

    }
}

module.exports = Comment;