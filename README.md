## Getting Started
# Development:

* Instalaciones Previas: <br>
1 - Tener docker instalado para poder dockerizar la BD con el archivo "docker-compose.yml"
<br>
2 - ejecutar comando ```bash npm install | npm i``` (cualquiera de los dos funciona)

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

* Para tener datos y poder jugar con el CRUD, ejecutar desde POSTMAN/INSOMIA/WEB:
```bash
http://localhost:3000/api/seed
```

* Para ejecutar en modo dev:
```bash
npm run dev
```

* Para construir proyecto:
```bash
npm run build
```