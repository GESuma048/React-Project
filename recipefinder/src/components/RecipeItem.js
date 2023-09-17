import React,{Component} from 'react';
import '../styles.css';

class RecipeItem extends Component{
    
    render(){
        let {recipe} =this.props;
        return(
            <div className="recipe-item">
            <img className="recipe-img" src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <div className="recipe-text">
            <a href={recipe.strYoutube}><h4>{recipe.strMeal}</h4></a>
            <p>{recipe.strInstructions}</p>
            </div>
            </div>
        )
    }
}
export default RecipeItem;