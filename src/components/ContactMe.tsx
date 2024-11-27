import React from "react";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="wrapper min-h-[100vh] flex-center flex-col gap-[4rem]"
    >
      <h2 className="text-[2rem] underline unerline-offset-8 decoration-primary-b">
        Contact Me
      </h2>
      <div className="flex flex-col justify-center items-start gap-[2rem]">
        <h3 className="text-[1.5rem]">Front-End Developer</h3>
        <div className="flex flex-col">
          <p>dlacodnr@icloud.com</p>
          <p>github.com/codnrawbwj</p>
          <p>Based in Dallas, TX</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
