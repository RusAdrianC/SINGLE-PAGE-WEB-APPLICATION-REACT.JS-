import React from "react";
import Content from "./Content";
import CardContact from "./CardContact";
import SocialFollow from "./SocialFollow";

function Contact() {
  return (
    <>
      <Content title="Contact" />
      <div className="row ">
        <div className="col-md-6 col-sm-6">
          <CardContact
            title="Adresa"
            p1="Str. George Baritiu, nr. 26-28"
            p2="Cluj-Napoca, jud. Cluj"
            p3="400027"
            p4="Romania"
          />
        </div>
        <div className="col-md-6 col-sm-6">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.6248030603474!2d23.58305731455197!3d46.7722915532305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e9b8a21bec5%3A0x9bdd272fdd06cb30!2sFacultatea%20de%20Electronic%C4%83%2C%20Telecomunica%C8%9Bii%20%C8%99i%20Tehnologia%20informa%C8%9Biei!5e0!3m2!1sro!2sro!4v1596186655457!5m2!1sro!2sro"
              width="500"
              height="300"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              className="Api2"
            ></iframe>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <CardContact
            title="Secretariat"
            p1={<strong>Simona FANTANA</strong>}
            p2="Email:"
            p3="Telefon:"
            p4="FAX:"
          />
        </div>
        <div className="col-md-6 col-sm-6">
          <CardContact
            title="Director departament"
            p1={<strong>Prof. dr. ing. Dorin PETREUS</strong>}
            p2="Email:"
            p3="Telefon:"
            p4="FAX:"
          />
        </div>
      </div>
      <SocialFollow />
    </>
  );
}
export default Contact;
