import React from "react";
import {useHistory} from "react-router-dom"

import e1 from "../pic/e1n.png"
import e2 from "../pic/e2n.png"
import e3 from "../pic/e3n.png"
import e4 from "../pic/e4n.png"
import e5 from "../pic/e5n.png"

const Page2 = (data) => {
    const history = useHistory()
    var data2 = data.location.state

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    function onClick(){

        var check2 = []
        for(var x = 0; x < 6; x++) {
            check2.push(false);
        }

        var q1 = document.forms[0];
        var q2 = document.forms[1];
        var q3 = document.forms[2];
        var q4 = document.forms[3];
        var q5 = document.forms[4];
        var q6 = document.forms[5];

        for (var i = 0; i < q1.length; i++) {
            if (q1[i].checked) {
                data2[6] = q1[i].value;
            }
            if (q2[i].checked) {
                data2[7] = q2[i].value;
            }
            if (q3[i].checked) {
                data2[8] = q3[i].value;
            }
            if (q4[i].checked) {
                data2[9] = q4[i].value;
            }
            if (q5[i].checked) {
                data2[10] = q5[i].value;
            }
            if (q6[i].checked) {
                data2[11] = q6[i].value;
            }
        }
        for(var y = 0;y < 6;y++){
            if (data2[y+6] === ""){
                document.body.scrollTop = (y*85);
                document.documentElement.scrollTop = (y*85);
                break
            }
            else{
                check2[y] = true
            }
        }
        if ((check2[0] === true ) && (check2[1] === true ) && (check2[2] === true ) && (check2[3] === true ) && (check2[4] === true ) && (check2[5] === true )){
            history.push({
                pathname: "/page3",
                state: data2
            })
        }
    }   
    return(
        <div class="content">
                <div class="card">
                    <span class="span">การต่อสู้</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1_1" name="1" value="1"/>
                            <img src={e1} alt="e1"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_2" name="1" value="2"/>
                            <img src={e2} alt="e2"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_3" name="1" value="3"/>
                            <img src={e3} alt="e3"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_4" name="1" value="4"/>
                            <img src={e4} alt="e4"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_5" name="1" value="5"/>
                            <img src={e5} alt="e5"></img>
                        </label>
                    </form>
                </div>
                <div ><hr/></div>
                <div class="card">
                    <span>การต่อสู้แบบตัวต่อตัว</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1_1" name="1" value="1"/>
                            <img src={e1} alt="e1"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_2" name="1" value="2"/>
                            <img src={e2} alt="e2"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_3" name="1" value="3"/>
                            <img src={e3} alt="e3"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_4" name="1" value="4"/>
                            <img src={e4} alt="e4"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_5" name="1" value="5"/>
                            <img src={e5} alt="e5"></img>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>การวางแผน</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1_1" name="1" value="1"/>
                            <img src={e1} alt="e1"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_2" name="1" value="2"/>
                            <img src={e2} alt="e2"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_3" name="1" value="3"/>
                            <img src={e3} alt="e3"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_4" name="1" value="4"/>
                            <img src={e4} alt="e4"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_5" name="1" value="5"/>
                            <img src={e5} alt="e5"></img>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>เวลาในการเล่น</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1_1" name="1" value="1"/>
                            <img src={e1} alt="e1"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_2" name="1" value="2"/>
                            <img src={e2} alt="e2"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_3" name="1" value="3"/>
                            <img src={e3} alt="e3"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_4" name="1" value="4"/>
                            <img src={e4} alt="e4"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_5" name="1" value="5"/>
                            <img src={e5} alt="e5"></img>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>ฝึกกระบวนการคิด</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1_1" name="1" value="1"/>
                            <img src={e1} alt="e1"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_2" name="1" value="2"/>
                            <img src={e2} alt="e2"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_3" name="1" value="3"/>
                            <img src={e3} alt="e3"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_4" name="1" value="4"/>
                            <img src={e4} alt="e4"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_5" name="1" value="5"/>
                            <img src={e5} alt="e5"></img>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>เกี่ยวกับกีฬา</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1_1" name="1" value="1"/>
                            <img src={e1} alt="e1"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_2" name="1" value="2"/>
                            <img src={e2} alt="e2"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_3" name="1" value="3"/>
                            <img src={e3} alt="e3"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_4" name="1" value="4"/>
                            <img src={e4} alt="e4"></img>
                        </label>
                        <label>
                            <input type="radio" id="radio1_5" name="1" value="5"/>
                            <img src={e5} alt="e5"></img>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <button onClick={onClick} class="btnQ">NEXT</button>
                </div>
            </div>
    );
}
export default Page2;