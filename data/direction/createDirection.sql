BEGIN TRY
BEGIN TRANSACTION;
INSERT INTO [dbo].[tblDirections] 
(
	   [DirectionName]
      ,[EmployeeRelating]
      ,[OfficeRelating]
      ,[Description]
)
VALUES
(
	@DirectionName,
    @EmployeeRelating,
    @OfficeRelating,
    @Description
)
COMMIT;
END TRY
BEGIN CATCH
    ROLLBACK
END CATCH

SELECT SCOPE_IDENTITY() AS directionID;