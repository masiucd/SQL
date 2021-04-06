import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --dark: #1a1a1a;
            --violet: #380036;
            --tiffany-blue: #83d8d8;
            --red: #e64c4c;
            --grey: #e6e6e6;
            --cyan-process: #01baef;
            --purple: #514762;
            --dark-purple: #383243;
            --white: #fff;
            --green: #cbe56c;

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
