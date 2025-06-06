provider "render" {
  api_key = var.render_api_key
}

resource "render_service" "web" {
  name        = "techcode-webapp"
  type        = "web_service"
  repo        = "https://github.com/filipalopescarvalho/techcode-webapp.git"
  branch      = "main"
  build_command = "npm install"
  start_command = "npm start"
  environment = "node"

  plan = "starter"
}
