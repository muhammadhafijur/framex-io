import { css } from "@emotion/react";
import { SyncLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  return (
    <div className="sweet-loading flex justify-center">
      <SyncLoader color={'black'} css={override} size={17} />
    </div>
  );
};

export default Spinner;
