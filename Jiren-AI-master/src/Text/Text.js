import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import user from '../user.png';
import { Link } from 'react-router-dom';


const Text = () => {
  const [prm, setPrm] = useState('');
  const [history, setHistory] = useState([]);
  const apiKey = "AIzaSyBUonipQ-npXPV9s0aC8292FKYJ5Z7-ZyM";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

  // useEffect(() => {
  //   const savedHistory = JSON.parse(localStorage.getItem('history')) || [];
  //   setHistory(savedHistory);
  // }, []);

  const prompt = (e) => {
    const values = e.target.value;
    setPrm(values);
  };
    
  const run = async () => {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
    
    const result = await chatSession.sendMessage(prm);
    let responseText = await result.response.text();
    responseText = responseText.split('.').join('.\n'); // Split sentences into new lines

    const newEntry = { prompt: prm, response: responseText };
    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);
    localStorage.setItem('history', JSON.stringify(updatedHistory));
    setPrm('');
  };

  return (
    <>
      <header className='navbar bg-success navbar-dark navbar-expand-sm p-3 sticky-top'>
        <h2 className='navbar-brand'><a href="#" className='text-white'>Jiren AI</a></h2>
        <button type="button" className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#box"><span className='navbar-toggler-icon '></span></button>
        <div className='navbar-collapse collapse justify-content-center' id="box">
          <div className='navbar-nav '>
          <div className='nav-items'><a href="" className='nav-link text-white' id="l1"><Link to="/" className='text-white text-decoration-none h5'>Home</Link></a></div>
          <div className='nav-items'><a href="" className='nav-link text-white' id="l2"><Link to="/text" className='text-white text-decoration-none h5'>Text</Link></a></div>
          <div className='nav-items'><a href="" className='nav-link text-white' id="l3"><Link to="/image" className='text-white text-decoration-none h5'>Image</Link></a></div>
          <div className='nav-items'><a href="" className='nav-link text-white' id="l4"><Link to="/about" className='text-white text-decoration-none h5'>About</Link></a></div>
          </div>    
        </div>
        <div className='justify-content-md-end'>
          <img src={user} height='40' />
        </div>
      </header>

      <div className="container w-75">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-6 border border-dark border-2 mt-5 p-5">
            <p className="h1 text-center mb-5">Text GPT</p>
        </div>
      </div>
      </div>

      <div className="container-fluid d-flex justify-content-center">
  <div className="row d-flex justify-content-center mt-5 w-100">
    <div className="col-12 col-md-10 col-lg-8">
      <ul className="list-unstyled">
        {history.map((entry, index) => (
          <div key={index} className="border border-dark p-3 mt-2">
            <strong>Prompt:</strong> <span className="d-block">{entry.prompt}</span>
            <strong>Response:</strong> <pre className="d-block">{entry.response}</pre>
          </div>
        ))}
      </ul>
    </div>
  </div>
</div>


 
      <div className='container d-flex justify-content-center mt-3 mb-5 pb-5'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <input type="text" onChange={prompt} value={prm} className='form-control ' placeholder='Enter the Prompt' />
          </div>
          <div className="col">
            <button onClick={run} className="form-control btn btn-dark">Generate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
