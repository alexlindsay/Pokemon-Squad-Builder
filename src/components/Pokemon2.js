import React, {useEffect, useState} from "react";
import _startCase from "lodash/startCase";
import Loader from "./Loader";
import {defaultImg} from "../helpers/utils";

const Pokemon = ({ img, name, value }) => {
    const pokeImage = new Image();
    pokeImage.src = img ? img : defaultImg;
    const [imageLoaded, setImageLoaded] = useState(false);

    /* Acts like componentOnMount, ignore ESlint warning if possible otherwise add pokeImage to dependency array */
    useEffect(() => {
        pokeImage.onload = () => {
            setImageLoaded(true);
        }
    }, []);

    return (
        <div className="m-2 flex flex-col items-center rounded-lg w-32 h-40 bg-yellow-300">
            {!imageLoaded ? (
                <Loader />
            ) : (
                <div className="flex flex-col items-center">
                    <div className="h-5/6">
                        <img src={pokeImage.src} alt={name} />
                    </div>
                    <div className="h-1/6">
                        <b>{_startCase(name)}</b>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Pokemon;
