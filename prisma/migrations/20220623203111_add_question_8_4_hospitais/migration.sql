BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Results_Pesquisa_Hospitais_trauma] ADD [questao_8_4_Baumer] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_Baumer_df] DEFAULT 0,
[questao_8_4_Biomecanica] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_Biomecanica_df] DEFAULT 0,
[questao_8_4_GM_Reis] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_GM_Reis_df] DEFAULT 0,
[questao_8_4_Hexagon] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_Hexagon_df] DEFAULT 0,
[questao_8_4_IOL] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_IOL_df] DEFAULT 0,
[questao_8_4_Neo_Ortho] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_Neo_Ortho_df] DEFAULT 0,
[questao_8_4_Ortosintese] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_Ortosintese_df] DEFAULT 0,
[questao_8_4_Traumec] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_Traumec_df] DEFAULT 0,
[questao_8_4_Traumedica] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_Traumedica_df] DEFAULT 0,
[questao_8_4_Vincula] BIT NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_Vincula_df] DEFAULT 0,
[questao_8_4_outros] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_8_4_outros_df] DEFAULT '';

-- AlterTable
ALTER TABLE [dbo].[Results_Pesquisa_Medicos_trauma] DROP CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_OSTEOTOMIA_QUADRIL__df];
ALTER TABLE [dbo].[Results_Pesquisa_Medicos_trauma] ADD CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_OSTEOTOMIA_QUADRIL_4_df] DEFAULT '' FOR [questao_6_OSTEOTOMIA_QUADRIL_4];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
