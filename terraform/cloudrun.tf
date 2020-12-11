resource "google_project_service" "cloudrun" {
  service = "run.googleapis.com"
}

resource "google_cloud_run_service" "torii_api" {
  name     = local.image_name_api
  location = local.region

  template {
    spec {
      containers {
        image = "${local.image_fullname_api}:latest"

        ports {
          container_port = 5000
        }

        resources {
          limits = {
            "cpu" : "1000m",
            "memory" : "128Mi",
          }
        }
      }

      timeout_seconds = 10
    }
  }

  lifecycle {
    ignore_changes = [
      template[0].spec[0].containers[0].image,
    ]
  }
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location = google_cloud_run_service.torii_api.location
  project  = google_cloud_run_service.torii_api.project
  service  = google_cloud_run_service.torii_api.name

  policy_data = data.google_iam_policy.noauth.policy_data
}

resource "google_project_service" "compute" {
  service = "compute.googleapis.com"
}

resource "google_project_service" "iam" {
  service = "iam.googleapis.com"
}

data "google_compute_default_service_account" "default" {}

resource "google_service_account_iam_member" "admin-account-iam" {
  service_account_id = data.google_compute_default_service_account.default.name
  role               = "roles/iam.serviceAccountUser"
  member             = "serviceAccount:${local.project_number}@cloudbuild.gserviceaccount.com"
}
