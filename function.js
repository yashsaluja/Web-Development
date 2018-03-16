//isEven

function isEven(num)
{
	return num % 2 === 0;
}

//factorial

function factorial(num)
{
	var result =1;

	for(var i =2; i <= num; i++)
	{
		result = result * i;
	}
	return result;
	
	}

//kebabTosnake

function kebabToSnake(str)
{
	var newstr	=str.replace(/-/g , "_");
	return newstr;
}
