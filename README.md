# Torii
[![CircleCI](https://circleci.com/gh/shirakiya/torii.svg?style=svg)](https://circleci.com/gh/shirakiya/torii)  
  
Pratical tool to test Jinja2.


## Required
- Python >= 3.6
- Docker & Docker Compose


## SetUp
No setup in local, Docker will do everything.


## Running Application for Dev
```
$ cd <repository root>
$ docker-compose up
```


## Deploy
In production, use API Gateway & Lambda for api, and S3 & CloudFront for hosting static files.


### API Gateway & Lambda function with Zappa
```
$ cd <repository root>/api/
$ pip install -r requirements.txt
$ zappa {deploy|update}  # once operate "deploy", use "update"
```


### index.html
```
$ aws s3 cp index.html s3://<backet name>/index.html
```


### Build JavaScript
```
$ docker-compose up webpack  # if not running webpack container
$ docker-compose exec -e API_URL=<API Gateway URL> webpack npm run build:production  #=> product "./app.js"
$ aws s3 cp app.js s3://<backet name>/app.js
```
