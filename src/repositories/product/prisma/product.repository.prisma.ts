import { Product } from './../../../entities/product'
import { PrismaClient } from '@prisma/client'
import { ProductRepository } from '../product.repository'

// Implementa a interface ProductRepository utilizando o Prisma como ORM.
export class ProductRepositoryPrisma implements ProductRepository {
  // Construtor privado que recebe uma instância do PrismaClient, usada para interagir com o banco de dados.
  private constructor(readonly prisma: PrismaClient) {}

  // Método estático para criar uma instância da classe, garantindo que seja injetada uma instância de PrismaClient.
  public build(prisma: PrismaClient) {
    return new ProductRepositoryPrisma(prisma)
  }

  // Método para salvar um produto no banco de dados.
  public async save(product: Product): Promise<void> {
    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    }
    // Usa o Prisma para criar um novo registro de produto.
    await this.prisma.product.create({ data })
  }

  // Método para listar todos os produtos do banco de dados.
  public async list(): Promise<Product[]> {
    const aProduct = await this.prisma.product.findMany()

    // Converte os registros do banco em instâncias da entidade Product.
    const product: Product[] = aProduct.map((p) => {
      const { id, name, price, quantity } = p
      return Product.with(id, name, price, quantity)
    })

    return product
  }

  // Método para atualizar um produto existente no banco de dados.
  public async update(product: Product): Promise<void> {
    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    }

    // Usa o Prisma para atualizar o produto baseado no ID.
    await this.prisma.product.update({
      where: { id: product.id },
      data,
    })
  }

  // Método para encontrar um produto pelo ID no banco de dados.
  public async find(id: string): Promise<Product | null> {
    const aProduct = await this.prisma.product.findUnique({ where: { id } })

    if (!aProduct) {
      return null // Retorna null se o produto não for encontrado.
    }

    // Converte o registro encontrado em uma instância da entidade Product.
    const { name, price, quantity } = aProduct
    const product = Product.with(id, name, price, quantity)

    return product
  }
}
