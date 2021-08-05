SELECT dbo.tblDirections.DirectionID, 
dbo.tblDirections.DirectionName, dbo.tblEmployees.EmployeeName, 
dbo.tblOffices.Office, dbo.tblDirections.Description
FROM     dbo.tblDirections LEFT OUTER JOIN
                  dbo.tblOffices ON dbo.tblDirections.OfficeRelating = dbo.tblOffices.OfficeID LEFT OUTER JOIN
                  dbo.tblEmployees ON dbo.tblDirections.EmployeeRelating = dbo.tblEmployees.EmployeeID 