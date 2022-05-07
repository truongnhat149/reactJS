import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

function App() {
    return (
        <div>
            <h1>Xin chào Code gym</h1>
            <h2>Code Gym mãi đỉnh</h2>
        </div>
    )
}

// react@17
// render component app vào root element
// ReactDOM.render(<App/>, document.getElementById('root'))

// react@18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)