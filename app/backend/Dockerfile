# Usa uma imagem base do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app-backend

# Copia apenas os arquivos de dependências para instalar primeiro (aproveitando cache do Docker)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos para o container
COPY . .

# Expor a porta que o backend usará
EXPOSE 3001

# Comando para iniciar o servidor em modo de desenvolvimento
CMD ["npm", "run", "dev"]
