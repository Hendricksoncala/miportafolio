## Utiliza los siguientes comandos para el despliegue del portfolio

# 1. Instalar todas las dependencias del proyecto 
npm install

# 2. Compilar el portafolio y generar la carpeta 'dist'
npm run build

# 3. Iniciar sesión en Netlify desde la terminal (si no lo has hecho antes)
npx netlify login

# 4. Desplegar la carpeta de producción directamente a Netlify
npx netlify deploy --prod --dir=dist