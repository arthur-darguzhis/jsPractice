export type UserType = {
  name: string,
  hair: number,
  address: AddressType
  laptop: LaptopType
}

type AddressType = {
  city: string,
  house: number
}

type LaptopType = {
  title: string
}

export const changeLaptop = (user: UserType, laptop: string): UserType => {
  return {
    ...user,
    laptop: {
      ...user.laptop,
      title: laptop
    }
  }
}
