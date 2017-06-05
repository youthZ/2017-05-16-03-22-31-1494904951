module.exports = function main(inputs) {
	var result=[];
	for (var index = 0; index < inputs.length ; index++)
	{
		result.push( returnNumber(inputs.charAt(index)));
	}
    console.log(result);
    return result;
};

function printLedNumber(result){
	for (var row = 0;row < result.length ; row++)
	{
		console.log(result[row]+" ");
	}
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
