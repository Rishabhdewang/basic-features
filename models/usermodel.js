const { Model }  = require('objection');
const posts = require('./postmodel');

class User extends Model {
    static get tableName(){
        return "User"
    }

    static get relationshipMappings(){
        return {
            post : {
                Relation : Model.BelongsToOneRelation,
                modelClass : posts,
                join : {
                    from : User.id,
                    to : posts.id
                }
            }
        }

    }

}

module.exports = User;