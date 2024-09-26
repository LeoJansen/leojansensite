import { clientReviews } from "../constants"

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from my Clients</h3>
      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div className="client-review" key={id}>
            <p className="text-white font-light">{review}</p>

            <div className="client-content">
              <div className="flex gap-3">
                <img src={img} alt={name} className="w-12 h-12 rounded-full" />
              </div>
              <div className="flex flex-col">
              </div>
              <p className="client-name">{name}</p>
              <p className="client-position">{position}</p>
            
            </div>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Clients