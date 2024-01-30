import React from 'react'
import styled from 'styled-components'

const WhatsappIcon: React.FC<{ color: string }> = ({ color }) => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
        <path d="M0 25L1.75729 18.5802C0.672915 16.701 0.103125 14.5708 0.104166 12.3865C0.107291 5.55729 5.66457 0 12.4927 0C15.8062 0.00104167 18.9166 1.29167 21.2562 3.63333C23.5947 5.975 24.8822 9.0875 24.8812 12.3979C24.8781 19.2281 19.3208 24.7854 12.4927 24.7854C10.4198 24.7844 8.37706 24.2646 6.56769 23.2771L0 25ZM6.87186 21.0344C8.61769 22.0708 10.2844 22.6917 12.4885 22.6927C18.1635 22.6927 22.7864 18.074 22.7895 12.3958C22.7916 6.70625 18.1906 2.09375 12.4968 2.09167C6.81769 2.09167 2.19791 6.71042 2.19583 12.3875C2.19479 14.7052 2.87395 16.4406 4.01457 18.2562L2.97395 22.0562L6.87186 21.0344ZM18.7333 15.3427C18.6562 15.2135 18.45 15.1365 18.1395 14.9812C17.8302 14.826 16.3083 14.0771 16.0239 13.974C15.7406 13.8708 15.5343 13.8187 15.327 14.1292C15.1208 14.4385 14.5271 15.1365 14.3468 15.3427C14.1666 15.549 13.9854 15.575 13.676 15.4198C13.3666 15.2646 12.3687 14.9385 11.1864 13.8833C10.2666 13.0625 9.64477 12.049 9.46456 11.7385C9.28435 11.4292 9.44581 11.2615 9.59998 11.1073C9.73956 10.9688 9.90935 10.7458 10.0646 10.5646C10.2219 10.3854 10.2729 10.2563 10.3771 10.049C10.4802 9.84271 10.4291 9.66146 10.351 9.50625C10.2729 9.35208 9.65415 7.82812 9.39685 7.20833C9.14477 6.60521 8.88956 6.68646 8.69998 6.67708L8.10623 6.66667C7.89998 6.66667 7.56457 6.74375 7.28123 7.05417C6.9979 7.36458 6.1979 8.1125 6.1979 9.63646C6.1979 11.1604 7.30728 12.6323 7.46144 12.8385C7.61665 13.0448 9.64373 16.1719 12.7489 17.5125C13.4875 17.8312 14.0646 18.0219 14.5135 18.1646C15.2552 18.4 15.9302 18.3667 16.4635 18.2875C17.0583 18.199 18.2948 17.5385 18.5531 16.8156C18.8114 16.0917 18.8114 15.4719 18.7333 15.3427Z" fill={color} />
      </svg>
    </Container>
  )
}

export default WhatsappIcon

const Container = styled.div`
  height: 15px;
	width: 15px;

  svg{
	height: 100%;
  	width: 100%;
  }
`