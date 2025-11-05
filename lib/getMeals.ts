const API_KEY = process.env.FOOD_API_KEY;
import { MealTypes } from "@/types/MealTypes";

export default async function getMeals(): Promise<MealTypes[]>{
    try{
    const res= await fetch(`https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=chicken`);

    if (!res.ok) {
        return [];
    }

    const data=await res.json();
    const meals = Array.isArray(data?.meals) ? data.meals : [];
    return meals as MealTypes[];
}   catch{
    return [];
}
}