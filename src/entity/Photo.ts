import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    size: string;
}
