# RenovaQuest
![image](https://github.com/user-attachments/assets/51d459ab-6410-4d19-bfc5-838f2e9f8551)
![image](https://github.com/user-attachments/assets/e7127e51-c6f3-4852-a4ac-47392f81346a)

![image](https://github.com/user-attachments/assets/31a6aa99-cec9-4fb5-8811-62ff9a8814ab)

# Aplicación Web RenovaQuest para el Game Master

RenovaQuest es un juego educativo centrado en energías renovables como la solar, eólica e hidroeléctrica. Esta aplicación web está diseñada para que el **Game Master** gestione y monitoree el ecosistema del juego de manera efectiva.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Características

- **Autenticación de Usuarios**: Sistema de inicio de sesión seguro para el Game Master.
- **Gestión de Usuarios**: Crear, actualizar y eliminar cuentas de jugadores.
- **Monitoreo del Juego**:
  - Ver sesiones de juego activas y pasadas.
  - Rastrear logros y niveles de los jugadores.
- **Panel de Estadísticas**:
  - Analizar estadísticas del juego para cada jugador.
  - Generar informes sobre el rendimiento del juego.
- **Módulos de Energías Renovables**:
  - Información detallada sobre los desafíos solares, eólicos e hidroeléctricos dentro del juego.

## Tecnologías Utilizadas

- **Front-end**: Angular
- **Back-end**: .NET Framework
- **Base de Datos**: SQL Server
- **Autenticación**: JWT
- **Control de Versiones**: Git
- **Despliegue**: Somee.com

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/RenovaQuest-WebSite.git
   ```

2. **Navegar al directorio del proyecto**:

   ```bash
   cd RenovaQuest-WebSite
   ```

3. **Instalar las dependencias del Front-end**:

   ```bash
   cd frontend
   npm install
   ```

4. **Instalar las dependencias del Back-end**:

   - Abre el proyecto de .NET Framework en Visual Studio y restaura los paquetes NuGet necesarios.

5. **Configurar variables de entorno**:

   - Para el Front-end, si es necesario.
   - Para el Back-end, configura el archivo `web.config` o utiliza variables de entorno para las cadenas de conexión y claves secretas.

6. **Ejecutar la aplicación**:

   - **Back-end**:
     - Ejecuta el proyecto en Visual Studio.
   - **Front-end**:
     - Desde el directorio `frontend`, ejecuta:
       ```bash
       ng serve
       ```
     - La aplicación estará disponible en `http://localhost:4200`.

## Uso

- **Inicio de Sesión**: Accede a la página de inicio de sesión e ingresa tus credenciales de Game Master.
- **Panel de Control**: Visualiza una vista general de las sesiones de juego y estadísticas de los jugadores.
- **Gestión de Usuarios**:
  - Navega a la sección "Usuarios" para crear o gestionar cuentas de jugadores.
- **Monitoreo del Juego**:
  - Accede a vistas detalladas de cada sesión de juego.
  - Monitorea el progreso, logros y niveles de los jugadores.
- **Estadísticas**:
  - Genera y exporta informes sobre el rendimiento de los jugadores y métricas del juego.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. **Haz un fork del repositorio**

2. **Crea una nueva rama**:

   ```bash
   git checkout -b feature/tu-nueva-funcionalidad
   ```

3. **Confirma tus cambios**:

   ```bash
   git commit -m "Agrega tu mensaje"
   ```

4. **Empuja a la rama**:

   ```bash
   git push origin feature/tu-nueva-funcionalidad
   ```

5. **Crea un Pull Request**

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

---

*Para cualquier pregunta o soporte, por favor contacta a [andersonarturomarin@gmail.com](mailto:andersonarturomarin@gmail.com).*
