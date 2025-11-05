import React from "react";
import Link from 'next/link';
import { StyledNav, StyledHeader} from "./Styled";


export default function RootLayout(
  {children,}: 
  Readonly<{children: React.ReactNode;}>
){
  return (
    <html lang="en">
    
      <body style={{backgroundColor: "orange", margin: 0 ,padding: 0}}>
        <StyledHeader>
          <h1>Hungry Hungry Hungry!</h1>
        </StyledHeader>
        <StyledNav>
          <Link href="/">Home</Link>
          <Link href="/chicken">Chicken Time!!</Link>
        </StyledNav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
