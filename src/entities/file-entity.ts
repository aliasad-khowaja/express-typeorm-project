import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { UserEntity } from './user-entity';
@Entity('file')
export class FileEntity {

    @PrimaryGeneratedColumn({name: 'id', type: 'smallint'})
    id: number;

    @Column({name: 'name', length: 100})
    name: string;

    @ManyToOne(type => UserEntity, user => user.files)
    @JoinColumn({name: 'userId'})
    user: UserEntity;
}