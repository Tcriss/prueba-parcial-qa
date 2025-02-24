// jest.config.js
module.exports = {
    // Indica qué archivos de prueba debe buscar Jest
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
  
    // Directorios para buscar mocks automáticos
    // mocks: ["<rootDir>/__mocks__"],
  
    // Directorio de salida para informes de cobertura
    coverageDirectory: "coverage",
  
    // Cobertura mínima para forzar el fallo de las pruebas
    // coverageThreshold: {
    //   global: {
    //     branches: 80,
    //     functions: 80,
    //     lines: 80,
    //     statements: 80,
    //   },
    // },
  
    // Transforma archivos usando Babel
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest",
    },
  
    // Configuración para módulos ES
    // transformIgnorePatterns: [
    //   "/node_modules/(?!your-module-to-transform)/",
    // ],
  
    // Configuración para módulos de archivos estáticos (imágenes, CSS, etc.)
    // moduleNameMapper: {
    //   "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    //   "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    // },
  
    // Configuración para entornos de prueba
    // testEnvironment: "node", // O "jsdom" para pruebas en el navegador
  
    // Configuración para informes de pruebas
    // reporters: [
    //   "default",
    //   ["jest-junit", { outputDirectory: "reports" }],
    // ],
  
    // Configuración para archivos de configuración de Jest por proyecto
    // projects: ["<rootDir>/packages/*"],
  
    // Configuración para la recolección de cobertura de archivos específicos
    // collectCoverageFrom: [
    //   "src/**/*.{js,jsx,ts,tsx}",
    //   "!src/**/*.d.ts",
    // ],
  
    // Configuración para archivos de configuración de Jest por proyecto
    // projects: ["<rootDir>/packages/*"],
  
    // Configuración para la recolección de cobertura de archivos específicos
    // collectCoverageFrom: [
    //   "src/**/*.{js,jsx,ts,tsx}",
    //   "!src/**/*.d.ts",
    // ],
  
    // Configuración para la recolección de cobertura de archivos específicos
    // collectCoverageFrom: [
    //   "src/**/*.{js,jsx,ts,tsx}",
    //   "!src/**/*.d.ts",
    // ],
  
    // Configuración para la recolección de cobertura de archivos específicos
    // collectCoverageFrom: [
    //   "src/**/*.{js,jsx,ts,tsx}",
    //   "!src/**/*.d.ts",
    // ],
    // Configuración para la recolección de cobertura de archivos específicos
    // collectCoverageFrom: [
    //   "src/**/*.{js,jsx,ts,tsx}",
    //   "!src/**/*.d.ts",
    // ],
    // Configuración para la recolección de cobertura de archivos específicos
    // collectCoverageFrom: [
    //   "src/**/*.{js,jsx,ts,tsx}",
    //   "!src/**/*.d.ts",
    // ],
    // Configuración para la recolección de cobertura de archivos específicos
    // collectCoverageFrom: [
    //   "src/**/*.{js,jsx,ts,tsx}",
    //   "!src/**/*.d.ts",
    // ],
  };