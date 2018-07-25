
var catList = ['Thurston','Cupcake','Vanjie','Kinton','Woofen'];
var catCount = [0, 0, 0, 0, 0];
var catImages = [
	"http://images4.fanpop.com/image/photos/16000000/Cute-Kitten-kittens-16096566-1280-800.jpg",
	"http://images4.fanpop.com/image/photos/16100000/Beautiful-Cat-cats-16123391-1280-800.jpg",
	"https://4.bp.blogspot.com/-Tb_CuuQ9s1I/T9sCdXaRy2I/AAAAAAAAAiM/6WRl1Mk3q5g/s1600/Cute-Kitten-kittens-Licking-1280x800.jpg",
	"http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16123151-1280-800.jpg",
	"https://4.bp.blogspot.com/-W-Q7_l1OoxY/UWAJSrtvn_I/AAAAAAAASVM/eMqye-hpAu4/s1600/world-s-cutest-kitten.jpg"];

// Let's loop over the numbers in our array
for (var i = 0; i < catList.length; i++) {

    // We're creating a DOM element for the number
   	var elem = document.createElement('div');
    elem.textContent = catList[i];

    // ... and when we click, put the respective cat's info in the "cat display"
    // using an Immediately-Invoked Function Expression
    elem.addEventListener('click', (function(iCopy) {
        return function() {
            // the element has been clicked...
			catCount[iCopy] = catCount[iCopy] + 1;
			var htmlStr = '<img src="' + catImages[iCopy] + '" height=300px>';

			// clear the existing image and replace it with the appropriate image
			$('#cat-image').replaceWith('<div id="cat-image" class="cat-image"></div>');
			$('#cat-image').append(htmlStr);

			// update the name and count to the selected cat in "cat display"
			$('#name').text(catList[iCopy]);
			$('#counter').text('Count: ' + catCount[iCopy]);
        };
    })(i));

    $('#cat-list').append(elem);
};
