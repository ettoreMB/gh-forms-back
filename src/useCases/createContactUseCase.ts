import { ContactRepository } from "../repositories/contact-repository";

export interface CreateContactUseCaseData {
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  empresa: string;
}

export class CreateContactUseCase {
  constructor(
    private contactRepository: ContactRepository,
  ) { }

  async execute(request: CreateContactUseCaseData) {
    const { nome, email, telefone, cargo, empresa } = request;

    if (!nome) throw new Error('Nome é obrigatório');
    if (!email) throw new Error('Nome é obrigatório');


    this.contactRepository.create({
      nome,
      email,
      telefone,
      cargo,
      empresa,
    });
  }
}