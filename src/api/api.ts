// Define uma interface chamada "Api" que representa um contrato para iniciar uma API.
export interface Api {
  // Método "start" que deve ser implementado por qualquer classe que utilize essa interface.
  // O método aceita um número como parâmetro, que representa a porta em que a API será iniciada.
  start(port: number):void;
}
