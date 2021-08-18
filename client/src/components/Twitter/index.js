import React from "react";
import { makeStyles } from "@material-ui/core/styles";




const TwitterInfo = () => {
    return (
        <div>
        <iframe className="twitter-timeline"
            data-theme="dark"
            href="https://twitter.com/PhxCenterArts?ref_src=twsrc%5Etfw"
            data-tweet-limit= "3"
        >
            Tweets by PhxCenterArts</iframe>
        </div>
        )
};

export default TwitterInfo;
