import React from 'react'

function Head(props) {
    React.useEffect(()=>{
        document.title = props.title + ' | Dogs';
        document.querySelector("meta[name='description']").setAttribute('content', props.description || '')
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Head
