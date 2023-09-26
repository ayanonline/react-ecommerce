const Footer = () => {
  return (
    <footer className="flex gap-5 bg-green-100 px-5 py-10 lg:px-[20rem]">
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
        <a href="/about">About Us</a>
        <a href="/secure">Secure Shopping</a>
        <a href="/products">New Products</a>
        <a href="/blogs">Our Blog</a>
        <a href="/top-seller">Top Sellers</a>
      </div>
      <div className="w-1/6">
        <h1>Categores</h1>
        <a href="/category/mutton">Mutton</a>
        <a href="/category/beverage">Beverage</a>
        <a href="/category/diary">Dairy products</a>
        <a href="/category/vegetables">Vegetabel</a>
        <a href="/category/fruits">fruits</a>
      </div>
      <div className="w-1/6">
        <h1>Privacy Policy</h1>
        <a href="/terms">Term and Condition</a>
        <a href="/security">Security</a>
        <a href="/shipping">Shipping</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/payment">Payment</a>
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
