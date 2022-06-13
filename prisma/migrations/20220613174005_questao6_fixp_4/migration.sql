BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Results_Pesquisa_Medicos_trauma] DROP CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_OSTEOTOMIA_QUADRIL_4_df];
ALTER TABLE [dbo].[Results_Pesquisa_Medicos_trauma] ADD CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_OSTEOTOMIA_QUADRIL__df] DEFAULT '' FOR [questao_6_OSTEOTOMIA_QUADRIL_4];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
