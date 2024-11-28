
# Mercado Libre Searcher

This is a **Next.js** application designed for searching and filtering products. It uses **Redux Toolkit** for state management and is styled with **styled-components**. The application is modular, with reusable components and hooks, making it easy to scale and maintain.

## Project Structure

The project is organized as follows:

- **`_tests__`**:  
  Contains unit tests and snapshot tests for the application. Testing is done using **Jest** and **@testing-library/react**.

- **`components/`**:  
  Houses reusable components, each in its own folder. Examples include:
  - `header-searcher/` - A search bar for querying products.
  - `price-filter/` - A filter component for pricing.
  - `product-element/` - A component to display individual product details.

- **`constants/`**:  
  Contains reusable constants such as `styles` and `types`.

- **`hooks/`**:  
  Custom React hooks, including:
  - `useAppDispatch` - A typed dispatch hook for Redux.
  - `useAppSelector` - A typed selector hook for Redux.
  - `useOutsideClick` - A utility hook for handling clicks outside a given element.

- **`pages/`**:  
  Next.js pages directory, which handles routing for the app. Key files include:
  - `_app.tsx` - Custom application entry point.
  - `_document.tsx` - Customizes the HTML document structure.
  - `index.tsx` - Home page of the app.

- **`public/`**:  
  Static assets such as icons and images.

- **`redux/`**:  
  Centralized Redux store and slices for state management:
  - `store.ts` - Configures the Redux store.
  - `slices/` - Contains individual state slices.

- **`tools/`**:  
  Utility functions, such as `formatPrice.ts`, for reusable helpers.

- **Configuration Files**:  
  Includes setup for ESLint, Prettier, and Jest:
  - `.eslintrc.json` - ESLint configuration.
  - `.prettierrc.js` - Prettier formatting rules.
  - `jest.config.mjs` - Jest configuration.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd mercado-libre-searcher
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Run tests**:
   ```bash
   npm run test
   ```

6. **Format the code**:
   To check code formatting:
   ```bash
   npm run format
   ```
   To automatically fix formatting issues:
   ```bash
   npm run format:fix
   ```

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **State Management**: Redux Toolkit
- **Styling**: styled-components
- **Testing**: Jest, React Testing Library
- **Utilities**: Axios, Prettier, ESLint

## Scripts

The following scripts are available:

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `start`: Starts the production server.
- `lint`: Lints the project using ESLint.
- `test`: Runs all tests with Jest.
- `test:watch`: Runs Jest in watch mode.
- `format`: Checks code formatting with Prettier.
- `format:fix`: Fixes formatting issues with Prettier.

## Future Enhancements

- Expand the test suite to cover more components.
- Optimize performance with server-side rendering (SSR) for dynamic routes.
- Add more filters and sorting options for the product searcher.
