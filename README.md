# 🚀 Portfolio Landing

Este es un proyecto de portafolio personal desarrollado con **Next.js** y desplegado en **Netlify**.

## 📌 Tecnologías Utilizadas

- **Next.js** (Framework de React)
- **React**
- **Tailwind CSS** (para estilos)
- **Netlify** (para despliegue y CI/CD)

## 📂 Estructura del Proyecto

```
portfolio-landing/
│── public/         # Archivos estáticos
├── components/     # Componentes reutilizables
│   ├── ui/        # Elementos de UI reutilizables
│── app/
│   ├── pages/      # Páginas principales de la aplicación
│   ├── actions.ts  # Archivo para manejar acciones de la aplicación
│   ├── globals.css # Estilos globales
│   ├── layout.tsx  # Diseño de la aplicación
│   ├── page.tsx    # Página principal
│── styles/         # Archivos de estilos
│── .gitignore      # Archivos ignorados por Git
│── package.json    # Dependencias y configuración del proyecto
│── README.md       # Documentación del proyecto
```

## 🚀 Instalación y Uso

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/2A2G/portfolio-landing.git
cd portfolio-landing
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Ejecutar en modo desarrollo
```sh
npm run dev
```
> La aplicación estará disponible en `http://localhost:3000`

## 🛠 Solución de Problemas

Si tienes problemas con dependencias, prueba:
```sh
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## 📜 Licencia

Este proyecto es de código abierto y se distribuye bajo la licencia **MIT**.

© 2025 [2A2G](https://github.com/2A2G)

Se permite el uso, modificación y distribución de este software de forma gratuita, siempre que se conserve este aviso de licencia.
