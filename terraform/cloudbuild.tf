resource "google_project_service" "cloudbuild" {
  service = "cloudbuild.googleapis.com"
}

# Need to connect GitHub repository to Cloud Source Repository
# after this operation.
resource "google_cloudbuild_trigger" "github_torii" {
  trigger_template {
    repo_name   = "github_shirakiya_torii"
    branch_name = "production"
  }

  filename = "cloudbuild.yaml"
}

locals {
  cloudbuild_roles = [
    "roles/run.admin",
    "roles/firebase.admin",
  ]
}

resource "google_project_iam_binding" "cloudbuild" {
  for_each = toset(local.cloudbuild_roles)
  role     = each.value

  members = ["serviceAccount:${local.project_number}@cloudbuild.gserviceaccount.com"]
}
