# serverless_sms_bot
A SMS bot on AWS Lambda with Claudia.js

From https://www.twilio.com/blog/2016/12/create-an-sms-bot-on-aws-lambda-with-claudia-js.html?utm_campaign=&utm_medium=email&utm_source=newletter&utm_content=OTHER_NEWS_2017-JAN-17_Twilio_Developer_Digest_WW_EM_1_large&utm_term=namer


saving configuration
{
  "lambda": {
    "role": "serverless_sms_bot-executor",
    "name": "serverless_sms_bot",
    "region": "us-east-1"
  },
 updating REST API       apigateway.setAcceptHeader
 {
   "FunctionName": "serverless_sms_bot",
   "FunctionArn": "arn:aws:lambda:us-east-1:218574219050:function:serverless_sms_bot:2",
   "Runtime": "nodejs4.3",
   "Role": "arn:aws:iam::218574219050:role/serverless_sms_bot-executor",
   "Handler": "bot.proxyRouter",
   "CodeSize": 742698,
   "Description": "A SMS bot on AWS Lambda with Claudia.js",
   "Timeout": 3,
   "MemorySize": 128,
   "LastModified": "2017-01-20T23:58:32.374+0000",
   "CodeSha256": "Uuk8iAdTKJ7p2cl1uWB22x8llw/6A4B0xPQCWeuIniw=",
   "Version": "2",
   "KMSKeyArn": null,
   "url": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest",
   "deploy": {
     "facebook": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/facebook",
     "slackSlashCommand": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/slack/slash-command",
     "telegram": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/telegram",
     "skype": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/skype",
     "twilio": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/twilio",
     "kik": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/kik",
     "groupme": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/groupme",
     "viber": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/viber",
     "alexa": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/alexa"
   }
 }


