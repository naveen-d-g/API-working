import React from 'react'
import user from '../user.png'
import {Link} from 'react-router-dom';

const Intro = () => {
  return (
    <div>
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


    <div className="container mt-4 mb-5">
      <div className="row">
        <div className="col-12 mt-2">
          <h1 className="text-center " id="text">Welcome to Jiren AI</h1>
          <p className="text-center" id="para">We make your work Easier..........</p>
        </div>
        <div className='col d-flex justify-content-center'>
        </div>
      </div>
    </div>

    <div className="container w-75">
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-sm-9 col-md-9 border border-dark p-3 mt-4'>
          <p className='text-center h3'>Text GPT</p>
              <p className="mt-4 text-justify">TextGPT helps you get answers, find inspiration and be more productive. It is free to use and easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming and … more.. Here you can get the answer that you want to know for sure..</p>
              <button className="btn btn-success"><a><Link to="/text" className="text-white">Go</Link></a></button>
          </div>
        </div>
          <div className='row d-flex justify-content-center'>
          <div className='col-12 col-sm-9 col-md-9 border border-dark mt-4 mb-5 p-3'>
          <p className='text-center h3'>Image GPT</p>
              <p className="mt-4 text-justify">Image GPT is a generative model that utilizes a variant of the Transformer architecture to produce lifelike images based on textual descriptions. By training on an extensive dataset of images paired with corresponding text descriptions....</p>
              <button className="btn btn-success mt-4"><a><Link to="/image" className="text-white">Go</Link></a></button>
          </div>
          </div>
    </div>

    </div>
  )
}

export default Intro;