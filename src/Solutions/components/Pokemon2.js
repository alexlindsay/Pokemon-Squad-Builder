import React, {useContext, useEffect, useState} from "react";
import _startCase from "lodash/startCase";
import Loader from "../../components/Loader";
import { defaultImg } from "../../helpers/utils";
import CssContext from "../../context/CssContext";

const Pokemon = ({ img, name }) => {
    const pokeImage = new Image();
    pokeImage.src = img ? img : defaultImg;
    const [imageLoaded, setImageLoaded] = useState(false);
    const { styles } = useContext(CssContext);

  /* Acts like componentDidMount, ignore ESlint warning if possible otherwise add pokeImage to dependency array */
  useEffect(() => {
    pokeImage.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className={styles.pokemonContainer}>
      {!imageLoaded ? (
        <Loader />
      ) : (
        <div className={styles.columnCenterContainer}>
          <div className="h-5/6">
            <img src={pokeImage.src} alt={name} />
          </div>
          <div className="h-1/6">
            <b>{_startCase(name)}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
