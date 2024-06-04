import {fireEvent, render, screen} from "@testing-library/react";
import {AddCategory} from "../../src/components/index.js";

/* eslint-disable no-undef */
describe('Pruebas en <AddCategory/>', () => {

    test('Should change value from input box', () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Naruto' } });

        expect(input.value).toBe('Naruto');
        // screen.debug();
    });

    test('Should call onNewCategory if input has a value', () => {
        const inputValue = 'Naruto';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Esperaba que se llamara 1 vez.
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('Should not call onNewCategory if input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })


});
