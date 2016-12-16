/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
	$('.popup-corte').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Cargando imagen #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> .',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
        
        $('.popup-maquillaje').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Cargando imagen #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> .',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
});