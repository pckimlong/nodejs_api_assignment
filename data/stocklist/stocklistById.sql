SELECT [ProductID]
      ,[ProductModel]
      ,[Brand]
      ,[Category]
      ,[GroupName]
      ,[Tela]
      ,[Seatv]
      ,[Total]
      ,[NoPkg]
      ,[KeepingQty]
  FROM [dbo].[vStockListTotal]
  WHERE [ProductID] = @productId