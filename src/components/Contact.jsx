import React from "react";
import Contact_img from "./Contact_img";
import Whatsapp from "../logo/whatsappimg.webp";
import linkedin from "../logo/Linkedin.webp";
import gmail from "../logo/Gmail.webp";

function About() {
  return (
    <>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <Contact_img img={Whatsapp} href="https://wa.me/+919720850063" />
        <Contact_img img={linkedin} href="https://www.linkedin.com/in/vardan-tyagi-6878b8368/" />
        <Contact_img img={gmail} href="mailto:vardantyagi2004@gmail.com" />
      </div>
    </>
  );
}

export default About;
