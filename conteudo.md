# **SISTEMA (Multi-Tenancy)**

## **Servidor IP: 123**

### **Forma 1:**

Domínios/Subdomínios acessando o mesmo lugar e, a partir de quem acessou, ele funciona de forma diferente.

- **Domínio:** sistema.com -> IP 123 // Tenant
- **Domínio:** exemplo.com.br -> IP 123
- **Domínio:** legado.com.br -> IP 123

### **Forma 2:**

Através do próprio link, eu já identifico o cliente que está acessando.

- **Domínio:** sistemaxzy.com/cliente1
- **Domínio:** sistemaxzy.com/cliente2
- **Domínio:** sistemaxzy.com/cliente3

### **Forma 3:**

#### **API Multi-Tenancy**

Pense que eu quero pegar os usuários da API, mas ela retorna 1000 usuários, porém 300 usuários são do cliente 1, 300 do cliente 2 e 400 do cliente 3, e preciso filtrar a listagem de usuários por cliente.

Uma das maneiras é passando um parâmetro para os **HEADERS** da requisição.

- **GET** api.sistemaxzy.com/users **HEADERS** Authorization = cliente 1
- **GET** api.sistemaxzy.com/users **HEADERS** Authorization = cliente 2
- **GET** api.sistemaxzy.com/users **HEADERS** Authorization = cliente 3

---

# **BANCO DE DADOS**

Existem algumas formas. Uma das formas é ter um banco de dados para cada cliente, mas não é a mais comum, não é a mais utilizada quando se fala em um sistema multi-tenancy. Talvez essa opção possa ter mais segurança, deixa os bancos de dados separados e, se um banco de dados der problema, não afeta os outros.

- **Um banco de dados (com a mesma estrutura) para cada cliente.**
- **Um banco de dados único com flags para cada cliente.** _Geralmente é a mais utilizada._

Não é porque tem somente um banco de dados que é menos seguro. A forma que você faz o sistema é o que vai delimitar se a segurança vai se tornar uma vulnerabilidade real ou é um potencial pouco provável.

Sistemas **Multi-Tenancy** precisam ter backups constantes — se der algum problema no banco de dados, você tem um backup para restaurar.

---

# **Usuários**

```plaintext
- id
- id_tenant -- flag para identificar o cliente
- email
- password
```

## **Benefícios de um sistema Multi-Tenancy**

Quando existe uma alteração no sistema, todos os clientes recebem a atualização ao mesmo tempo. Eu atualizo o servidor e todos os clientes recebem a atualização ao mesmo tempo.

---

## **Algumas práticas (Medidas de segurança) que você deve ter no seu sistema Multi-Tenancy:**

- Ter dois bancos de dados e um banco de dados espelhando o banco de dados principal para você ter um backup em tempo real e um espelhando o outro.
- Backups constantes.

Quanto maior o sistema fica, mais medidas de segurança você vai ter, por exemplo, o próprio servidor espelhado em diversas localidades.
