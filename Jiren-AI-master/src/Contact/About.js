import React from 'react'
import user from '../user.png'
import {Link} from 'react-router-dom';
import designer from '../Designer (2).jpg'
import goku from '../DB/Goku - 1.jpg'
import Beerus from '../DB/Beerus.jpg'
import whis from '../DB/Whis.jpg'
import Broly from '../DB/4.jpg'
const About = () => {
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


      <h1 className="text-center mt-5 mb-5">Jiren AI</h1>
      
    <div className="container w-75">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-6 col-sm-12 col-lg-6 border border-dark mt-4 p-4">
              <p className='text-center h3'>Introduction</p>
              <p className="mt-4 text-justify">Jiren AI is your ultimate AI-powered assistant, designed to enhance your productivity and creativity. With Jiren AI, you can generate images,text. It will help you to make your work Easier and it is also our promise too. using TextGPT you can generate the paragraph,story,essay and so on......Text GPT helps you get answers, find inspiration, and be more productive. Whether you need help with writing, learning, brainstorming, or just finding the right information, Text GPT is here to assist you. It’s free to use and easy to try. Our Moto is to make people work Easier</p>
          </div>
          <div className="col-12 col-md-6 col-sm-12 col-lg-6 ms-3 mt-4 p-5 border border-dark d-flex justify-content-center">
             <div className='row'>
                <img src={designer} height="280px" className='p-3'/>
             </div>
          </div>
        </div>
    </div>

    <div className="container mt-5 w-75">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-6 col-sm-12 col-lg-6 border border-dark mt-4 p-4">
              <p className='text-center h3'>Text GPT</p>
              <p className="mt-4 text-justify">TextGPT helps you get answers, find inspiration and be more productive. It is free to use and easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming and … more.. Here you can get the answer that you want to know for sure..</p>
              <button className="btn btn-success"><a><Link to="/text" className="text-white">Go</Link></a></button>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 border border-dark mt-4 p-4">
              <p className='text-center h3'>Image GPT</p>
              <p className="mt-4 text-justify">Image GPT is a generative model that utilizes a variant of the Transformer architecture to produce lifelike images based on textual descriptions. By training on an extensive dataset of images paired with corresponding text descriptions....</p>
              <button className="btn btn-success mt-4"><a><Link to="/image" className="text-white">Go</Link></a></button>
          </div>
        </div>
    </div>

    <h4 className="text-center mt-5 mb-5">Some of the Images</h4>
   
   <div className='container w-75'>
    <div className="row">
        <div className='col-12 col-md-6 col-sm-12 border border-dark p-3 mt-3 d-flex justify-content-center'>
                <img  src={goku} height="280px" className='mt-3 p-3'/>
        </div>
        <div className='col-12 col-md-5 border border-dark p-3 mt-3  d-flex justify-content-center mx-md-3'>
                <img  src={Broly} height="280px"/>
        </div>
        <div className='col-12 col-md-6 mt-3 border border-dark p-3 d-flex justify-content-center'>
                <img  src={whis} height="280px" />
        </div>
        <div className='col-12 col-md-5 border mt-3 border-dark p-3  d-flex justify-content-center mx-md-3'>
                <img  src={Beerus} height="280px"/>
        </div>
    </div>
   </div>


    
    </>
  )
}

export default About