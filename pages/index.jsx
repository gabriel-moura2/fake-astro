import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Container } from '@mui/material';
import { AppTitle, AppButtonLink } from '../src/components/';

export default function Home() {
	const router = useRouter();
	
	return (
		<div>
		  	<Head>
				<title>Fake Astro</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<main>
				<Container>
					<AppTitle>
						Take psychological <AppButtonLink value="tests" href="/test/ansiedade" />.
					</AppTitle>
					<AppTitle>
						Keep a <AppButtonLink value="journal" />.
					</AppTitle>
					<AppTitle>
						All our <AppButtonLink value="articles" />.
					</AppTitle>
				</Container>
			</main>
    	</div>
  )
}
