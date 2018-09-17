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


## Test
### Python tests
```
$ docker-compose exec -e ENV=test api nosetests -s --nologcapture tests
```

### flake8 lint
```
$ docker-compose exec api flake8 .
```


## Deploy
In production, use API Gateway & Lambda for api, and S3 & CloudFront for hosting static files.


### API Gateway & Lambda function with Zappa
```
$ cd <repository root>/api/
$ pip install -r requirements.txt
$ zappa {deploy|update}  # once operate "deploy", use "update"
```


### index.html & Bundled JavaScript
Deploy in the CircleCI workflow. See CircleCI configuration.
