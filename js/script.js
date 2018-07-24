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






// clear the screen for testing
document.body.innerHTML = '';

var catList = ['A','B','C','D','E'];
var count = [0, 0, 0, 0, 0];
var images = [
	"http://images4.fanpop.com/image/photos/16000000/Cute-Kitten-kittens-16096566-1280-800.jpg",
	"http://images4.fanpop.com/image/photos/16100000/Beautiful-Cat-cats-16123391-1280-800.jpg",
	"https://4.bp.blogspot.com/-Tb_CuuQ9s1I/T9sCdXaRy2I/AAAAAAAAAiM/6WRl1Mk3q5g/s1600/Cute-Kitten-kittens-Licking-1280x800.jpg",
	"http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16123151-1280-800.jpg",
	"https://4.bp.blogspot.com/-W-Q7_l1OoxY/UWAJSrtvn_I/AAAAAAAASVM/eMqye-hpAu4/s1600/world-s-cutest-kitten.jpg"];


// Let's loop over the numbers in our array
for (var i = 0; i < catList.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            //the element has been clicked... do stuff here
			count[numCopy] = count[numCopy] + 1;
			//append the image here (may want to do this as plain text and give to the html)
			$('#image').text('Thurston')
			$('#name').text('Thurston')
			$('#counter').text('Count: ' + count);
        };
    })(num));

    document.body.appendChild(elem);
};