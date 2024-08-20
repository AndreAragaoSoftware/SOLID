// Define um tipo "ProductProps" que descreve as propriedades de um produto.
// Esse tipo inclui um ID (string), nome (string), preço (number) e quantidade (number).
export type ProductProps = {
  id: string
  name: string
  price: number
  quantity: number
}

// Define uma classe "Product" que encapsula as operações relacionadas a um produto.
export class Product {
  // O construtor da classe é privado, o que significa que instâncias dessa classe
  // só podem ser criadas a partir de métodos estáticos definidos na classe, como o "create".
  // Ele recebe as propriedades do produto como um objeto "props" do tipo "ProductProps".
  private constructor(readonly props: ProductProps) {}

  // Método estático "create" que permite criar uma nova instância da classe "Product".
  // Este método é responsável por garantir que um produto seja criado com um ID gerado automaticamente,
  // nome e preço fornecidos, e uma quantidade inicial de 0.
  public static create(name: string, price: number) {
    // Retorna uma nova instância de "Product" com as propriedades necessárias.
    return new Product({
      id: crypto.randomUUID().toString(), // Gera um ID único usando a API de criptografia.
      name, // Usa o nome fornecido na criação.
      price, // Usa o preço fornecido na criação.
      quantity: 0, // Inicializa a quantidade como 0.
    })
  }

  public static with(id: string, name: string, price: number, quantity: number){
    // Retorna uma nova instância de "Product" com as novas propriedades fornecidas.
    return new Product({
      id, // Usa o ID fornecido na criação.
      name, // Usa o nome fornecido na criação.
      price, // Usa o preço fornecido na criação.
      quantity, // Usa a quantidade fornecida na criação.
    });
  }

  // Método getter para acessar o ID do produto.
  public get id() {
    return this.props.id
  }

  // Método getter para acessar o nome do produto.
  public get name() {
    return this.props.name
  }

  // Método getter para acessar o preço do produto.
  public get price() {
    return this.props.price
  }

  // Método getter para acessar a quantidade do produto.
  public get quantity() {
    return this.props.quantity
  }

  public buy(amount: number){
    this.props.quantity += amount; // Aumenta a quantidade do produto.
  }

  public sell(amount: number){
    if(this.props.quantity >= amount){
      this.props.quantity -= amount; // Diminui a quantidade do produto.
    } else {
      throw new Error('Not enough stock'); // Lança uma exceção caso a quantidade seja insuficiente.
    }
  }
}
