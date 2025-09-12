# Portfolio 

A modern, responsive portfolio web application built with Angular and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm (v9 or later recommended)

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm start
```

The app will be available at [http://localhost:4200](http://localhost:4200) (or another port if 4200 is in use).

### Build for production
```bash
npm run build
```

## Test build locally
```bash
npx serve dist/your-app
```

# Build Docker image
docker build -t your-dockerhub-username/your-app:v1 .

# Login to Docker Hub
docker login

# Push the image
docker push your-dockerhub-username/your-app:v1
# Deploy to Kubernetes
kubectl apply -f deployment.yaml
# run
kubectl port-forward angular-frontend 8082:80

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 [vignesh R R](https://github.com/Vignesh96-R)


 