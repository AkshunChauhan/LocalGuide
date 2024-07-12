import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Blog from './pages/blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Blog />
      </div>
    </>
  )
}

export default App
