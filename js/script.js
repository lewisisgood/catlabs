var count = 0;
var count2 = 0;
$('#name').text('Thurston')
$('#name2').text('Cupcake')

function catClicker(e) {
	//the element has been clicked... do stuff here
	count = count + 1;
	$('#counter').text('Count: ' + count);
}

function catClicker2(e) {
	//the element has been clicked... do stuff here
	count2 = count2 + 1;
	$('#counter2').text('Count: ' + count2);
}

$('#cat').click(catClicker);
$('#cat2').click(catClicker2);