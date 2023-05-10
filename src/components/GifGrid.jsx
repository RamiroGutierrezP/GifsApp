import { GifItem } from "./GifItem";
import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    
    const {images, isLoading} = useFetchGifs (category);

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map ( (image) => (
                        <GifItem 
                            key={ image.id }
                            //Uso el spread para que el GifItem reciba cada propiedad de la image como una property 
                            {...image}
                        />
                    ))
                }
            </div>
        </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}