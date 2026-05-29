# React Calculator

```txt
https://joelsiervas.online/24630/proyecto2/
```

---

# Características

* Suma
* Resta
* Multiplicación
* División
* Operación módulo
* Soporte para números decimales
* Función positivo/negativo (`+/-`)
* Manejo de errores
* Límite de 9 caracteres en pantalla
* Interfaz responsive
* Accesibilidad mediante teclado
* Hook personalizado para la lógica de la calculadora

---

# Tecnologías Utilizadas

* React
* TypeScript
* Vite
* Vitest
* Storybook
* ESLint
* Docker
* GitHub Actions

---

# Estructura del Proyecto

```txt
src/
├── components/
│   ├── Button.tsx
│   ├── Calculator.tsx
│   ├── Display.tsx
│   └── Keyboard.tsx
│
├── hooks/
│   └── useCalculator.ts
│
├── stories/
│   ├── Button.stories.tsx
│   ├── Calculator.stories.tsx
│   └── Display.stories.tsx
│
├── tests/
│   ├── calculator.test.tsx
│   ├── calculator-advanced.test.tsx
│   └── setup.ts
│
├── utils/
│   └── buttons.ts
│
└── styles/
    └── global.css
```

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Tiffany24630/Proyecto-2-Calculadora.git 
```

Entrar al proyecto:

```bash
cd calculadora-react
```

Ejecutar el proyecto:

```bash
docker compose up --build
```

---

# Abrir el proyecto

La aplicación estará disponible de forma local en:

```txt
http://localhost:5998
```

También disponible en:

```txt
https://joelsiervas.online/24630/proyecto2/
```

---

# Ejecutar Tests

Ejecutar todos los tests con Vitest:

```bash
npm test
```

---

# Ejecutar ESLint

Verificar calidad y reglas del código:

```bash
npm run lint
```

---

# Ejecutar Storybook

Iniciar Storybook localmente:

```bash
npm run storybook
```

Storybook estará disponible en:

```txt
http://localhost:6006
```

---

# CI/CD

El proyecto utiliza GitHub Actions para ejecutar automáticamente:

* ESLint
* Tests
* Build del proyecto

Archivo del workflow:

```txt
.github/workflows/main.yml
```

---

# Accesibilidad

La aplicación incluye mejoras básicas de accesibilidad:

* Atributos `aria-label`
* `aria-live` para el display
* Navegación mediante teclado

---

# Testing

El proyecto incluye pruebas para:

* Operaciones matemáticas
* Manejo de decimales
* División por cero
* Límite de caracteres
* Función clear
* Manejo de errores

---

# Componentes en Storybook

Se implementaron historias para:

* Button
* Display
* Calculator

Cada historia representa distintos estados y variaciones de los componentes.

---

# Docker

El proyecto incluye:

* `Dockerfile`
* `docker-compose.yml`
* `.dockerignore`

---
