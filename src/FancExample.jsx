import {useEffect,  useState } from 'react'
import './FancExample.css'

const FancExaple = () => {
	const [show, setShow] = useState(false)
	const [post, setPost] = useState({})

	const handleClick = (e) => {
		console.log(show)
		console.log(e.target)
		setShow(true)
	}

	const handleDiv = (e) => {
		console.log(e.target)
		const button = document.getElementById('but')
		console.log(button)
	}

	let getNews= async()=> {
	    let data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
	        .then(function (response) {
	            return response.json();
	        })
	        .catch(function (error) {
	            console.log(error);
	        });
	    setPost(data);

	    console.log(post);
	}
 useEffect((prevProps, prevState)=>{
	if (prevState !== show) {
		getNews();
	}
},[show])
   
	    if (!show) {
	        return (
	            <button id="but" onClick={handleClick}>Click</button>
	        )
	    }
	    return (
	        <div className='conteiner'>
	            <div  
	                onClick={handleDiv}
	                
	            >
	                Simple Message
	                <h2>{post.id}</h2>
	                <p>{post.title}</p>
	            </div>
	            <button id="but" onClick={handleClick}>Click</button>
	        </div>
	    )
}

export default FancExaple
