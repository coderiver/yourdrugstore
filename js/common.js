head.ready(function() {

	$('.srt').click( function(){
		$(this).children().toggleClass('active');
	});

	$('.dropdown').change(function(event) {
		$(this).next().children('.slct').text($(this).val());
	});

	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});

	$('.remove').click( function(){
		$(this).closest('tr').fadeOut('slow');
	});

});