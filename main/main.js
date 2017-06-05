module.exports = function main(inputs) {
	var result=[];
	var strNumber;
	for (var index = 0; index < inputs.length ; index++)
	{
		result.push( returnNumber(inputs.charAt(index)));
	}
	strNumber = mergeResult(result);
	console.log(`strNumber`);
    return strNumber;
};


function mergeResult(result){
	var str="";
	
	for (var i = 0; i < result[0].length ;i++ )
	{
		for (var r = 0 ; r < result.length ; r++)
		{
			for (var j = 0; j < result[0][i].length ; j++)
			{
				str += result[r][i][j];
			}
			if(r != result.length)
			{
				str += " ";
			}
		}
		str += "\n";
	}
	return str;
};

function returnNumber(inputs){
	var arrayNumber = [[".",".","."],[".",".","."],[".",".","."]];
	switch (inputs)
	{
	case "0":
		arrayNumber[1][0]=arrayNumber[1][2]=arrayNumber[2][0]=arrayNumber[2][1]=arrayNumber[2][2]="|";
		arrayNumber[0][1]=arrayNumber[2][1]="_";
		return arrayNumber ;
	case "1":
		arrayNumber[1][2]=arrayNumber[2][2]="|";
		return arrayNumber ;
	case "2":
		arrayNumber[1][2]=arrayNumber[2][0]="|";
		arrayNumber[0][1]=arrayNumber[1][1]=arrayNumber[2][1]="_";
		return arrayNumber ;
	case "3":
		arrayNumber[1][2]=arrayNumber[2][2]="|";
		arrayNumber[0][1]=arrayNumber[1][1]=arrayNumber[2][1]="_";
		return arrayNumber ;
	case "4":
		arrayNumber[1][0]=arrayNumber[1][2]=arrayNumber[2][2]="|";
		arrayNumber[1][1]="_";
		return arrayNumber ;
	case "5":
		arrayNumber[1][0]=arrayNumber[2][2]="|";
		arrayNumber[0][1]=arrayNumber[1][1]=arrayNumber[2][1]="_";
		return arrayNumber ;
	case "6":
		arrayNumber[1][0]=arrayNumber[2][0]=arrayNumber[2][2]="|";
		arrayNumber[0][1]=arrayNumber[1][1]=arrayNumber[2][1]="_";
		return arrayNumber ;
	case "7":
		arrayNumber[1][2]=arrayNumber[2][2]="|";
		arrayNumber[0][1]="_";
		return arrayNumber ;
	case "8":
		arrayNumber[1][0]=arrayNumber[1][2]=arrayNumber[2][0]=arrayNumber[2][2]="|";
		arrayNumber[0][1]=arrayNumber[1][1]=arrayNumber[2][1]="_";
		return arrayNumber ;
	case "9":
		arrayNumber[1][0]=arrayNumber[1][2]=arrayNumber[2][2]="|";
		arrayNumber[0][1]=arrayNumber[1][1]="_";
		return arrayNumber ;
	}
	
};
