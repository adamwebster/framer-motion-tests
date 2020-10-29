import React, { SetStateAction, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledConstraintDiv = styled(motion.div)`
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #ccc;
`;

const StyledDragItem = styled(motion.div)`
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: tomato;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Drag = () => {
    const constraintRefs = useRef(null);
    const [drag, setDrag] = useState<boolean | 'x' | 'y' | undefined>(true);
    const [dragElastic, setDragElastic] = useState<number>(0.1);
    return (
        <>
            <StyledConstraintDiv ref={constraintRefs}>
                <StyledDragItem
                    drag={drag}
                    layout
                    dragConstraints={constraintRefs}
                    dragElastic={dragElastic}
                >
                    Drag
                </StyledDragItem>
            </StyledConstraintDiv>
            <button onClick={() => setDrag('x')}>Set Drag to x</button>
            <button onClick={() => setDrag('y')}>Set Drag to y</button>
            <button onClick={() => setDrag(true)}>Reset</button>
            <label>Drag Elastic</label>
            <input
                value={dragElastic}
                type="number"
                onChange={(e) =>
                    setDragElastic((e.target.value as unknown) as number)
                }
            />
        </>
    );
};

export default Drag;
