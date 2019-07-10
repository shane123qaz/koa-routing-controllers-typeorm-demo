import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class test1562730336128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "car",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "speed",
                    type: "int"
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable("car");

        await queryRunner.dropTable("car");
    }

}
