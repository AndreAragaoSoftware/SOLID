// Define tipos DTO (Data Transfer Objects) para as respostas das operações de venda, compra e listagem de produtos.
// Cada DTO especifica a estrutura dos dados que serão retornados ao usuário após a operação.

export type SellOutputDto = {
  id: string // ID do produto vendido.
  balance: number // Saldo restante do produto após a venda.
}

export type BuyOutputDto = {
  id: string // ID do produto comprado.
  balance: number // Saldo restante do produto após a compra.
}

export type ListOutputDto = {
  products: {
    // Lista de produtos disponíveis.
    id: string // ID do produto.
    name: string // Nome do produto.
    price: number // Preço do produto.
    balance: number // Quantidade disponível do produto.
  }[];
}

// Define uma interface "ProductServices" que estabelece os métodos para realizar operações sobre produtos,
// como vender, comprar e listar produtos. Cada método retorna uma Promise com os respectivos DTOs.

export interface ProductServices {
  sell(id: string, amount: number): Promise<SellOutputDto> // Vende uma quantidade de um produto e retorna os detalhes da venda.
  buy(id: string, amount: number): Promise<BuyOutputDto> // Compra uma quantidade de um produto e retorna os detalhes da compra.
  list(): Promise<ListOutputDto> // Lista todos os produtos disponíveis com suas informações.
}
