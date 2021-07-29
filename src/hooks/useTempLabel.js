import React, {useEffect, useState} from 'react'

export const useTempLabel = (myLabel, tempLabel, duration) =>{

    const tempDuration = duration? duration : 1500
    const defautlLabel = myLabel ? myLabel : 'Like'
    const defaultTempLabel = tempLabel ? tempLabel : 'Liked'
	const [label, setLabel] = useState(defautlLabel)

	
	useEffect(()=>{
		let timeout
		if (label !== defautlLabel){
			timeout = setTimeout(()=> {
				setLabel(defautlLabel)
			}, tempDuration)
		}
		return ()=>{
			clearTimeout(timeout)
		}
	}, [label])

	const toggle =  () =>{
		setLabel(defaultTempLabel)
	}

	return [label, toggle]
}