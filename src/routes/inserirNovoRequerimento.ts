import type {FastifyInstance} from "fastify";
import Requerimento, {requerimentoInterface} from "../db/requerimento";

export function inserirNovoRequerimento(app: FastifyInstance) {
    app.post("/novo", async () => {
        try {
            const novoRequerimento: requerimentoInterface = new Requerimento({
                numeroRequerimento: '2222',
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
            return requerimentoSalvo;
        } catch (error) {
            console.error('Erro ao criar requerimento:', error);
        }
    })
}


