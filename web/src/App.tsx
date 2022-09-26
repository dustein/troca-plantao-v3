import './styles/main.css';
// import './App.css'
function Formulario() {
  return(
    <div className='grid'>
      <input type="text" placeholder='Nome' />
      <input type="text" placeholder='Plantao' />
      <input type="text" placeholder='Funcional' />
      <button className='bg-slate-800 text-gray-400 p-4'>Enviar</button>
    </div>
  )
}

function App() {

    return (
      <div>
        <h1 className='bg-slate-500 text-center p-2'>Troca Plantão App</h1>

        <Formulario />

      </div>
      
      )
}

export default App