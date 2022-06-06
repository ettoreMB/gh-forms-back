BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Results_Pesquisa_Hospitais_trauma] ADD [comentario] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_comentario_df] DEFAULT '',
[questao_11] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_11_df] DEFAULT '',
[questao_11_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_11_1_df] DEFAULT '',
[questao_12] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_12_df] DEFAULT '',
[questao_12_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_12_1_df] DEFAULT '',
[questao_12_2] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_12_2_df] DEFAULT '',
[questao_12_3] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_12_3_df] DEFAULT '',
[questao_13] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_13_df] DEFAULT '',
[questao_13_1] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_13_1_df] DEFAULT '',
[questao_13_2] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_13_2_df] DEFAULT '',
[questao_13_3] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_13_3_df] DEFAULT '',
[questao_13_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_13_4_df] DEFAULT '',
[questao_14] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_14_df] DEFAULT '',
[questao_15] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_15_df] DEFAULT '',
[questao_16] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Hospitais_trauma_questao_16_df] DEFAULT '';

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
