import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import { AppState } from "../store/rootReducer";
import { doGetAJoke } from "../store/jokes/actions";

import Setup from "./Setup";
import Punchline from "./Punchline";
import NewJokeBtn from "./NewJokeBtn";
import Loader from "./loader";

interface ContainerProps {
    isLoading: boolean;
    doGetAJoke: () => void;
};

const Container: FC<ContainerProps> = ({ isLoading, doGetAJoke }) => {

    useEffect(() => {
        doGetAJoke();
    }, [doGetAJoke]);

    if (isLoading) {
        return (
            <div className="grid">
                <Loader />
            </div>
        );
    }

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

const mapStateToProps = ({ loader }: AppState) => ({
    isLoading: loader.isLoading,
});

export default connect(mapStateToProps, { doGetAJoke })(Container);
