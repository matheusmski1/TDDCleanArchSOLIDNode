import { MissingParamError } from '../errors/missing-param-errors'
import { SignUpController } from './signup'
describe('SignUp Controller', () => {
  test('Should Return 400 if no name is provided', () => {
    const sistemUnderTest = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'aaaaaa',
        passwordConfirmation: 'aaaaaa'
      }
    }
    const httpResponse = sistemUnderTest.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should Return 400 if no email is provided', () => {
    const sistemUnderTest = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_NAME',
        password: 'aaaaaa',
        passwordConfirmation: 'aaaaaa'
      }
    }
    const httpResponse = sistemUnderTest.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})
