import React from "react";
import {useHistory} from "react-router-dom"

const Main = () => {
    const history = useHistory()
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    function click(){
        var data = []
        for(var x = 0; x < 19; x++) {
            data.push("");
        }

        var q1 = document.forms[0];
        var name = q1.elements[0].value
        
        data[18] = name
        if(data[18] === "linear"){
            history.push("/stat")
        }
        else if (data[18] !== ""){
            history.push({
                pathname: "/page1",
                state: data
            })
        }
    }
    
    return(
        <div> 
            <div class="cardmain">
                <p>WHAT'S YOUR NAME ?</p>
            </div>
            <div class="cardmain">
                <form>
                    <input type="text" id="Namebox" placeholder="YOUR NAME"></input>
                </form>
            </div>
            <div class="cardmain">
                <p>READY FOR TESTING ?</p>                  
            </div>
            <div class="cardmain">
                <button onClick={click} class="btn">LET'S GO !</button>
            </div>     
        </div>
    );
}

export default Main;