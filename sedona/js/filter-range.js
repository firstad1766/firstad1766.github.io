$(function() {
 $( "#cost-range" ).slider({
range: true,
min: 0,
max: 4000,
values: [ 0, 3000 ],
slide:function(event,ui){
//Поле минимального значения
$( "#cost-min" ).val(ui.values[ 0 ]);
 //Поле максимального значения
$("#cost-max").val(ui.values[1]); }
});

// Записываем значения ползунков в момент загрузки страницы
// То есть значения по умолчанию
$( "#cost-min" ).val($( "#cost-range" ).slider( "values", 0 ));
$("#cost-max").val($("#cost-range").slider( "values", 1 ));
});
$('#cost-min').change(function() {
var val = $(this).val();
$('#cost-range').slider("values",0,val);
});

$('#cost-max').change(function() {
var val = $(this).val();
$('#cost-range').slider("values",0,val);
});
