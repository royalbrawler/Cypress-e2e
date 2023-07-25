import { Main } from './Main'

class Login extends Main {
    // selectors
    #_username = '#userName'
    #_password = '#password'
    #_login = '#login'
    #_invalidLoginMsg = '#name'

    get usernameElement() {
        return cy.get(this.#_username)
    }
    get passwordElement() {
        return cy.get(this.#_password)
    }
    get loginElement() {
        return cy.get(this.#_login)
    }
    get invalidLoginMsgElement() {
        return cy.get(this.#_invalidLoginMsg)
    }

    submitLogin(username, password) {
        cy.get(this.#_username).type(username)
        cy.get(this.#_password).type(password)
        cy.get(this.#_login).click()
    }

    visit() {
        cy.visit('/login')
    }
}

export const LoginPage = new Login()
