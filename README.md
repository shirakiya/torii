# Torii
[![CircleCI](https://circleci.com/gh/shirakiya/torii.svg?style=svg)](https://circleci.com/gh/shirakiya/torii)  
  
Pratical tool to test Jinja2.


## SetUp
No setup in local, Docker will do everything.


## Running Application for Dev
```
$ cd <repository root>
$ make run
```


## Test
### Python tests
```
$ make api/test
```

### lint for api codes
```
$ make api/lint
```


## Deploy
In production, use Firebase Hosting and CloudRun. Static files are
delivered from Firebase Hosting. API server is hosted in CloudRun.

### Infra
managed by Terraform.  
In order to enable to do provisioning by Terraform, do below steps.

1. Create GCP project.
2. Create a service account and get `service_account_key.json`.
3. Put `service_account_key` to `terraform/`.

After these setup, terraform provisioning is available.
