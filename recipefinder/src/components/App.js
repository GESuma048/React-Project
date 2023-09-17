import React,{Component} from 'react';
import SearchRecipes from './searchRecipes';
import '../styles.css';
import RecipeList from './RecipeList';

class App extends Component{
    render(){
        return( 
            <div>
                <h2>Recipe Finder</h2><br></br>
                <SearchRecipes/>
                <RecipeList/>
            </div>
            )
    }
}
export default App;