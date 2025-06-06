terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "retail_app_image" {
  name = "techcode-webapp:latest"
  build {
    context    = "./"   # Path to Dockerfile relative to terraform folder
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "retail_app" {
  name  = "retail_app_container"
  image = docker_image.retail_app_image.name 

  ports {
    internal = 3000
    external = 3000
  }
}
