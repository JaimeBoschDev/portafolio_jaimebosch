import React from "react";
import Miniatura_1 from "./../Images/Miniaturas/Miniaturas_PaginaJaimeBosch-01.png";
import Miniatura_2 from "./../Images/Miniaturas/Miniaturas_PaginaJaimeBosch-02.png";
import Miniatura_3 from "./../Images/Miniaturas/Miniaturas_PaginaJaimeBosch-03.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div id="button1">
        <img src={Miniatura_1} alt="Mocha" />
      </div>
      <div id="button2">
        <img src={Miniatura_2} alt="Mocha" />
      </div>
      <div id="button3">
        <img src={Miniatura_3} alt="Mocha" />
      </div>
    </footer>
  );
};

export default Footer;
