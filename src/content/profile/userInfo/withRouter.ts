import {NavigateFunction, Params, useLocation, useNavigate, useParams,} from "react-router-dom";
import React, {ComponentType} from "react";

function withRouter(Component:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;