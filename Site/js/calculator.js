$(document).ready(function() {
	$('a.add-card').click(addCard);
	$('#credit-balance').on('click','.clear', clearCard);
});

function addCard() {
	event.preventDefault();

	if(numCards !== 3) {
		$('#credit-balance').append(
			`<div class="form-row card-balance">
	      <div class="form-group col-md-6">
	        <label for="bankName">Bank Name</label>
	        <input type="text" class="form-control bankName" placeholder="Bank Name">
	      </div>
	      <div class="form-group col-md-2">
	        <label for="APR">APR</label>
	        <input type="text" class="form-control APR" placeholder="APR">
	      </div>
	      <div class="form-group col-md-3">
	        <label for="annualFee">Annual Fee</label>
	        <input type="text" class="form-control annualFee" placeholder="Annual Fee">
	      </div>
	      <div class="form-group col-md-1">
	        <label></label>
	        <a class="clear">X</a>
	      </div>
	    </div>`);

		var numCards = $('#credit-balance .card-balance').length;
		
		if(numCards == 3) {
			$('.add-card').hide();
		}
	} 
}

function clearCard() {
	event.preventDefault();

	var numCards = $('#credit-balance .card-balance').length;
		
	if(numCards == 1) {
		$('#credit-balance .form-row input').val('');
	} else {
		$(this).parent().parent().remove();
		$('.add-card').show();
	}
}
