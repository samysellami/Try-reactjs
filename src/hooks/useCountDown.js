import React, {useEffect, useState} from 'react'

export const useCountDown = seconds =>{
	const [currentTime, setCurrentTime] = useState(seconds)
	useEffect( () =>{
		if (currentTime <= 0.1) {
			return
		}

		let myInterval = setInterval(()=>{
			setCurrentTime(currentTime - 0.1)
		}, 100)

		return ()=>{
			clearInterval(myInterval)
		}
	}, [currentTime])

	return [currentTime, setCurrentTime]
}