import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosKey = 'usuarios';  // Chave para localStorage

  constructor() { }

  // Função para salvar um novo usuário no localStorage
  salvarUsuario(usuario: any): void {
    const usuarios = this.obterUsuarios();
    if (!usuario.id) { // Gera um ID apenas se o usuário não tiver um (ou seja, um novo usuário)
      usuario.id = Math.random().toString(36).substring(2, 9); // Gera um ID único
    }
    usuarios.push(usuario);
    localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
  }

  // Função para obter os usuários do localStorage
  obterUsuarios(): any[] {
    const usuarios = localStorage.getItem(this.usuariosKey);
    return usuarios ? JSON.parse(usuarios) : [];
  }

  atualizarUsuario(usuarioEditado: any): void {
    const usuarios = this.obterUsuarios();
    const index = usuarios.findIndex(usuario => usuario.id === usuarioEditado.id);

    if (index !== -1) {
        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!usuarioEditado.nome || !usuarioEditado.email || !usuarioEditado.id) {
            console.error("Campos obrigatórios não preenchidos.");
            return;
        }

        // Atualiza o usuário no array
        usuarios[index] = usuarioEditado;

        // Salva o array atualizado no localStorage
        localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
        console.log("Usuário atualizado com sucesso!");
    } else {
        console.warn("Usuário com o ID fornecido não encontrado.");
    }
}

  // Função para deletar um usuário específico
  deletarUsuario(email: string): void {
    let usuarios = this.obterUsuarios();
    usuarios = usuarios.filter(usuario => usuario.email !== email); // Remove o usuário
    localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios)); // Atualiza o localStorage
  }
}
