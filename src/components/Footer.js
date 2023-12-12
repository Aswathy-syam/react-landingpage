import React from 'react'

function Footer() {
  return (
    <section className='footer'>

<div className="text-dark  py-1  ">
  <div className="container text-center text-md-left">
    <div className="row text-center text-md-left">
      <div className="col-md-3 col-lg-3 col-xl-3  mx-auto mt-3 col-sm-12">
        <h5 className=" mb-4 fw-bold text-dark fs-3 text-start">CoffeeMake</h5>
        <p className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo iusto iste nesciunt mollitia magni deleniti voluptatum quis, consequatur sed.</p>
      </div>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 className=" mb-4 fw-bold text-dark fs-3">Links</h5>
        <p>
          <a href="#" className="text-dark fs-5 text-start" style={{textDecoration: "none"}}>Menu</a>
        </p>

        <p>
          <a href="#" className="text-dark fs-5 text-start" style={{textDecoration: "none"}}>About us</a>
        </p>

        <p>
          <a href="#" className="text-dark fs-5 text-start" style={{textDecoration: "none"}}>Products</a>
        </p>

       

      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
       <h5 className=" mb-4 fw-bold text-dark fs-3">Menu</h5>
       <p>
        <a href="#" className="text-dark fs-5 text-start" style={{textDecoration: "none"}}>Cappuccino</a>
      </p>

      <p>
        <a href="#" className="text-dark fs-5 text-start" style={{textDecoration: "none"}}>Latte</a>
      </p>

      <p>
        <a href="#" className="text-dark fs-5 text-start" style={{textDecoration: "none"}}>Americano</a>
      </p>
     
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
       
        <h5 className=" mb-4 fw-bold text-dark fs-3">Contacts</h5>
        <p>
        <i className="fas fa-envelope mr-3 fs-5"></i>cakemake@gmail.com
      </p>
      <p>
        <i className="fas fa-phone mr-3 fs-5"></i>1234536309
      </p>

       </div>
       <div className="col-md-5 col-lg-4">
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-sm text-dark"style={{fontSsize: "23px"}}><i className="fab fa-facebook"></i></a>
            </li>

            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-sm text-dark"style={{fontSsize: "23px"}}><i className="fab fa-twitter"></i></a>
            </li>

            <li className="list-inline-item">
              <a href="#" className="btn-floating btn-sm text-dark"style={{fontSsize: "23px"}}><i className="fab fa-youtube"></i></a>
            </li>
          </ul>
        </div>
       </div>



    </div>
  </div>
</div>

    </section>
  )
}

export default Footer