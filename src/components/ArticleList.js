import React from "react";

function ArticleList(props) {
    return (
        <main>
            {props.map(prop => {
                prop.key = prop;
                return prop
            })}
        </main>
    )
}

export default ArticleList;