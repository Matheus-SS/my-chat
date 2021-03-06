// import { Name } from '../src/domain/user/name';
// import { UserEntity } from '../src/domain/user/user.entity';

// describe.skip('UserEntity', () => {
//   test('Deveria criar um novo usuário', () => {
//     // const entity = new UserEntity('megan', 'megan@gmail.com', '123456');
//     const name = Name.create('');
//     console.log(name);
//   });

//   test.skip('Deveria criar um novo usuário com email todo em minúsculo', () => {
//     const entity = new UserEntity('megan', 'MeGAN@gmail.com', '123456');

//     expect(entity.getEmail).toEqual('megan@gmail.com');
//   });

//   test.skip('Deveria criar um novo usuário com a primeira letra do nome maiúscula', () => {
//     const entity = new UserEntity('mEgaN', 'megan@gmail.com', '123456');

//     expect(entity.getName).toEqual('Megan');
//   });

//   test.skip('Deveria lançar um erro ao tentar criar usuario com o nome composto', () => {
//     expect(
//       () => new UserEntity('megan jane', 'megan@gmail.com', '123456'),
//     ).toThrow('Must be only your firstname');
//   });

//   test.skip('Deveria lançar um erro ao tentar criar usuario sem nome', () =>
//     expect(() => new UserEntity('', 'megan@gmail.com', '123456')).toThrow(
//       'Name is required',
//     ));

//   test.skip('Deveria lançar um erro ao tentar criar usuario com nome não tendo apenas letras', () =>
//     expect(
//       () => new UserEntity('megan123', 'megan@gmail.com', '123456'),
//     ).toThrow('Name must have only letters'));

//   test.skip('Deveria lançar um erro ao tentar criar usuario com nome menor que 4 ou maior que 30', () =>
//     expect(() => new UserEntity('may', 'may@gmail.com', '123456')).toThrow(
//       'Name must be between 4 and 30 characters',
//     ));

//   test.skip('Deveria lançar um erro ao tentar criar usuario sem email', () =>
//     expect(() => new UserEntity('megan', '', '123456')).toThrow(
//       'Email is required',
//     ));

//   test.skip('Deveria lançar um erro ao tentar criar usuario com formato de email inválido', () =>
//     expect(() => new UserEntity('megan', 'megan@.com', '123456')).toThrow(
//       'Email is not valid',
//     ));

//   test.skip('Deveria lançar um erro ao tentar criar usuario sem senha', () =>
//     expect(() => new UserEntity('megan', 'megan@gmail.com', '')).toThrow(
//       'Password is required',
//     ));

//   test.skip('Deveria lançar um erro ao tentar criar usuario com senha menor que 6 ou maior que 30 caracteres', () =>
//     expect(() => new UserEntity('megan', 'megan@gmail.com', '12345')).toThrow(
//       'Password must be between 6 and 30 characters',
//     ));
// });
