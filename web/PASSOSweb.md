Inciando app web com React usando Vite
npm create vite@latest.

Acessou pasta web para iniciar projeto React.
npm install
npm run dev
Funcionando página html.
Instalando tailwindcss
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p ((a flag '-p' cria o postcss.config.cjs, que faz a integração com o Vite para este entender que estamos usando o tailwind))
Configurar o tailwind.config.cjs >>> indicou o caminho pro 'content' : './src/**/*.tsx'
Criar dentro de src a pasta styles e dentro desta, arquivo main.css com o conteudo da configuracao conforme documentacao
Instalar no VSCode extensao do "postcss language support" e do próprio tailwindcss
