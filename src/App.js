import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TexthtmlForm from './components/TextForm';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert('Dark mode has been enabled', 'success');
        } else {
            setMode('light');
            document.body.style.backgroundColor = '#FFFFFF';
            showAlert('Light mode has been enabled', 'success');
        }
    }

    return (
        <>
            <BrowserRouter>
                <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route exact path="/" element={<TexthtmlForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
                        <Route exact path="about" element={<About />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
