
exports.up = function(knex) {
    return knex.schema.createTable('filme',
    function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('ano_lancamento').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('filme');
};
