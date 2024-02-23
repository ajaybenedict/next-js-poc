import { AppBar, Stack, Toolbar, Typography, styled } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    background: 'black'
})

const Navbar = () => {
    return (
        <div>
            <AppBar position='static'>
                <StyledToolBar>
                    <Typography variant="h5">Next</Typography>
                    <Stack direction='row' justifyContent='space-between' width='30%'>
                    <Link href="./">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/nested/contact">Contact</Link>
                    </Stack>
                </StyledToolBar>
            </AppBar>
        <div> Navbar... </div>
        <div>
        
        </div>
        </div>
    )
}

export default Navbar