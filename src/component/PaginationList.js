import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../Pagination';

const PaginationList = ({posts,onHanldeChange,filter}) => {
    const {_page}=filter;
    return (
        <div>
            <ul>
                {posts.map(post=><li key={post.id}>{post.title}</li>)}
            </ul>
            <button onClick={()=>onHanldeChange(_page-1)} >Prev</button>
            <button onClick={()=>onHanldeChange(_page+1)}>Next</button>
        </div>
        
    )
}

PaginationList.propTypes = {
    posts:PropTypes.array
    

}

export default PaginationList
