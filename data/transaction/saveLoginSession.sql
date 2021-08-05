INSERT INTO [dbo].[tblLoginSessions]  
(
	[Ip_address]
      ,[computerName]
      ,[userid]
      ,[rememberLogin]
)
VALUES (
    @deviceId,
    @deviceName,
    @userId,
    @rememberLogin
);

SELECT '1' AS success;