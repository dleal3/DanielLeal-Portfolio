import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header className="portfolio_header">
        <div className="div_container">

  // START NAVBAR
  <div id="wrapper1" class="container-fluid">
    <nav class="navigation">
      <div class="left">
        <div class="logo">DANIEL LEAL</div>
        <div class="sublogo">Web Developer</div>
      </div>

      <div class="right">
        <ul>
          <li><a href="#aboutme">ABOUT ME</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#footer">CONTACT</a></li>
        </ul>
      </div>
    </nav>

    // END NAVBAR

    //  START HEADER

    <div id="header" class="container-fluid">
      <div id="welcome">
        <h1>WELCOME</h1>
        <h4 style="padding-bottom: 50px">Let's create amazing things together.</h4>
        <a href="#aboutme" class="btn btn-circle">
          <i class="fa fa-angle-double-down"></i>
        </a>
      </div>
    </div>
  </div>
  // END WRAPPER

  // START ABOUT ME

  <div id="aboutme" class="container-fluid">
    <div class="row" style="padding-top: 50px">
      <div class="col-md-8">
        <h4>ABOUT ME</h4><br>
        <p>I have always been fascinated with people that push themselves, whether it be climbing the highest mountains or running their first ever 10k.</p><br>

        <p>My passion has always been connecting with others and sharing an understanding in ways that encourages free though, creative ideas and imaginative solutions.</p><br>

        <p>I believe there are so many things in this world that are yet to be created and so many possibilities of creating them. My goal in life is to take my growing knowledge in coding and create applications that can be educational aswell as entertaining. </p>
      </div>
      <div class="col-md-4 text-center">
        <img src="https://avatars2.githubusercontent.com/u/23640802?v=3&s=460" class="img-round"></img>
      </div>
    </div>
  </div>

  // END ABOUT ME

  // START PORTFOLIO

  <div id="portfolio" class="container-fluid">
    <h4>PORTFOLIO</h4><br><br>
    <div class="row">
      <div class="col-md-6" style="margin-bottom: 10px">
        <img src="http://s33.postimg.org/ef8wnuddr/pot1.png" class="img-responsive">
      </div>
      <div class="col-md-6" style="margin-bottom: 10px">
        <img src="http://s33.postimg.org/ef8wnuddr/pot1.png" class="img-responsive">
      </div>
    </div>
    <BR>
    <div class="row">
      <div class="col-md-6" style="margin-bottom: 10px">
        <img src="http://s33.postimg.org/ef8wnuddr/pot1.png" class="img-responsive">
      </div>
      <div class="col-md-6" style="margin-bottom: 10px">
        <img src="http://s33.postimg.org/ef8wnuddr/pot1.png" class="img-responsive">
      </div>
    </div>
  </div>

  // END PORTFOLIO

  // START FOOTER
  <div id="footer" class="container-fluid">
    <a href="https://www.facebook.com/joelstephensonphoto/" target="blank" class="icon-btn facebook-icn"><i class="fa fa-facebook"></i></a>
    <a href="https://twitter.com/Joel_Stephenson" target="blank" class="icon-btn twitter-icn"><i class="fa fa-twitter"></i></a>
    <a href="https://www.instagram.com/joel_stephenson/" target="blank" class="icon-btn instagram-icn"><i class="fa fa-instagram"></i></a>
    <br><br>
    <p>COPYRIGHT © 2017 DANIEL LEAL</p>

  </div>
        </div>
      </header>
    )
  }
})
