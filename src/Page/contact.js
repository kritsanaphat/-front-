import React from "react";

import kit from '../pic/kit.jpg'
import non from '../pic/non.jpg'
import aom from '../pic/aom.jpg'
import kuea from '../pic/kuea.png'
import ig from '../pic/instagram.png'
import facebook from '../pic/facebook.png'
import email from '../pic/gmail.png'

const Contact = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

return(
    <div>
    <div class="contact">
        <div class="imagesCT">
            <img src={kit} alt="kit" />
            <p className = "fontNameCT">Kritsanaphat Phanjaroen</p>
        </div> 
        <div class="contentCT"> 
                
                <a href="https://www.instagram.com/ksnppjr" target="blank" >
                    <img src={ig} alt="ig"/>
                    </a>

                <a href="mailto:1415untiedth@gmail.com" target="blank" >
                    <img src={email} alt="email"/>
                    </a>

                <a href="https://web.facebook.com/ksnppjr" target="blank" >
                     <img src={facebook} alt="facebook"/>
                </a>       
        </div>
    </div>
    <div class="contact">
        <div class="imagesCT">
            <img src={kuea} alt="kuea"/>
            <p className = "fontNameCT">Kueakun Niyomsit</p>
        </div>
        <div class="contentCT">
                
        <a href="https://www.instagram.com/kueakun.k" target="blank" >
                    <img src={ig} alt="ig"/>
                    </a>

                <a href="mailto:63010095@kmitl.ac.th" target="blank" >
                    <img src={email} alt="email"/>
                    </a>

                <a href="https://web.facebook.com/profile.php?id=100004636866731" target="blank" >
                     <img src={facebook} alt="facebook"/>
                </a>
        </div>
    </div>
    <div class="contact">
        <div class="imagesCT">
            <img src={non} alt="non"/>
            <p className = "fontNameCT">Chanon Kitbunnadaech</p>
        </div>
        <div class="contentCT">
                
        <a href="https://www.instagram.com/_chnnon/" target="blank" >
                    <img src={ig} alt="ig" />
                    </a>

                <a href="mailto:chnnon178@gmail.com" target="blank" >
                    <img src={email} alt="email"/>
                    </a>

                <a href="https://web.facebook.com/chanon.kitbannadech" target="blank" >
                     <img src={facebook} alt="facebook"/>
                </a>
        </div>
    </div>
    <div class="contact">
        <div class="imagesCT">
            <img src={aom} alt="aom"/>
            <p className = "fontNameCT">Nattanicha Sentha</p>
        </div>
        <div class="contentCT">
                
        <a href="https://www.instagram.com/aomzupp/" target="blank" >
                    <img src={ig} alt="ig"/>
                    </a>

                <a href="mailto:omsup2544@gmail.com" target="blank" >
                    <img src={email} alt="email"/>
                    </a>

                <a href="https://web.facebook.com/nattanicha.sentha" target="blank" >
                     <img src={facebook} alt="facebook"/>
                </a>
        </div>
    </div>
    </div>
);
}

export default Contact;