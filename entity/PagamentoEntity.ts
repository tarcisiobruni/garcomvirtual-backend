import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Pagamento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
        nullable: true,
        type: 'varchar',
    })
    orderid: string;

    @Column({
        length: 255,
        nullable: true,
        type: 'varchar',
    })
    email: string;

    @Column({
        length: 255,
        nullable: true,
        type: 'varchar',
    })
    message: string;
}
