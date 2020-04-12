/* input range на стр. Магазин*/
$(function(){
	$("#cost-range").slider({
	range:true,
	min:0,
	max:25000,
	values:[0,15000],
	slide:function(event,ui){
	//Поле минимального значения
	$( "#filter-min-cost" ).val(ui.values[ 0 ]);
	 //Поле максимального значения
	$("#filter-max-cost").val(ui.values[1]); }
	});
	//Записываем значения ползунков в момент загрузки страницы
	//То есть значения по умолчанию
	$( "#filter-min-cost" ).val($( "#cost-range" ).slider( "values", 0 ));
	$("#filter-max-cost").val($("#cost-range").slider( "values", 1 ));
});
$('#filter-min-cost').change(function() {
	var val = $(this).val();
	$('#cost-range').slider("values",0,val);
});
$('#filter-max-cost').change(function() {
	var val = $(this).val();
	$('#cost-range').slider("values",0,val);
});
