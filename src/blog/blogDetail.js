import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useCountDown} from '../hooks/useCountDown'
import data from './blogs.json'

export const BlogListPage = () =>{
	const [posts, setPosts] = useState([])
	useEffect(()=>{
		setPosts(data.posts)
	}, [])

	return <div>
        <h1>Blog list</h1>
		<Link to='/blog/random'>Blog random</Link>
		{posts.map((post, index)=>{
			return <li key = {index}>
				<Link to = {`blog/${post.slug}/`} >{post.title}</Link>
			</li>
		})}
	</div>
}

function getRandomInt(max){
	return Math.floor(Math.random() * max)
}
export const BlogDetailPage = () =>{
    const {slug} = useParams()
    const [mySlug, setMySlug] = useState(null)
	const [actualDelay, setActualDelay] = useState(-1)
	const [countDown, setCountDown] = useCountDown(actualDelay)
	const [loaded, setLoaded] = useState(false)

	
	useEffect(()=>{
		console.log(slug, mySlug)
	
		const doDetailLookup = (slugParam) =>{
			const delay = getRandomInt(10)
			const url = `https://httpbin.org/delay/${delay}`
			const method = 'GET'
			setMySlug(slugParam)
			setActualDelay(delay)
			setCountDown(delay)

			fetch(url, {method : method}).then(response =>{
				if (response.status == 404) {
					//set error
					return {}
				}
				return response.json()
			}).then(data =>{
				setLoaded(true)
				console.log(data)	
			})
		}
		if (slug !== mySlug){
			doDetailLookup(slug)
		}
	}, [slug])

	return <div>
		{mySlug}
		{mySlug !== 'hello-world'? <Link to='/blog/hello-world'>Hello world</Link>: null}

		<p>{actualDelay}</p>	
		<p>{countDown}</p>
		<p>{!loaded ? 'loading... ' : 'loaded'}</p>
	</div>
}

