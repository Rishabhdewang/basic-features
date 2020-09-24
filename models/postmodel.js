const {
    Model
} = require('objection');
const User = require("./usermodel")
const Comment = require("./commentmodel");


class Post extends Model {
    static get tableName() {
        return "Posts";
    }


    static get relationshipMappings() {
        return {
            user: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: Posts.UserId,
                    to: Users.id
                }
            },

            Comment: {
                relation: Model.HasManyRelation,
                modelClass: comment,
                join: {
                    from: Posts.id,
                    to: Comments.id
                }
            }
        }
    }

}

module.exports = Post;