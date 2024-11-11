import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        const database_uri = process.env.DATABASE_URI;

        if (!database_uri) { //se nao conseguiu carregar
            throw new Error('DATABASE_URI não está definida nas variáveis de ambiente');
        }

        await mongoose.connect(database_uri);
        console.log('conectado ao banco de dados!');

    } catch (err) {
        console.error('erro ao se conectar ao banco de dados. Motivo:', err);
        process.exit(1); // Encerra o programa em caso de erro
    }
};
export default connectDB;
