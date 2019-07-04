import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {FileEntity} from './file-entity';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn({name: 'id', type: 'smallint'})
    id: number;

    @Column({name: 'name', length: 200})
    name: string;

    @OneToMany(type => FileEntity, file => file.user)
    files: FileEntity[];

}