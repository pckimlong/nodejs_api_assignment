SELECT COUNT(*) as founded, (SELECT rememberLogin FROM [dbo].[tblLoginSessions] 
 WHERE [Ip_address] = @deviceId) as rememberLogin 
 FROM [dbo].[tblLoginSessions] WHERE [Ip_address] = @deviceId