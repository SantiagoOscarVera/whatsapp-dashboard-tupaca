
# **WhatsApp Dashboard** #

<div align="center">
  <a >
    <img src="https://media.discordapp.net/attachments/734432464398975006/1133597338397577296/image.png?width=878&height=431" width="500" >
  </a>
</div>


### DEPLOY/DEMO ⚙️ ###

```
https://whatsapp-dashboard-santiago-vera.netlify.app/
```

### How to run this project locally ⚙️ ###
1. Clone the repository: ...
2. Navigate to the Backend folder.
3. Create an .env file in the Backend folder and add the environment variables for your postgreSQL account.

(In PostgreSQL you simply have to create a database to be able to use it in the DB_NAME section of the .env)

```
DB_USER = 
DB_PASSWORD =
DB_HOST =
DB_NAME =

```

4. Once cloned on your computer, in the Backend terminal put:
```
npm install
```
5. To start your Backend on localhost, in the Backend terminal put:
```
npm start
```
6. Once cloned on your computer, in the Frontend terminal put:
```
npm install
```
7. To start your Frontend on localhost, in the Frontend terminal put:
```
npm run dev
```

Technologies for the backend:
```
  "engines": {
    "node": ">=12.18.3",
    "npm": ">=6.14.6"
  },
  "dependencies": {
    "axios": "^1.2.4",
    "body-parser": "^1.19.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "pg": "^8.5.1",
    "qs": "^6.11.0",
    "request": "^2.88.2",
    "sequelize": "^6.3.5"
  },
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^8.2.1",
    "nodemon": "^2.0.6",
    "supertest": "^6.0.1",
    "supertest-session": "^4.1.0"
  }
}

```
Technologies for the frontend:
```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.1",
    "react-router": "^6.14.2",
    "react-router-dom": "^6.14.2",
    "react-scripts": "^5.0.1",
    "redux-thunk": "^2.4.2"
  },
  "devDependencies": {
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "@vitejs/plugin-react": "^4.0.1",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.44.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.1",
    "postcss": "^8.4.26",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.0"
  }
}


```

### How to reach us 📫 ###
If you run into any issues while running this project 🚩, or to address any related concerns ❓, please send an email 📧 to:

- santiagovera280@gmail.com