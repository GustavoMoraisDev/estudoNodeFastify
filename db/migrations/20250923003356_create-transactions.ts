import type { Knex } from "knex";


// up quer dizer oq essa migration vai fazer
export async function up(knex: Knex): Promise<void> {
    // criando tabelas e coluna dentro das tabelas
    //
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.decimal('amount', 10, 2).notNullable
        table.timestamp('create_at').defaultTo(knex.fn.now()).notNullable()
    } )
}

// down quer dizer que algo deu ruim, faz o contrário do que o up fez
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('transactions')

}