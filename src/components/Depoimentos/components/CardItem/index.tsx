import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'


interface ICardItemProps {
    avatar: string
    stars: number
    name: string
    text: string
}

const CardItem:React.FC<ICardItemProps> = ({avatar, stars, name, text}) => {
  return (
    <Container>
        <Content>
            <UserSection>
                <AvatarWrapper>
                    <AvatarImage src={avatar} alt={`${name} avatar`} width={50} height={50}/>
                </AvatarWrapper>
                <UserData>
                    <Name>{name.split(" ")[0].toUpperCase()}</Name>
                    <Stars>{stars}</Stars>
                </UserData>
            </UserSection>
            <TextSection>
                <Text>{text}</Text>
            </TextSection>
            <BottomSection>
                
            </BottomSection>
        </Content>
    </Container>
  )
}

export default CardItem

const Container = styled.div`
width: 230px;
background-color: ${({theme})=> theme.color.background[30]};
padding: 16px;
border-radius: 16px;
box-shadow: 0px 0px 10px -5px rgba(143,143,143,1);
`
const Content = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`
const UserSection = styled.div`
display: flex;
flex-direction: row;
gap: 16px;
`
const UserData = styled.div`
display: flex;
flex-direction: column;
`
const AvatarWrapper = styled.div`
overflow: hidden;
`
const AvatarImage = styled(Image)`

`
const Name = styled.p`
text-overflow: ellipsis;
`
const Stars = styled.div``
const TextSection = styled.div`
    height: 200px;
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding: 8px;

    &::-webkit-scrollbar{
  width: 5px;
  background-color: ${({theme})=> theme.color.background[60]};
}

&::-webkit-scrollbar-thumb{
  background-color: ${({theme})=> theme.color.background[20]};
  border-radius: 20px;
}
`
const Text = styled.p`

`
const BottomSection = styled.div``
