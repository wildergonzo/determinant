function llenarMatriz(dimension)
{
	var x = new Array(dimension);
	for (i = 0; i < dimension; i++) {
		x[i] = new Array(dimension);
	}
	for (i=0; i<dimension;i++)
	{
		for(j=0; j<dimension;j++)
		{
			x[i][j] = parseInt(prompt("Ingrese valor para la posicion: " + i + ", " + j));
		}
	}
	return x;
}
//temporal
function imprimirMatriz(matriz)
{
	var datosMatriz = "";
	for(i=0;i<matriz.length;i++)
	{
		for(j=0;j<matriz.length;j++)
		{
			datosMatriz = datosMatriz + matriz[i][j] + " ";
		}
		datosMatriz = datosMatriz + "<br>";
	}
	document.getElementById("resultado").innerHTML = datosMatriz;
}
function imprimirVector(vector)
{
	var datosVector = "";
	for(i=0;i<vector.length;i++)
	{
		datosVector = datosVector + vector[i] + ", ";
	}
	document.getElementById("resultado").innerHTML = datosVector;
}

function resolverMatriz()
{
	//resolverPorSarrus_2x2(extraerMatriz(llenarMatriz(3),0,0));
	document.getElementById("resultado").innerHTML = resolverPorCofactores_3x3(llenarMatriz(3));
	//imprimirMatriz(extraerMatriz(llenarMatriz(3),0,1));
}

function resolverPorCofactores_3x3(matriz)
{
	//var matriz = llenarMatriz(3);
	var dimension = matriz.length;
	var cofactor = -1;
	var indices = [3];
	var iterar = true;
	var resultado = 0;
	var nuevosIndices = [dimension];

	//seleccionar pivote (busqueda de 0s) 
	//**pendiente**
	var pivote = matriz[0][0];
	var filaPivote = 0;
	var columnaPivote = 0;
	
	//extraemos indices de la fila del pivote
	for (i=0; i<dimension;i++)
	{
		indices[i] = matriz[filaPivote][i];
	}

	//aplicamos formula de cofactores
	var ind=0;
	while(ind<dimension)
	{
		nuevosIndices[ind] = indices[ind] * (Math.pow(cofactor,ind+2) * resolverPorSarrus_2x2(extraerMatriz(matriz, filaPivote, columnaPivote)));
		columnaPivote++;
		ind++;
	}
	
	//calculamos la determinante con la sumatoria de indices
	for (i=0; i<dimension;i++)
	{
		resultado = resultado + nuevosIndices[i];
	}
	return resultado;
}

function extraerMatriz(matriz, x, y)
{
	var nuevaMatriz = new Array(matriz.length-1);
	for (i = 0; i < matriz.length-1; i++) {
		nuevaMatriz[i] = new Array(matriz.length-1);
	}
	var f=0,
		c=0;
	for (i=0; i<matriz.length;i++)
	{
		for (j=0; j<matriz.length; j++) 
		{
			if (i != x && j != y)
			{
				nuevaMatriz[f][c] = matriz[i][j];
				c++;
			}
		}
		c=0;
		if (i!=x)
		{
			f++;
		}
	}
	return nuevaMatriz;
}

function resolverPorSarrus_2x2(matriz)
{
	imprimirMatriz(matriz);
	var resultado = (matriz[0][0] * matriz[1][1]) - (matriz[1][0] * matriz[0][1]);
	return resultado;
}