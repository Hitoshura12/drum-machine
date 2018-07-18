import React from 'react'

const Pad=(props)=>{
    return(
        <button className="drum-pad" id={props.soundFile}
        onClick={props.clickPlayer} >
            {props.name}
            <audio className="clip" id={props.name} src={props.soundFile} type="audio/mp3" >
            </audio>
        </button>

    )
}

export default Pad