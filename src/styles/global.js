import styled, { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        text-decoration: none;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    :root {
        --color-primary: #190933;
        --color-primary-90: #1a0934e6;
        --color-primary-25: #1a093440;
        --color-primary-10: #1a09341a;

        --text-color: #190933;

        --sz-title-1: 36px;
        --sz-title-2: 28px; 
        --sz-title-3: 20px;
        --sz-title-4: 16px;

        --sz-text-1: 16px;
        --sz-text-2: 14px;


        --font-weg-1: 700;
        --font-weg-2: 600;
        --font-weg-3: 500;
    }

    body {
        font-family: 'Inter', sans-serif;
        color: var(--text-color);

    }
    
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1250px;
  margin: 0 auto;
`;
