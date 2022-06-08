import { HttpRequest } from './protocols/http'
import { MissingParamError } from '../errors/missing-param-errors'

export class SignUpController {
  // definindo tipo e tipo da resposta
  handle (httpRequest: HttpRequest): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
