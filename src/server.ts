import express from "express";
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Raiz. Typscript ON.')
})

//consulta a todos os Users cadasrados
app.get('/users', async (req, res) => {

  const users = await prisma.user.findMany()

  res.send(users)
});

//consulta todos os Jobs criados
app.get('/jobs', async (req, res) => {

  const jobs = await prisma.job.findMany();

  res.json(jobs)
});

//criacao de novo user
app.post('/users', async (req, res) => {

  const { nome, plantao, funcional } = req.body;
  
  const newUser = await prisma.user.create({
    data: {
      nome,
      plantao,
      funcional
    }
  })

  console.log(newUser)
  res.status(201).json(newUser)
})


app.listen(3030, () => { console.log('Servidor ATIVO !')})