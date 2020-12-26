// коробочка с меню навигация
var nav = document.querySelector("#nav");
// коробочка с иконкой меню 
var burger = document.querySelector("#burger");
// функция показывающая меню хедера при клике (адаптивная вёрстка)
function changeSize() {
	nav.style.display = "block";
	burger.style.display = "none";
}
// функция скрывающая меню хедера при клике (адаптивная вёрстка)
function backSize() {
	nav.style.display = "none";
	burger.style.display = "block";
}