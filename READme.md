# Exemplo de como fazer o post nessa aplicação

{
	"name": String,
	"registration": Number(3 a 9999),
	"active": true,
	"adress": {
		"city": string,
		"state": string
	}
}

### Do que se trata esse projeto?

Esse projeto foi feito para criação de um CRUD com node e MongoDB. Foi usado juntamente com esse projeto o Insomnia e Robo 3T para fazer os testes de acordo com o andamento da aplicação.

No uso do Insomnia, devemos colocar esse modelo para fazer os métodos HTTP.

# Como iniciar? 

Na linha de comando, use a seguinte linha de código: 

npx nodemon index.js

Tenha se certificado de instalar no pelo terminal a pasta node_modules para ter as dependências necessárias ´do projeto. E claro, caso queira ser um pouco mais prático, no arquivo package.json já tem na parte "scripts" o comando pronto para rodar com apenas um clique.

#### controllers

Essa pasta tem a tarefa de exportar nossos métodos HTTP que foram criados com a extensão mongoose, que nos permite usar o mongoDB juntamente com Node.

#### routes

E bom, esse arquivo nos passam as rotas de página definindo o nosso CRUD, Logo em seguida nós expotamos ele diretamente para o arquivo principal da aplicação, o index.js.


#### index.js

Aqui está o arquivo que irá ser rodado na aplicação, temos nele o uso de mongoose, express, cors, requireDir, BodyParser, enfim, toda a configuração para ser executada. 