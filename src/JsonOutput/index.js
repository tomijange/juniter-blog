import React from 'react';
import { useSelector } from 'react-redux';


export default function JsonOutput() {
    const posts = useSelector(state => state.posts);
    console.log(posts);
    return (
        <pre>
            {JSON.stringify(posts, null, 2)}
        </pre>
    )
}