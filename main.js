$(document).on('change', '.s-column', function(e) {
  $(this)
    .find('.active').removeClass('active')
    .end()
    .find(':checked')
    .closest('label').addClass('active');
});

$(document).ready(function(){
	var	modelPrice,
		modelPriceHolder;

	modelPriceHolder = $('#total-value');
	
	modelPrice = 0;

	function calculatePrice(){
		var colOne = $('input[name=order]:checked', '#calcForm').val();
		var colTwo = $('input[name=stamp]:checked', '#calcForm').val();
		var colThree = $('input[name=paper]:checked', '#calcForm').val();
		var colFour = $('input[name=design]:checked', '#calcForm').val();
		var colFive = $('input[name=number]:checked', '#calcForm').val();
		colOne = parseInt(colOne);
		colTwo = parseInt(colTwo);
		colThree = parseInt(colThree);
		colFour = parseInt(colFour);
		colFive = parseInt(colFive);
		
		modelPrice = colOne + colTwo + colThree + colFour + colFive;

		modelPriceHolder.text(modelPrice + ' руб');

	};

	$('#calcForm input').on('change', function(){
		calculatePrice();
	})

	calculatePrice();
});