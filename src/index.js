import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom'

const C = createContext(null)

const App = () => {
  const [n, setN] = useState(0)
  return (
    <C.Provider value={{ n, setN }}>
      <div className='App'>
        <Parent />
      </div>
    </C.Provider>
  )
}

const Parent = () => {
  return (
    <div>
      我是爸爸
      <Child />
    </div>
  )
}

const Child = () => {
  const { n, setN } = useContext(C)
  const onClick = () => {
    setN(i => i + 1)
  }
  return (
    <div>
      我是儿子 我得到的 n 是：{n}
      <button onClick={onClick}>n+1</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
