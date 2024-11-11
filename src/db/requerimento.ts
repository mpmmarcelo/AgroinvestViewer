import mongoose, {Document, Schema} from 'mongoose';

// interface para modelo de requerimento
export interface requerimentoInterface extends Document {
    _id: string
    numeroRequerimento: string
    ano: string
    data: string
    cpf: string
    numeroCI: string
    numeroProtocolo: string
    isento: string
    concluido: string
}

// Definindo o Schema do Requerimento
// o id é criado automaticamente pelo mongoose
const requerimentoSchema: Schema = new Schema({
    numeroRequerimento: {
        type: String,
        required: true,
        trim: true,
    },
    ano: {
        type: String,
        required: true,
    },
    data: {
        type: String, //string pois já vem pronto do Agroinvest
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    numeroCI: {
        type: String,
        required: false, //entra depois
    },
    numeroProtocolo: {
        type: String,
        required: false, //entra depois
    },
    isento: {
        type: String,
        required: false, //entra depois
    },
    concluido: {
        type: String,
        required: false, //entra depois
    },
}, {
    collection: "requerimentos", // Nome da coleção
    versionKey: false //O campo __v é adicionado automaticamente pelo Mongoose para controlar a versão do documento em operações de atualização. Esse campo pode ser desabilitado se você não precisar dessa funcionalidade.
});

// Exportando o modelo com o nome 'User' para ser utilizado em outras partes do projeto
const requerimento = mongoose.model<requerimentoInterface>('User', requerimentoSchema);
export default requerimento;