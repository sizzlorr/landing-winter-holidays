"use strict";var burger=document.querySelector(".burger"),mobileMenu=document.querySelector(".nav-mobile-wrapper"),navUnit=document.querySelectorAll(".nav-mobile__link"),removeClass=function(){burger.classList.remove("burger-fix")};burger.addEventListener("click",function(){burger.classList.toggle("cross"),mobileMenu.classList.toggle("nav-mobile-wrapper--active")});for(var i=0;i<navUnit.length;i++)navUnit[i].addEventListener("click",function(){burger.classList.remove("cross"),mobileMenu.classList.remove("nav-mobile-wrapper--active")});$(function(){$(".spoiler__triger").on("click",function(e){var r=$(e.target).closest(".spoiler"),i=r.find(".spoiler__icon"),t=r.find(".spoiler__triger-text");r.find(".spoiler__body").slideToggle("normal"),i.toggleClass("rotate-spoiler-icon"),i.hasClass("rotate-spoiler-icon")?t.addClass("active-spoiler-text").html("Скрыть"):t.removeClass("active-spoiler-text").html("Подробнее")})});