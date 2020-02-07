import React, { FC } from "react";
import { connect } from "react-redux";

import { doGetAJoke } from "../store/jokes/actions";

interface NewJokeBtnProps {
    doGetAJoke: () => void;
};

const NewJokeBtn: FC<NewJokeBtnProps> = ({ doGetAJoke }) => {
    return (
        <div
            className="new-joke-btn"
            onClick={ () => doGetAJoke() }
        >
            Get new joke
        </div>
    );
};

export default connect(undefined, { doGetAJoke })(NewJokeBtn);
