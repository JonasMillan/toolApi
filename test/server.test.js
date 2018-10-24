const request = require('supertest')
const assert = require('chai').assert
const server = require('../server.js')

describe("Get/ response", () => {
    it('testing route', (done) => {
        request(server)
        .get("/?text=test")
        .expect(/test/,done)
    })
})