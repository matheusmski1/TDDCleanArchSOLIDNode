import { HttpRequest} from './protocols/http'
import { MissingParamError } from '../errors/missing-param-errors'
import { badRequest } from '../helper/http-helper'
import { Controller } from './protocols/controller'
export class SignUpController implements Controller{
  // definindo tipo e tipo da resposta
  handle (httpRequest: HttpRequest): any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
