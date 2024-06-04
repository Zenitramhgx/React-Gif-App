import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";

jest.mock("../../src/hooks/useFetchGifs.js");

/* eslint-disable no-undef */
describe('Test in <GifGrid/>', () => {

    const category = 'Naruto';

    test('Should show loading initially', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText(category));
        expect(screen.getByText('Cargando...'));
    });

    test('Should show items when images from useFetchGifs are loading', () => {
        const gifs = [
            {
                id: "ABC",
                title: "Naruto",
                url: "https://localhost/naruto.jpg"
            },
            {
                id: 123,
                title: "Goku",
                url: "https://localhost/goku.jpg"
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole("img").length).toBe(2);

    })


})
