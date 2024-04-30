import './Contact.css'

function Contact() {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="contact__container container">
          <h2 className="section__title">CONTACT US TO EAT CHIPS</h2>
          <div className="contact__content grid">
            <div className="contact__data grid">
              <div>
                <h3 className="contact__title">Write to us</h3>
                <div className="contact__social">
                  <a
                    href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.696.696 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.711.711 0 0 0-.973.158l-.6.915a.229.229 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055c-.426-.426-.798-.992-1.007-1.373a.227.227 0 0 1 .067-.291l.924-.686a.712.712 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.695.695 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="https://m.me/bedimcode" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.958 9.958 0 0 1-4.863-1.26l-.305-.178l-3.032.892a1.01 1.01 0 0 1-1.28-1.145l.026-.109l.892-3.032A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2M9.793 9.793l-3 3a1 1 0 1 0 1.414 1.414l2.293-2.293l2.293 2.293a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13.5 12.086l-2.293-2.293a1 1 0 0 0-1.414 0"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="mailto:examplemail@correo.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="contact__title">Call us</h3>
                <address className="contact__info">
                  <span>+00-987-7654-321</span>
                  <span>+11-012345</span>
                </address>
              </div>
              <div>
                <h3 className="contact__title">Find us here</h3>
                <address className="contact__info">
                  <span>Lima - Sun City - Peru </span>
                  <span>Av. Moon #4321</span>
                </address>
              </div>
            </div>
            <img
              src="./src/assets/webp/contact-man.webp"
              alt="contact man"
              className="contact__img"
            />
          </div>

          <img
            src="./src/assets/webp/shrimp.webp"
            alt="img"
            className="contact__shrimp"
          />
          <img
            src="./src/assets/webp/crab.webp"
            alt="img"
            className="contact__crab"
          />
          <img
            src="./src/assets/webp/meat.webp"
            alt="img"
            className="contact__meat"
          />
        </div>
      </section>
    </>
  )
}

export default Contact
