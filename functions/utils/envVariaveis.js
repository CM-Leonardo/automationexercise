import { fakerDE as faker } from '@faker-js/faker';

 export const userData = {
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

//informações para logins 
export const login = {
    EMAIL: Cypress.env("USER_EMAIL"),
    PASSWORD: Cypress.env("USER_PASSWORD"),
    NAME: "CypressTester"
}

//variaveis para preencher a função de navegação
export const contains = { 
    HOME: ' Home',
    PRODUCTS: ' Products',
    CART: ' Cart',
    SIGNUP_LOGIN: ' Signup / Login',
    TEST_CASES: ' Test Cases',
    API_TEST: ' API Testing',
    VIDEO: ' Video Tutorials',
    CONTACT: ' Contact us'
}