import getMeals from "@/lib/getMeals";
import { MealTypes } from "@/types/MealTypes";
import Image from "next/image";
import { StyledP } from "./Styled";

export default async function Home() {
  
  return (
    <>
      <img src="/chicken.png" style={{display: "block", margin: "0 auto"}}/>
      <StyledP>Click Chicken Time for some chicken!!!</StyledP>
    </>);
}
