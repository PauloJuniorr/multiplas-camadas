
exports.up = function(knex) {
    return knex.schema.createTable('filme',
    function (table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('thumbnail').notNullable();
        table.string('ano_lancamento').notNullable();
        table.string('duracao').notNullable();
        table.string('classificacao').notNullable();
        table.string('elenco').notNullable();
        table.string('sinopse').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('filme');
};
