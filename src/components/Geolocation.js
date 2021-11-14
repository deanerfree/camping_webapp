import React, { useState, useEffect } from "react"

const Geolocation = () => {
	const [status, setStatus] = useState()
	const [lat, setLat] = useState()
	const [lng, setLng] = useState()
	const getData = async () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position)
				setStatus("Hey found you")
				setLat(position.coords.latitude)
				setLng(position.coords.longitude)
			},
			() => {
				setStatus("Unable to retrieve your location")
			}
		)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			Hello {status} {lat} {lng}
		</div>
	)
}

export default Geolocation
