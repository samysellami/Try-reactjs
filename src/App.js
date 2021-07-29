import React from 'react'
import classname from 'classnames'
import {Switch, Route, Link} from 'react-router-dom'
import {LikeBtn} from './buttons/likeBtn'
import {DarkModeBtn} from './darkMode/button'
import {useDarkMode} from './darkMode/context'
import {useCountDown} from './hooks/useCountDown'
import {ContactPage} from './contactForm/contactPage'
import {BlogListPage, BlogDetailPage} from './blog/blogDetail'
import './styles/custom.scss'

const Home = () =>{
	const [currentTime] = useCountDown(5)
	const darkModeContext = useDarkMode()
	const isDark = darkModeContext.isDark
	const headerClassname = classname('bold', {'text-green': currentTime >= 3, 'text-red': currentTime < 3})
	return <div>
		<h1 className = {headerClassname}> Hello World {isDark ? 'dark': 'light'}</h1>
		<p>Your time is {currentTime}</p>
		<LikeBtn className = 'text-red' >Like</LikeBtn>
		<DarkModeBtn />
	</div>

}
const App = () => {
	const darkModeContext = useDarkMode()
	const isDark = darkModeContext.isDark
	const wrapperClassname = isDark ? "bg-dark text-light":"bg-light text-dark"


	return <div className = {wrapperClassname}>
		<nav>
			<ul>
				<li><Link to= '/'>Home</Link></li>
				<li><Link to= '/contact'>Contact</Link></li>
				<li><Link to= '/blog'>Blog</Link></li>
				<li><Link to= '/blog/random'>Random</Link></li>
				<li><Link to= '/blog/hello-world'>Hello world</Link></li>
			</ul>
		</nav>

		<Switch>
			<Route exact path= '/'>
				<Home />
			</Route>
			
			<Route exact path= '/blog'>
				<BlogListPage />
			</Route>
			<Route exact path= '/blog/:slug'>
				<BlogDetailPage />
			</Route>

			<Route exact path= '/contact'>
				<h1>Contact Form</h1>
				<ContactPage />
			</Route>
		</Switch>

	</div> 	
}





/*const App = () => {

	const [count, setCount] = useState(5001)
	const handleClick = (event) =>{
		setCount(count + 1)
	}

	const handleCountUpadate = (newCount) =>{
		if (count < newCount){
			setCount(newCount)
		}
	}
	return <div>
		<h1> Hello World </h1>
		<button onClick = {handleClick}>My incrementor</button>
		<LikeBtn className = 'text-red' initCount = {count} 
			onCountUpdate = {handleCountUpadate}>Perform Like</LikeBtn>
	</div> 	
}*/

export default App