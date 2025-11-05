import getMeals from "@/lib/getMeals";
import { MealTypes } from "@/types/MealTypes";
import Image from "next/image";
import { MealDiv, MealPhoto, MealCard, StyledP} from "../Styled";

export default async function ChickenPage() {
    const meals = await getMeals();


    if(!meals || meals.length === 0) {
    return (
        <div>
        <StyledP>We are out of chicken for today :( (cant call api)</StyledP>
        </div>
    );
    }
    return (
    <MealDiv>
        {meals.map((meal: MealTypes) => (
            <MealCard key={meal.idMeal}>
                <h3>{meal.strMeal}</h3>
                <MealPhoto src={meal.strMealThumb} alt={meal.strMeal} width={100} height={100}/>
            </MealCard>
    ))}
    </MealDiv>
  );
}