import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import user from '../user.png';
import './Image.css';


const Image = () => {
  const [image, setImage] = useState('/');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const createImage = async () => {
    if (!inputRef.current.value) {
      setError('Input cannot be empty.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer sk-QzYhWOMAKoWp9IxdI5U21eXwOpaokzn9uu6hBaI8yAah2qlW',
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: `${inputRef.current.value}`,
            },
          ],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(`API Error: ${data.message}`);
      }

      const data = await response.json();

      if (data.artifacts && data.artifacts.length > 0 && data.artifacts[0].base64) {
        const imageUrl = `data:image/png;base64,${data.artifacts[0].base64}`;
        setImage(imageUrl);
      } else {
        throw new Error('No image data returned from the API.');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
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

        <h1 className='text-center mt-5 mb-5'>Generate Image You like......</h1>
      <div className='container d-flex justify-content-center mt-3 mb-5 pb-5'>
        <div className="row">
          <div className="col-12">
            <input type="text"  className='form-control' ref={inputRef } placeholder='Enter the Prompt' />
          </div>
          <div className="col">
            <button  className="form-control btn btn-dark" onClick={createImage}>Generate</button>
          </div>
        </div>
      </div>
      
      <div className="container p-3 d-flex justify-content-center">
        <div className="row">
            <div className="col">
                <img src={image} height="370px" className='border border-dark'/>
            </div>
        </div>
      </div>



    </>
  );
};

export default Image;
