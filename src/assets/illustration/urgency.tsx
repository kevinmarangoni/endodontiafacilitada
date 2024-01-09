import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  height: 100%;
	width: 100%;

  svg{
	height: 100%;
  	width: 100%;
  }
`

const UrgencyIcon = ({color}) => {
  return (
    <Container>
<svg fill={color ?? `#000`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 470.693 470.693">
<g>
	<g>
		<path d="M469.781,221.533c-4.053-34.304-21.205-64.981-48.331-86.379c-27.136-21.397-60.971-30.944-95.264-26.901
			c-34.315,4.053-64.992,21.216-86.389,48.341c-21.397,27.125-30.944,60.96-26.891,95.264c1.707,14.432,5.835,28.384,12.277,41.547
			l-21.781,55.371c-1.291,3.285-0.875,6.997,1.109,9.909c1.984,2.912,5.291,4.661,8.821,4.661h102.219
			c8.672,1.771,17.408,2.656,26.091,2.656c4.971,0,9.931-0.288,14.859-0.875c34.315-4.053,64.992-21.216,86.389-48.341
			C464.277,289.672,473.835,255.837,469.781,221.533z M426.133,303.581c-17.867,22.645-43.477,36.981-72.139,40.363
			c-11.573,1.365-23.392,0.8-35.125-1.696c-0.725-0.16-1.461-0.235-2.208-0.235h-87.669l17.813-45.291
			c1.141-2.923,0.949-6.197-0.533-8.96c-6.496-12.085-10.592-25.003-12.181-38.411c-3.381-28.651,4.597-56.896,22.453-79.552
			c17.867-22.645,43.477-36.981,72.139-40.363c28.619-3.371,56.896,4.597,79.541,22.464c22.656,17.867,36.992,43.488,40.363,72.128
			C451.979,252.68,444,280.925,426.133,303.581z"/>
	</g>
</g>
<g>
	<g>
		<path d="M388.811,212.957h-23.733v-23.733c0-13.109-10.624-23.733-23.733-23.733c-13.109,0-23.733,10.624-23.733,23.733v23.733
			h-23.733c-13.109,0-23.733,10.624-23.733,23.733s10.624,23.733,23.733,23.733h23.733v23.733c0,13.109,10.624,23.733,23.733,23.733
			c13.109,0,23.733-10.624,23.733-23.733v-23.733h23.733c13.109,0,23.733-10.624,23.733-23.733S401.92,212.957,388.811,212.957z"/>
	</g>
</g>
<g>
	<g>
		<path d="M138.667,150.013h10.667c17.643,0,32-14.357,32-32v-64c0-17.643-14.357-32-32-32H94.187c-1.685,0-3.349,0.405-4.853,1.163
			L63.957,36.146C24.512,56.296,0,96.338,0,140.637v189.429c0,44.299,24.512,84.341,63.957,104.491l25.376,12.96
			c1.504,0.757,3.168,1.163,4.853,1.163h55.147c17.643,0,32-14.357,32-32v-64c0-17.643-14.357-32-32-32h-10.667
			c-17.643,0-32-14.357-32-32V182.013C106.667,164.37,121.024,150.013,138.667,150.013z M138.667,342.013h10.667
			c5.888,0,10.667,4.789,10.667,10.667v64c0,5.877-4.779,10.667-10.667,10.667H96.747l-23.083-11.797
			c-32.277-16.491-52.331-49.248-52.331-85.493V140.637c0-36.245,20.053-69.003,52.331-85.493l23.083-11.797h52.587
			c5.888,0,10.667,4.789,10.667,10.667v64c0,5.877-4.779,10.667-10.667,10.667h-10.667c-29.408,0-53.333,23.925-53.333,53.333
			V288.68C85.333,318.088,109.259,342.013,138.667,342.013z"/>
	</g>
</g>
<g>
	<g>
		<circle cx="128" cy="384.68" r="10.667"/>
	</g>
</g>
<g>
	<g>
		<circle cx="85.333" cy="374.013" r="10.667"/>
	</g>
</g>
<g>
	<g>
		<circle cx="128" cy="86.013" r="10.667"/>
	</g>
</g>
<g>
	<g>
		<circle cx="85.333" cy="96.68" r="10.667"/>
	</g>
</g>
</svg>
    </Container>
  )
}

export default UrgencyIcon