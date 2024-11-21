import {Evento} from '../evento'
import {Id} from '../shared'

const eventos: Evento[] = [
    {
        id: Id.novo(),
        alias: 'evento-fullstack',
        senha: 'senha123',
        nome: 'Desenvolvimento Fullstack',
        data: new Date('2024-12-01T09:00:00Z'),
        local: 'Garanhuns, PE',
        descricao: 'Um evento completo para aprender desenvolvimento fullstack.',
        imagem:
        "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
        imagemBackground:
        "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
        publicoEsperado: 200,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Andressa Souza',
                email: 'andressa@gmail.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdAcompanhantes: 2,
            },
            {
                id: Id.novo(),
                nome: 'Eduardo Lima',
                email: 'eduardo@gmail.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdAcompanhantes: 3,
            },
            {
                id: Id.novo(),
                nome: 'Karolina Pinheiro',
                email: 'karolina@gmail.com',
                confirmado: true,
                possuiAcompanhante: false,
                qtdAcompanhantes: 0,
            },
            {
                id: Id.novo(),
                nome: 'Renan Silva',
                email: 'renan@gmail.com',
                confirmado: false,
                possuiAcompanhante: false,
                qtdAcompanhantes: 0,
            }
        ]
    },

    {
        id: Id.novo(),
        alias: 'evento-javaScript',
        senha: 'senha123',
        nome: 'Desenvolvimento Front-End',
        data: new Date('2024-12-01T09:00:00Z'),
        local: 'Garanhuns, PE',
        descricao: 'Um evento completo para aprender desenvolvimento front-end.',
        imagem:
        "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
        imagemBackground:
        "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
        publicoEsperado: 150,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Marcela Gomes',
                email: 'marcela@gmail.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdAcompanhantes: 2,
            },
            {
                id: Id.novo(),
                nome: 'Eduardo Lima',
                email: 'eduardo@gmail.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdAcompanhantes: 1,
            },
            {
                id: Id.novo(),
                nome: 'Karol Melo',
                email: 'karol@gmail.com',
                confirmado: true,
                possuiAcompanhante: false,
                qtdAcompanhantes: 0,
            },
            {
                id: Id.novo(),
                nome: 'Ramon Souza',
                email: 'ramon@gmail.com',
                confirmado: false,
                possuiAcompanhante: false,
                qtdAcompanhantes: 0,
            }
        ]
    }
]
export default eventos;