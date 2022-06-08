export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  // Definindo com ? deixa a ser opcional.
  body?: any
}
