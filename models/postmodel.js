const {
    Model
} = require('objection');
const User = require("./usermodel")
const comment = require("./commentmodel");


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
                    from: Post.UserId,
                    to: User.id
                }
            }

            // Comment: {
            //     relation: Model.HasManyRelation,
            //     modelClass: comment,
            //     join: {
            //         from: Post.id,
            //         to: comment.id
            //     }
            // }
        }
    }

}

module.exports = Post;