$(function() {
 $( "#range" ).slider({
range: true,
min: 0,
max: 30000,
values: [0, 23000],
slide:function(event,ui){
//Поле минимального значения, вывод значения в инпут min-cost при передвижении ползунков
$(".min-cost" ).val(ui.values[ 0 ]);
 //Поле максимального значения
$(".max-cost").val(ui.values[1]); }
});
//Записываем значения ползунков в инпуты в момент загрузки страницы
// То есть значения по умолчанию
$( ".min-cost" ).val($( "#range" ).slider( "values", 0 ));
$(".max-cost").val($("#range").slider( "values", 1 ));
});

//Меняем позиции ползунков, вводом значения в инпуты
$(".min-cost").change(function() {
var val = $(this).val();
$('#range').slider("values",0,val);
});
$('.max-cost').change(function() {
var val = $(this).val();
$('#-range').slider("values",0,val);
});
