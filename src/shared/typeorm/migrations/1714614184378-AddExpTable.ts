import { query } from 'express';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddExpTable1714614184378 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'experience',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'company',
            type: 'varchar',
          },

          {
            name: 'role',
            type: 'varchar',
          },

          {
            name: 'description',
            type: 'varchar',
          },

          {
            name: 'startedOn',
            type: 'timestamp with time zone',
          },

          {
            name: 'endedOn',
            type: 'timestamp with time zone',
          },

          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },

          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('experience');
  }
}
