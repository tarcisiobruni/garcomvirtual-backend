import { Pagamento } from './../entity/PagamentoEntity';
import { getRepository } from 'typeorm';
import { HandleErr } from '../error/HandleError';

export let save = async (body: any): Promise<Pagamento[]> => {
    try {
        const repository = getRepository(Pagamento);
        const Pagamentos = repository.create(body);
        const savedData = await repository.save(Pagamentos);
        return savedData;
    } catch (err) {
        const det = HandleErr(err);
        throw new Error(`{"codigo": ${det.codigo},"message": ${det.message}}`);
    }
};


