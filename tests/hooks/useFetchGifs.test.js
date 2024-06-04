import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
import {renderHook, waitFor} from "@testing-library/react";

/* eslint-disable no-undef */

describe('Test in useFetchGifs Hook', () => {

    test('Should return initial state', () => {
        const {result} = renderHook(() => useFetchGifs('Naruto'));
        const {images,isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Should return an images array & isLoading: false', async () => {
        const {result} = renderHook(() => useFetchGifs('Naruto'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images,isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

})
