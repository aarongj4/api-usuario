
# 📦 API REST Usuario - CRUD con Autenticación JWT

Una API RESTful desarrollada en **Node.js + Express**, que permite realizar operaciones **CRUD sobre usuarios**, autenticación con **JWT (JSON Web Tokens)** y documentación interactiva usando **Swagger UI**.

---

## 🚀 Tecnologías

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JsonWebToken)
- bcrypt
- dotenv
- body-parser
- Swagger UI Express

---

## ⚙️ Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/aarongj4/api-usuario.git
   cd api-usuario
- 
2. Instala las de pendencias:
-     npm install



3. Crea un archivo `.env` en la raíz del proyecto con estas variables:
PORT=3000 SERVER_DB=<tu_servidor_de_bd> USER_DB=<usuario_bd> PASS_DB=<contraseña_bd> JWT_TOKEN_SECRET=<clave_secreta_para_jwt>


4. Correr el proyecto
-     node app.js
5. Test
-     artillery run test/carga/users-test.yaml

## 🔐 Usuarios de prueba

Puedes usar los siguientes usuarios para autenticarte en la API y probar los endpoints protegidos:

### 👤 Usuario 1 (Admin)
- **Email:** admin@gmail.com  
- **Contraseña:** Admin123.

### 👤 Usuario 2 (User)
- **Email:** user@gmail.com  
- **Contraseña:** User1234.

🔸 Ambos usuarios ya están registrados en la base de datos.  
🔸 Puedes usar el endpoint `/users/login` para obtener un token de acceso.

## 📘 Documentación con Swagger

Accede desde tu navegador a:

http://localhost:3000/api-docs


Ahí podrás explorar y probar todos los endpoints.
