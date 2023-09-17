import React,{Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component{
    render(){
        console.log('this.props',this.props);
        if(this.props.recipes===null){
            return(<div><h4>No recipes found</h4></div>)
        }
        return(
            <div>
            {
                this.props.recipes.map(recipe =>{
                    return(
                        // <div key={recipe.idMeal}>
                        // <h4>{recipe.strMeal}</h4>
                        // </div>
                        <RecipeItem key={recipe.idMeal} recipe={recipe}/>
                    )
                })
            }
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps,null)(RecipeList);