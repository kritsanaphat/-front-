import React from "react";

import AdventureIMG from "../pic/adventure.jpg"
import FightingIMG from "../pic/fighting.jpg"
import MOBAIMG from "../pic/moba.jpg"
import PuzzleIMG from "../pic/puzzle.jpg"
import RPGIMG from "../pic/RPG.jpg"
import ShootingIMG from "../pic/shooting.jpg"
import SportIMG from "../pic/sport.jpg"
import SimulationIMG from "../pic/simulation.jpg"
import StrategyIMG from "../pic/stategy.jpg"
import SurvivalHorrorIMG from "../pic/horror.jpg"

const Typeofgame = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    return(
        <div >   
        <div class="typeofgame" id="Adventure">
            <img src={AdventureIMG} alt="Adventure"></img>
        </div>
        <div class="typeofgame" id="Fighting">
            <img src={FightingIMG} alt="Fighting"></img>
        </div>
        <div class="typeofgame" id="MOBA">
            <img src={MOBAIMG} alt="MOBA"></img>
        </div>
        <div class="typeofgame" id="Puzzle">
            <img src={PuzzleIMG} alt="Puzzle"></img>
        </div>
        <div class="typeofgame" id="RPG">
            <img src={RPGIMG} alt="RPG"></img>
        </div>
        <div class="typeofgame" id="Shooting">
            <img src={ShootingIMG} alt="Shooting"></img>
        </div>
        <div class="typeofgame" id="Sport">
            <img src={SportIMG} alt="Sport"></img>
        </div>
        <div class="typeofgame" id="Simulation">
            <img src={SimulationIMG} alt="Simulation"></img>
        </div>
        <div class="typeofgame" id="Strategy">
            <img src={StrategyIMG} alt="Strategy"></img>
        </div>
        <div class="typeofgame" id="Horror">
            <img src={SurvivalHorrorIMG} alt="Horror"></img>
        </div>
        <script src = ""></script>
    </div>
    );
}

export default Typeofgame