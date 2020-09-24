// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:{
        host: 'localhost',
        database: 'postandreplies',
        user: 'postgres',
        password: "8085"
        // host: "localhost",
        // user: "postgres",
        // password: "8085",
        // database: "healers" 
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
