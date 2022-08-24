import React from 'react'

const Footer = () => {
  return (

    <footer className="text-center text-white p-10 bg-[#808080]" >
      <section id="lab_social_icon_footer">
        <div className="container">
          <div className="text-center center-block">
            <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="px-2 fa fa-facebook-square fa-3x social"></i></a>
            <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa px-2 fa-twitter-square fa-3x social"></i></a>
            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa px-2 fa-google-plus-square fa-3x social"></i></a>
            <a href="mailto:#"><i id="social-em" className="fa fa-envelope-square fa-3x px-2 social"></i></a>
          </div>
        </div>
      </section>

      <div className="text-center text-white p-4" >
        © 2022 Copyright
      </div>
    </footer>
  )
}

export default Footer