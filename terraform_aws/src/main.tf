terraform {
  required_version = ">= 0.11.0"

  backend "s3" {
    bucket         = "torii-terraform"
    region         = "ap-northeast-1"
    key            = "terraform.tfstate"
    dynamodb_table = "torii-terraform-lock"
  }
}

provider "aws" {
  version = "~> 2.47"
  region  = var.region
}

provider "aws" {
  version = "~> 2.47"
  region  = "us-east-1"
  alias   = "us_east_1"
}

data "aws_caller_identity" "current" {}
