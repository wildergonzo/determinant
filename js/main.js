function llenarMatriz(dimension)
{
	var x = new Array(dimension);
	for (var i = 0; i < dimension; i++) {
		x[i] = new Array(dimension);
	}
	for (i=0; i<dimension;i++)
	{
		for(j=0; j<dimension;j++)
		{
			x[i][j] = prompt("Ingrese valor para la posicion: " + i + ", " + j);
		}
	}
	return x;
}
function imprimirMatriz()
{
	document.getElementById("tabla").innerHTML = llenarMatriz(3);

}
function resolverPorCofactores()
{
	
}