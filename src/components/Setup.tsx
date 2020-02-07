import React, { FC } from "react";
import { connect } from "react-redux";

import { AppState } from "../store/rootReducer";

interface SetupProps {
    setupText: string;
};

const Setup: FC<SetupProps> = ({ setupText }) => {
    return (
        <p className="setup">{ setupText }</p>
    );
};

const mapStateToProps = ({ joke }: AppState) => ({
    setupText: joke.setup,
});

export default connect(mapStateToProps)(Setup);
