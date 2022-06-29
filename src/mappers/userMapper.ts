import { UserEntity } from 'src/domain/user.entity';
import { CreateUserDto } from 'src/shared/dto/createUserDto';

export class UserMapper {
  public static mapFromDtoToEntity(data: CreateUserDto): UserEntity {
    const user = new UserEntity(data.name, data.email, data.password);

    return user;
  }

  public static mapFromEntityToPersistence(user: UserEntity): any {
    return {
      nome: user.getName,
      senha: user.getPassword,
      email: user.getEmail,
    };
  }

  public static mapFromPersistenceToEntity(user: any): UserEntity {
    const userEntity = new UserEntity(user.nome, user.email, user.senha);
    return userEntity;
  }
}
