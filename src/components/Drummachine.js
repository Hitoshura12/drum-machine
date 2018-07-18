import React,{Component} from 'react'
import Display from "./Display";
import Pad from './Pad'

const url = "https://s3.amazonaws.com/freecodecamp/drums/";

const drumpad={
    'Q':String.fromCharCode(81),
    'W':String.fromCharCode(87),
    'E':String.fromCharCode(69),
    'A':String.fromCharCode(65),
    'S':String.fromCharCode(83),
    'D':String.fromCharCode(68),
    'Z':String.fromCharCode(90),
    'X':String.fromCharCode(88),
    'C':String.fromCharCode(67)
};

const soundfiles = {
    Q : "Heater-1",
    W : "Kick_n_Hat",
    E : "Chord_1",
    A : "Heater-6",
    S : "punchy_kick_1",
    D : "Brk_Snr",
    Z : "Dry_Ohh",
    X : "Heater-3",
    C : "Dsc_Oh"
};
class Drummachine extends Component{


    constructor(props) {
        super(props);
    this.state={
        currentSoundId:''
    }
   this.handleClick =this.handleClick.bind(this);
    this.playSound=this.playSound.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    }

    componentWillMount() {
       window.addEventListener('keydown',this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyPress);
    }
handleKeyPress(e){
        const key=drumpad[e.key]
Object.keys(drumpad).includes(key);
        this.setState({
            currentSoundId:key
        })
    }

    handleClick(e){
       this.setState({
           currentSoundId:e.target.children[0].id
       })
}
playSound(){
        document.getElementById(this.state.currentSoundId).play()
}

    render() {
    let message ='NoSound'
    if(this.state.currentSoundId){
        message =`Sound:${soundfiles[this.state.currentSoundId]}`;
        this.playSound();
    }
return(
    <div id="drum-machine">
        <Display currentMusic={message} />
        <div id="container">
            {
                Object.keys(soundfiles).map((key) => {
                    return (
                        <Pad name={key}
                             soundFile={url + soundfiles[key] + ".mp3"}
                             clickPlayer={this.handleClick}
                             key={key}
                        />

                    );
                })
            }
        </div>
    </div>

);


}
}

export default Drummachine