# Estágio de construção
FROM node:latest as build

WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./
COPY tsconfig.json ./

# Instala as dependências
RUN npm install

# Ajusta as permissões dos arquivos antes da cópia
RUN chmod -R 755 /app

# Copia o código-fonte TypeScript
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Copia os arquivos de teste
COPY test/ ./test/

# Executa os testes
RUN npm test

# Estágio final
FROM node:latest

WORKDIR /app

# Copia os arquivos
COPY package*.json .
COPY jest.config.js .

# Instala as dependências de produção
RUN npm ci

# Copia o código JavaScript compilado
COPY --from=build /app/dist ./dist/

# Expõe a porta
EXPOSE 3000

# Comando de execução
CMD ["node", "dist/src/index.js"]
