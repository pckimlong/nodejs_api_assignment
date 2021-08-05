UPDATE [dbo].[tblLoginSessions] SET 
      [loginDate] = @datetime,
      [userId] = @userId
WHERE [Ip_address] = @deviceId