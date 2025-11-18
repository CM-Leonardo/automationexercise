import { fakerDE as faker } from '@faker-js/faker';

const userData = {
    nameUser: faker.lorem.words(1),
    emailUser: faker.internet.email(),
    password: faker.internet.password(),
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    company : faker.word.words(2),
    adressOne : faker.word.words(3),
    adressTwo : faker.word.words(3),
    state : faker.location.state(),
    city : faker.location.city(),
    zipCode : faker.location.zipCode(),
    mobileNumber : faker.phone.number()
}

export {
    userData
}