'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAwsAccountId = exports.getCurrentAwsRegion = exports.isSqsNameFormatValid = exports.isSqsUrlFormatValid = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
/**
 * @param sqsUrl
 * @returns true if format of string passed as argument match to SQS URL pattern
 */
exports.isSqsUrlFormatValid = (sqsUrl) => {
    const sqsUrlRegex = /^https:\/\/sqs\.[\w-]+\.amazonaws\.com\/[\d]+\/.+$/;
    return sqsUrlRegex.test(sqsUrl);
};
exports.isSqsNameFormatValid = (sqsName) => {
    // look at https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html
    const sqsNameReg = /^[\w-]{1,80}$/;
    return sqsNameReg.test(sqsName);
};
exports.getCurrentAwsRegion = () => {
    return aws_sdk_1.default.config.region;
};
exports.getAwsAccountId = async () => {
    const stsClient = new aws_sdk_1.default.STS();
    const resp = await stsClient.getCallerIdentity().promise();
    return resp.Account;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7QUFFYixzREFBMEI7QUFFMUI7OztHQUdHO0FBQ1UsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLE1BQWMsRUFBVyxFQUFFO0lBQzNELE1BQU0sV0FBVyxHQUFHLG9EQUFvRCxDQUFDO0lBQ3pFLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNuQyxDQUFDLENBQUM7QUFFVyxRQUFBLG9CQUFvQixHQUFHLENBQUMsT0FBZSxFQUFXLEVBQUU7SUFDN0QscUdBQXFHO0lBQ3JHLE1BQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQztJQUNuQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7QUFFbkMsQ0FBQyxDQUFDO0FBRVcsUUFBQSxtQkFBbUIsR0FBRyxHQUF1QixFQUFFO0lBQ3hELE9BQU8saUJBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO0FBQzVCLENBQUMsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHLEtBQUssSUFBaUMsRUFBRTtJQUNyRSxNQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDckIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQVdTIGZyb20gXCJhd3Mtc2RrXCI7XG5cbi8qKlxuICogQHBhcmFtIHNxc1VybFxuICogQHJldHVybnMgdHJ1ZSBpZiBmb3JtYXQgb2Ygc3RyaW5nIHBhc3NlZCBhcyBhcmd1bWVudCBtYXRjaCB0byBTUVMgVVJMIHBhdHRlcm5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzU3FzVXJsRm9ybWF0VmFsaWQgPSAoc3FzVXJsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBzcXNVcmxSZWdleCA9IC9eaHR0cHM6XFwvXFwvc3FzXFwuW1xcdy1dK1xcLmFtYXpvbmF3c1xcLmNvbVxcL1tcXGRdK1xcLy4rJC87XG4gICAgcmV0dXJuIHNxc1VybFJlZ2V4LnRlc3Qoc3FzVXJsKVxufTtcblxuZXhwb3J0IGNvbnN0IGlzU3FzTmFtZUZvcm1hdFZhbGlkID0gKHNxc05hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIC8vIGxvb2sgYXQgaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FXU1NpbXBsZVF1ZXVlU2VydmljZS9sYXRlc3QvU1FTRGV2ZWxvcGVyR3VpZGUvc3FzLXF1b3Rhcy5odG1sXG4gICAgY29uc3Qgc3FzTmFtZVJlZyA9IC9eW1xcdy1dezEsODB9JC87XG4gICAgcmV0dXJuIHNxc05hbWVSZWcudGVzdChzcXNOYW1lKVxuXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudEF3c1JlZ2lvbiA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIHJldHVybiBBV1MuY29uZmlnLnJlZ2lvblxufTtcblxuZXhwb3J0IGNvbnN0IGdldEF3c0FjY291bnRJZCA9IGFzeW5jICgpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBzdHNDbGllbnQgPSBuZXcgQVdTLlNUUygpO1xuICBjb25zdCByZXNwID0gYXdhaXQgc3RzQ2xpZW50LmdldENhbGxlcklkZW50aXR5KCkucHJvbWlzZSgpO1xuICByZXR1cm4gcmVzcC5BY2NvdW50XG59OyJdfQ==