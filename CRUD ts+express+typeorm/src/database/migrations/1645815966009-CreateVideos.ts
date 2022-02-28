import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVideos1645815966009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "videos",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "category_id",
            type: "int",
          },
          {
            name: "duration",
            type: "numeric",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_videos_category",
            columnNames: ["category_id"],
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("videos");
  }
}
