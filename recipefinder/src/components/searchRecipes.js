import React,{Component} from 'react';
import {Form,FormGroup,FormControl,FormLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../action';
import '../styles.css'

class SearchRecipes extends Component{

constructor(){
    super();
    this.state={
       dish:''
    }
}
search(){
    let {dish} =this.state;
    // const url=`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    // console.log('state',this.state,'url',url);
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`
    fetch(url,{method:'GET'}).then(response => response.json()).then(json => {this.props.setRecipes(json.meals)});
    // fetch(url,{method:'GET'}).then(response => response.json()).then(json => console.log('recipes',json));

}

    render()
{
    return(
        <Form inline>
            <FormGroup>
                <FormLabel>Search</FormLabel>
                {' '}
                <FormControl size="sm" type="text" placeholder="Breakfast,Pizza...." 
                onChange={event => this.setState({dish:event.target.value})}></FormControl>
            </FormGroup>
            {' '}
            <Button onClick={() => this.search()}>Submit</Button>
        </Form>
    )
}
}

export default connect(null,{setRecipes})(SearchRecipes);