import React, { FC } from "react";
import { connect } from "react-redux";
import ReactGA from 'react-ga';

import { doGetAJoke } from "../store/jokes/actions";
interface NewJokeBtnProps {
    doGetAJoke: () => void;
};

const NewJokeBtn: FC<NewJokeBtnProps> = ({ doGetAJoke }) => {
    return (
        <div
            className="new-joke-btn"
            onClick={ () => {
                doGetAJoke();
                ReactGA.event({
                    category: 'jokes',
                    action: 'new-joke button clicked'
                });
            } }
        >
            Get new joke
        </div>
    );
};

export default connect(undefined, { doGetAJoke })(NewJokeBtn);
