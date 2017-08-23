# UP (APEX UP)

This is an experiment using Apex Up.

What stack will be created?

- AWS API Gateways
- AWS Lambda Functions
- AWS CloudFormation

This is a Single Page Application (SPA) + API.

Runtime: `NodeJS`

### Setup AWS Credentials

File: `~/.aws/credentials`:

```
[YOUR_PROFILE]
aws_access_key_id = YOUR_AWS_ACCESS_KEY_ID
aws_secret_access_key = YOUR_AWS_SECRET_ACCESS_KEY
```


### Setup AWS Config

File: `~/.aws/config`

```
[YOUR_PROFILE]
output = json
region = us-west-2
```


### Install

Install dependencies:

Run `yarn` (preferred) or `npm install`


### Run

```
Deploy the project to the development stage.
$ up

Show the development endpoint.
$ up url

Open the development endpoint in the browser.
$ up url --open

Deploy the project to the prod stage.
$ up deploy prod

Tail project logs.
$ up logs -f

Show error or fatal level logs.
$ up logs 'error or fatal'

Show help and examples for a sub-command.
$ up help logs

Run build command manually.
$ up run build

```


Docs: [https://github.com/apex/up](https://github.com/apex/up)
