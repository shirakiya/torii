# Torii
[![CircleCI](https://circleci.com/gh/shirakiya/torii.svg?style=svg)](https://circleci.com/gh/shirakiya/torii)  
  
Pratical tool to test Jinja2.


## Required
- Python >= 3.7
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
$ docker-compose exec -e FLASK_ENV=test api nosetests -s --nologcapture tests
```

### flake8 lint
```
$ docker-compose exec api flake8 .
```


## Deploy
In production, use API Gateway & Lambda for api, and S3 & CloudFront for hosting static files.

### Infra
managed by Terraform.

```
$ cd terraform/
$ docker-compose run --rm -e AWS_ACCESS_KEY_ID=XXX -e AWS_SECRET_ACCESS_KEY=YYY terraform apply
```

### API Gateway & Lambda function with Zappa
Deploy in the CircleCI workflow. See CircleCI configuration.

### index.html & Bundled JavaScript
Deploy in the CircleCI workflow. See CircleCI configuration.
