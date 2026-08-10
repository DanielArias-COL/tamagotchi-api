# Imagen base: usa Node.js LTS en variante alpine (ligera)
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias (package.json y package-lock.json si existe)
# Esto permite aprovechar la cache de Docker para no reinstalar dependencias si el package.json no cambia
COPY package*.json ./

# Instala solo dependencias de producción (omitiendo devDependencies)
# --omit=dev reduce el tamaño final de la imagen
RUN npm ci --omit=dev

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Indica el puerto que la aplicación usará (ajusta si tu app usa otro puerto)
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación usando el script "start" definido en package.json
CMD ["npm", "start"]
