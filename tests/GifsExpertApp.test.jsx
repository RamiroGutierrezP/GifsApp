import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('GifExpertApp tests', () => {  

    test('should match with snapshot', () => {

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
        
    });
    
})