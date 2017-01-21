# serverless_sms_bot
A SMS bot on AWS Lambdac with Claudia.js

## sms

```sh
Twilio Number used for Sending: 720-336-4682 
```

## test

```sh
$ claudia test-lambda
```

## update

```sh
$ npm run deploy
```

## create (first time only)

```sh
$ npm run create
```


## facebook create

```sh
$ claudia create --region us-east-1 --api-module bot --configure-fb-bot
```


## required tokens to get this to work

```sh
Twilio Account ID:
```

```sh
Twilio Auth Token:
```

```sh
Twilio Number used for Sending:
```

```sh
AWS IAM user:
```

```sh
aws_access_key_id
```

```sh
aws_secret_access_key
```

```sh
--region us-west-1
```


updating REST API       apigateway.setAcceptHeader
{
  "FunctionName": "serverless_sms_bot",
  "FunctionArn": "arn:aws:lambda:us-east-1:218574219050:function:serverless_sms_bot:5",
  "Runtime": "nodejs4.3",
  "Role": "arn:aws:iam::218574219050:role/serverless_sms_bot-executor",
  "Handler": "bot.proxyRouter",
  "CodeSize": 867216,
  "Description": "A SMS bot on AWS Lambda with Claudia.js",
  "Timeout": 3,
  "MemorySize": 128,
  "LastModified": "2017-01-21T03:25:43.325+0000",
  "CodeSha256": "/TuG43GxcsrQBp9V7D/Nh6xXxoBw63HShqh3b1cAghQ=",
  "Version": "5",
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


"lambda": {
    "role": "serverless_sms_bot2-executor",
    "name": "serverless_sms_bot2",
    "region": "us-west-1"


      "twilio": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/twilio",
     "twilio": "https://l6tvtox3s1.execute-api.us-east-1.amazonaws.com/latest/twilio",


npm run update -- --configure-twilio-sms-bot



From https://www.twilio.com/blog/2016/12/create-an-sms-bot-on-aws-lambda-with-claudia-js.html?utm_campaign=&utm_medium=email&utm_source=newletter&utm_content=OTHER_NEWS_2017-JAN-17_Twilio_Developer_Digest_WW_EM_1_large&utm_term=namer
,
