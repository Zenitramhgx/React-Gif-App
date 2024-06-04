import {render, screen} from "@testing-library/react";
import {GifExpertApp} from "../src/GifExpertApp.jsx";

/* eslint-disable no-undef */

describe('Test in <GifExpertApp/>', () => {
    test('Should onAddCategory work', () => {
        render(<GifExpertApp/>);
        screen.debug();
    })

})
