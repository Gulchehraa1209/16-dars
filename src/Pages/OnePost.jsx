import React from 'react'
import { useState } from 'react'
import { doGet } from './Service'
import { useEffect } from 'react'

const OnePost = ({ match }) => {

    const [Post, setPost ] =  useState('')
    const [User, setUser ] =  useState('')

    async function getOnePost(id) {
        const OnePost = await doGet("/posts/" + id)
        setPost(OnePost.data)
        const postUser = await doGet("/users/" + OnePost.data.userId)
        setUser(postUser.data)
    }

    useEffect(() => {
        getOnePost(match.params.id)
    }, [])

    return (
        <div className='row'>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        {User.name}
                    </div>
                    <div className="card-body">
                        {User.phone}
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                        {Post.id}  {Post.title}
                    </div>
                    <div className="card-body">
                        {Post.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnePost