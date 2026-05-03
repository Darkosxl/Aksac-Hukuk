# Dokploy Deployment

Deploy this project as a Dockerfile-based app.

## Settings

- Build type: Dockerfile
- Dockerfile path: `Dockerfile`
- Exposed container port: `4432`
- Domain: `aksac.av.tr`

## What The Container Does

The Dockerfile builds the Astro static site with Node and serves the generated `dist/` folder with nginx. No Node process runs in production.

## Local Smoke Test

```bash
docker build -t aksac-site .
docker run --rm -p 8080:4432 aksac-site
```

Open:

```text
http://localhost:8080/
http://localhost:8080/tr/
http://localhost:8080/en/
```
