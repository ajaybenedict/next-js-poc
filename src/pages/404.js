"use client";
import { Box, Button, Link, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PageNotFound = () => {
    const router = useRouter()
useEffect(() => {
    const id= setTimeout(() => {
        router.push('./')
    },3000)

    return ()=> clearTimeout(id)
},[])


    return (
        <Box sx={{margin:20}}>
            <Typography variant='h5'>Oooops, page not found. We are working on it</Typography>
            <Link href="./"><Button variant="text">Go to Home</Button></Link>
        </Box>
    )
}

export default PageNotFound