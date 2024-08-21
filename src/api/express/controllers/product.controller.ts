import { ProductRepositoryPrisma } from '../../../repositories/product/prisma/product.repository.prisma'
import { ProductServicesImplementation } from '../../../services/product/implementation/product.services.implementation'
import { prisma } from '../../../util/prisma.util'
import { ProductRepository } from './../../../repositories/product/product.repository'
import { Request, Response } from 'express'

// Controlador que lida com as requisições HTTP relacionadas a produtos.
export class ProductController {
  // Construtor privado para impedir a criação direta de instâncias.
  private constructor() {}

  // Método estático para construir uma instância do controlador.
  public static build() {
    return new ProductController()
  }

  // Método para criar um novo produto.
  // Recebe os dados da requisição, usa os serviços para criar o produto,
  // e responde com os dados do produto criado.
  public async create(request: Request, response: Response) {
    const { name, price } = request.body

    const aRepository = ProductRepositoryPrisma.build(prisma) // Cria o repositório usando Prisma
    const aService = ProductServicesImplementation.build(aRepository) // Cria o serviço com o repositório

    const output = await aService.create(name, price) // Chama o serviço para criar o produto

    const data = {
      id: output.id,
      name,
      price,
      balance: output.balance,
    }

    response.status(201).json(data).send() // Envia a resposta com o produto criado
  }

  // Método para listar todos os produtos.
  // Usa os serviços para obter a lista de produtos e responde com os dados.
  public async list(request: Request, response: Response) {
    const aRepository = ProductRepositoryPrisma.build(prisma) // Cria o repositório usando Prisma
    const aService = ProductServicesImplementation.build(aRepository) // Cria o serviço com o repositório

    const output = await aService.list() // Chama o serviço para listar os produtos

    const data = {
      products: output.products,
    }

    response.status(200).json(data).send() // Envia a resposta com a lista de produtos
  }

  // Método para comprar uma quantidade de um produto.
  // Recebe o ID e a quantidade da requisição, usa os serviços para comprar o produto,
  // e responde com o saldo atualizado.
  public async buy(request: Request, response: Response) {
    const { id } = request.params
    const { amount } = request.body

    const aRepository = ProductRepositoryPrisma.build(prisma) // Cria o repositório usando Prisma
    const aService = ProductServicesImplementation.build(aRepository) // Cria o serviço com o repositório

    const output = await aService.buy(id, amount) // Chama o serviço para comprar o produto

    const data = {
      id: output.id,
      balance: output.balance,
    }

    response.status(200).json(data).send() // Envia a resposta com o saldo atualizado
  }

  // Método para vender uma quantidade de um produto.
  // Recebe o ID e a quantidade da requisição, usa os serviços para vender o produto,
  // e responde com o saldo atualizado ou um erro, se houver.
  public async sell(request: Request, response: Response): Promise<void> {
    try {
      const { id } = request.params
      const { amount } = request.body

      // Cria o repositório usando Prisma
      const aRepository = ProductRepositoryPrisma.build(prisma)

      // Cria o serviço com o repositório
      const aService = ProductServicesImplementation.build(aRepository)

      // Chama o serviço para vender o produto
      const output = await aService.sell(id, amount)

      // Prepara os dados da resposta com o saldo atualizado
      const data = {
        id: output.id,
        balance: output.balance,
      }

      // Envia a resposta com o saldo atualizado
      response.status(200).json(data)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred'
      response.status(400).json({ message: errorMessage })
    }
  }
}
