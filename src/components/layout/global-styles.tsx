import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --dark: #150811;
            --dark-purple: #26081c;
            --violet: #380036;
            --tiffany-blue: #0cbaba;
            --cyan-process: #01baef;
            --white: #fff;

            /* elements */
            --background: var(--dark);
            --text: var(--white);
            --button-bg: var(--tiffany-blue);
            --button-text: var(--dark-purple);
            --highlight: var(--cyan-process);
          }

          *::before,
          *::after,
          * {
            box-sizing: inherit;
          }
          html {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: "Ubuntu", sans-serif;
            background: var(--background);
            color: var(--text);
          }
        `}
      />
    </>
  );
};
