import { css } from "@emotion/react";
import SquareLoader from "react-spinners/SquareLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



function LoadingScreen(props) {
    return (
        <>
            <div className="container is-fullhd is-fullheight">
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                    <SquareLoader color={"#1448cd"} loading={props.loading} css={override} size={150} />
                </div>
            </div>
        </>
    );
}

export default LoadingScreen;