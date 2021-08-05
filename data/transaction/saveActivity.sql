INSERT INTO [dbo].[tblActivities] 
(
      [ac_byUser],
      [ac_name]
      ,[ac_description]
      ,[ac_computerName]

) VALUES (
    @userId,
    @activityName,
    @description,
    @deviceName
);