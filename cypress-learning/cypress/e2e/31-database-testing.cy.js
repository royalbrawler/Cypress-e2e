describe('mySQL database testing', () => {
    it('Create a movie table', () => {
        cy.task(
            'queryDb',
            `CREATE TABLE movies(title VARCHAR(50) NOT NULL, genre VARCHAR(30) NOT NULL, director VARCHAR(60) NOT NULL, release_year INT NOT NULL, PRIMARY KEY (title));`
        )
    })

    it('Insert a movie', () => {
        cy.task(
            'queryDb',
            `INSERT INTO movies VALUES ("Joker", "psycho thriller", "Todd Phillips", 2019),("The Batman", "action", "Matt Reeves", 2022);`
        ).then(result => {
            expect(result.affectedRows).to.equal(2)
        })
    })

    it('Select all movies', () => {
        cy.task('queryDb', `SELECT * FROM movies`).then(result => {
            cy.log('First row validation').then(() => {
                expect(result[0].title).to.equal('Joker')
                expect(result[0].genre).to.equal('psycho thriller')
                expect(result[0].director).to.equal('Todd Phillips')
                expect(result[0].release_year).to.equal(2019)
            })

            cy.log('Second row validation').then(() => {
                expect(result[1].title).to.equal('The Batman')
                expect(result[1].genre).to.equal('action')
                expect(result[1].director).to.equal('Matt Reeves')
                expect(result[1].release_year).to.equal(2022)
            })
        })
    })

    it('Update a movie', () => {
        cy.task(
            'queryDb',
            `UPDATE movies SET genre = "test pulna boza" WHERE title = "Joker"`
        ).then(result => {
            expect(result.changedRows).to.equal(1)
        })

        cy.task('queryDb', `SELECT genre FROM movies WHERE title = "Joker"`).then(
            result => {
                expect(result[0].genre).to.equal('test pulna boza')
            }
        )
    })

    it('Delete the movie table', () => {
        cy.task('queryDb', `DROP TABLE movies`)
    })
})
