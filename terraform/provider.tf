provider "google" {
  project = local.project_id
  region  = local.region
}

terraform {
  backend "gcs" {
    # First of all, need to create a bucket named below.
    bucket = "torii-terraform-backend"
    prefix = "all"
  }
}

# And, enable cloudresourcemanager.googleapis.com to use terraform gcp provider.
