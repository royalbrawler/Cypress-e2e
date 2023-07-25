class Main {
    #_header = `div[class="main-header"]`
    #_user = `#userName-value`

    get headerElement() {
        return cy.get(this.#_header)
    }

    get userElement() {
        return cy.get(this.#_user)
    }
}

export { Main }
