AWS Cloudwatch logger (uses winston)

This code snippet can be used for logging "Errors, Info, warnings" into AWS Cloudwatch.

Assumptions:
1. You already have AWS Cloudwatch credentials (i.e. AccessKey and SecreKey).
2. You already have created Cloudwatch log group.

Usages:
1. Install package using below command:
    npm i prathamesh-cloudwatch-logger
2. After successfully installing the package, you can use below methods to log messages:
    logerror(awscreds: AWSCreds, errormsg: string, loggroupname: string)
    logwarning(awscreds: AWSCreds, warnmsg: string, loggroupname: string)
    loginfo(awscreds: AWSCreds, infomsg: string, loggroupname: string)
 
As you can see the above methods are more or less have same input parameters, below are the expected input models:
export class AWSCreds{
    awsaccesskey: string;
    awssecretkey: string;
    region: string;
}
