import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    fonts: {
        heading: `'Euphoria Script', sans-serif`,
        subTitle: `Quicksand`,
      },
    colors: {
        loveCopper: {
            '50': '#fcf5f0',
            '100': '#f7e8dd',
            '200': '#efcdb9',
            '300': '#e4ab8d',
            '400': '#da8664',
            '500': '#d0623f',
            '600': '#c24e34',
            '700': '#a13c2d',
            '800': '#82322a',
            '900': '#692b25',
            '950': '#381412',
        },
        loveGreen: {
            '50': '#effef5',
            '100': '#defeec',
            '200': '#b7fbd5',
            '300': '#80f5b5',
            '400': '#41e78e',
            '500': '#18cf6c',
            '600': '#0eab57',
            '700': '#0f8646',
            '800': '#116a3b',
            '900': '#105733',
            '950': '#03301a',
        },
        bermuda: {
            '50': '#f2fbf9',
            '100': '#d4f3ed',
            '200': '#a8e7db',
            '300': '#86d9cc',
            '400': '#48b9ab',
            '500': '#2e9e91',
            '600': '#237e76',
            '700': '#206560',
            '800': '#1d524e',
            '900': '#1c4542',
            '950': '#0b2827',
        },
        
        
    }
})