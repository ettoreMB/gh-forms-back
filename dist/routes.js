"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_contacts_repository_1 = require("./repositories/prisma/prisma-contacts-repository");
const prisma_results_pesquisa_medicos_trauma_1 = require("./repositories/prisma/prisma-results-pesquisa-medicos-trauma");
const prisma_results_repository_1 = require("./repositories/prisma/prisma-results-repository");
const prisma_hospitais_repository_1 = require("./repositories/prisma/prisma_hospitais_repository");
const createContactUseCase_1 = require("./useCases/createContactUseCase");
const saveResponsesPesquisaHospitais_1 = require("./useCases/pesquisas_hospitais_trauma/saveResponsesPesquisaHospitais");
const saveResponsesPesquisasMedicosTraumaUseCase_1 = require("./useCases/pesquisas_medicos_trauma/saveResponsesPesquisasMedicosTraumaUseCase");
const saveResponsesUseCase_1 = require("./useCases/saveResponsesUseCase");
exports.routes = express_1.default.Router();
exports.routes.post('/contact', async (req, res) => {
    const contactRepository = new prisma_contacts_repository_1.PrismaContactsRepository();
    const createContactUsCase = new createContactUseCase_1.CreateContactUseCase(contactRepository);
    const { nome, email, telefone, cargo, empresa } = req.body;
    await createContactUsCase.execute({ nome, email, telefone, cargo, empresa });
    return res.status(201).send("Contato criado com sucesso");
});
exports.routes.post('/results', async (req, res) => {
    const data = req.body;
    const resultRepository = new prisma_results_repository_1.PrismaResultsRepository();
    const saveResultsUseCase = new saveResponsesUseCase_1.SaveResponseUseCase(resultRepository);
    await saveResultsUseCase.execute(data.data);
    return res.status(201).send('Pesquisa salava com sucesso');
});
exports.routes.post('/results_pesquisa_medicos_trauma', async (req, res) => {
    const data = req.body;
    const resultRepository = new prisma_results_pesquisa_medicos_trauma_1.PrismaResultsPesquisaMedicosTraumaRepository();
    const saveResultUseCase = new saveResponsesPesquisasMedicosTraumaUseCase_1.SaveResponsesPesquisasMedicosTraumaUseCase(resultRepository);
    await saveResultUseCase.execute(data.data);
    return res.status(201).send('Pesquisa salva com sucesso');
});
exports.routes.post('/results_pesquisa_hospital', async (req, res) => {
    const data = req.body;
    const resultRepository = new prisma_hospitais_repository_1.PrismaResultsPesquisaHospitalTraumaRepository();
    const saveResultUseCase = new saveResponsesPesquisaHospitais_1.saveResponsesPesquisasHospitaisUseCase(resultRepository);
    await saveResultUseCase.execute(data.data);
    return res.status(201).send('Pesquisa salva com sucesso');
});
