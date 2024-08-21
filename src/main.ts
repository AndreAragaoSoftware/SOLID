import { ApiExpress } from './api/express/api.express'
import { ProductController } from './api/express/controllers/product.controller'

function main() {
  const api = ApiExpress.build()
  const controller = ProductController.build()

  // Adiciona as rotas diretamente no main.ts
  api.addGetRouter('/products', controller.list)
  api.addPostRouter('/products/:id/buy', controller.buy)
  api.addPostRouter('/products/:id/sell', controller.sell)
  api.addPostRouter('/products/create', controller.create)

  // Inicia o servidor e imprime as rotas
  api.start(8000)
}

main()
