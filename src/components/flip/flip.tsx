import React, { useState } from "react"
import { motion } from "framer-motion";
import styled from 'styled-components'

const listOne = [
    {title: 'Item 1', subTitle: 'Sub Title 1'},
    {title: 'Item 2', subTitle: 'Sub Title 2'},
    {title: 'Item 3', subTitle: 'Sub Title 3'},

]

const listTwo = [
    {title: 'Item 4', subTitle: 'Sub Title 4'},
    {title: 'Item 5', subTitle: 'Sub Title 5'},
    {title: 'Item 6', subTitle: 'Sub Title 6'},
]



const StyledFlip = styled(motion.div)`
    border-radius: 5px;
    border: solid 1px #ccc;
    background-color: #fff;
    box-shadow: 0px 0px 5px #777;
    height: 300px;
    width: 200px;
    overflow: hidden;
    `

const StyledFlipInner = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
`

const StyledFlipForm = styled(motion.div)`
    display: flex;
    flex-flow: column;
    height: 100%;

`

const StyledButton = styled.button`
    background-color: tomato;
    border: solid 1px tomato;
    border-radius: 5px;
    color: #fff;
    padding: 8px 12px;
    width:100%;
    cursor: pointer;
`



interface SFSProps {
    flexJustifyContent?: string;
}

const StyledFlexSection = styled.div<SFSProps>`
    flex: 1 1;
    display: flex;
    justify-content: ${({flexJustifyContent}) => flexJustifyContent ? flexJustifyContent : 'flex-start'};
    flex-flow: column;
`

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 5px;
`

const StyledLabel = styled.label`
    margin: 5px 0;
`
const StyledSelect = styled.select`
   width: 100%;
    height: 40px;
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 5px;
`


const StyledHeader = styled.header`
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 500;
    text-transform: uppercase;
`

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    li{
        margin: 0;
        padding: 5px 0;
        border-bottom: solid 1px #ccc;
        &:last-child{
            border-bottom:none;
        }
    }
`


const variants = {
    open: { opacity: 1, rotateY: -180},
    closed: { opacity: 1, rotateY:  0},
    notFlipped: {transform: "scale(-1, 1)"},
    flipped: {transform: "scale(1,1)"}
  }
  const colorVariants = {
    flippingA: {backgroundColor: "#fff", color: "#000"},
    flippingB: {backgroundColor: "#333", color: "#fff"},
  }
  


const Flip = () => {
    const [list, setList] = useState(listOne);
    const [flipping, setFlipping] = useState(false);
    const [backSideShown, setBackSideShown] = useState(false); 
    const [name, setName] = useState('Title of Widget')
    const FlipCard = () => {
        setFlipping(!flipping)
        setTimeout(() => {
            setBackSideShown(!backSideShown)
        },[1000])
    }

    const selectList = (e: { target: {value: string}}) => {
        const list =  e.target.value;
        switch(list){
            case "list1":
                setList(listOne)
                break;
            case  "list2":
                setList(listTwo)
                break;
            default:
                return
        }
    }
    return (
        <>
     
    <StyledFlip
    animate={flipping ? "open" : "closed"}
    variants={variants}
    transition={{duration: 2}}
    >
        <StyledFlipInner
            animate={backSideShown ? "flippingB" : "flippingA"}
            variants={colorVariants}
        >
        <StyledFlipForm
    animate={flipping ? "flipped" : "notFlipped"}
    variants={variants}
    transition={{duration: 2}}
        >
            {backSideShown ? <>
            <StyledFlexSection>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput id="name" onChange={(e) => setName(e.target.value)} value={name} />
            <StyledLabel htmlFor="list">List</StyledLabel>

            <StyledSelect onChange={(e) => selectList(e)} id="list">
                <option value="list1">List 1</option>
                <option value="list2">List 2</option>
            </StyledSelect>
            </StyledFlexSection>
            <StyledFlexSection flexJustifyContent="flex-end">
            <StyledButton onClick={()=> FlipCard()}>Save</StyledButton>
            </StyledFlexSection>
            </> : <>
            <StyledFlexSection>
            <StyledHeader>{name}</StyledHeader>
            <StyledList>
                {list.map(listItem => (
                    <li><strong>{listItem.title}</strong><br/>{listItem.subTitle}</li>
                ))}
            </StyledList>
            </StyledFlexSection>
            <StyledFlexSection flexJustifyContent="flex-end">
            <StyledButton onClick={()=> FlipCard()}>Edit</StyledButton>
            </StyledFlexSection>
            </>}
        </StyledFlipForm>
        </StyledFlipInner>
        </StyledFlip>
    </>
    )
}

export default Flip;