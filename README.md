# Site Psicólogo Bruno Carlos

Site profissional desenvolvido em Angular 21 com Tailwind CSS para o psicólogo Bruno Carlos, especializado em psicoterapia para casais e adultos.

## Características

- **Design Clássico e Elegante**: Estética sofisticada com paleta de cores bege, marrom e dourado
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Tipografias Elegantes**: Playfair Display para títulos, Cormorant Garamond para subtítulos e Lato para textos
- **Componentes Modulares**: Estrutura organizada em componentes reutilizáveis

## Tecnologias

- Angular 21
- Tailwind CSS 4
- TypeScript

## Estrutura do Projeto

```
src/app/
├── components/
│   ├── header/          # Cabeçalho com navegação
│   ├── hero/            # Seção principal com imagem e título
│   ├── about/           # Seção sobre o psicólogo
│   ├── services/        # Serviços oferecidos
│   ├── how-it-works/    # Processo de trabalho em 3 passos
│   ├── testimonials/    # Depoimentos de clientes
│   ├── contact/         # Formulário de contato
│   └── footer/          # Rodapé
└── styles.css           # Estilos globais e configuração Tailwind
```

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm start
```

3. Acesse `http://localhost:4200` no navegador

## Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/psicarlos-site/`.

## Paleta de Cores

- **Bege Claro**: `#E6D8C8`
- **Bege Areia**: `#DCCBB5`
- **Bege Escuro**: `#CBB79E`
- **Cinza Quente**: `#8A857D`
- **Marrom Escuro**: `#2E2A26`
- **Dourado**: `#B08D57`

## Personalização

### Imagens

Substitua as imagens placeholder:
- Hero: `src/app/components/hero/hero.html` - linha com placeholder
- Consultório: `src/app/components/how-it-works/how-it-works.html` - linha com placeholder

### Informações de Contato

Atualize as informações em:
- `src/app/components/contact/contact.html` - telefone e email
- `src/app/components/footer/footer.html` - CRP e informações legais

### Conteúdo

Edite o conteúdo diretamente nos arquivos HTML de cada componente.

## Licença

Todos os direitos reservados - Psicólogo Bruno Carlos
