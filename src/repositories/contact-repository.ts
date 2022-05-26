export interface ContactCreateData {
  nome: string;
  email: string;
  telefone?: string;
  cargo?: string;
  empresa?: string;
}

export interface ContactRepository {
  create: (data: ContactCreateData) => Promise<void>;
}