import './App.css'

const Title = ({ children }) => {
  return (
    <h2 className='text-gray-200'>{children}</h2>
  )
}

function App () {
  return (
    <main className='flex items-center justify-center h-screen bg-slate-800'>
      <section>
        <button className='w-52 border-2 border-sky-800 bg-sky-500 rounded p-4 text-white
          hover:bg-sky-600 hover:text-gray-300'
        >
          Save Changes
        </button>
        <Title>hola</Title>
        <Title>hola</Title>
      </section>
    </main>
  )
}

export default App
