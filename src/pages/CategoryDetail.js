import React, {useState, useEffect} from 'react'
import Category from './Category';
import { useParams } from "react-router-dom";  
import CardFood from './CardFood.js';

const CategoryDetail = () => {
    const [meals, setMeals] = useState(null);
    const params = useParams();

    const fetchData = async (category) => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category)
        const result = await data.json();
        setMeals(result.meals);
    }

    useEffect(() => {
        fetchData(params.categoryName);
    }, [])

    return (
        <div>
            <h4>Halaman Kategori Detail </h4>
            {
                meals ? (
                    <div>
                        {
                            meals.map(meal => (
                                <CardFood img={meal.strMealThumb} title={meal.strMeal} />
                            ))
                        }
                    </div>
                ) : (
                    <p>Data tidak ditemukan</p>
                )                    
            }
        </div>
    )
}

export default CategoryDetail