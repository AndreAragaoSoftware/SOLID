import { Product } from '../../../entities/product'
import { ProductRepository } from '../../../repositories/product/product.repository'
import {
  BuyOutputDto,
  ListOutputDto,
  ProductServices,
  SellOutputDto,
  CreateOutputDto
} from './../product.services'

// Implementa a interface ProductServices, que define os métodos para vender, comprar e listar produtos.
export class ProductServicesImplementation implements ProductServices {
  // Construtor privado que recebe um repositório de produtos e o armazena como uma propriedade interna.
  // A classe só pode ser instanciada usando o método estático build.
  private constructor(readonly repository: ProductRepository) {}

  // Método estático para criar uma nova instância da classe, garantindo a injeção do repositório.
  public static build(repository: ProductRepository) {
    return new ProductServicesImplementation(repository)
  }

  // Implementação do método sell, que realiza a venda de um produto.
  // Verifica se o produto existe, realiza a venda, atualiza o produto no repositório
  // e retorna um DTO com o saldo atualizado.
  public async sell(id: string, amount: number): Promise<SellOutputDto> {
    const aProduct = await this.repository.find(id)

    if (!aProduct) {
      throw new Error('O produto ' + id + ' não foi encontrado')
    }

    aProduct.sell(amount)
    await this.repository.update(aProduct)

    const output: SellOutputDto = {
      id: aProduct.id,
      balance: aProduct.quantity,
    }

    return output
  }

  // Implementação do método buy, que realiza a compra de um produto.
  // Verifica se o produto existe, realiza a compra, atualiza o produto no repositório
  // e retorna um DTO com o saldo atualizado.
  public async buy(id: string, amount: number): Promise<BuyOutputDto> {
    const aProduct = await this.repository.find(id)

    if (!aProduct) {
      throw new Error('O produto ' + id + ' não foi encontrado')
    }

    aProduct.buy(amount)
    await this.repository.update(aProduct)

    const output: BuyOutputDto = {
      id: aProduct.id,
      balance: aProduct.quantity,
    }

    return output
  }

  // Implementação do método list, que retorna uma lista de todos os produtos.
  // Recupera os produtos do repositório, mapeia-os para um formato específico,
  // e retorna um DTO contendo essa lista.
  public async list(): Promise<ListOutputDto> {
    const aProduct = await this.repository.list()

    const products = aProduct.map((p) => {
      return {
        id: p.id,
        name: p.name,
        price: p.price,
        balance: p.quantity,
      }
    })

    const output: ListOutputDto = {
      products,
    }

    return output
  }

  public async create(name: string, price: number): Promise<CreateOutputDto> {
    const aProduct = Product.create(name, price);

    await this.repository.save(aProduct);

    const output: CreateOutputDto = {
      id: aProduct.id,
      balance: aProduct.quantity
    }

    return output
  }
}
