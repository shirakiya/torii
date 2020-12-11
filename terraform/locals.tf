locals {
  project_id     = "torii-282017"
  project_number = "12837217808"
  region         = "asia-northeast1"

  api_name           = "torii-api"
  image_name_api     = local.api_name
  image_fullname_api = "gcr.io/${local.project_id}/${local.image_name_api}"
}
