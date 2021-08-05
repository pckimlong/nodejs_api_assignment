SELECT *, (SELECT * FROM vKeepDetail WHERE vKeepDetail.KeepID = vKeepHeader.KeepID FOR JSON AUTO) 
as Items FROM vKeepHeader ORDER BY vKeepHeader.KeepID DESC