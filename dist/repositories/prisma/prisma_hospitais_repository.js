"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaResultsPesquisaHospitalTraumaRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaResultsPesquisaHospitalTraumaRepository {
    async create({ cargo, email, empresa, nome, questao_1_grupo_1_Placas_e_Parafusos_extremidades_inferiores, questao_1_grupo_1_Placas_e_Parafusos_extremidades_superiores, questao_1_grupo_1_Placas_e_Parafusos_para_quadril_ou_pelvis, questao_1_grupo_2_Pinos_intramedulares_acetabular, questao_1_grupo_2_Pinos_intramedulares_femoral, questao_1_grupo_2_Pinos_intramedulares_tibiais, questao_1_grupo_3_Parafusos_grandes_e_canulados, questao_1_grupo_3_Parafusos_pequenos_e_canulados, questao_1_grupo_4_Fixacao_externa_media, questao_1_grupo_4_Mini_fixacao_externa, questao_1_grupo_4_Pequena_fixacao_externa, questao_1_grupo_4_Pinos_intramedulares_femoral, questao_2_1, questao_2_2, questao_2_3, questao_3, questao_4, questao_5_Fixacoes_externas_medias_1, questao_5_Fixacoes_externas_medias_2, questao_5_Fixacoes_externas_medias_3, questao_5_Fixacoes_externas_medias_4, questao_5_Grandes_Fixacoes_Externas_1, questao_5_Grandes_Fixacoes_Externas_2, questao_5_Grandes_Fixacoes_Externas_3, questao_5_Grandes_Fixacoes_Externas_4, questao_5_Mini_Fixacoes_Externas_1, questao_5_Mini_Fixacoes_Externas_2, questao_5_Mini_Fixacoes_Externas_3, questao_5_Mini_Fixacoes_Externas_4, questao_5_Parafusos_extremidades_inferiores_1, questao_5_Parafusos_extremidades_inferiores_2, questao_5_Parafusos_extremidades_inferiores_3, questao_5_Parafusos_extremidades_inferiores_4, questao_5_Parafusos_extremidades_superiores_1, questao_5_Parafusos_extremidades_superiores_2, questao_5_Parafusos_extremidades_superiores_3, questao_5_Parafusos_extremidades_superiores_4, questao_5_Parafusos_grandes_e_canulados_1, questao_5_Parafusos_grandes_e_canulados_2, questao_5_Parafusos_grandes_e_canulados_3, questao_5_Parafusos_grandes_e_canulados_4, questao_5_Parafusos_para_quadril_ou_pelvis_1, questao_5_Parafusos_para_quadril_ou_pelvis_2, questao_5_Parafusos_para_quadril_ou_pelvis_3, questao_5_Parafusos_para_quadril_ou_pelvis_4, questao_5_Parafusos_pequenos_e_canulados_1, questao_5_Parafusos_pequenos_e_canulados_2, questao_5_Parafusos_pequenos_e_canulados_3, questao_5_Parafusos_pequenos_e_canulados_4, questao_5_Pequenas_Fixacoes_Externas_1, questao_5_Pequenas_Fixacoes_Externas_2, questao_5_Pequenas_Fixacoes_Externas_3, questao_5_Pequenas_Fixacoes_Externas_4, questao_5_Pino_intramedular_femoral_1, questao_5_Pino_intramedular_femoral_2, questao_5_Pino_intramedular_femoral_3, questao_5_Pino_intramedular_femoral_4, questao_5_Pinos_intramedulares_acetabulares_1, questao_5_Pinos_intramedulares_acetabulares_2, questao_5_Pinos_intramedulares_acetabulares_3, questao_5_Pinos_intramedulares_acetabulares_4, questao_5_Pinos_intramedulares_tibiais_1, questao_5_Pinos_intramedulares_tibiais_2, questao_5_Pinos_intramedulares_tibiais_3, questao_5_Pinos_intramedulares_tibiais_4, questao_5_Pinos_intramedulares_umeral_1, questao_5_Pinos_intramedulares_umeral_2, questao_5_Pinos_intramedulares_umeral_3, questao_5_Pinos_intramedulares_umeral_4, questao_5_Placas_extremidades_inferiores_1, questao_5_Placas_extremidades_inferiores_2, questao_5_Placas_extremidades_inferiores_3, questao_5_Placas_extremidades_inferiores_4, questao_5_Placas_extremidades_superiores_1, questao_5_Placas_extremidades_superiores_2, questao_5_Placas_extremidades_superiores_3, questao_5_Placas_extremidades_superiores_4, questao_5_Placas_para_quadril_ou_pelvis_1, questao_5_Placas_para_quadril_ou_pelvis_2, questao_5_Placas_para_quadril_ou_pelvis_3, questao_5_Placas_para_quadril_ou_pelvis_4, questao_6_Fixacoes_externas_medias_1, questao_6_Fixacoes_externas_medias_2, questao_6_Fixacoes_externas_medias_3, questao_6_Grandes_Fixacoes_Externas_1, questao_6_Grandes_Fixacoes_Externas_2, questao_6_Grandes_Fixacoes_Externas_3, questao_6_Mini_Fixacoes_Externas_1, questao_6_Mini_Fixacoes_Externas_2, questao_6_Mini_Fixacoes_Externas_3, questao_6_Parafusos_extremidades_inferiores_1, questao_6_Parafusos_extremidades_inferiores_2, questao_6_Parafusos_extremidades_inferiores_3, questao_6_Parafusos_extremidades_superiores_1, questao_6_Parafusos_extremidades_superiores_2, questao_6_Parafusos_extremidades_superiores_3, questao_6_Parafusos_grandes_e_canulados_1, questao_6_Parafusos_grandes_e_canulados_2, questao_6_Parafusos_grandes_e_canulados_3, questao_6_Parafusos_para_quadril_ou_pelvis_1, questao_6_Parafusos_para_quadril_ou_pelvis_2, questao_6_Parafusos_para_quadril_ou_pelvis_3, questao_6_Parafusos_pequenos_e_canulados_1, questao_6_Parafusos_pequenos_e_canulados_2, questao_6_Parafusos_pequenos_e_canulados_3, questao_6_Pequenas_Fixacoes_Externas_1, questao_6_Pequenas_Fixacoes_Externas_2, questao_6_Pequenas_Fixacoes_Externas_3, questao_6_Pino_intramedular_femoral_1, questao_6_Pino_intramedular_femoral_2, questao_6_Pino_intramedular_femoral_3, questao_6_Pinos_intramedulares_acetabulares_1, questao_6_Pinos_intramedulares_acetabulares_2, questao_6_Pinos_intramedulares_acetabulares_3, questao_6_Pinos_intramedulares_tibiais_1, questao_6_Pinos_intramedulares_tibiais_2, questao_6_Pinos_intramedulares_tibiais_3, questao_6_Pinos_intramedulares_umeral_1, questao_6_Pinos_intramedulares_umeral_2, questao_6_Pinos_intramedulares_umeral_3, questao_6_Placas_extremidades_inferiores_1, questao_6_Placas_extremidades_inferiores_2, questao_6_Placas_extremidades_inferiores_3, questao_6_Placas_extremidades_superiores_1, questao_6_Placas_extremidades_superiores_2, questao_6_Placas_extremidades_superiores_3, questao_6_Placas_para_quadril_ou_pelvis_1, questao_6_Placas_para_quadril_ou_pelvis_2, questao_6_Placas_para_quadril_ou_pelvis_3, questao_7, questao_8, questao_8_1, questao_8_2, questao_8_3, questao_9_Fixacao_externa_media_1, questao_9_Fixacao_externa_media_2, questao_9_Fixacao_externa_media_3, questao_9_Fixacao_externa_media_4, questao_9_Fixacao_externa_media_5, questao_9_Fixacao_externa_media_6, questao_9_Fixacao_externa_media_7, questao_9_Fixacao_externa_media_8, questao_9_Fixacao_externa_media_9, questao_9_Grande_fixacao_externa_1, questao_9_Grande_fixacao_externa_2, questao_9_Grande_fixacao_externa_3, questao_9_Grande_fixacao_externa_4, questao_9_Grande_fixacao_externa_5, questao_9_Grande_fixacao_externa_6, questao_9_Grande_fixacao_externa_7, questao_9_Grande_fixacao_externa_8, questao_9_Grande_fixacao_externa_9, questao_9_Mini_fixacao_externa_1, questao_9_Mini_fixacao_externa_2, questao_9_Mini_fixacao_externa_3, questao_9_Mini_fixacao_externa_4, questao_9_Mini_fixacao_externa_5, questao_9_Mini_fixacao_externa_6, questao_9_Mini_fixacao_externa_7, questao_9_Mini_fixacao_externa_8, questao_9_Mini_fixacao_externa_9, questao_9_Parafusos_extremidades_inferiores_1, questao_9_Parafusos_extremidades_inferiores_2, questao_9_Parafusos_extremidades_inferiores_3, questao_9_Parafusos_extremidades_inferiores_4, questao_9_Parafusos_extremidades_inferiores_5, questao_9_Parafusos_extremidades_inferiores_6, questao_9_Parafusos_extremidades_inferiores_7, questao_9_Parafusos_extremidades_inferiores_8, questao_9_Parafusos_extremidades_inferiores_9, questao_9_Parafusos_extremidades_superiores_1, questao_9_Parafusos_extremidades_superiores_2, questao_9_Parafusos_extremidades_superiores_3, questao_9_Parafusos_extremidades_superiores_4, questao_9_Parafusos_extremidades_superiores_5, questao_9_Parafusos_extremidades_superiores_6, questao_9_Parafusos_extremidades_superiores_7, questao_9_Parafusos_extremidades_superiores_8, questao_9_Parafusos_extremidades_superiores_9, questao_9_Parafusos_grandes_e_canulados_1, questao_9_Parafusos_grandes_e_canulados_2, questao_9_Parafusos_grandes_e_canulados_3, questao_9_Parafusos_grandes_e_canulados_4, questao_9_Parafusos_grandes_e_canulados_5, questao_9_Parafusos_grandes_e_canulados_6, questao_9_Parafusos_grandes_e_canulados_7, questao_9_Parafusos_grandes_e_canulados_8, questao_9_Parafusos_grandes_e_canulados_9, questao_9_Parafusos_para_quadril_ou_pelvis_1, questao_9_Parafusos_para_quadril_ou_pelvis_2, questao_9_Parafusos_para_quadril_ou_pelvis_3, questao_9_Parafusos_para_quadril_ou_pelvis_4, questao_9_Parafusos_para_quadril_ou_pelvis_5, questao_9_Parafusos_para_quadril_ou_pelvis_6, questao_9_Parafusos_para_quadril_ou_pelvis_7, questao_9_Parafusos_para_quadril_ou_pelvis_8, questao_9_Parafusos_para_quadril_ou_pelvis_9, questao_9_Pequena_fixacao_externa_1, questao_9_Pequena_fixacao_externa_2, questao_9_Pequena_fixacao_externa_3, questao_9_Pequena_fixacao_externa_4, questao_9_Pequena_fixacao_externa_5, questao_9_Pequena_fixacao_externa_6, questao_9_Pequena_fixacao_externa_7, questao_9_Pequena_fixacao_externa_8, questao_9_Pequena_fixacao_externa_9, questao_9_Pino_intramedular_femoral_1, questao_9_Pino_intramedular_femoral_2, questao_9_Pino_intramedular_femoral_3, questao_9_Pino_intramedular_femoral_4, questao_9_Pino_intramedular_femoral_5, questao_9_Pino_intramedular_femoral_6, questao_9_Pino_intramedular_femoral_7, questao_9_Pino_intramedular_femoral_8, questao_9_Pino_intramedular_femoral_9, questao_9_Pinos_intramedulares_acetabulares_1, questao_9_Pinos_intramedulares_acetabulares_2, questao_9_Pinos_intramedulares_acetabulares_3, questao_9_Pinos_intramedulares_acetabulares_4, questao_9_Pinos_intramedulares_acetabulares_5, questao_9_Pinos_intramedulares_acetabulares_6, questao_9_Pinos_intramedulares_acetabulares_7, questao_9_Pinos_intramedulares_acetabulares_8, questao_9_Pinos_intramedulares_acetabulares_9, questao_9_Pinos_intramedulares_tibiais_1, questao_9_Pinos_intramedulares_tibiais_2, questao_9_Pinos_intramedulares_tibiais_3, questao_9_Pinos_intramedulares_tibiais_4, questao_9_Pinos_intramedulares_tibiais_5, questao_9_Pinos_intramedulares_tibiais_6, questao_9_Pinos_intramedulares_tibiais_7, questao_9_Pinos_intramedulares_tibiais_8, questao_9_Pinos_intramedulares_tibiais_9, questao_9_Pinos_intramedulares_umeral_1, questao_9_Pinos_intramedulares_umeral_2, questao_9_Pinos_intramedulares_umeral_3, questao_9_Pinos_intramedulares_umeral_4, questao_9_Pinos_intramedulares_umeral_5, questao_9_Pinos_intramedulares_umeral_6, questao_9_Pinos_intramedulares_umeral_7, questao_9_Pinos_intramedulares_umeral_8, questao_9_Pinos_intramedulares_umeral_9, questao_9_Placas_extremidades_inferiores_1, questao_9_Placas_extremidades_inferiores_2, questao_9_Placas_extremidades_inferiores_3, questao_9_Placas_extremidades_inferiores_4, questao_9_Placas_extremidades_inferiores_5, questao_9_Placas_extremidades_inferiores_6, questao_9_Placas_extremidades_inferiores_7, questao_9_Placas_extremidades_inferiores_8, questao_9_Placas_extremidades_inferiores_9, questao_9_Placas_extremidades_superiores_1, questao_9_Placas_extremidades_superiores_2, questao_9_Placas_extremidades_superiores_3, questao_9_Placas_extremidades_superiores_4, questao_9_Placas_extremidades_superiores_5, questao_9_Placas_extremidades_superiores_6, questao_9_Placas_extremidades_superiores_7, questao_9_Placas_extremidades_superiores_8, questao_9_Placas_extremidades_superiores_9, questao_9_Placas_para_quadril_ou_pelvis_1, questao_9_Placas_para_quadril_ou_pelvis_2, questao_9_Placas_para_quadril_ou_pelvis_3, questao_9_Placas_para_quadril_ou_pelvis_4, questao_9_Placas_para_quadril_ou_pelvis_5, questao_9_Placas_para_quadril_ou_pelvis_6, questao_9_Placas_para_quadril_ou_pelvis_7, questao_9_Placas_para_quadril_ou_pelvis_8, questao_9_Placas_para_quadril_ou_pelvis_9, questao_9_parafusos_pequenos_e_canulados_1, questao_9_parafusos_pequenos_e_canulados_2, questao_9_parafusos_pequenos_e_canulados_3, questao_9_parafusos_pequenos_e_canulados_4, questao_9_parafusos_pequenos_e_canulados_5, questao_9_parafusos_pequenos_e_canulados_6, questao_9_parafusos_pequenos_e_canulados_7, questao_9_parafusos_pequenos_e_canulados_8, questao_9_parafusos_pequenos_e_canulados_9, questao_10_Fixacao_externa_media_10, questao_10_Grande_fixacao_externa_10, questao_10_Mini_fixacao_externa_10, questao_10_Parafusos_extremidades_inferiores_10, questao_10_Parafusos_extremidades_superiores_10, questao_10_Parafusos_grandes_e_canulados_10, questao_10_Parafusos_para_quadril_ou_pelvis_10, questao_10_Pequena_fixacao_externa_10, questao_10_Pino_intramedular_femoral_10, questao_10_Pinos_intramedulares_acetabulares_10, questao_10_Pinos_intramedulares_tibiais_10, questao_10_Pinos_intramedulares_umeral_10, questao_10_Placas_extremidades_inferiores_10, questao_10_Placas_extremidades_superiores_10, questao_10_Placas_para_quadril_ou_pelvis_10, questao_10_parafusos_pequenos_e_canulados_10, questao_10_particular, questao_10_seguro_privado, questao_10_sus, questao_11, questao_11_1, questao_12, questao_12_1, questao_12_2, questao_12_3, questao_13, questao_13_1, questao_13_2, questao_13_3, questao_13_4, questao_14, questao_15, questao_16, comentario, telefoneString, }) {
        await prisma_1.prisma.result_pesquisa_hospital_trauma.create({
            data: {
                cargo,
                email,
                empresa,
                nome,
                questao_1_grupo_1_Placas_e_Parafusos_extremidades_inferiores,
                questao_1_grupo_1_Placas_e_Parafusos_extremidades_superiores,
                questao_1_grupo_1_Placas_e_Parafusos_para_quadril_ou_pelvis,
                questao_1_grupo_2_Pinos_intramedulares_acetabular,
                questao_1_grupo_2_Pinos_intramedulares_femoral,
                questao_1_grupo_2_Pinos_intramedulares_tibiais,
                questao_1_grupo_3_Parafusos_grandes_e_canulados,
                questao_1_grupo_3_Parafusos_pequenos_e_canulados,
                questao_1_grupo_4_Fixacao_externa_media,
                questao_1_grupo_4_Mini_fixacao_externa,
                questao_1_grupo_4_Pequena_fixacao_externa,
                questao_1_grupo_4_Pinos_intramedulares_femoral,
                questao_2_1,
                questao_2_2,
                questao_2_3,
                questao_3,
                questao_4,
                questao_5_Fixacoes_externas_medias_1,
                questao_5_Fixacoes_externas_medias_2,
                questao_5_Fixacoes_externas_medias_3,
                questao_5_Fixacoes_externas_medias_4,
                questao_5_Grandes_Fixacoes_Externas_1,
                questao_5_Grandes_Fixacoes_Externas_2,
                questao_5_Grandes_Fixacoes_Externas_3,
                questao_5_Grandes_Fixacoes_Externas_4,
                questao_5_Mini_Fixacoes_Externas_1,
                questao_5_Mini_Fixacoes_Externas_2,
                questao_5_Mini_Fixacoes_Externas_3,
                questao_5_Mini_Fixacoes_Externas_4,
                questao_5_Parafusos_extremidades_inferiores_1,
                questao_5_Parafusos_extremidades_inferiores_2,
                questao_5_Parafusos_extremidades_inferiores_3,
                questao_5_Parafusos_extremidades_inferiores_4,
                questao_5_Parafusos_extremidades_superiores_1,
                questao_5_Parafusos_extremidades_superiores_2,
                questao_5_Parafusos_extremidades_superiores_3,
                questao_5_Parafusos_extremidades_superiores_4,
                questao_5_Parafusos_grandes_e_canulados_1,
                questao_5_Parafusos_grandes_e_canulados_2,
                questao_5_Parafusos_grandes_e_canulados_3,
                questao_5_Parafusos_grandes_e_canulados_4,
                questao_5_Parafusos_para_quadril_ou_pelvis_1,
                questao_5_Parafusos_para_quadril_ou_pelvis_2,
                questao_5_Parafusos_para_quadril_ou_pelvis_3,
                questao_5_Parafusos_para_quadril_ou_pelvis_4,
                questao_5_Parafusos_pequenos_e_canulados_1,
                questao_5_Parafusos_pequenos_e_canulados_2,
                questao_5_Parafusos_pequenos_e_canulados_3,
                questao_5_Parafusos_pequenos_e_canulados_4,
                questao_5_Pequenas_Fixacoes_Externas_1,
                questao_5_Pequenas_Fixacoes_Externas_2,
                questao_5_Pequenas_Fixacoes_Externas_3,
                questao_5_Pequenas_Fixacoes_Externas_4,
                questao_5_Pino_intramedular_femoral_1,
                questao_5_Pino_intramedular_femoral_2,
                questao_5_Pino_intramedular_femoral_3,
                questao_5_Pino_intramedular_femoral_4,
                questao_5_Pinos_intramedulares_acetabulares_1,
                questao_5_Pinos_intramedulares_acetabulares_2,
                questao_5_Pinos_intramedulares_acetabulares_3,
                questao_5_Pinos_intramedulares_acetabulares_4,
                questao_5_Pinos_intramedulares_tibiais_1,
                questao_5_Pinos_intramedulares_tibiais_2,
                questao_5_Pinos_intramedulares_tibiais_3,
                questao_5_Pinos_intramedulares_tibiais_4,
                questao_5_Pinos_intramedulares_umeral_1,
                questao_5_Pinos_intramedulares_umeral_2,
                questao_5_Pinos_intramedulares_umeral_3,
                questao_5_Pinos_intramedulares_umeral_4,
                questao_5_Placas_extremidades_inferiores_1,
                questao_5_Placas_extremidades_inferiores_2,
                questao_5_Placas_extremidades_inferiores_3,
                questao_5_Placas_extremidades_inferiores_4,
                questao_5_Placas_extremidades_superiores_1,
                questao_5_Placas_extremidades_superiores_2,
                questao_5_Placas_extremidades_superiores_3,
                questao_5_Placas_extremidades_superiores_4,
                questao_5_Placas_para_quadril_ou_pelvis_1,
                questao_5_Placas_para_quadril_ou_pelvis_2,
                questao_5_Placas_para_quadril_ou_pelvis_3,
                questao_5_Placas_para_quadril_ou_pelvis_4,
                questao_6_Fixacoes_externas_medias_1,
                questao_6_Fixacoes_externas_medias_2,
                questao_6_Fixacoes_externas_medias_3,
                questao_6_Grandes_Fixacoes_Externas_1,
                questao_6_Grandes_Fixacoes_Externas_2,
                questao_6_Grandes_Fixacoes_Externas_3,
                questao_6_Mini_Fixacoes_Externas_1,
                questao_6_Mini_Fixacoes_Externas_2,
                questao_6_Mini_Fixacoes_Externas_3,
                questao_6_Parafusos_extremidades_inferiores_1,
                questao_6_Parafusos_extremidades_inferiores_2,
                questao_6_Parafusos_extremidades_inferiores_3,
                questao_6_Parafusos_extremidades_superiores_1,
                questao_6_Parafusos_extremidades_superiores_2,
                questao_6_Parafusos_extremidades_superiores_3,
                questao_6_Parafusos_grandes_e_canulados_1,
                questao_6_Parafusos_grandes_e_canulados_2,
                questao_6_Parafusos_grandes_e_canulados_3,
                questao_6_Parafusos_para_quadril_ou_pelvis_1,
                questao_6_Parafusos_para_quadril_ou_pelvis_2,
                questao_6_Parafusos_para_quadril_ou_pelvis_3,
                questao_6_Parafusos_pequenos_e_canulados_1,
                questao_6_Parafusos_pequenos_e_canulados_2,
                questao_6_Parafusos_pequenos_e_canulados_3,
                questao_6_Pequenas_Fixacoes_Externas_1,
                questao_6_Pequenas_Fixacoes_Externas_2,
                questao_6_Pequenas_Fixacoes_Externas_3,
                questao_6_Pino_intramedular_femoral_1,
                questao_6_Pino_intramedular_femoral_2,
                questao_6_Pino_intramedular_femoral_3,
                questao_6_Pinos_intramedulares_acetabulares_1,
                questao_6_Pinos_intramedulares_acetabulares_2,
                questao_6_Pinos_intramedulares_acetabulares_3,
                questao_6_Pinos_intramedulares_tibiais_1,
                questao_6_Pinos_intramedulares_tibiais_2,
                questao_6_Pinos_intramedulares_tibiais_3,
                questao_6_Pinos_intramedulares_umeral_1,
                questao_6_Pinos_intramedulares_umeral_2,
                questao_6_Pinos_intramedulares_umeral_3,
                questao_6_Placas_extremidades_inferiores_1,
                questao_6_Placas_extremidades_inferiores_2,
                questao_6_Placas_extremidades_inferiores_3,
                questao_6_Placas_extremidades_superiores_1,
                questao_6_Placas_extremidades_superiores_2,
                questao_6_Placas_extremidades_superiores_3,
                questao_6_Placas_para_quadril_ou_pelvis_1,
                questao_6_Placas_para_quadril_ou_pelvis_2,
                questao_6_Placas_para_quadril_ou_pelvis_3,
                questao_7,
                questao_8,
                questao_8_1,
                questao_8_2,
                questao_8_3,
                questao_9_Fixacao_externa_media_1,
                questao_9_Fixacao_externa_media_2,
                questao_9_Fixacao_externa_media_3,
                questao_9_Fixacao_externa_media_4,
                questao_9_Fixacao_externa_media_5,
                questao_9_Fixacao_externa_media_6,
                questao_9_Fixacao_externa_media_7,
                questao_9_Fixacao_externa_media_8,
                questao_9_Fixacao_externa_media_9,
                questao_9_Grande_fixacao_externa_1,
                questao_9_Grande_fixacao_externa_2,
                questao_9_Grande_fixacao_externa_3,
                questao_9_Grande_fixacao_externa_4,
                questao_9_Grande_fixacao_externa_5,
                questao_9_Grande_fixacao_externa_6,
                questao_9_Grande_fixacao_externa_7,
                questao_9_Grande_fixacao_externa_8,
                questao_9_Grande_fixacao_externa_9,
                questao_9_Mini_fixacao_externa_1,
                questao_9_Mini_fixacao_externa_2,
                questao_9_Mini_fixacao_externa_3,
                questao_9_Mini_fixacao_externa_4,
                questao_9_Mini_fixacao_externa_5,
                questao_9_Mini_fixacao_externa_6,
                questao_9_Mini_fixacao_externa_7,
                questao_9_Mini_fixacao_externa_8,
                questao_9_Mini_fixacao_externa_9,
                questao_9_Parafusos_extremidades_inferiores_1,
                questao_9_Parafusos_extremidades_inferiores_2,
                questao_9_Parafusos_extremidades_inferiores_3,
                questao_9_Parafusos_extremidades_inferiores_4,
                questao_9_Parafusos_extremidades_inferiores_5,
                questao_9_Parafusos_extremidades_inferiores_6,
                questao_9_Parafusos_extremidades_inferiores_7,
                questao_9_Parafusos_extremidades_inferiores_8,
                questao_9_Parafusos_extremidades_inferiores_9,
                questao_9_Parafusos_extremidades_superiores_1,
                questao_9_Parafusos_extremidades_superiores_2,
                questao_9_Parafusos_extremidades_superiores_3,
                questao_9_Parafusos_extremidades_superiores_4,
                questao_9_Parafusos_extremidades_superiores_5,
                questao_9_Parafusos_extremidades_superiores_6,
                questao_9_Parafusos_extremidades_superiores_7,
                questao_9_Parafusos_extremidades_superiores_8,
                questao_9_Parafusos_extremidades_superiores_9,
                questao_9_Parafusos_grandes_e_canulados_1,
                questao_9_Parafusos_grandes_e_canulados_2,
                questao_9_Parafusos_grandes_e_canulados_3,
                questao_9_Parafusos_grandes_e_canulados_4,
                questao_9_Parafusos_grandes_e_canulados_5,
                questao_9_Parafusos_grandes_e_canulados_6,
                questao_9_Parafusos_grandes_e_canulados_7,
                questao_9_Parafusos_grandes_e_canulados_8,
                questao_9_Parafusos_grandes_e_canulados_9,
                questao_9_Parafusos_para_quadril_ou_pelvis_1,
                questao_9_Parafusos_para_quadril_ou_pelvis_2,
                questao_9_Parafusos_para_quadril_ou_pelvis_3,
                questao_9_Parafusos_para_quadril_ou_pelvis_4,
                questao_9_Parafusos_para_quadril_ou_pelvis_5,
                questao_9_Parafusos_para_quadril_ou_pelvis_6,
                questao_9_Parafusos_para_quadril_ou_pelvis_7,
                questao_9_Parafusos_para_quadril_ou_pelvis_8,
                questao_9_Parafusos_para_quadril_ou_pelvis_9,
                questao_9_Pequena_fixacao_externa_1,
                questao_9_Pequena_fixacao_externa_2,
                questao_9_Pequena_fixacao_externa_3,
                questao_9_Pequena_fixacao_externa_4,
                questao_9_Pequena_fixacao_externa_5,
                questao_9_Pequena_fixacao_externa_6,
                questao_9_Pequena_fixacao_externa_7,
                questao_9_Pequena_fixacao_externa_8,
                questao_9_Pequena_fixacao_externa_9,
                questao_9_Pino_intramedular_femoral_1,
                questao_9_Pino_intramedular_femoral_2,
                questao_9_Pino_intramedular_femoral_3,
                questao_9_Pino_intramedular_femoral_4,
                questao_9_Pino_intramedular_femoral_5,
                questao_9_Pino_intramedular_femoral_6,
                questao_9_Pino_intramedular_femoral_7,
                questao_9_Pino_intramedular_femoral_8,
                questao_9_Pino_intramedular_femoral_9,
                questao_9_Pinos_intramedulares_acetabulares_1,
                questao_9_Pinos_intramedulares_acetabulares_2,
                questao_9_Pinos_intramedulares_acetabulares_3,
                questao_9_Pinos_intramedulares_acetabulares_4,
                questao_9_Pinos_intramedulares_acetabulares_5,
                questao_9_Pinos_intramedulares_acetabulares_6,
                questao_9_Pinos_intramedulares_acetabulares_7,
                questao_9_Pinos_intramedulares_acetabulares_8,
                questao_9_Pinos_intramedulares_acetabulares_9,
                questao_9_Pinos_intramedulares_tibiais_1,
                questao_9_Pinos_intramedulares_tibiais_2,
                questao_9_Pinos_intramedulares_tibiais_3,
                questao_9_Pinos_intramedulares_tibiais_4,
                questao_9_Pinos_intramedulares_tibiais_5,
                questao_9_Pinos_intramedulares_tibiais_6,
                questao_9_Pinos_intramedulares_tibiais_7,
                questao_9_Pinos_intramedulares_tibiais_8,
                questao_9_Pinos_intramedulares_tibiais_9,
                questao_9_Pinos_intramedulares_umeral_1,
                questao_9_Pinos_intramedulares_umeral_2,
                questao_9_Pinos_intramedulares_umeral_3,
                questao_9_Pinos_intramedulares_umeral_4,
                questao_9_Pinos_intramedulares_umeral_5,
                questao_9_Pinos_intramedulares_umeral_6,
                questao_9_Pinos_intramedulares_umeral_7,
                questao_9_Pinos_intramedulares_umeral_8,
                questao_9_Pinos_intramedulares_umeral_9,
                questao_9_Placas_extremidades_inferiores_1,
                questao_9_Placas_extremidades_inferiores_2,
                questao_9_Placas_extremidades_inferiores_3,
                questao_9_Placas_extremidades_inferiores_4,
                questao_9_Placas_extremidades_inferiores_5,
                questao_9_Placas_extremidades_inferiores_6,
                questao_9_Placas_extremidades_inferiores_7,
                questao_9_Placas_extremidades_inferiores_8,
                questao_9_Placas_extremidades_inferiores_9,
                questao_9_Placas_extremidades_superiores_1,
                questao_9_Placas_extremidades_superiores_2,
                questao_9_Placas_extremidades_superiores_3,
                questao_9_Placas_extremidades_superiores_4,
                questao_9_Placas_extremidades_superiores_5,
                questao_9_Placas_extremidades_superiores_6,
                questao_9_Placas_extremidades_superiores_7,
                questao_9_Placas_extremidades_superiores_8,
                questao_9_Placas_extremidades_superiores_9,
                questao_9_Placas_para_quadril_ou_pelvis_1,
                questao_9_Placas_para_quadril_ou_pelvis_2,
                questao_9_Placas_para_quadril_ou_pelvis_3,
                questao_9_Placas_para_quadril_ou_pelvis_4,
                questao_9_Placas_para_quadril_ou_pelvis_5,
                questao_9_Placas_para_quadril_ou_pelvis_6,
                questao_9_Placas_para_quadril_ou_pelvis_7,
                questao_9_Placas_para_quadril_ou_pelvis_8,
                questao_9_Placas_para_quadril_ou_pelvis_9,
                questao_9_parafusos_pequenos_e_canulados_1,
                questao_9_parafusos_pequenos_e_canulados_2,
                questao_9_parafusos_pequenos_e_canulados_3,
                questao_9_parafusos_pequenos_e_canulados_4,
                questao_9_parafusos_pequenos_e_canulados_5,
                questao_9_parafusos_pequenos_e_canulados_6,
                questao_9_parafusos_pequenos_e_canulados_7,
                questao_9_parafusos_pequenos_e_canulados_8,
                questao_9_parafusos_pequenos_e_canulados_9,
                questao_10_Fixacao_externa_media_10,
                questao_10_Grande_fixacao_externa_10,
                questao_10_Mini_fixacao_externa_10,
                questao_10_Parafusos_extremidades_inferiores_10,
                questao_10_Parafusos_extremidades_superiores_10,
                questao_10_Parafusos_grandes_e_canulados_10,
                questao_10_Parafusos_para_quadril_ou_pelvis_10,
                questao_10_Pequena_fixacao_externa_10,
                questao_10_Pino_intramedular_femoral_10,
                questao_10_Pinos_intramedulares_acetabulares_10,
                questao_10_Pinos_intramedulares_tibiais_10,
                questao_10_Pinos_intramedulares_umeral_10,
                questao_10_Placas_extremidades_inferiores_10,
                questao_10_Placas_extremidades_superiores_10,
                questao_10_Placas_para_quadril_ou_pelvis_10,
                questao_10_parafusos_pequenos_e_canulados_10,
                questao_10_particular,
                questao_10_seguro_privado,
                questao_10_sus,
                questao_11,
                questao_11_1,
                questao_12,
                questao_12_1,
                questao_12_2,
                questao_12_3,
                questao_13,
                questao_13_1,
                questao_13_2,
                questao_13_3,
                questao_13_4,
                questao_14,
                questao_15,
                questao_16,
                comentario,
                telefoneString,
            }
        });
    }
    ;
}
exports.PrismaResultsPesquisaHospitalTraumaRepository = PrismaResultsPesquisaHospitalTraumaRepository;
