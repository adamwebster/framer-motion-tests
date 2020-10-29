import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const StyledMotionList = styled(motion.ul)`
    margin: 0;
    width: 300px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 25px;
    border: solid 1px #ccc;
    list-style: none;
`;
const StyledMotionListItem = styled(motion.li)`
    background-color: rgba(214, 214, 214, 0.5);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0;
    }
`;
const StyledAvatar = styled(motion.div)`
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 20px;
`;

const StyledRow = styled(motion.div)`
    width: 100%;
    height: 8px;
    background-color: #999;
    border-radius: 10px;
    margin-top: 12px;
`;
/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

const List = () => {
    return (
        <AnimateSharedLayout>
            <StyledMotionList layout initial={{ borderRadius: 25 }}>
                {items.map((item) => (
                    <Item key={item} />
                ))}
            </StyledMotionList>
        </AnimateSharedLayout>
    );
};

const Item = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <StyledMotionListItem
            layout
            onClick={toggleOpen}
            initial={{ borderRadius: 10 }}
        >
            <StyledAvatar className="avatar" layout />
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </StyledMotionListItem>
    );
};

const Content = () => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <StyledRow className="row" />
            <StyledRow className="row" />
            <StyledRow className="row" />
        </motion.div>
    );
};

const items = [0, 1, 2];

export default List;
