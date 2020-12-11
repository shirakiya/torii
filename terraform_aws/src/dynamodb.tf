resource "aws_dynamodb_table" "tfstate_lock" {
  name           = "torii-terraform-lock"
  read_capacity  = 3
  write_capacity = 3
  hash_key       = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Project = "Torii"
  }
}
