import React, { FC, Fragment } from "react";
import { connect } from "react-redux";
import { AppState } from "../store/rootReducer";

interface LoaderProps {
    isLoading: boolean;
};

const Loader: FC<LoaderProps> = ({ isLoading }) => {

    if (!isLoading) {
        return (<Fragment></Fragment>);
    }

    return (
        <div className="loader">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ loader }: AppState) => ({
    isLoading: loader.isLoading,
});

export default connect(mapStateToProps)(Loader);

