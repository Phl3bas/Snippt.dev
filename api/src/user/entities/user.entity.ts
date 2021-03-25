import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryColumn()
    id: string

    @Column()
    username: string

    @Column()
    email: string
    
    @Column()
    created_at: string
    
    @Column()
    last_active_on: string
}