function pegados(word) {
	let cont=0, indice=0;
	for(indice=0;indice<word.length;indice++)
	{
		if((indice+1)<word.length)
		{
			if(indice>0 && (word[indice]==word[indice+1]))
			{
				cont++;
				indice++;
			}
		}	
	}
	return cont;
}
exports.pegados=pegados;