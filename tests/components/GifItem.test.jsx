import {render, screen} from "@testing-library/react";
import {GifItem} from "../../src/components/index.js";

/* eslint-disable no-undef */
describe('Testing <GifItem/>', () => {

    const title =  'Naruto';
    const url = 'https://naruto.com/naruto.jpg';

    test('Should match with snapshot', () => {
        const container = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Should show the right image with its URL & ALT', () => {
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Should show title in component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

})