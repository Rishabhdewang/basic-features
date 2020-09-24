
exports.up = function(knex) {
    return knex.schema.createTable("Posts" , (t1) =>{
        t1.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        t1.uuid("UserId").references("id").inTable("User").onDelete("CASCADE");
        t1.text("PostContent")
        t1.timestamps(false,true);

    })
    .createTable("Comments", (t2) =>{
        t2.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        t2.uuid("PostId").references("id").inTable("Posts").onDelete("CASCADE");
        t2.uuid("UserId").references("id").inTable("User").onDelete("CASCADE");
        t2.text("CommentContent")
        t2.timestamps(false,true);
    })
    .createTable("replies", (t3) =>{
        t3.uuid("id").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        t3.uuid("PostId").references("id").inTable("Posts").onDelete("CASCADE");
        t3.uuid("CommentId").references("id").inTable("Comments").onDelete("CASCADE");
        t3.uuid("UserId").references("id").inTable("User").onDelete("CASCADE");
        t3.text("replyContent");
        t3.timestamps(false,true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Posts","Comments","replies")
};
