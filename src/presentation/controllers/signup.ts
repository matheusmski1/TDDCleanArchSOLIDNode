import { HttpRequest } from './protocols/http'
import { MissingParamError } from '../errors/missing-param-errors'
import { badRequest } from '../helper/http-helper'
export class SignUpController {
  // definindo tipo e tipo da resposta
  handle (httpRequest: HttpRequest): any {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
