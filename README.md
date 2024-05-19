# BACKEND

*Códigos de status de respostas HTTP*

    201: Created
    202: Accepted
    400: Pedido incorreto
    401: Não autorizado
    403 Proibido:
    404: Não encontrado
    405: Método não permitido
    406: Não aceitável
    408: Tempo limite da solicitação
    409: Conflito
    412: Falha na pré-condição
    429: solicitações em excesso
    500: Erro interno do servidor
    501: Não implementado
    502: Gateway ruim
    503: serviço não disponível
    504: Tempo limite do gateway

*Métodos de requisição HTTP*

O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como HTTP Verbs (Verbos HTTP). 

    GET: devem retornar apenas dados
    POST: é utilizado para submeter uma entidade a um recurso específico
    DELETE: remove um recurso específico
    UPDATE: atuaçiza um recurso específico

*Conecção com banco de dados*

    host: "localhost",
    database: "database_name",
    user: "usuario",
    password: "senha",
    port: "3306"

# Insominia

Insomnia é um framework Open Source para desenvolvimento/teste de API Clients. Ele pode ser usado para envio de requisições REST, SOAP, GraphQ e GRPC. Com esta ferramenta torna-se possível realizar a documentação, automação e com a sua versão CLI tools é possível implementar testes em pipeline

