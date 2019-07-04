import {UserEntity} from './../entities/user-entity';
import {getManager} from 'typeorm';

export class UserRepository {

    getAllUsers() {
        return getManager().getRepository(UserEntity).find();
    }

    saveUser(user: UserEntity) {
        return getManager().getRepository(UserEntity).save(user);
    }

    deleteUser(user: UserEntity) {
        return getManager().getRepository(UserEntity).delete(user);
    }

    getUser(userId: number) {
        return getManager().getRepository(UserEntity).findOne(userId);
    }

}