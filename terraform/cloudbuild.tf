resource "google_project_service" "cloudbuild" {
  service = "cloudbuild.googleapis.com"
}

# Need to connect GitHub repository to Cloud Source Repository
# after this operation.
resource "google_cloudbuild_trigger" "github_torii" {
  trigger_template {
    repo_name = "github_shirakiya_torii"
    # TODO: Fix branch to "production"
    branch_name = "gcp"
  }

  filename = "cloudbuild.yaml"
}
