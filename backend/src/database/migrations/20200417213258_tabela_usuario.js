
exports.up = function(knex) {
    return knex.schema.createTable('usuario',
    function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuario');
};
