$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);



/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for(var i = 0; i < recipesArray.length; i++){
		if(recipesArray[i].highlighted == true) {
			var array = recipesArray[i];
				renderRecipe(array);
		}
	}
	console.log('Recipes:', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
/* Función que oculta iconos en index.html y recipe.html */
$(document).ready(function(){
    $("#ocultaricono").hide(function(){
        $(this).hide();
    });
});

/*etapa 2: "agregar nuevas recetas" dentro de news */
$(document).ready(function(){
	$("#printNews").text('Nuevas recetas');
});

