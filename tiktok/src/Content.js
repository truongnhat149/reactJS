import { memo } from "react";
import Paragraph from "./Paragraph";

function Content( {theme} ) {
    return (
            <div>
                <Paragraph theme={theme}/>
            </div>
        )
}

export default memo(Content);