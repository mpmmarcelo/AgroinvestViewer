import 'dotenv/config';
import Fastify from "fastify";
import ConnectDB from "./db/db";
import Requerimento, { requerimentoInterface } from './db/requerimento';
import {string} from "zod";

const app = Fastify()

const startServer = async () => {
    try {
        await ConnectDB();

        app.get('/teste', () => {
            return "hello world!"
        })

        app.get('/listar/:numero', async (req, res) => {
            const  { numero } = req.params;
            console.log(req.params)
            //return listarRequerimentos(numero);
        })

        app.listen({port: 3333}).then(() => {
            console.log("server running!")
        })
    } catch (err) {
        console.error('Erro ao iniciar o servidor:', err);
        process.exit(1); // Encerra o programa em caso de erro
    }
};

startServer();

const criarRequerimento = async () => {
    try {
        const novoRequerimento: requerimentoInterface = new Requerimento({
            numeroRequerimento: '123456',
            ano: '2024',
            data: '07-11-2024',
            cpf: '123.456.789-00',
            numeroCI: 'CI-789',
            numeroProtocolo: 'PROT-1234',
            isento: '',
            concluido: '',
        });

        // Salva o requerimento no banco de dados
        const requerimentoSalvo = await novoRequerimento.save();

        console.log('Requerimento criado com sucesso:', requerimentoSalvo);
    } catch (error) {
        console.error('Erro ao criar requerimento:', error);
    }
};

//criarRequerimento();

const listarRequerimentos = async (numero: string) => {
    try {
        // Busca todos os documentos da coleção
        //const requerimentos: requerimentoInterface[] = await Requerimento.find();
        //https://mongoosejs.com/docs/queries.html
        const requerimento = await Requerimento.find({"numeroRequerimento":numero})

        // Exibe os documentos no console
        //console.log('Lista de Requerimentos:', requerimentos);
        console.log(requerimento);
        //return requerimentos;
        return requerimento;
    } catch (error) {
        console.error('Erro ao listar requerimentos:', error);
        throw error; // Relança o erro para tratamento posterior
    }
};

// Chamando a função para listar os documentos
//listarRequerimentos("123456");




