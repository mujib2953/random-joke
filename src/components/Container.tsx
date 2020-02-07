import React, { FC } from "react";

import Setup from "./Setup";
import Punchline from "./Punchline";
import NewJokeBtn from "./NewJokeBtn";

const Container: FC = () => {
    return(
        <div className="grid">
            <Setup />
            <Punchline />

            <div className="rowMmaker">
                <NewJokeBtn />
            </div>
        </div>
    )
}

export default Container;
