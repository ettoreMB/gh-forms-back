import { prisma } from "../../prisma";
import { ContactCreateData, ContactRepository } from "../contact-repository";

export class PrismaContactsRepository implements ContactRepository {
  async create({ nome, email, telefone, cargo, empresa }: ContactCreateData) {
    await prisma.contato.create({
      data: {
        nome,
        email,
        telefone,
        cargo,
        empresa
      }
    })
  }

}