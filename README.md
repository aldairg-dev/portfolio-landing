# 🚀 Portfolio Backend Developer - Professional Landing

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-pink?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**Portfolio profesional especializado en desarrollo Backend y servicios de software**

[🌐 Ver Demo](http://localhost:3001) • [📧 Contacto](mailto:aldairg.dev@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/aldair-gutierrez-guerrero)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Descripción General](#-descripción-general)
- [✨ Características Principales](#-características-principales)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [📊 Servicios Ofrecidos](#-servicios-ofrecidos)
- [🎨 Componentes Principales](#-componentes-principales)
- [📱 Características Técnicas](#-características-técnicas)
- [🔧 Configuración del Email](#-configuración-del-email)
- [🚦 Scripts Disponibles](#-scripts-disponibles)
- [📈 Performance y SEO](#-performance-y-seo)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

---

## 🎯 Descripción General

Portfolio profesional diseñado específicamente para **desarrolladores Backend** que buscan posicionarse como proveedores de servicios tecnológicos especializados. Este proyecto va más allá de un simple CV digital, funcionando como una **plataforma de adquisición de clientes** con formularios avanzados, sistema de cotización y presentación de servicios profesionales.

### 🎪 Características Destacadas

- 🚀 **Animaciones Premium** con Framer Motion
- 📧 **Sistema de Email Profesional** con Resend
- 💰 **Catálogo de Servicios** con precios en COP
- 📱 **Diseño Completamente Responsive**
- 🎨 **UI/UX Moderna** con Shadcn/ui
- ⚡ **Performance Optimizada** para conversión

---

## ✨ Características Principales

### 🏠 **Hero Section Dinámico**

- Typing animation personalizada
- Iconos de tecnologías animados
- CTAs optimizados para conversión
- Gradientes profesionales

### 💼 **Servicios Profesionales**

- 6 servicios especializados en Backend
- Precios competitivos en pesos colombianos
- Cards interactivas con hover effects
- Tecnologías destacadas por servicio

### 📂 **Portfolio de Proyectos**

- Showcase de proyectos reales
- Métricas de performance
- Stack tecnológico detallado
- Layout alternado para mejor visualización

### 🎯 **Habilidades Categorizadas**

- 4 categorías técnicas principales
- Progress bars animadas
- Contador de proyectos por tecnología
- Niveles de experiencia visuales

### 💬 **Testimonios de Clientes**

- 5 testimonios reales con resultados
- Información de empresas
- Casos de éxito documentados
- Social proof estratégico

### 📞 **Formulario de Contacto Avanzado**

- Multi-step con validación
- Selección de servicios
- Rangos de presupuesto
- Timeline de proyecto
- Modal de confirmación animado

---

## 🛠️ Stack Tecnológico

### **Frontend Framework**

- **Next.js 14.2.16** - App Router, Server Components
- **React 18** - Hooks, Context API
- **TypeScript 5.0+** - Tipado estático completo

### **Styling & UI**

- **Tailwind CSS 3.4+** - Utility-first CSS
- **Shadcn/ui** - Componentes accesibles
- **Lucide React** - Iconos SVG optimizados
- **Framer Motion** - Animaciones fluidas

### **Funcionalidades**

- **Resend** - Email transaccional
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **date-fns** - Manipulación de fechas

### **Development Tools**

- **ESLint** - Linting de código
- **Prettier** - Formateo automático
- **TypeScript** - Verificación de tipos
- **PostCSS** - Procesamiento CSS

---

## 🏗️ Arquitectura del Proyecto

```
portfolio-landing/
├── 📁 app/                     # Next.js App Router
│   ├── actions.ts              # Server Actions para email
│   ├── globals.css             # Estilos globales
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página de inicio
├── 📁 components/              # Componentes React
│   ├── contact.tsx             # Formulario de contacto
│   ├── experience.tsx          # Experiencia profesional
│   ├── footer.tsx              # Footer con enlaces
│   ├── header.tsx              # Navegación principal
│   ├── hero.tsx                # Sección principal
│   ├── projects.tsx            # Portfolio de proyectos
│   ├── services.tsx            # Catálogo de servicios
│   ├── skills.tsx              # Habilidades técnicas
│   ├── testimonials.tsx        # Testimonios de clientes
│   ├── theme-provider.tsx      # Proveedor de tema
│   ├── theme-toggle.tsx        # Switcher de tema
│   └── 📁 ui/                  # Componentes base UI
│       ├── modal-enhanced.tsx  # Modal con animaciones
│       ├── button.tsx          # Botón personalizable
│       ├── card.tsx            # Cards reutilizables
│       ├── input.tsx           # Inputs con validación
│       └── [20+ componentes]   # Librería UI completa
├── 📁 hooks/                   # Custom React Hooks
├── 📁 lib/                     # Utilidades y helpers
├── 📁 public/                  # Assets estáticos
│   ├── 📁 img/                 # Imágenes del portfolio
│   └── favicon.ico             # Favicon
└── 📁 styles/                  # Estilos adicionales
```

---

## 🚀 Instalación y Configuración

### **Prerrequisitos**

- Node.js 18.0+
- npm o yarn
- Git

### **1️⃣ Clonar el Repositorio**

```bash
git clone https://github.com/aldairg-dev/portfolio-landing.git
cd portfolio-landing
```

### **2️⃣ Instalar Dependencias**

```bash
npm install
# o
yarn install
```

### **3️⃣ Configurar Variables de Entorno**

```bash
# Crear archivo .env.local
cp .env.example .env.local
```

**Variables requeridas:**

```env
# Resend Email API
RESEND_API_KEY=your_resend_api_key_here
TO_EMAIL=your_email@domain.com

# Opcional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### **4️⃣ Ejecutar en Desarrollo**

```bash
npm run dev
# o
yarn dev
```

🌐 **Aplicación disponible en:** `http://localhost:3000`

### **5️⃣ Build para Producción**

```bash
npm run build
npm start
# o
yarn build
yarn start
```

---

## 📊 Servicios Ofrecidos

| Servicio                      | Precio           | Tecnologías                   | Descripción                           |
| ----------------------------- | ---------------- | ----------------------------- | ------------------------------------- |
| 🌐 **Landing Pages**          | `$450.000 COP`   | Next.js, React, Tailwind      | Páginas optimizadas para conversión   |
| 🗄️ **Optimización de BD**     | `$600.000 COP`   | PostgreSQL, MySQL, MongoDB    | Diseño y optimización de esquemas     |
| 🔒 **Seguridad Backend**      | `$800.000 COP`   | JWT, OAuth2, SSL/TLS          | Implementación de mejores prácticas   |
| 🚀 **APIs REST**              | `$900.000 COP`   | Laravel, Spring Boot, Node.js | APIs robustas y escalables            |
| ☁️ **Cloud & DevOps**         | `$1.200.000 COP` | AWS, Docker, Jenkins          | Despliegue y configuración en la nube |
| 💻 **Desarrollo de Software** | `$1.800.000 COP` | Laravel, React, Vue.js        | Aplicaciones completas a medida       |

---

## 🎨 Componentes Principales

### **Hero Section (`hero.tsx`)**

- Typing animation con múltiples textos
- Iconos de tecnologías con animación
- CTAs principales optimizados
- Gradiente de fondo dinámico

### **Services (`services.tsx`)**

- Grid responsive de servicios
- Cards con hover effects
- Badges de tecnologías
- Precios destacados

### **Projects (`projects.tsx`)**

- Layout alternado de proyectos
- Métricas de performance
- Stack tecnológico visual
- Links a demos y código

### **Contact (`contact.tsx`)**

- Formulario multi-step
- Validación en tiempo real
- Modal de confirmación animado
- Integración con Resend

---

## 📱 Características Técnicas

### **🎨 Diseño Responsive**

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid y Flexbox para layouts
- Componentes adaptables

### **⚡ Performance**

- Code splitting automático con Next.js
- Lazy loading de imágenes
- Optimización de fonts
- Bundle size optimizado

### **🔍 SEO Optimizado**

- Meta tags dinámicos
- Open Graph completo
- Structured data
- Sitemap automático

### **♿ Accesibilidad**

- ARIA labels completos
- Navegación por teclado
- Contraste WCAG AA
- Screen reader friendly

---

## 🔧 Configuración del Email

### **Configurar Resend**

1. **Crear cuenta en [Resend](https://resend.com)**
2. **Generar API Key**
3. **Configurar dominio (opcional)**
4. **Agregar variables de entorno**

```env
RESEND_API_KEY=re_abcdef123456
TO_EMAIL=contacto@tudominio.com
```

### **Personalizar Template**

El template de email se encuentra en `app/actions.ts` y incluye:

- Header con gradiente
- Información del cliente en tabla
- Detalles del proyecto
- Botones de acción rápida
- Footer profesional

---

## 🚦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run lint:fix     # Fix automático de lint

# Utilidades
npm run type-check   # Verificación de TypeScript
npm run clean        # Limpiar .next y node_modules
npm run analyze      # Análisis del bundle
```

---

## 📈 Performance y SEO

### **Core Web Vitals**

- ✅ **LCP**: < 2.5s (Largest Contentful Paint)
- ✅ **FID**: < 100ms (First Input Delay)
- ✅ **CLS**: < 0.1 (Cumulative Layout Shift)

### **Lighthouse Score Target**

- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 100
- 🟢 **Best Practices**: 100
- 🟢 **SEO**: 100

### **Optimizaciones Implementadas**

- Image optimization con Next.js
- Font optimization automática
- Critical CSS inline
- Preload de recursos importantes
- Service Worker para cache

---

## 🤝 Contribución

### **Proceso de Contribución**

1. **Fork del repositorio**
2. **Crear rama feature**: `git checkout -b feature/nueva-funcionalidad`
3. **Commit cambios**: `git commit -m 'feat: nueva funcionalidad'`
4. **Push a la rama**: `git push origin feature/nueva-funcionalidad`
5. **Crear Pull Request**

### **Estándares de Código**

- Seguir convenciones de TypeScript
- Usar Prettier para formateo
- ESLint sin errores
- Tests para nuevas funcionalidades
- Documentación actualizada

### **Commit Convention**

```
feat: nueva funcionalidad
fix: corrección de bug
docs: actualización de documentación
style: cambios de estilo
refactor: refactorización de código
test: agregar tests
chore: tareas de mantenimiento
```

---

## 📞 Contacto y Soporte

### **Desarrollador**

- 👨‍💻 **Aldair Gutierrez Guerrero**
- 📧 **Email**: [aldairg.dev@gmail.com](mailto:aldairg.dev@gmail.com)
- 💼 **LinkedIn**: [aldair-gutierrez-guerrero](https://www.linkedin.com/in/aldair-gutierrez-guerrero)
- 🐙 **GitHub**: [aldairg-dev](https://github.com/aldairg-dev)

### **Servicios Disponibles**

- 🔧 Desarrollo Backend
- 🌐 Aplicaciones Web
- ☁️ Cloud & DevOps
- 🔒 Seguridad de Aplicaciones
- 📊 Consultoría Técnica

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 Aldair Gutierrez Guerrero (aldairg-dev)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**

**Desarrollado con ❤️ por [Aldair Gutierrez Guerrero](https://github.com/aldairg-dev)**

</div>
