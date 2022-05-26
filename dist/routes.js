"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_contacts_repository_1 = require("./repositories/prisma/prisma-contacts-repository");
const prisma_results_repository_1 = require("./repositories/prisma/prisma-results-repository");
const createContactUseCase_1 = require("./useCases/createContactUseCase");
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
