import React, {useEffect, useState} from 'react'
import {useTempLabel} from '../hooks/useTempLabel'


export const LikeBtn = ({initCount, onCountUpdate, ...otherprops}) =>{
	const defautlLabel = otherprops.children ? otherprops.children : 'Like'
	const [label, toggleLabel] = useTempLabel(defautlLabel, 'Liked', 2000)
	const [count, setCount] = useState(initCount ? initCount : 0)

	useEffect(()=>{
		if (count<initCount){
			setCount(initCount)
		}
	}, [initCount])

	const handleClick =  (event) =>{
		const newCount = count +1

		toggleLabel()
		setCount(newCount)
		if(onCountUpdate){
			onCountUpdate(newCount)
		}
	}

	return <button className = {otherprops.className} 
					onClick={handleClick}>{label} {count}</button>
}

