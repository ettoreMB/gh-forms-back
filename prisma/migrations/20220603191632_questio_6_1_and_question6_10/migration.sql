/*
  Warnings:

  - You are about to drop the `Results_Pesquisa_Medicos_trauma` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Results_Pesquisa_Distribuidores] ADD [questao_6PlacasExtremidadesInferiores_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6PlacasExtremidadesInferiores_1_df] DEFAULT '0',
[questao_6PlacasExtremidadesInferiores_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6PlacasExtremidadesInferiores_10_df] DEFAULT '0',
[questao_6_FixacoesExternasMedias_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_FixacoesExternasMedias_1_df] DEFAULT '0',
[questao_6_FixacoesExternasMedias_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_FixacoesExternasMedias_10_df] DEFAULT '0',
[questao_6_GrandesFixaCoesExternas_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_GrandesFixaCoesExternas_1_df] DEFAULT '0',
[questao_6_GrandesFixaCoesExternas_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_GrandesFixaCoesExternas_10_df] DEFAULT '0',
[questao_6_MiniFixacoesExternas_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_MiniFixacoesExternas_1_df] DEFAULT '0',
[questao_6_MiniFixacoesExternas_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_MiniFixacoesExternas_10_df] DEFAULT '0',
[questao_6_ParafusosExtremidadesInferiores_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosExtremidadesInferiores_1_df] DEFAULT '0',
[questao_6_ParafusosExtremidadesInferiores_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosExtremidadesInferiores_10_df] DEFAULT '0',
[questao_6_ParafusosExtremidadesSuperiores_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosExtremidadesSuperiores_1_df] DEFAULT '0',
[questao_6_ParafusosExtremidadesSuperiores_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosExtremidadesSuperiores_10_df] DEFAULT '0',
[questao_6_ParafusosGrandescanulados_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosGrandescanulados_1_df] DEFAULT '0',
[questao_6_ParafusosGrandescanulados_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosGrandescanulados_10_df] DEFAULT '0',
[questao_6_ParafusosPequenosCanulados_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosPequenosCanulados_1_df] DEFAULT '0',
[questao_6_ParafusosPequenosCanulados_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosPequenosCanulados_10_df] DEFAULT '0',
[questao_6_ParafusosQuadrilPelvis_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosQuadrilPelvis_1_df] DEFAULT '0',
[questao_6_ParafusosQuadrilPelvis_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_ParafusosQuadrilPelvis_10_df] DEFAULT '0',
[questao_6_PequenasFixaCoesExternas_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PequenasFixaCoesExternas_1_df] DEFAULT '0',
[questao_6_PequenasFixaCoesExternas_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PequenasFixaCoesExternas_10_df] DEFAULT '0',
[questao_6_PinoIntramedularFemoral_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PinoIntramedularFemoral_1_df] DEFAULT '0',
[questao_6_PinoIntramedularFemoral_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PinoIntramedularFemoral_10_df] DEFAULT '0',
[questao_6_PinosIntramedularesAcetabulares_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PinosIntramedularesAcetabulares_1_df] DEFAULT '0',
[questao_6_PinosIntramedularesAcetabulares_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PinosIntramedularesAcetabulares_10_df] DEFAULT '0',
[questao_6_PinosIntramedularesTibiais_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PinosIntramedularesTibiais_1_df] DEFAULT '0',
[questao_6_PinosIntramedularesTibiais_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PinosIntramedularesTibiais_10_df] DEFAULT '0',
[questao_6_PinosIntramedularesUmeral_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PinosIntramedularesUmeral_1_df] DEFAULT '0',
[questao_6_PinosIntramedularesUmeral_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PinosIntramedularesUmeral_10_df] DEFAULT '0',
[questao_6_PlacasExtremidadesSuperiores_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PlacasExtremidadesSuperiores_1_df] DEFAULT '0',
[questao_6_PlacasExtremidadesSuperiores_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PlacasExtremidadesSuperiores_10_df] DEFAULT '0',
[questao_6_PlacasParaQuadrilPelvis_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PlacasParaQuadrilPelvis_1_df] DEFAULT '0',
[questao_6_PlacasParaQuadrilPelvis_10] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Distribuidores_questao_6_PlacasParaQuadrilPelvis_10_df] DEFAULT '0';

-- DropTable
DROP TABLE [dbo].[Results_Pesquisa_Medicos_trauma];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
