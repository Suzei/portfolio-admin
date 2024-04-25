import { Column, MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddingSinopseColumn1714018293435 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'posts',
      new TableColumn({
        name: 'resume',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('posts', 'resume');
  }
}
