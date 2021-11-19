import React from "react"
import axios from "axios"


const Stat = () => {
    const [datas, setDatas] = React.useState([])
    
    React.useEffect(()=>{
        fetchDatas()
    }, [])

    function fetchDatas(){
        axios.get("https://backend-linear.herokuapp.com/api/datas").then((res)=> setDatas(res.data))
    }

    const NameTypeGame =["Adventure","Fighting","Moba","Puzzle","RPG","Shooting","Sport","Simulation","Strategy","SurvivalHorror"]
    var countCOV = [0,0,0,0,0,0,0,0,0,0]
    var countEUC = [0,0,0,0,0,0,0,0,0,0]
    
    datas.map((data) =>{
    if(data.dataGameCOV === "Adventure" )
        countCOV[0] += 1
    else if(data.dataGameCOV === "Fighting")
        countCOV[1] += 1
    else if(data.dataGameCOV === "Moba")
        countCOV[2] += 1
    else if(data.dataGameCOV === "Puzzle")
        countCOV[3] += 1
    else if(data.dataGameCOV === "RPG")
        countCOV[4] += 1
    else if(data.dataGameCOV === "Shooting")
        countCOV[5] += 1
    else if(data.dataGameCOV === "Sport")
        countCOV[6] += 1
    else if(data.dataGameCOV === "Simulation")
        countCOV[7] += 1
    else if(data.dataGameCOV === "Strategy")
        countCOV[8] += 1
    else if(data.dataGameCOV === "SurvivalHorror")
        countCOV[9] += 1

    if(data.dataGameEUC === "Adventure" )
        countEUC[0] += 1
    else if(data.dataGameEUC === "Fighting")
        countEUC[1] += 1
    else if(data.dataGameEUC === "Moba")
        countEUC[2] += 1
    else if(data.dataGameEUC === "Puzzle")
        countEUC[3] += 1
    else if(data.dataGameEUC === "RPG")
        countEUC[4] += 1
    else if(data.dataGameEUC === "Shooting")
        countEUC[5] += 1
    else if(data.dataGameEUC === "Sport")
        countEUC[6] += 1
    else if(data.dataGameEUC === "Simulation")
        countEUC[7] += 1
    else if(data.dataGameEUC === "Strategy")
        countEUC[8] += 1
    else if(data.dataGameEUC === "SurvivalHorror")
        countEUC[9] += 1
    return 0
    }
    )
        
    
    
    return(
        <div>
            <div class="table">
            <table>
                <tr>
                    <td>Euclidian</td>
                </tr>
                <tr>
                    <td>Game</td>
                    <td>Count</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[0]}</td>
                    <td>{countEUC[0]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[1]}</td>
                    <td>{countEUC[1]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[2]}</td>
                    <td>{countEUC[2]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[3]}</td>
                    <td>{countEUC[3]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[4]}</td>
                    <td>{countEUC[4]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[5]}</td>
                    <td>{countEUC[5]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[6]}</td>
                    <td>{countEUC[6]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[7]}</td>
                    <td>{countEUC[7]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[8]}</td>
                    <td>{countEUC[8]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[9]}</td>
                    <td>{countEUC[9]}</td>
                </tr>
            </table>
            </div>
            <br/>
            <div class="table">
            <table>
                <tr>
                    <td>Covariance</td>
                </tr>
                <tr>
                    <td>Game</td>
                    <td>Count</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[0]}</td>
                    <td>{countCOV[0]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[1]}</td>
                    <td>{countCOV[1]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[2]}</td>
                    <td>{countCOV[2]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[3]}</td>
                    <td>{countCOV[3]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[4]}</td>
                    <td>{countCOV[4]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[5]}</td>
                    <td>{countCOV[5]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[6]}</td>
                    <td>{countCOV[6]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[7]}</td>
                    <td>{countCOV[7]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[8]}</td>
                    <td>{countCOV[8]}</td>
                </tr>
                <tr>
                    <td>{NameTypeGame[9]}</td>
                    <td>{countCOV[9]}</td>
                </tr>
            </table>
            </div>
        </div>
    );
}
export default Stat