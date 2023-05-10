import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('AddCategory tests', () => { 

    test('should change the input box', () => {
        // Creamos el objeto de prueba
        render ( <AddCategory onNewCategory={ () => {} } /> );
        // Extraemos el input
        const input = screen.getByRole('textbox');
        //Disparamos el evento
        fireEvent.input(input, { target: { value: 'Rocket Queen' } });
        //Checkeamos que todo funciono
        expect(input.value).toBe('Rocket Queen');
        
        // screen.debug();
    })
    

    test ('should call onNewCategory if the input have a value', () => {
        
        const inputValue = 'Rocket Queen';
        const onNewCategory = jest.fn();

        render ( <AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
    });

    test ('should not call onNewCategory if the input is empty', () => {

        const onNewCategory = jest.fn();

        render ( <AddCategory onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        // const input = screen.getByRole('textbox');

        // fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);

    })
})

