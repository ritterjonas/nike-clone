# eng-gruposbf-frontend-javascript

## Project Description

The project is a web page that, based on the customer's geographical location and the list of NIKE stores, calculates the distances to the three nearest stores for the customer to pick up their product.

## Demo

Check out the live demo of the application at [https://eng-gruposbf-frontend-javascript-nu.vercel.app](https://eng-gruposbf-frontend-javascript-nu.vercel.app).

## Technologies Used

- **Next.js 14:** React framework for building fast and scalable web applications.
- **React 18.2:** JavaScript library for building interactive user interfaces.
- **React Testing Library:** Used for testing the application, ensuring code quality.

## Minimum Requirements

Make sure to have the following requirements installed in your environment:

- **Node.js:** Version 18.17 or higher

## How to Run the Project

### Option 1: Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the application in development mode:**

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

3. **Run tests:**

   ```bash
   npm test
   ```

   Ensure that all tests pass to ensure the stability of the application.

4. **Build the application for production:**

   ```bash
   npm run build
   ```

   This will generate an optimized version of the application ready for production.

5. **Start the application in production mode:**

   ```bash
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

### Option 2: Docker Compose

1. **Build and run the application using Docker Compose:**

   ```bash
   docker-compose up --build
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

   This option uses Docker Compose to create containers for both the Next.js application and any required services.

Make sure to adjust configurations as needed, considering environment variables and other parameters specific to your deployment environment.
