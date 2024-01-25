import React from 'react'
import styled from 'styled-components'

const FullStar: React.FC<{ color:string}> = ({ color }) => {
    return (
        <Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                <g clipPath="url(#clip0_2_72504)">
                    <path d="M19.4547 23.3929C19.2968 23.3935 19.1428 23.3443 19.0146 23.2523L12.9864 18.882L6.9583 23.2523C6.82951 23.3457 6.67436 23.3957 6.51526 23.3951C6.35616 23.3945 6.20138 23.3434 6.07327 23.249C5.94517 23.1547 5.85038 23.0221 5.80263 22.8703C5.75487 22.7185 5.75661 22.5555 5.8076 22.4048L8.15868 15.4411L2.06539 11.2625C1.9334 11.1721 1.83379 11.0419 1.7811 10.8908C1.72841 10.7398 1.72541 10.5758 1.77253 10.4229C1.81965 10.2701 1.91443 10.1362 2.04301 10.0411C2.1716 9.94588 2.32725 9.89431 2.48723 9.89389H10.0045L12.2731 2.91238C12.3219 2.76165 12.4173 2.63028 12.5454 2.5371C12.6736 2.44393 12.828 2.39374 12.9864 2.39374C13.1449 2.39374 13.2993 2.44393 13.4274 2.5371C13.5556 2.63028 13.651 2.76165 13.6998 2.91238L15.9684 9.89623H23.4856C23.6458 9.89615 23.8018 9.94736 23.9308 10.0424C24.0598 10.1374 24.1549 10.2712 24.2023 10.4242C24.2498 10.5772 24.2469 10.7413 24.1943 10.8926C24.1417 11.0439 24.042 11.1744 23.9098 11.2649L17.8142 15.4411L20.1639 22.4029C20.2019 22.5157 20.2126 22.6358 20.1951 22.7535C20.1776 22.8712 20.1323 22.983 20.063 23.0797C19.9937 23.1764 19.9024 23.2552 19.7966 23.3097C19.6909 23.3641 19.5737 23.3927 19.4547 23.3929Z" 
                    fill={color??"black"} />
                </g>
            </svg>
        </Container>
    )
}

export default FullStar

const Container = styled.div`
  height: 15px;
	width: 15px;

  svg{
	height: 100%;
  	width: 100%;
  }
`