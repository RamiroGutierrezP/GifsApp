import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Mockeo el useFetchGifs para que no haga la llamada a la API
jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid tests', () => { 

    const category = 'Guns N Roses';

    test ('should show the loading in the start', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render ( <GifGrid category={ category } /> );
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText (category));
        // screen.debug();
        
    });
    test ('should show the items when the images are loaded by useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Axl Rose',
                url: 'https://localhost/axelrose.jpg',
            },
            {
                id: 'VIT',
                title: 'Slash',
                url: 'https://localhost/slash.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render ( <GifGrid category={ category } /> );
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    })

})