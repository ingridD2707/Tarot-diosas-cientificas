🔮 Proyecto Tarot Interactivo
    Descripción

Este proyecto es una aplicación web interactiva de lectura de cartas de tarot que combina diseño moderno con un enfoque educativo. A través de una interfaz clara e intuitiva, el usuario puede descubrir cartas, ver su significado, asociarlas a figuras inspiradoras y acceder a información detallada.

El proyecto fue desarrollado en el marco del curso Full Stack Developer de Factoría F5
, aplicando conceptos de desarrollo frontend, enrutado, componentes reutilizables y estilos modernos con TailwindCSS.


    Tecnologías utilizadas

⚛️ React: Librería principal para la construcción de la interfaz.

🎨 TailwindCSS: Framework de estilos CSS utilitario para diseño responsivo.

🗺️ React Router DOM: Manejo de rutas y navegación tipo SPA.

    Estructura de carpetas
src/
├── components/          # Componentes reutilizables de la UI
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── TarotCard.jsx
│
├── image/               # Recursos gráficos
│   └── backCard.png
│
├── pages/               # Páginas principales del sitio
│   ├── Home.jsx
│   ├── TarotDetail.jsx
│   └── ThrowTarot.jsx
│
├── router/              # Configuración de rutas
│   └── Router.jsx
│
├── services/            # Servicios de datos y lógica de negocio
│   └── TarotServices.jsx
│
├── index.css            # Estilos globales
├── main.jsx             # Punto de entrada de la aplicación


   Próximas mejoras (roadmap)

🔮 Animaciones más fluidas en las cartas (flip y hover).

📱 Optimización completa para móviles y tablets.

🌙 Modo oscuro configurable.

🗄️ Integración con base de datos para guardar lecturas personalizadas.