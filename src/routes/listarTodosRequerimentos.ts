import type {FastifyInstance} from "fastify";
import Requerimento, {requerimentoInterface} from "../db/requerimento";

export function listarTodosRequerimentos(app: FastifyInstance) {
    app.get('/requerimentos', async () => {
        try {
            /** Busca todos os documentos da coleção
            https://mongoosejs.com/docs/queries.html **/
            const requerimentos: requerimentoInterface[] = await Requerimento.find();

            return requerimentos;

        } catch (error) {
            console.error('Erro ao listar requerimentos:', error);
            throw error; // Relança o erro para tratamento posterior
        }
    })
}




