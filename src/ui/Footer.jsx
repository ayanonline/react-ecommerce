import React from "react";

const Footer = () => {
  return (
    <footer className="flex gap-5 bg-green-100 px-[20rem] py-10">
      <div className="w-2/6">
        <div>Logo</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          explicabo ab harum voluptatem sapiente totam beatae a. Pariatur
          nesciunt nihil nisi numquam ipsa, et laborum excepturi? Modi culpa
          molestias odio.
        </p>
        <div>social media links</div>
      </div>
      <div className="w-1/6">
        <h1>About</h1>
        <a href="">About Us</a>
        <a href="">Secure Shopping</a>
        <a href="">New Products</a>
        <a href="">Our Blog</a>
        <a href="">Top Sellers</a>
      </div>
      <div className="w-1/6">
        <h1>Categores</h1>
        <a href="">Mutton</a>
        <a href="">Beverage</a>
        <a href="">Dairy products</a>
        <a href="">Vegetabel</a>
        <a href="">fruits</a>
      </div>
      <div className="w-1/6">
        <h1>Privacy Policy</h1>
        <a href="">Term and Condition</a>
        <a href="">Security</a>
        <a href="">Shipping</a>
        <a href="">Privacy Policy</a>
        <a href="">Payment</a>
      </div>
      <div className="w-1/6">
        <h1>Contact Us</h1>
        <p>contact number</p>
        <p>email address</p>
        <p>location</p>
      </div>
    </footer>
  );
};

export default Footer;
