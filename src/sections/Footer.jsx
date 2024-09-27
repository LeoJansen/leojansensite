import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      teste
        <div className="text-white-500 flex gap-2">
          <Link to="/nested/terms-of-use" >
          Terms of Use
          </Link>
            
        </div>


    </section>
  )
}

export default Footer