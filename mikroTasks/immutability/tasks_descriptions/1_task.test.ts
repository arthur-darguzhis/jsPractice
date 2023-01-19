import {changeLaptop, UserType} from "./1_task";


test('check immutable function update Laptop to mac book', () => {
  let user: UserType = {
    name: 'Arthur',
    hair: 24,
    address: {
      city: 'Minsk',
      house: 12,
    },
    laptop: {
      title: 'Zen book'
    }
  }

  const changedUser = changeLaptop(user, 'mac book');

  expect(changedUser).not.toBe(user)
  expect(changedUser.address).toBe(user.address)
  expect(changedUser.laptop).not.toBe(user.laptop)
  expect(changedUser.laptop.title).toBe('mac book')
  expect(user.laptop.title).toBe('Zen book')
})
