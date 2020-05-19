import * as winston from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';
import * as AWS from 'aws-sdk';
import { AWSCreds } from './models/awscreds';

export async function logerror(awscreds: AWSCreds, errormsg: string, loggroupname: string) {
    configureAWS(awscreds);
    let logger = setupWinstonWithCloudWatch(loggroupname);
    await logger.error(errormsg);
}

export async function logwarning(awscreds: AWSCreds, warnmsg: string, loggroupname: string) {
    configureAWS(awscreds);
    let logger = setupWinstonWithCloudWatch(loggroupname);
    await logger.warning(warnmsg);
}

export async function loginfo(awscreds: AWSCreds, infomsg: string, loggroupname: string) {
    configureAWS(awscreds);
    let logger = setupWinstonWithCloudWatch(loggroupname);
    await logger.info(infomsg);
}

function configureAWS(awscreds: AWSCreds) {
    AWS.config.update({
        accessKeyId: awscreds.awsaccesskey,
        secretAccessKey: awscreds.awssecretkey,
        region: awscreds.region
    })
}

function setupWinstonWithCloudWatch(loggroupName: string) {
    winston.loggers.add('access-log', {
        transports: [
            new WinstonCloudWatch({
                logGroupName: loggroupName,
                logStreamName: loggroupName + 'dev',
                jsonMessage: true
            })
        ]
    });
    return winston.loggers.get('access-log');
}