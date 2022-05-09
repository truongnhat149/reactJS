import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext'
import Content from './Content'
import './App.css'


// Context
// CompA => CompB => CompC

// Theme Dark / Light

// 1. Create Context
// 2. Provider
// 3. Consumer

function App() {
 
  const context = useContext(ThemeContext)

  return(
   
      <div style={{padding : '10px 32px'}}>
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Content />
      </div>
  )
}

export default App;