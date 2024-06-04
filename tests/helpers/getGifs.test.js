/* eslint-disable no-undef */
import {getGifs} from "../../src/helpers/getGifs.js";

describe('Testing getGifs()', () => {
    test('Should return gifs array', async () => {
        const gifs = await getGifs('One Piece');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });

})