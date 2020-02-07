import React, { FC } from "react";
import { connect } from "react-redux";
import { AppState } from "../store/rootReducer";

interface PunchlineProps {
    punchlineText: string;
}

const Punchline: FC<PunchlineProps> = ({ punchlineText }) => {
    return (
        <p className="punchline">{ punchlineText }</p>
    );
};

const mapStateToProps = ({ joke }: AppState) => ({
    punchlineText: joke.punchline,
});

export default connect(mapStateToProps)(Punchline);
