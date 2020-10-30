import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { AppContext } from '../../AppState';

const StyledCubesWrapper = styled.div`
    width: 300px;
    height: 300px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    position: relative;
`;

interface SCProps {
    isOpen: boolean;
}
const StyledCube = styled(motion.div)<SCProps>`
    background-color: #ccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ isOpen }) =>
        isOpen &&
        css`
            opacity: 0.2;
        `}
`;

const offsetValue = 79;
const scaleSize = 1;
const variants = {
    open: {
        scale: scaleSize,
        x: offsetValue,
        y: offsetValue,
        zIndex: 1,
        boxShadow: '0px 0px 10px #888888',
    },
    closed: {
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 0,
        boxShadow: 'none',
    },
};

const variants2 = {
    open: { scale: scaleSize, x: -offsetValue, y: offsetValue, zIndex: 1 },
    closed: { scale: 1, x: 0, y: 0, zIndex: 0 },
};

const variants3 = {
    open: { scale: scaleSize, x: offsetValue, y: -offsetValue, zIndex: 1 },
    closed: { scale: 1, x: 0, y: 0, zIndex: 0 },
};

const variants4 = {
    open: { scale: scaleSize, x: -offsetValue, y: -offsetValue, zIndex: 1 },
    closed: { scale: 1, x: 0, y: 0, zIndex: 0 },
};

const Cubes = () => {
    const { appState } = useContext(AppContext);
    return (
        <StyledCubesWrapper>
            <AnimatePresence>
                <Cube variants={variants} />
                <Cube variants={variants2} />
                <Cube variants={variants3} />
                <Cube variants={variants4} />
            </AnimatePresence>
        </StyledCubesWrapper>
    );
};

const Cube = ({ ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { appState, dispatchApp } = useContext(AppContext);
    const toggleOpen = () => {
        dispatchApp({ type: 'SET_CUBES_OPEN', payload: !isOpen });
        setIsOpen(!isOpen);
    };

    const variationCube = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };
    return (
        <StyledCube
            onClick={() => toggleOpen()}
            animate={isOpen ? 'open' : 'closed'}
            isOpen={!isOpen && appState.cubesOpen}
            {...rest}
        >
            <motion.div
                variants={variationCube}
                initial={{ opacity: 0 }}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ delay: 0 }}
            >
                Hello
            </motion.div>
        </StyledCube>
    );
};
export default Cubes;
