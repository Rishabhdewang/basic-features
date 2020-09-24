const { Model }  = require('objection');
const posts = require('./postmodel');

class User extends Model {
    static get tableName(){
        return "User"
    }

}

module.exports = User;