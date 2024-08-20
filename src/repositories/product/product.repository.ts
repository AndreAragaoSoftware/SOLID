
import { Product } from '../../entities/product'

// sem fornecer a implementação desses métodos. Isso é útil para garantir que diferentes implementações
// de repositórios sigam o mesmo conjunto de regras.
export interface ProductRepository {
  // Define um método "save" que deve ser implementado por qualquer classe que implemente esta interface.
  // O método "save" recebe um objeto "product" do tipo "Product" e retorna uma Promise<void>.
  // A ideia é que este método seja responsável por persistir (salvar) o produto em um banco de dados
  // ou qualquer outro tipo de armazenamento. A Promise indica que a operação pode ser assíncrona.
  save(product: Product): Promise<void>

  // Define um método "list" que também deve ser implementado por qualquer classe que implemente esta interface.
  // O método "list" retorna uma Promise que resolve em um array de objetos do tipo "Product".
  // Este método é responsável por retornar uma lista de todos os produtos armazenados.
  list(): Promise<Product[]>

  // O método "update" é responsável por atualizar um produto existente no armazenamento.
  // Ele recebe um objeto "Product" atualizado e retorna uma Promise que resolve com o
  update(product: Product): Promise<void>

  // O método "find" é responsável por procurar um produto existente no armazenamento.
  find(id: string): Promise<Product | null>
}
