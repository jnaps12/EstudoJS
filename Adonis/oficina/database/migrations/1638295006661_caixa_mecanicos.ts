import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CaixaMecanicos extends BaseSchema {
  protected tableName = 'caixa_mecanicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.float('valor', 10, 2)
      table.string('descricao')
      table.boolean('is_entrada')
      table.boolean('fiado')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
