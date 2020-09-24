const {
    Model
} = require('objection');


class Post extends Model {
    static get tableName() {
        return "Posts";
    }


    static get relationshipMappings() {
        
const User = require("./usermodel")
const Comment = require("./commentmodel");
        return {
            user: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: Posts.UserId,
                    to: User.id
                }
            },

            Comment: {
                relation: Model.HasManyRelation,
                modelClass: Comment,
                join: {
                    from: Posts.id,
                    to: Comments.id
                }
            }
        }
    }

}

module.exports = Post;