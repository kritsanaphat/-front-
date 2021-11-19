import React from "react";
import {useHistory} from "react-router-dom"
import axios from "axios"
import Loading from "../pic/Loading.gif"

import e1 from "../pic/e1n.png"
import e2 from "../pic/e2n.png"
import e3 from "../pic/e3n.png"
import e4 from "../pic/e4n.png"
import e5 from "../pic/e5n.png"

const Page3 = (data) => {
    const history = useHistory()
    var data3 = data.location.state

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    function onClick(){
        document.getElementById("myModal").style.display = "flex";
        var check = []
        for(var x = 0; x < 6; x++) {
            check.push(false);
        }

        var q1 = document.forms[0];
        var q2 = document.forms[1];
        var q3 = document.forms[2];
        var q4 = document.forms[3];
        var q5 = document.forms[4];
        var q6 = document.forms[5];

        for (var i = 0; i < q1.length; i++) {
            if (q1[i].checked) {
                data3[12] = q1[i].value;
            }
            if (q2[i].checked) {
                data3[13] = q2[i].value;
            }
            if (q3[i].checked) {
                data3[14] = q3[i].value;
            }
            if (q4[i].checked) {
                data3[15] = q4[i].value;
            }
            if (q5[i].checked) {
                data3[16] = q5[i].value;
            }
            if (q6[i].checked) {
                data3[17] = q6[i].value;
            }
        }
        for(var y = 0;y < 6;y++){
            if (data3[y+12] === ""){
                document.body.scrollTop = (y*85);
                document.documentElement.scrollTop = (y*85);
                break
            }
            else{
                check[y] = true
            }
        }
        console.log(data3)

        if ((check[0] === true ) && (check[1] === true ) && (check[2] === true ) && (check[3] === true ) && (check[4] === true ) && (check[5] === true )){

            const name = data3[18]
            data3 = data3.map(Number)
            const NameTypeGame =["Adventure","Fighting","Moba","Puzzle","RPG","Shooting","Sport","Simulation","Strategy","SurvivalHorror"]

            const Adventure = [4.3571,4.4286,	4.4286,	4.2143,	4.8571,	4.7857,	3.9286,	3.5714,4.3571,
                4.5714,	4.6429,	3.0000,	3.5000,	4.4286,	4.0000,	3.4286,	4.5714,	4.9286]
                
            const Fighting = [4.625,4.5,3.5,4.125,2.375,	2.5,4.875,	4.875,2.125,3,
                1.875,1.875,1.875,2.25,	4.25,2.75,4.5,2]

            const Moba = [3.6923,	3.8462,	2.6923,	3.8462,	3.0769,	4.0769,	4.9231,	4.3846,	4.8462,
                4.0769,	4.5385,	2.7692,	3.1538	,3.5385,4.6923,	4.9231	,4.4615	,2.7692]

            const Puzzle = [2.0000,	3.4167,	4.7500,	1.9167,	4.3333,	4.7500,	1.4167,	1.5833,	4.7500,
                4.0833,	4.8333,	1.5000,	1.7500,	1.8333,	2.9167,	1.7500,	3.7500,	2.1667]

            const RPG = [4.6923,	4.3846,	4.0000,	4.8462,	4.5385,	4.8462,	4.7692,	3.4615,	3.7692,	4.3077,
                3.7692,	1.8462,	2.9231,	3.5385,	4.6923,	3.1538,	4.6154,	4.6923]

            const Shooting = [3.1765,	4.7647,	3.0000,	4.7647,	3.4706,	3.9412,	4.8824,	4.4118,	4.8824,	
                4.5294,	4.8235,	3.5882,	4.3529,	4.4118,	4.2353,	4.8235,	4.4118,	2.9412]

            const Sport = [3.9286	,4.2667	,2.9286	,1.9333,3.2667,	3.6667,	2.2143,	2.8667,	4.2857,
                3.5333,	4.2143,	4.5333,	2.8667,	1.6667,	2.5333,	4.3333,	4.5333,	1.7857]

            const Simulation = [4.4667,4.8667,1.5000,2.8000,3.7000,3.2000,2.3000,	1.5000,	1.7333,	
                4.6000,3.8667,2.5333,2.5000,4.1333,2.6667,2.5333,4.6667,4.5333]

            const Strategy = [3.2941,	4.0588,	3.5882,	3.6471,	3.2941,	3.5294,	3.8824,	2.9412,	4.8235,
                4.5294,	4.7059,	1.7692,	2.8824,	2.9412,	3.4118,	4.2353,	4.4706,	2.9412]

            const SurvivalHorror = [4.7333,4.7333,3.8000,2.2667,4.6000,3.2000,1.8000,1.3846,3.3846,
                4.0667,2.9231,1.3333,5.0000,4.5385,2.5333,2.6667,4.8667,4.2308]

            var EuclidianValue = []
                        
            function Euclidian(standard,user){
                let value = 0
                for (let i = 0 ;i < 18 ;i++){
                    let gameCOV = standard[i]-user[i]
                    gameCOV = Math.pow(gameCOV, 2)
                    value += gameCOV
                }
                return Math.sqrt(value)
            }
            
            EuclidianValue.push(Euclidian(Adventure,data3))
            EuclidianValue.push(Euclidian(Fighting,data3))
            EuclidianValue.push(Euclidian(Moba,data3))
            EuclidianValue.push(Euclidian(Puzzle,data3))
            EuclidianValue.push(Euclidian(RPG,data3))
            EuclidianValue.push(Euclidian(Shooting,data3))
            EuclidianValue.push(Euclidian(Sport,data3))
            EuclidianValue.push(Euclidian(Simulation,data3))
            EuclidianValue.push(Euclidian(Strategy,data3))
            EuclidianValue.push(Euclidian(SurvivalHorror,data3))

            var temp1 = []
            for (let j = 0; j<10;j++){
                temp1.push(EuclidianValue[j])
            }
            temp1.sort()

            var count = 0
            for (let k = 0; k< 10;k++){
                if (temp1[0] !== EuclidianValue[k]){
                    count += 1
                }
                else{
                    break
                }
            }

            const game = NameTypeGame[count]
            
            // var CovarianceValue = []

            // function covariance(std1,std2){
            //     let xbar = 0
            //     let ybar = 0
            //     let xmxbar = []
            //     let ymybar = []
            //     let cov = 0
            //     for(let i = 0;i<18;i++){
            //         xbar += std1[i]
            //         ybar += std2[i]
            //     }
            //     xbar = xbar/18
            //     ybar = ybar/18
            //     for(let i = 0;i<18;i++){
            //         xmxbar.push(std1[i] - xbar)
            //         ymybar.push(std2[i] - ybar)
            //     }
            //     for(let i = 0;i<18;i++){
            //         cov += xmxbar[i] * ymybar[i]
            //     }
            //     return cov
                
            // }
            let gameCOV
            if (game === "Adventure")
                gameCOV = "Horror"
            else if (game === "Fighting")
                gameCOV = "RPG"
            else if (game === "Moba")
                gameCOV = "Strategy"
            else if (game === "Puzzle")
                gameCOV = "SurvivalHorror"
            else if (game === "RPG")
                gameCOV = "Simulation"
            else if (game === "Shooting")
                gameCOV = "Moba"
            else if (game === "Sport")
                gameCOV = "Puzzle"
            else if (game === "Simulation")
                gameCOV = "SurvivalHorror"
            else if (game === "Strategy")
                gameCOV = "Puzzle"
            else if (game === "SurvivalHorror")
                gameCOV = "Simulation"


            // CovarianceValue.push(covariance(Adventure,gameCOV))
            // CovarianceValue.push(covariance(Fighting,gameCOV))
            // CovarianceValue.push(covariance(Moba,gameCOV))
            // CovarianceValue.push(covariance(Puzzle,gameCOV))
            // CovarianceValue.push(covariance(RPG,gameCOV))
            // CovarianceValue.push(covariance(Shooting,gameCOV))
            // CovarianceValue.push(covariance(Sport,gameCOV))
            // CovarianceValue.push(covariance(Simulation,gameCOV))
            // CovarianceValue.push(covariance(Strategy,gameCOV))
            // CovarianceValue.push(covariance(SurvivalHorror,gameCOV))

            // var temp2 = []
            // for (let j = 0; j<10;j++){
            //     temp2.push(CovarianceValue[j])
            // }
            // temp2.sort();
            // temp2.reverse();
            // console.log(gameCOV)
            // console.log(temp2)
            // var count2 = 0
            // for (let k = 0; k< 10;k++){
            //     if (temp2[1] !== CovarianceValue[k]){
            //         count2 += 1
            //     }
            //     else{
            //         break
            //     }
            // }

            // var gameCOV = NameTypeGame[count2]
            // if (game === "Shooting"){
            //     gameCOV = "Fighting"
            // }

            

            const datacomplete = [game , name, gameCOV]

            axios.post("https://backend-linear.herokuapp.com/api/data", {
                dataName: name,
                dataGameEUC: game,
                dataGameCOV: gameCOV,
            }).then(()=>{
                history.push({
                    pathname: "/result",
                    state: datacomplete
                })
            })
        }
    }   
    return(
        <div class="content">
                <div class="card">
                    <span class="span">ลุ้นระทึก</span>
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
                    <span>การเอาชีวิตรอด</span>
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
                    <span>ตัวละครมีสกิลพิเศษ</span>
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
                    <span>เล่นเป็นทีม</span>
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
                    <span>กราฟฟิคสวยงาม</span>
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
                    <span>การผจญภัย</span>
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
                    <button onClick={onClick} class="btnQ">SUBMIT</button>
                </div>
                <div id="myModal" class="modal">
                    <img src={Loading} alt="Load"></img>
                </div>
            </div>
    );
}
export default Page3;