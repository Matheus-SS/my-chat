import { Result } from '../src/domain/user/Result';
import { Name } from '../src/domain/user/name';
import { UserEntity } from '../src/domain/user/user.entity';

describe('Name value object', () => {
  test('Deveria criar um novo nome', () => {
    const entity = Name.create('na3');

    const nameOrError = Result.combine([entity]);
    console.log(nameOrError);
  });
});
