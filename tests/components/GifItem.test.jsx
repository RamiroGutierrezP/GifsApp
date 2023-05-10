import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('GifItem tests', () => { 
    
    const title ='Nappa';
    const url ='https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif';
    
    test ('should match with snapshot', () => {

        const { container } = render(<GifItem title = { title } url={ url }/>);
        
        expect(container).toMatchSnapshot();
    })

    test ('should show the image', () => {

        render(<GifItem title = { title } url={ url }/>);

        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

 })