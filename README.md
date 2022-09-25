# troca-plantao-v3
Terceiro inicio da aplicação Troca Plantão

Ininiciei npm init -y
npm i express
npm i typescript -D
npm i @types/express
npx tsc --init
tsconfig: rootDir (./src), outDir (./build)
npm i ts-node-dev -D
novo script "dev": "ts-node-dev ./src/server.ts"
npm i prisma -D
npx prisma init --datasource-provider SQlite
verificar configuração VScode: "[prisma]": { "editor.formatOnSave": true }
criar Models no schema.prisma
npx prisma migrate dev (para criar a primeira versao migrate e o banco de dados e suas entidades)
npm install @prisma/client
...no server.ts : import { PrismaClient } from '@prisma/client'
... e const prisma = new PrismaClient()
OBS - o tsnode dev vai parar de funcionar porque a conexao com o BD nbo prisma impede que ele restart sozinho. Adicionar a flag --exit-child no script dev do package.json
NÃO ESQUECER que as funções que vão fazer acesso ao banco de dados devem ser async await
