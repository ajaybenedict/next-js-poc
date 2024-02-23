import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{marginBottom:10}}>
      <Head>
        <title>Next | Home</title>
      </Head>
      <Stack alignItems='center' justifyContent='center'>
        <Image alt='next' src='' width={500} height={200}/>
        <Stack alignSelf='flex-start' spacing={2} m={10}>
            <Typography variant="h3">Introduction</Typography>
            <Typography color='grey'>Lorem ipsum dolor sit amet. Et voluptatem ullam non internos voluptatem et quia cupiditate sit amet dignissimos sed inventore blanditiis sed ullam nihil ex corrupti adipisci. Est itaque corrupti et veritatis maiores sed voluptatem quos. Sit deserunt modi nam atque reprehenderit et distinctio reprehenderit qui cumque numquam. Est iure laboriosam et velit tempora non amet rerum et rerum voluptatem aut cumque minus a eligendi aperiam ex consequatur repellat.</Typography>
        </Stack>
        <Link href="/nested/">Go To Users</Link>
      </Stack>
    </Box>
  );
}
