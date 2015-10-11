var hours = process.argv[2];
var minutes = process.argv[3];

var arab = [1, 4, 5, 9, 10, 40, 50];
var roman = ['I','IV','V','IX','X','XL','L'];

var iImage = [
	' _  _  _ ',
	'(_)(_)(_)',
	'   (_)   ',
	'   (_)   ',
	'   (_)   ',
	'   (_)   ',
	' _ (_) _ ',
	'(_)(_)(_)'
];

var vImage = [
	' _           _ ',
	'(_)         (_)',
	'(_)         (_)',
	'(_)_       _(_)',
	'  (_)     (_)  ',
	'  (_)_   _(_)  ',
	'    (_)_(_)    ',
	'      (_)      '
];
			  
var xImage = [
	' _       _ ',
	'(_)     (_)',
	'(_)_   _(_)',
	'  (_)_(_)  ',
	'   _(_)_   ',
	' _(_) (_)_ ',
	'(_)     (_)',
	'(_)     (_)'
];

var lImage = [
	' _       ',
	'(_)      ',
	'(_)      ',
	'(_)      ',
	'(_)      ',
	'(_)      ',
	'(_) _  _ ',
	'(_)(_)(_)'
];

var colonImage = [
	'          ',
	'   _  _   ',
	'  (_)(_)  ',
	'  (_)(_)  ',
	'   _  _   ',
	'  (_)(_)  ',	
	'  (_)(_)  ',
	'          '
];

var dashImage = [
	'         ',
	'         ',
	' _  _  _ ',
	'(_)(_)(_)',
	'(_)(_)(_)',
	'         ',
	'         ',
	'         '
];
				 
function romanToImage(str){
	var res = ['','','','','','','','',];
	for (var i=0;i<str.length;i++){
		for (var j=0;j<8;j++){
			switch (str[i]){
				case 'I':
					res[j] += iImage[j];
				break;
				case 'V':
					res[j] += vImage[j];
				break;
				case 'X':
					res[j] += xImage[j];
				break;
				case 'L':
					res[j] += lImage[j];
				break;
				case ':':
					res[j] += colonImage[j];
				break;
				case '-':
					res[j] += dashImage[j];
				break;
			}
		}
	}
	return res;
}

function arabToRoman(number){
	if(!number){
		return '';
	}
	var ret = '';
	var i = arab.length - 1;
	if (number == 0){
		return '-';
	} 
	else{
		while(number > 0){
			if(number >= arab[i]){
				ret += roman[i];
				number -= arab[i];
			} 
			else{
				i--;
			}
		}
	}
	return ret;
}

if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60){
	
	imageRes = romanToImage(arabToRoman(hours) + ':' + arabToRoman(minutes));
	
	for (var i=0;i<imageRes.length;i++){
		console.log(imageRes[i]);
	}
} else console.log("Время указано не верно");
