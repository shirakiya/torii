resource "google_project_service" "kms" {
  service = "cloudkms.googleapis.com"
}

resource "google_kms_key_ring" "main" {
  name     = "main"
  location = "global"
}

resource "google_kms_crypto_key" "app" {
  name     = "app"
  key_ring = google_kms_key_ring.main.id
  purpose  = "ENCRYPT_DECRYPT"

  lifecycle {
    prevent_destroy = true
  }
}
