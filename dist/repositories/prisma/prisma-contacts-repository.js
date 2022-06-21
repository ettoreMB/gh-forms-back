"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaContactsRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaContactsRepository {
    async create({ nome, email, telefone, cargo, empresa }) {
        await prisma_1.prisma.contato.create({
            data: {
                nome,
                email,
                telefone,
                cargo,
                empresa
            }
        });
    }
}
exports.PrismaContactsRepository = PrismaContactsRepository;
