import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
  nomeTabela: string = "";

  inserir(object: T): boolean {
    console.log("Lógica de insert");
    return true;
  }
  atualizar(object: T): boolean {
    console.log("lógica update");
    return true;
  }
  remover(id: number): T {
    console.log("lógica delete");
    return Object();
  }
  selecionar(id: number): T {
    console.log("lógica select");
    return Object();
  }
  selecionarTodos(): [any] {
    console.log("lógica getAll");
    return [Object()];
  }
}
