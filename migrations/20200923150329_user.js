
exports.up = function(knex) {
    return knex.schema.createTable("User" , (table) => {
        table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary(),
        table.string("Email").notNullable().unique(),
        table.string("Username").notNullable().unique(),
        table.string("Password").notNullable();
        table.string("ProfilePic");
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("User");
  
};
