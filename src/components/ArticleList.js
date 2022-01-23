import React from "react";
import Article from "./Article"

function ArticleList(props) {
  

    console.log("article list props", props)
    return (
        <main>
           { props.posts.map(post => {
               return <Article 
               date = {post.date}
               key = {post.id} 
               minutes = {post.minutes}
               preview = {post.preview}
               title = {post.title} />
           })}
        </main>
    )
}



export default ArticleList;