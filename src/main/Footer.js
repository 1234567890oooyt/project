import React from "react";
import logo_dark from "../full_logo_dark.png"
const Footer = () => (

  <div className="footer">

    <footer>
      <div id="container_footer">
        <ul>
          <li><img id="logo_dark" src={logo_dark} alt="IT Step University" /></li>
        </ul>
        <ul>

          <li id="notations_head">Швидка навігація</li>
          <ul id="notations_box">
            <ul id="notations">
              <ul>
                <li>Головна</li>
                <li>Університет</li>
                <li>Бакалаврат</li>
                <li>Магістратура</li>
              </ul>
              <ul>
                <li>Студенту</li>
                <li>Абітурієнту</li>
                <li>Наукова діяльність</li>
              </ul>
              <ul>
                <li>Новини</li>
                <li>Події</li>
                <li>Співпраця</li>
              </ul>
            </ul>

          </ul>
        </ul>

        <ul id="contact_icons">
          <div id="contact_icons_head">Залишайтеся на зв'язоку</div>
          <div >
            <ul>
              <li>YouTube</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Tik Tok</li>
              <li>Linkedin</li>
            </ul>
            <ul id="icons">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </ul>
        <ul>
         
          <li id="contact_box_head">Контакти</li>
          <ul id="contact_box">
            <ul>
              <li>м.Львів</li>
              <li>вул Замарстинівська. 83а</li>
              <li>+(380) 322-40-3851</li>
              <li>+(380) 675-57-8706</li>
              <li>+(380) 504-41-7600</li>
            </ul>

          </ul>
        </ul>


      </div>
    </footer>


  </div>
);

export default Footer;