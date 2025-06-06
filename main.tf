terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "techcode-webapp_image" {
  name = "techcode-webapp:latest"
  build {
    context    = "../"   # Path to Dockerfile relative to terraform folder
    dockerfile = "../Dockerfile"
  }
}

resource "docker_container" "techcode-webapp" {
  image = docker_image.techcode-webapp_image.latest
  name  = "techcode-webapp_container"
  ports {
    internal = 3000
    external = 3000
  }
}