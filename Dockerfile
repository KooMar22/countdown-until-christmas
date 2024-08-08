FROM node:20-alpine

# Postavljamo radni direktorij unutar kontejnera
WORKDIR /app

# Kopiramo package.json i package-lock.json (ako postoji)
COPY package*.json ./

# Instaliramo ovisnosti
RUN npm install

# Kopiramo ostatak aplikacije u kontejner
COPY . .

# Build-amo aplikaciju
RUN npm run build

# Eksponiramo port koji Vite koristi za preview (obično 4173)
EXPOSE 4173

# Pokrećemo buildanu aplikaciju u preview načinu rada s --host opcijom
CMD ["npm", "run", "preview", "--", "--host"]