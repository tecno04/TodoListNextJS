## Getting Started
# Development:

* Docker:
```bash
docker compose up -d (detach mode)
(esto levanta la base de datos [postgreSQL] en docker)
```

* Instalación de Prisma
```bash
1. npm install @prisma/client #instala la libreria para conectar con base de datos
2. npx prisma init #si no lo tienes instalado o te salteaste el paso 1, te preguntará para instalarlo
```

* Renombrar .env -> .env.template

* .env -> Cambiar los datos en la cadena de conexion a la base de datos (por default, es con PostgreSQL)

* Por cada cambio que hagamos en los modelos en "./prisma/schema.prisma", vamos a ejecutar el comando:
```bash
npx prisma generate "nombre_migracion" (ejemplo "npx prisma generate dev")
```

* Por ultimo, generar la migración para aplicar los cambios:
```bash
npx prisma generate
```