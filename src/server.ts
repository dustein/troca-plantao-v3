import express from "express";
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient();

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



app.listen(3030, () => { console.log('Servidor ATIVO !')})