import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="relative c-space mt-20 lg:mt-0 t-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <Link to="/nested/terms-of-use" >
          Terms of Use
        </Link>
        <Link to="/nested/privacy-policy" >
          Privacy Policy
        </Link>
      </div>
      <div className="flex gap-3">

        <a href="https://github.com/leojansen" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a href="https://www.instagram.com/leojansen7" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a href="https://linkedin.com/in/leonardojansen" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img src="/assets/linkedin.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a href="https://www.facebook.com/leojansen7" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img src="/assets/facebook.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>
        <p className="text-white-500">Leo Jansen. All rights reserved.</p>


      </div>



    </section>
  )
}

export default Footer