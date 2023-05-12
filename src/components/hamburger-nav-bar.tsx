import {MenuTrigger, Button, Popover, Menu, Item} from 'react-aria-components';

const HamburgerNavBar = () => {
    //! This is incomplete!!!!!!
    return <MenuTrigger>
        <Button aria-label="Menu">☰</Button>
        <Popover>
            <Menu>
                <Item id="open">Open</Item>
                <Item id="rename">Rename…</Item>
                <Item id="duplicate">Duplicate</Item>
                <Item id="share">Share…</Item>
                <Item id="delete">Delete…</Item>
            </Menu>
        </Popover>
    </MenuTrigger>
};

export default HamburgerNavBar;
