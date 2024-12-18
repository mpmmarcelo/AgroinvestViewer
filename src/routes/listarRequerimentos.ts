import type {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import Requerimento from "../db/requerimento";

// Interface para tipar os parâmetros da rota
interface ListarParams {
    ano: string;
    numero: string;
}

export function listarRequerimentos(app: FastifyInstance) {
// Corrige qualquer problema de protótipo nulo convertendo `req.params` em um objeto normal (chatgpt)
    app.get<{ Params: ListarParams }>('/requerimentos/:ano/:numero', async (req: FastifyRequest<{
            Params: ListarParams
        }>, res: FastifyReply) => {
            try {
                const params = {...req.params}; // Converte para um objeto regular
                const {ano, numero} = params;

                //const requerimento = await Requerimento.find({numeroRequerimento: numero}).where({ano:"2024"});
                const requerimento = await Requerimento.find({ano: ano, numeroRequerimento: numero});
                console.log(requerimento);
                return requerimento;
            } catch (error) {
                console.error('Erro ao listar requerimentos:', error);
                throw error; // Relança o erro para tratamento posterior
            }
        }
    )
}


