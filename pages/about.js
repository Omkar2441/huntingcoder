import React from 'react'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
	<div className={`${styles.main} ${inter.className}`}>
	  This is About
	</div>
  )
}

export default About;
