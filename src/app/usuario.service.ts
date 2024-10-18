import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosKey = 'usuarios';  // Chave para localStorage

  constructor() { }
    
  // Função para salvar o usuário no localStorage
  salvarUsuario(usuario: any): void {
    const usuarios = this.obterUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
  }
  
  // Função para obter os usuários do localStorage
  obterUsuarios(): any[] {
    const usuarios = localStorage.getItem(this.usuariosKey);
    return usuarios ? JSON.parse(usuarios) : [];
  }

  // Função para atualizar um usuário específico no localStorage
  atualizarUsuario(usuarioEditado: any): void {
    const usuarios = this.obterUsuarios();
    const index = usuarios.findIndex(usuario => usuario.email === usuarioEditado.email); // Localiza o usuário pelo email
    if (index !== -1) {
      usuarios[index] = usuarioEditado; // Atualiza o usuário
      localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios)); // Salva no localStorage
    }
  }

  // Função para deletar um usuário específico
  deletarUsuario(email: string): void {
    let usuarios = this.obterUsuarios();
    usuarios = usuarios.filter(usuario => usuario.email !== email); // Remove o usuário
    localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios)); // Atualiza o localStorage
  }

}

