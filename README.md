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
$ claudia create --region us-west-1 --api-module bot --configure-fb-bot
$ claudia update --configure-fb-bot
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


"role": "serverless_sms_bot2-executor",
"name": "serverless_sms_bot2",
"region": "us-west-1"
"twilio": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/twilio",


npm run update -- --configure-twilio-sms-bot

From https://www.twilio.com/blog/2016/12/create-an-sms-bot-on-aws-lambda-with-claudia-js.html?utm_campaign=&utm_medium=email&utm_source=newletter&utm_content=OTHER_NEWS_2017-JAN-17_Twilio_Developer_Digest_WW_EM_1_large&utm_term=namer

{
  "FunctionName": "serverless_sms_bot2",
  "FunctionArn": "arn:aws:lambda:us-west-1:218574219050:function:serverless_sms_bot2:3",
  "Runtime": "nodejs4.3",
  "Role": "arn:aws:iam::218574219050:role/serverless_sms_bot2-executor",
  "Handler": "bot.proxyRouter",
  "CodeSize": 867604,
  "Description": "A SMS bot on AWS Lambda with Claudia.js",
  "Timeout": 3,
  "MemorySize": 128,
  "LastModified": "2017-01-21T04:16:40.222+0000",
  "CodeSha256": "OjkfqaD6NjXMTbmN8nGO00HztqF5Y6BOx6jUbU0og+M=",
  "Version": "3",
  "KMSKeyArn": null,
  "url": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest",
  "deploy": {
    "facebook": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/facebook",
    "slackSlashCommand": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/slack/slash-command",
    "telegram": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/telegram",
    "skype": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/skype",
    "twilio": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/twilio",
    "kik": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/kik",
    "groupme": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/groupme",
    "viber": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/viber",
    "alexa": "https://0qbrjt03l5.execute-api.us-west-1.amazonaws.com/latest/alexa"
  }
