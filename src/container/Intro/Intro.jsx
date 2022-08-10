import React, {useRef, useState} from 'react';
import {meal} from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.scss';


const Intro = () => {

    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

    return (
        <div className="app__video">
            <video
                src={meal}
                type={"video/mp4"}
                ref={vidRef}
                loop
                controls={false}
                muted
            />

            <div className="app__video-overlay flex__center">
                <div
                    className="app__video-overlay_circle flex__center"
                    onClick={() => {
                        setPlayVideo(!playVideo );
                        if (playVideo)
                            vidRef.current.pause();
                        else
                            vidRef.current.play();
                    }}
                >
                    {
                        playVideo ?
                            <BsFillPlayFill
                                color="#fff" fontSize={30}
                            />
                            :
                            <BsPauseFill
                                color="#fff" fontSize={30}
                            />
                    }

                </div>
            </div>

        </div>
    );
};

export default Intro;



