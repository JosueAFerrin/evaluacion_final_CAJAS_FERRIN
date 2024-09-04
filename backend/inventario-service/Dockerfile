# Utilizar una imagen base de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que el servidor escuchará
EXPOSE 3003

# Ejecutar el servidor
CMD ["node", "index.js"]
