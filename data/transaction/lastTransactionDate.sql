SELECT MAX(MaxDate) as lastest
FROM(SELECT Max(tblStockIns.StockInDate) AS MaxDate 
FROM tblStockIns GROUP BY tblStockIns.WarehouseId UNION ALL 
SELECT Max(tblStockOuts.StockOutDate) AS MaxDate FROM tblStockOuts 
GROUP BY tblStockOuts.WarehouseID) as supQuery