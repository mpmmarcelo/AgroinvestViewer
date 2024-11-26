import 'dotenv/config';
import Fastify, {FastifyRequest, FastifyReply} from "fastify";
import ConnectDB from "./db/db";

import {inserirNovoRequerimento} from './routes/inserirNovoRequerimento';
import {listarRequerimentos} from "./routes/listarRequerimentos";
import {listarTodosRequerimentos} from './routes/listarTodosRequerimentos';

const app = Fastify()

const startServer = async () => {
    try {
        await ConnectDB();

        //registra rotas externas no sv
        app.register(inserirNovoRequerimento); //ver no nlw como puxava do body
        app.register(listarRequerimentos); //pronto
        app.register(listarTodosRequerimentos); //pronto

        app.listen({port: 3333}).then(() => {
            console.log("server running!")
        })
    } catch (err) {
        console.error('Erro ao iniciar o servidor:', err);
        process.exit(1); // Encerra o programa em caso de erro
    }
};

startServer();




