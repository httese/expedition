import {User} from './Users';

describe('User Schema', () => {
  const base = {id: '54321'};
  it('is invalid when missing id', () => {
    expect(User.create({}) instanceof Error).toEqual(true);
  });
  it('is valid when id given', () => {
    const f = new User(base);
    expect(f.id).toEqual(base.id);
  });
});
