import { Svg } from "./style";

export default function Loader({ scale }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" scale={scale}>
          <path data-name="layer2" d="M32 62a30 30 0 0 0 26.6-16.2C50 42 49.2 50.6 46 50s-4.2-3.3-6-.4-4.7 3-7.9 2.4-3.4.7-6.3 2-7.1-1.2-5.8-6-4.7-5.1-6-2-2.2 5.6-4 5.9h-.4A29.9 29.9 0 0 0 32 62z" fill="#de9d63"></path>
          <path data-name="layer1" d="M32 2A30 30 0 0 0 9.6 52h.4c1.9-.3 2.8-2.8 4-5.9s7.2-2.6 6 2 2.9 7.3 5.8 6 3.1-2.6 6.3-2 6.1.5 7.9-2.4 2.8-.2 6 .4 4-8 12.6-4.2A30 30 0 0 0 32 2zm0 40a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" fill="#f5a4c4"></path>
          <path data-name="opacity" d="M20 36a10 10 0 0 0 19.7 2.4 10 10 0 0 1-17.4-8.8A10 10 0 0 0 20 36zM32 2A30 30 0 0 0 4.2 20.6a30 30 0 0 1 54.2 25.1h.3A30 30 0 0 0 32 2z" fill="#fff" opacity=".25"></path>
          <circle 
            data-name="stroke"
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="#2f446a"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
          <circle
            data-name="stroke"
            cx="32"
            cy="32"
            r="10"
            fill="none"
            stroke="#2f446a"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
          <path 
            data-name="stroke"
            d="M10 51.9c1.9-.3 2.8-2.8 4-5.9s7.2-2.6 6 2 2.9 7.3 5.8 6 3.1-2.6 6.3-2 6.1.5 7.9-2.4 2.8-.2 6 .4 4-8 12.6-4.2M18 14l4 4m-8 8l-4 4m2 8h4m10-28h8m10 4l-4 4m10 6l4 2m-4 8v4" 
            fill="none" 
            stroke="#2f446a" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
          ></path>
        </Svg>    
    );
}