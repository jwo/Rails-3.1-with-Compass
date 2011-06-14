# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

pagealert = ->
	alert('Hello!\r\nI am located in app/assets/javascripts/pages.js.coffee; I am loaded by namespace.js');

window.pagealert = pagealert
