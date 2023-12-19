import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([])

    function GetPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }
    useEffect(() => {
        GetPosts()
    }, [])

    return (
        <div className='row'>
            <h1>Posts</h1>
            {
                posts.map((item, index) => <div className='col-md-4' key={index}>
                    <div className="card my-2">
                        <div className="card-header">
                            {item.id}. {item.title}
                        </div>
                        <div className="card-body">
                            {item.body}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Posts