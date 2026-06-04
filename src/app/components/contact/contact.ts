import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    nome: '',
    email: '',
    telefone: ''
  };

  onSubmit() {
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', this.formData);
    alert('Obrigado! Entraremos em contato em breve.');
    this.formData = { nome: '', email: '', telefone: '' };
  }
}
