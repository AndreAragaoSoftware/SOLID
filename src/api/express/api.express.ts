import { Api } from '../api'
import express, { Express, Request, Response } from 'express'

// Implementa a interface Api usando o framework Express.
export class ApiExpress implements Api {
  // Construtor privado que recebe uma instância do Express como parâmetro.
  // Isso impede que a classe seja instanciada diretamente.
  private constructor(readonly app: Express) {}

  // Método estático para criar uma instância da classe.
  // Configura o Express e retorna uma instância de ApiExpress.
  public static build() {
    const app = express()
    app.use(express.json()) // Configura o middleware para JSON.
    return new ApiExpress(app)
  }

  // Método para adicionar uma rota GET à API.
  // Recebe o caminho da rota e um manipulador assíncrono.
  public addGetRouter(
    path: string,
    handle: (req: Request, res: Response) => Promise<void>
  ): void {
    this.app.get(path, handle)
  }

  // Método para adicionar uma rota POST à API.
  // Recebe o caminho da rota e um manipulador assíncrono.
  public addPostRouter(
    path: string,
    handle: (req: Request, res: Response) => Promise<void>
  ): void {
    this.app.post(path, handle)
  }

  // Método para iniciar a API na porta especificada.
  // Inicia o servidor e imprime todas as rotas configuradas.
  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`)
      this.printRouter() // Imprime todas as rotas registradas.
    })
  }

  // Método privado que imprime todas as rotas configuradas na API.
  private printRouter() {
    const routes = this.app._router.stack
      .filter((route: any) => route.route) // Filtra as rotas registradas.
      .map((route: any) => {
        return {
          method: route.route.stack[0].method, // Método da rota (GET, POST, etc.).
          path: route.route.path, // Caminho da rota.
        }
      })

    console.log(routes) // Exibe as rotas no console.
  }
}
