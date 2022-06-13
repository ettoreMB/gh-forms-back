BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Results_Pesquisa_Medicos_trauma] ADD [questao_6_ARTRODESE_DE_TORNOZELO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_ARTRODESE_DE_TORNOZELO_4_df] DEFAULT '',
[questao_6_ARTRODESE_FALANGE_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_ARTRODESE_FALANGE_4_df] DEFAULT '',
[questao_6_ARTRODESE_PUNHO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_ARTRODESE_PUNHO_4_df] DEFAULT '',
[questao_6_FX_ACETABULO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_ACETABULO_4_df] DEFAULT '',
[questao_6_FX_CLAVICULA_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_CLAVICULA_4_df] DEFAULT '',
[questao_6_FX_DE_COTOVELO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_DE_COTOVELO_4_df] DEFAULT '',
[questao_6_FX_DE_FALANGE_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_DE_FALANGE_4_df] DEFAULT '',
[questao_6_FX_DE_PUNHO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_DE_PUNHO_4_df] DEFAULT '',
[questao_6_FX_DIAFISE_FEMUR_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_DIAFISE_FEMUR_4_df] DEFAULT '',
[questao_6_FX_DIAFISE_TIBIAL_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_DIAFISE_TIBIAL_4_df] DEFAULT '',
[questao_6_FX_FEMUR_DISTAL_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_FEMUR_DISTAL_4_df] DEFAULT '',
[questao_6_FX_METACARPO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_METACARPO_4_df] DEFAULT '',
[questao_6_FX_METATARSO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_METATARSO_4_df] DEFAULT '',
[questao_6_FX_TIBIA_DISTAL_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_TIBIA_DISTAL_4_df] DEFAULT '',
[questao_6_FX_TIBIA_PROXIMAL_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_TIBIA_PROXIMAL_4_df] DEFAULT '',
[questao_6_FX_TROCANTERICA_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_TROCANTERICA_4_df] DEFAULT '',
[questao_6_FX_UMERO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_FX_UMERO_4_df] DEFAULT '',
[questao_6_OSTEOTOMIA_DE_JOELHO_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_OSTEOTOMIA_DE_JOELHO_4_df] DEFAULT '',
[questao_6_OSTEOTOMIA_QUADRIL_4] NVARCHAR(1000) NOT NULL CONSTRAINT [Results_Pesquisa_Medicos_trauma_questao_6_OSTEOTOMIA_QUADRIL_4_df] DEFAULT '';

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
