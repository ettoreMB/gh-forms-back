import express from 'express';
import { PrismaContactsRepository } from './repositories/prisma/prisma-contacts-repository';
import { PrismaResultsPesquisaMedicosTraumaRepository } from './repositories/prisma/prisma-results-pesquisa-medicos-trauma';
import { PrismaResultsRepository } from './repositories/prisma/prisma-results-repository';
import { CreateContactUseCase } from './useCases/createContactUseCase';
import { SaveResponsesPesquisasMedicosTraumaUseCase } from './useCases/pesquisas_medicos_trauma/saveResponsesPesquisasMedicosTraumaUseCase';
import { SaveResponseUseCase } from './useCases/saveResponsesUseCase';

export const routes = express.Router();


routes.post('/contact', async (req, res) => {
  const contactRepository = new PrismaContactsRepository();
  const createContactUsCase = new CreateContactUseCase(contactRepository);

  const { nome, email, telefone, cargo, empresa } = req.body;

  await createContactUsCase.execute({ nome, email, telefone, cargo, empresa });

  return res.status(201).send("Contato criado com sucesso");
})


routes.post('/results', async (req, res) => {
  const data = req.body;
  const resultRepository = new PrismaResultsRepository();
  const saveResultsUseCase = new SaveResponseUseCase(resultRepository);

  await saveResultsUseCase.execute(data.data);
  return res.status(201).send('Pesquisa salava com sucesso')
})

routes.post('/results_pesquisa_medicos_trauma', async (req, res) => {
  const data = req.body;
  const resultRepository = new PrismaResultsPesquisaMedicosTraumaRepository();
  const saveResultUseCase = new SaveResponsesPesquisasMedicosTraumaUseCase(resultRepository);

  await saveResultUseCase.execute(data.data);
  return res.status(201).send('Pesquisa salva com sucesso')
})