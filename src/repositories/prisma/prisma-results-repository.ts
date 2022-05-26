import { ResultDto } from "../../dtos/responsesDto";
import { prisma } from "../../prisma";
import { ResultRepository } from "../result-repository";

export class PrismaResultsRepository implements ResultRepository {
  async create({
    nome,
    email,
    telefone,
    questao_1_grupo_1_Placas_e_Parafusos_para_quadril_ou_pelvis,
    questao_1_grupo_1_Placas_e_Parafusos_extremidades_inferiores,
    questao_1_grupo_1_Placas_e_Parafusos_extremidades_superiores,
    questao_1_grupo_2_Pinos_intramedulares_acetabular,
    questao_1_grupo_2_Pinos_intramedulares_femoral,
    questao_1_grupo_2_Pinos_intramedulares_tibiais,
    questao_1_grupo_3_Parafusos_pequenos_e_canulados,
    questao_1_grupo_3_Parafusos_grandes_e_canulados,
    questao_1_grupo_4_Pinos_intramedulares_femoral,
    questao_1_grupo_4_Fixacao_externa_media,
    questao_1_grupo_4_Pequena_fixacao_externa,
    questao_1_grupo_4_Mini_fixacao_externa,
    questao_1_pergunta_2,
    questao_1_pergunta_3_SP,
    questao_1_pergunta_3_RJ,
    questao_1_pergunta_3_MG,
    questao_1_pergunta_3_RECIFE,
    questao_1_pergunta_3_FORTALEZA,
    questao_1_pergunta_3_OUTROS,
    questao_1_pergunta_4_qtd_publico,
    questao_1_pergunta_4_qtd_privado,
    questao_2_PlacasParaQuadrilPelvis_1,
    questao_2_PlacasParaQuadrilPelvis_2,
    questao_2_PlacasParaQuadrilPelvis_3,
    questao_2_PlacasParaQuadrilPelvis_4,
    questao_2_PlacasExtremidadesInferiores_1,
    questao_2_PlacasExtremidadesInferiores_2,
    questao_2_PlacasExtremidadesInferiores_3,
    questao_2_PlacasExtremidadesInferiores_4,
    questao_2_PlacasExtremidadesSuperiores_1,
    questao_2_PlacasExtremidadesSuperiores_2,
    questao_2_PlacasExtremidadesSuperiores_3,
    questao_2_PlacasExtremidadesSuperiores_4,
    questao_2_ParafusosQuadrilPelvis_1,
    questao_2_ParafusosQuadrilPelvis_2,
    questao_2_ParafusosQuadrilPelvis_3,
    questao_2_ParafusosQuadrilPelvis_4,
    questao_2_ParafusosExtremidadesInferiores_1,
    questao_2_ParafusosExtremidadesInferiores_2,
    questao_2_ParafusosExtremidadesInferiores_3,
    questao_2_ParafusosExtremidadesInferiores_4,
    questao_2_ParafusosExtremidadesSuperiores_1,
    questao_2_ParafusosExtremidadesSuperiores_2,
    questao_2_ParafusosExtremidadesSuperiores_3,
    questao_2_ParafusosExtremidadesSuperiores_4,
    questao_2_PinosIntramedularesUmeral_1,
    questao_2_PinosIntramedularesUmeral_2,
    questao_2_PinosIntramedularesUmeral_3,
    questao_2_PinosIntramedularesUmeral_4,
    questao_2_PinosIntramedularesAcetabulares_1,
    questao_2_PinosIntramedularesAcetabulares_2,
    questao_2_PinosIntramedularesAcetabulares_3,
    questao_2_PinosIntramedularesAcetabulares_4,
    questao_2_PinoIntramedularFemoral_1,
    questao_2_PinoIntramedularFemoral_2,
    questao_2_PinoIntramedularFemoral_3,
    questao_2_PinoIntramedularFemoral_4,
    questao_2_PinosIntramedularesTibiais_1,
    questao_2_PinosIntramedularesTibiais_2,
    questao_2_PinosIntramedularesTibiais_3,
    questao_2_PinosIntramedularesTibiais_4,
    questao_2_ParafusosPequenosCanulados_1,
    questao_2_ParafusosPequenosCanulados_2,
    questao_2_ParafusosPequenosCanulados_3,
    questao_2_ParafusosPequenosCanulados_4,
    questao_2_ParafusosGrandescanulados_1,
    questao_2_ParafusosGrandescanulados_2,
    questao_2_ParafusosGrandescanulados_3,
    questao_2_ParafusosGrandescanulados_4,
    questao_2_GrandesFixaCoesExternas_1,
    questao_2_GrandesFixaCoesExternas_2,
    questao_2_GrandesFixaCoesExternas_3,
    questao_2_GrandesFixaCoesExternas_4,
    questao_2_FixacoesExternasMedias_1,
    questao_2_FixacoesExternasMedias_2,
    questao_2_FixacoesExternasMedias_3,
    questao_2_FixacoesExternasMedias_4,
    questao_2_PequenasFixaCoesExternas_1,
    questao_2_PequenasFixaCoesExternas_2,
    questao_2_PequenasFixaCoesExternas_3,
    questao_2_PequenasFixaCoesExternas_4,
    questao_2_MiniFixacoesExternas_1,
    questao_2_MiniFixacoesExternas_2,
    questao_2_MiniFixacoesExternas_3,
    questao_2_MiniFixacoesExternas_4,
    questao_3_PlacasParaQuadrilPelvis_1,
    questao_3_PlacasParaQuadrilPelvis_2,
    questao_3_PlacasParaQuadrilPelvis_3,
    questao_3_PlacasExtremidadesInferiores_1,
    questao_3_PlacasExtremidadesInferiores_2,
    questao_3_PlacasExtremidadesInferiores_3,
    questao_3_PlacasExtremidadesSuperiores_1,
    questao_3_PlacasExtremidadesSuperiores_2,
    questao_3_PlacasExtremidadesSuperiores_3,
    questao_3_ParafusosQuadrilPelvis_1,
    questao_3_ParafusosQuadrilPelvis_2,
    questao_3_ParafusosQuadrilPelvis_3,
    questao_3_ParafusosExtremidadesInferiores_1,
    questao_3_ParafusosExtremidadesInferiores_2,
    questao_3_ParafusosExtremidadesInferiores_3,
    questao_3_ParafusosExtremidadesSuperiores_1,
    questao_3_ParafusosExtremidadesSuperiores_2,
    questao_3_ParafusosExtremidadesSuperiores_3,
    questao_3_PinosIntramedularesUmeral_1,
    questao_3_PinosIntramedularesUmeral_2,
    questao_3_PinosIntramedularesUmeral_3,
    questao_3_PinosIntramedularesAcetabulares_1,
    questao_3_PinosIntramedularesAcetabulares_2,
    questao_3_PinosIntramedularesAcetabulares_3,
    questao_3_PinoIntramedularFemoral_1,
    questao_3_PinoIntramedularFemoral_2,
    questao_3_PinoIntramedularFemoral_3,
    questao_3_PinosIntramedularesTibiais_1,
    questao_3_PinosIntramedularesTibiais_2,
    questao_3_PinosIntramedularesTibiais_3,
    questao_3_ParafusosPequenosCanulados_1,
    questao_3_ParafusosPequenosCanulados_2,
    questao_3_ParafusosPequenosCanulados_3,
    questao_3_ParafusosGrandescanulados_1,
    questao_3_ParafusosGrandescanulados_2,
    questao_3_ParafusosGrandescanulados_3,
    questao_3_GrandesFixaCoesExternas_1,
    questao_3_GrandesFixaCoesExternas_2,
    questao_3_GrandesFixaCoesExternas_3,
    questao_3_FixacoesExternasMedias_1,
    questao_3_FixacoesExternasMedias_2,
    questao_3_FixacoesExternasMedias_3,
    questao_3_PequenasFixaCoesExternas_1,
    questao_3_PequenasFixaCoesExternas_2,
    questao_3_PequenasFixaCoesExternas_3,
    questao_3_MiniFixacoesExternas_1,
    questao_3_MiniFixacoesExternas_2,
    questao_3_MiniFixacoesExternas_3,
    questao_4,
    questao_5,
    questao_5_pergunta_1,
    questao_5_pergunta_2,
    questao_5_pergunta_3,
    questao_6_PlacasParaQuadrilPelvis_2,
    questao_6_PlacasParaQuadrilPelvis_3,
    questao_6_PlacasParaQuadrilPelvis_4,
    questao_6_PlacasParaQuadrilPelvis_5,
    questao_6_PlacasParaQuadrilPelvis_6,
    questao_6_PlacasParaQuadrilPelvis_7,
    questao_6_PlacasParaQuadrilPelvis_8,
    questao_6_PlacasParaQuadrilPelvis_9,
    questao_6PlacasExtremidadesInferiores_2,
    questao_6PlacasExtremidadesInferiores_3,
    questao_6PlacasExtremidadesInferiores_4,
    questao_6PlacasExtremidadesInferiores_5,
    questao_6PlacasExtremidadesInferiores_6,
    questao_6PlacasExtremidadesInferiores_7,
    questao_6PlacasExtremidadesInferiores_8,
    questao_6PlacasExtremidadesInferiores_9,
    questao_6_PlacasExtremidadesSuperiores_2,
    questao_6_PlacasExtremidadesSuperiores_3,
    questao_6_PlacasExtremidadesSuperiores_4,
    questao_6_PlacasExtremidadesSuperiores_5,
    questao_6_PlacasExtremidadesSuperiores_6,
    questao_6_PlacasExtremidadesSuperiores_7,
    questao_6_PlacasExtremidadesSuperiores_8,
    questao_6_PlacasExtremidadesSuperiores_9,
    questao_6_ParafusosQuadrilPelvis_2,
    questao_6_ParafusosQuadrilPelvis_3,
    questao_6_ParafusosQuadrilPelvis_4,
    questao_6_ParafusosQuadrilPelvis_5,
    questao_6_ParafusosQuadrilPelvis_6,
    questao_6_ParafusosQuadrilPelvis_7,
    questao_6_ParafusosQuadrilPelvis_8,
    questao_6_ParafusosQuadrilPelvis_9,
    questao_6_ParafusosExtremidadesInferiores_2,
    questao_6_ParafusosExtremidadesInferiores_3,
    questao_6_ParafusosExtremidadesInferiores_4,
    questao_6_ParafusosExtremidadesInferiores_5,
    questao_6_ParafusosExtremidadesInferiores_6,
    questao_6_ParafusosExtremidadesInferiores_7,
    questao_6_ParafusosExtremidadesInferiores_8,
    questao_6_ParafusosExtremidadesInferiores_9,
    questao_6_ParafusosExtremidadesSuperiores_2,
    questao_6_ParafusosExtremidadesSuperiores_3,
    questao_6_ParafusosExtremidadesSuperiores_4,
    questao_6_ParafusosExtremidadesSuperiores_5,
    questao_6_ParafusosExtremidadesSuperiores_6,
    questao_6_ParafusosExtremidadesSuperiores_7,
    questao_6_ParafusosExtremidadesSuperiores_8,
    questao_6_ParafusosExtremidadesSuperiores_9,
    questao_6_PinosIntramedularesUmeral_2,
    questao_6_PinosIntramedularesUmeral_3,
    questao_6_PinosIntramedularesUmeral_4,
    questao_6_PinosIntramedularesUmeral_5,
    questao_6_PinosIntramedularesUmeral_6,
    questao_6_PinosIntramedularesUmeral_7,
    questao_6_PinosIntramedularesUmeral_8,
    questao_6_PinosIntramedularesUmeral_9,
    questao_6_PinosIntramedularesAcetabulares_2,
    questao_6_PinosIntramedularesAcetabulares_3,
    questao_6_PinosIntramedularesAcetabulares_4,
    questao_6_PinosIntramedularesAcetabulares_5,
    questao_6_PinosIntramedularesAcetabulares_6,
    questao_6_PinosIntramedularesAcetabulares_7,
    questao_6_PinosIntramedularesAcetabulares_8,
    questao_6_PinosIntramedularesAcetabulares_9,
    questao_6_PinoIntramedularFemoral_2,
    questao_6_PinoIntramedularFemoral_3,
    questao_6_PinoIntramedularFemoral_4,
    questao_6_PinoIntramedularFemoral_5,
    questao_6_PinoIntramedularFemoral_6,
    questao_6_PinoIntramedularFemoral_7,
    questao_6_PinoIntramedularFemoral_8,
    questao_6_PinoIntramedularFemoral_9,
    questao_6_PinosIntramedularesTibiais_2,
    questao_6_PinosIntramedularesTibiais_3,
    questao_6_PinosIntramedularesTibiais_4,
    questao_6_PinosIntramedularesTibiais_5,
    questao_6_PinosIntramedularesTibiais_6,
    questao_6_PinosIntramedularesTibiais_7,
    questao_6_PinosIntramedularesTibiais_8,
    questao_6_PinosIntramedularesTibiais_9,
    questao_6_ParafusosPequenosCanulados_2,
    questao_6_ParafusosPequenosCanulados_3,
    questao_6_ParafusosPequenosCanulados_4,
    questao_6_ParafusosPequenosCanulados_5,
    questao_6_ParafusosPequenosCanulados_6,
    questao_6_ParafusosPequenosCanulados_7,
    questao_6_ParafusosPequenosCanulados_8,
    questao_6_ParafusosPequenosCanulados_9,
    questao_6_ParafusosGrandescanulados_2,
    questao_6_ParafusosGrandescanulados_3,
    questao_6_ParafusosGrandescanulados_4,
    questao_6_ParafusosGrandescanulados_5,
    questao_6_ParafusosGrandescanulados_6,
    questao_6_ParafusosGrandescanulados_7,
    questao_6_ParafusosGrandescanulados_8,
    questao_6_ParafusosGrandescanulados_9,
    questao_6_GrandesFixaCoesExternas_2,
    questao_6_GrandesFixaCoesExternas_3,
    questao_6_GrandesFixaCoesExternas_4,
    questao_6_GrandesFixaCoesExternas_5,
    questao_6_GrandesFixaCoesExternas_6,
    questao_6_GrandesFixaCoesExternas_7,
    questao_6_GrandesFixaCoesExternas_8,
    questao_6_GrandesFixaCoesExternas_9,
    questao_6_FixacoesExternasMedias_2,
    questao_6_FixacoesExternasMedias_3,
    questao_6_FixacoesExternasMedias_4,
    questao_6_FixacoesExternasMedias_5,
    questao_6_FixacoesExternasMedias_6,
    questao_6_FixacoesExternasMedias_7,
    questao_6_FixacoesExternasMedias_8,
    questao_6_FixacoesExternasMedias_9,
    questao_6_PequenasFixaCoesExternas_2,
    questao_6_PequenasFixaCoesExternas_3,
    questao_6_PequenasFixaCoesExternas_4,
    questao_6_PequenasFixaCoesExternas_5,
    questao_6_PequenasFixaCoesExternas_6,
    questao_6_PequenasFixaCoesExternas_7,
    questao_6_PequenasFixaCoesExternas_8,
    questao_6_PequenasFixaCoesExternas_9,
    questao_6_MiniFixacoesExternas_2,
    questao_6_MiniFixacoesExternas_3,
    questao_6_MiniFixacoesExternas_4,
    questao_6_MiniFixacoesExternas_5,
    questao_6_MiniFixacoesExternas_6,
    questao_6_MiniFixacoesExternas_7,
    questao_6_MiniFixacoesExternas_8,
    questao_6_MiniFixacoesExternas_9,
    questao_7,
    questao_8,
    questao_8_1,
    questao_8_2,
    questao_8_3_1,
    questao_8_3_2,
    questao_8_3_3,
    questao_8_3_4,
    questao_9,
    questao_10,
    questao_10_1,
    questao_10_2,
    questao_10_3,
    questao_10_4,
    comentario_pesquisa,
    recomendacoes
  }: ResultDto
  ): Promise<void> {
    await prisma.result_pesquisa_distribuidor.create({
      data: {
        nome,
        email,
        telefone,
        questao_1_grupo_1_Placas_e_Parafusos_para_quadril_ou_pelvis,
        questao_1_grupo_1_Placas_e_Parafusos_extremidades_inferiores,
        questao_1_grupo_1_Placas_e_Parafusos_extremidades_superiores,
        questao_1_grupo_2_Pinos_intramedulares_acetabular,
        questao_1_grupo_2_Pinos_intramedulares_femoral,
        questao_1_grupo_2_Pinos_intramedulares_tibiais,
        questao_1_grupo_3_Parafusos_pequenos_e_canulados,
        questao_1_grupo_3_Parafusos_grandes_e_canulados,
        questao_1_grupo_4_Pinos_intramedulares_femoral,
        questao_1_grupo_4_Fixacao_externa_media,
        questao_1_grupo_4_Pequena_fixacao_externa,
        questao_1_grupo_4_Mini_fixacao_externa,
        questao_1_pergunta_2,
        questao_1_pergunta_3_SP,
        questao_1_pergunta_3_RJ,
        questao_1_pergunta_3_MG,
        questao_1_pergunta_3_RECIFE,
        questao_1_pergunta_3_FORTALEZA,
        questao_1_pergunta_3_OUTROS,
        questao_1_pergunta_4_qtd_publico,
        questao_1_pergunta_4_qtd_privado,
        questao_2_PlacasParaQuadrilPelvis_1,
        questao_2_PlacasParaQuadrilPelvis_2,
        questao_2_PlacasParaQuadrilPelvis_3,
        questao_2_PlacasParaQuadrilPelvis_4,
        questao_2_PlacasExtremidadesInferiores_1,
        questao_2_PlacasExtremidadesInferiores_2,
        questao_2_PlacasExtremidadesInferiores_3,
        questao_2_PlacasExtremidadesInferiores_4,
        questao_2_PlacasExtremidadesSuperiores_1,
        questao_2_PlacasExtremidadesSuperiores_2,
        questao_2_PlacasExtremidadesSuperiores_3,
        questao_2_PlacasExtremidadesSuperiores_4,
        questao_2_ParafusosQuadrilPelvis_1,
        questao_2_ParafusosQuadrilPelvis_2,
        questao_2_ParafusosQuadrilPelvis_3,
        questao_2_ParafusosQuadrilPelvis_4,
        questao_2_ParafusosExtremidadesInferiores_1,
        questao_2_ParafusosExtremidadesInferiores_2,
        questao_2_ParafusosExtremidadesInferiores_3,
        questao_2_ParafusosExtremidadesInferiores_4,
        questao_2_ParafusosExtremidadesSuperiores_1,
        questao_2_ParafusosExtremidadesSuperiores_2,
        questao_2_ParafusosExtremidadesSuperiores_3,
        questao_2_ParafusosExtremidadesSuperiores_4,
        questao_2_PinosIntramedularesUmeral_1,
        questao_2_PinosIntramedularesUmeral_2,
        questao_2_PinosIntramedularesUmeral_3,
        questao_2_PinosIntramedularesUmeral_4,
        questao_2_PinosIntramedularesAcetabulares_1,
        questao_2_PinosIntramedularesAcetabulares_2,
        questao_2_PinosIntramedularesAcetabulares_3,
        questao_2_PinosIntramedularesAcetabulares_4,
        questao_2_PinoIntramedularFemoral_1,
        questao_2_PinoIntramedularFemoral_2,
        questao_2_PinoIntramedularFemoral_3,
        questao_2_PinoIntramedularFemoral_4,
        questao_2_PinosIntramedularesTibiais_1,
        questao_2_PinosIntramedularesTibiais_2,
        questao_2_PinosIntramedularesTibiais_3,
        questao_2_PinosIntramedularesTibiais_4,
        questao_2_ParafusosPequenosCanulados_1,
        questao_2_ParafusosPequenosCanulados_2,
        questao_2_ParafusosPequenosCanulados_3,
        questao_2_ParafusosPequenosCanulados_4,
        questao_2_ParafusosGrandescanulados_1,
        questao_2_ParafusosGrandescanulados_2,
        questao_2_ParafusosGrandescanulados_3,
        questao_2_ParafusosGrandescanulados_4,
        questao_2_GrandesFixaCoesExternas_1,
        questao_2_GrandesFixaCoesExternas_2,
        questao_2_GrandesFixaCoesExternas_3,
        questao_2_GrandesFixaCoesExternas_4,
        questao_2_FixacoesExternasMedias_1,
        questao_2_FixacoesExternasMedias_2,
        questao_2_FixacoesExternasMedias_3,
        questao_2_FixacoesExternasMedias_4,
        questao_2_PequenasFixaCoesExternas_1,
        questao_2_PequenasFixaCoesExternas_2,
        questao_2_PequenasFixaCoesExternas_3,
        questao_2_PequenasFixaCoesExternas_4,
        questao_2_MiniFixacoesExternas_1,
        questao_2_MiniFixacoesExternas_2,
        questao_2_MiniFixacoesExternas_3,
        questao_2_MiniFixacoesExternas_4,
        questao_3_PlacasParaQuadrilPelvis_1,
        questao_3_PlacasParaQuadrilPelvis_2,
        questao_3_PlacasParaQuadrilPelvis_3,
        questao_3_PlacasExtremidadesInferiores_1,
        questao_3_PlacasExtremidadesInferiores_2,
        questao_3_PlacasExtremidadesInferiores_3,
        questao_3_PlacasExtremidadesSuperiores_1,
        questao_3_PlacasExtremidadesSuperiores_2,
        questao_3_PlacasExtremidadesSuperiores_3,
        questao_3_ParafusosQuadrilPelvis_1,
        questao_3_ParafusosQuadrilPelvis_2,
        questao_3_ParafusosQuadrilPelvis_3,
        questao_3_ParafusosExtremidadesInferiores_1,
        questao_3_ParafusosExtremidadesInferiores_2,
        questao_3_ParafusosExtremidadesInferiores_3,
        questao_3_ParafusosExtremidadesSuperiores_1,
        questao_3_ParafusosExtremidadesSuperiores_2,
        questao_3_ParafusosExtremidadesSuperiores_3,
        questao_3_PinosIntramedularesUmeral_1,
        questao_3_PinosIntramedularesUmeral_2,
        questao_3_PinosIntramedularesUmeral_3,
        questao_3_PinosIntramedularesAcetabulares_1,
        questao_3_PinosIntramedularesAcetabulares_2,
        questao_3_PinosIntramedularesAcetabulares_3,
        questao_3_PinoIntramedularFemoral_1,
        questao_3_PinoIntramedularFemoral_2,
        questao_3_PinoIntramedularFemoral_3,
        questao_3_PinosIntramedularesTibiais_1,
        questao_3_PinosIntramedularesTibiais_2,
        questao_3_PinosIntramedularesTibiais_3,
        questao_3_ParafusosPequenosCanulados_1,
        questao_3_ParafusosPequenosCanulados_2,
        questao_3_ParafusosPequenosCanulados_3,
        questao_3_ParafusosGrandescanulados_1,
        questao_3_ParafusosGrandescanulados_2,
        questao_3_ParafusosGrandescanulados_3,
        questao_3_GrandesFixaCoesExternas_1,
        questao_3_GrandesFixaCoesExternas_2,
        questao_3_GrandesFixaCoesExternas_3,
        questao_3_FixacoesExternasMedias_1,
        questao_3_FixacoesExternasMedias_2,
        questao_3_FixacoesExternasMedias_3,
        questao_3_PequenasFixaCoesExternas_1,
        questao_3_PequenasFixaCoesExternas_2,
        questao_3_PequenasFixaCoesExternas_3,
        questao_3_MiniFixacoesExternas_1,
        questao_3_MiniFixacoesExternas_2,
        questao_3_MiniFixacoesExternas_3,
        questao_4,
        questao_5,
        questao_5_pergunta_1,
        questao_5_pergunta_2,
        questao_5_pergunta_3,
        questao_6_PlacasParaQuadrilPelvis_2,
        questao_6_PlacasParaQuadrilPelvis_3,
        questao_6_PlacasParaQuadrilPelvis_4,
        questao_6_PlacasParaQuadrilPelvis_5,
        questao_6_PlacasParaQuadrilPelvis_6,
        questao_6_PlacasParaQuadrilPelvis_7,
        questao_6_PlacasParaQuadrilPelvis_8,
        questao_6_PlacasParaQuadrilPelvis_9,
        questao_6PlacasExtremidadesInferiores_2,
        questao_6PlacasExtremidadesInferiores_3,
        questao_6PlacasExtremidadesInferiores_4,
        questao_6PlacasExtremidadesInferiores_5,
        questao_6PlacasExtremidadesInferiores_6,
        questao_6PlacasExtremidadesInferiores_7,
        questao_6PlacasExtremidadesInferiores_8,
        questao_6PlacasExtremidadesInferiores_9,
        questao_6_PlacasExtremidadesSuperiores_2,
        questao_6_PlacasExtremidadesSuperiores_3,
        questao_6_PlacasExtremidadesSuperiores_4,
        questao_6_PlacasExtremidadesSuperiores_5,
        questao_6_PlacasExtremidadesSuperiores_6,
        questao_6_PlacasExtremidadesSuperiores_7,
        questao_6_PlacasExtremidadesSuperiores_8,
        questao_6_PlacasExtremidadesSuperiores_9,
        questao_6_ParafusosQuadrilPelvis_2,
        questao_6_ParafusosQuadrilPelvis_3,
        questao_6_ParafusosQuadrilPelvis_4,
        questao_6_ParafusosQuadrilPelvis_5,
        questao_6_ParafusosQuadrilPelvis_6,
        questao_6_ParafusosQuadrilPelvis_7,
        questao_6_ParafusosQuadrilPelvis_8,
        questao_6_ParafusosQuadrilPelvis_9,
        questao_6_ParafusosExtremidadesInferiores_2,
        questao_6_ParafusosExtremidadesInferiores_3,
        questao_6_ParafusosExtremidadesInferiores_4,
        questao_6_ParafusosExtremidadesInferiores_5,
        questao_6_ParafusosExtremidadesInferiores_6,
        questao_6_ParafusosExtremidadesInferiores_7,
        questao_6_ParafusosExtremidadesInferiores_8,
        questao_6_ParafusosExtremidadesInferiores_9,
        questao_6_ParafusosExtremidadesSuperiores_2,
        questao_6_ParafusosExtremidadesSuperiores_3,
        questao_6_ParafusosExtremidadesSuperiores_4,
        questao_6_ParafusosExtremidadesSuperiores_5,
        questao_6_ParafusosExtremidadesSuperiores_6,
        questao_6_ParafusosExtremidadesSuperiores_7,
        questao_6_ParafusosExtremidadesSuperiores_8,
        questao_6_ParafusosExtremidadesSuperiores_9,
        questao_6_PinosIntramedularesUmeral_2,
        questao_6_PinosIntramedularesUmeral_3,
        questao_6_PinosIntramedularesUmeral_4,
        questao_6_PinosIntramedularesUmeral_5,
        questao_6_PinosIntramedularesUmeral_6,
        questao_6_PinosIntramedularesUmeral_7,
        questao_6_PinosIntramedularesUmeral_8,
        questao_6_PinosIntramedularesUmeral_9,
        questao_6_PinosIntramedularesAcetabulares_2,
        questao_6_PinosIntramedularesAcetabulares_3,
        questao_6_PinosIntramedularesAcetabulares_4,
        questao_6_PinosIntramedularesAcetabulares_5,
        questao_6_PinosIntramedularesAcetabulares_6,
        questao_6_PinosIntramedularesAcetabulares_7,
        questao_6_PinosIntramedularesAcetabulares_8,
        questao_6_PinosIntramedularesAcetabulares_9,
        questao_6_PinoIntramedularFemoral_2,
        questao_6_PinoIntramedularFemoral_3,
        questao_6_PinoIntramedularFemoral_4,
        questao_6_PinoIntramedularFemoral_5,
        questao_6_PinoIntramedularFemoral_6,
        questao_6_PinoIntramedularFemoral_7,
        questao_6_PinoIntramedularFemoral_8,
        questao_6_PinoIntramedularFemoral_9,
        questao_6_PinosIntramedularesTibiais_2,
        questao_6_PinosIntramedularesTibiais_3,
        questao_6_PinosIntramedularesTibiais_4,
        questao_6_PinosIntramedularesTibiais_5,
        questao_6_PinosIntramedularesTibiais_6,
        questao_6_PinosIntramedularesTibiais_7,
        questao_6_PinosIntramedularesTibiais_8,
        questao_6_PinosIntramedularesTibiais_9,
        questao_6_ParafusosPequenosCanulados_2,
        questao_6_ParafusosPequenosCanulados_3,
        questao_6_ParafusosPequenosCanulados_4,
        questao_6_ParafusosPequenosCanulados_5,
        questao_6_ParafusosPequenosCanulados_6,
        questao_6_ParafusosPequenosCanulados_7,
        questao_6_ParafusosPequenosCanulados_8,
        questao_6_ParafusosPequenosCanulados_9,
        questao_6_ParafusosGrandescanulados_2,
        questao_6_ParafusosGrandescanulados_3,
        questao_6_ParafusosGrandescanulados_4,
        questao_6_ParafusosGrandescanulados_5,
        questao_6_ParafusosGrandescanulados_6,
        questao_6_ParafusosGrandescanulados_7,
        questao_6_ParafusosGrandescanulados_8,
        questao_6_ParafusosGrandescanulados_9,
        questao_6_GrandesFixaCoesExternas_2,
        questao_6_GrandesFixaCoesExternas_3,
        questao_6_GrandesFixaCoesExternas_4,
        questao_6_GrandesFixaCoesExternas_5,
        questao_6_GrandesFixaCoesExternas_6,
        questao_6_GrandesFixaCoesExternas_7,
        questao_6_GrandesFixaCoesExternas_8,
        questao_6_GrandesFixaCoesExternas_9,
        questao_6_FixacoesExternasMedias_2,
        questao_6_FixacoesExternasMedias_3,
        questao_6_FixacoesExternasMedias_4,
        questao_6_FixacoesExternasMedias_5,
        questao_6_FixacoesExternasMedias_6,
        questao_6_FixacoesExternasMedias_7,
        questao_6_FixacoesExternasMedias_8,
        questao_6_FixacoesExternasMedias_9,
        questao_6_PequenasFixaCoesExternas_2,
        questao_6_PequenasFixaCoesExternas_3,
        questao_6_PequenasFixaCoesExternas_4,
        questao_6_PequenasFixaCoesExternas_5,
        questao_6_PequenasFixaCoesExternas_6,
        questao_6_PequenasFixaCoesExternas_7,
        questao_6_PequenasFixaCoesExternas_8,
        questao_6_PequenasFixaCoesExternas_9,
        questao_6_MiniFixacoesExternas_2,
        questao_6_MiniFixacoesExternas_3,
        questao_6_MiniFixacoesExternas_4,
        questao_6_MiniFixacoesExternas_5,
        questao_6_MiniFixacoesExternas_6,
        questao_6_MiniFixacoesExternas_7,
        questao_6_MiniFixacoesExternas_8,
        questao_6_MiniFixacoesExternas_9,
        questao_7,
        questao_8,
        questao_8_1,
        questao_8_2,
        questao_8_3_1,
        questao_8_3_2,
        questao_8_3_3,
        questao_8_3_4,
        questao_9,
        questao_10,
        questao_10_1,
        questao_10_2,
        questao_10_3,
        questao_10_4,
        comentario_pesquisa,
        recomendacoes,
      }
    })
  }

}