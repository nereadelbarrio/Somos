(function (blink) {
	'use strict';

	var SomosStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	SomosStyle.prototype = {
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_Somos',
		extraPlugins: ['image2'],
		toolbar: { name: 'editorial' },
		extraPlugins: ['blink_popover'],
		ckEditorStyles: {
			name: 'Somos',
			styles: [

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title3'} },
				{ name: 'Título 4', element: 'h4', attributes: { 'class': 'bck-title4'} },
				{ name: 'Título 5', element: 'h4', attributes: { 'class': 'bck-title5'} },
				{ name: 'Título 6', element: 'h4', attributes: { 'class': 'bck-title6'} },
				{ name: 'Título Intro', element: 'h4', attributes: { 'class': 'bck-title7'} },
				{ name: 'Título Analice', element: 'h4', attributes: { 'class': 'bck-title8'} },

				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis' }},
				{ name: 'Énfasis Azul', element: 'span', attributes: { 'class': 'bck-enfasis-1' }},
				{ name: 'Énfasis Rojo', element: 'span', attributes: { 'class': 'bck-enfasis-2' }},
				{ name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},

				{ name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				{ name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },
				{ name: 'Celda dos', element: 'td', attributes: { 'class': 'bck-td-2' } },

				{ name: 'Lista Ordenada por defecto', element: 'ol', attributes: { 'class': 'bck-ol' } },
				{ name: 'Lista Ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol-1' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista Ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista Ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista Ordenada 5', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
				{ name: 'Lista Ordenada 6', element: 'ol', attributes: { 'class': 'bck-ol-6' } },
				{ name: 'Lista Ordenada 7', element: 'ol', attributes: { 'class': 'bck-ol-7' } },
				{ name: 'Lista Ordenada 8', element: 'ol', attributes: { 'class': 'bck-ol-8' } },
				{ name: 'Lista Ordenada 9', element: 'ol', attributes: { 'class': 'bck-ol-9' } },
				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'Lista Desordenada 4', element: 'ul', attributes: { 'class': 'bck-ul-4'} },
				{ name: 'Lista Desordenada 5', element: 'ul', attributes: { 'class': 'bck-ul-5'} },
	
				{ name: 'Icono Smile', element: 'span', attributes: { 'class': 'icon icon-smile' } },
				
				{ name: 'Caja Amarilla', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja Em Casa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } },
				{ name: 'Caja Inicio Modulo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-4' } },
				{ name: 'Caja Vamos jogar', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-5' } },
				{ name: 'Caja Diccionario', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-6' } },
				{ name: 'Caja Imágenes', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-7' } },
				{ name: 'Caja Aprenda a', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-8' } },
				{ name: 'Caja Dato', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-9' } },
				{ name: 'Caja Plantemos', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-10' } },
				{ name: 'Caja Extraclase', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-11' } },
				{ name: 'Caja Todos vivimos aquí', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-12' } },
				{ name: 'Caja Cuaderno', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-13' } },
				{ name: 'Caja Sabías', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-14' } },
				{ name: 'Caja Costumbres', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-15' } },
				{ name: 'Caja Diccionario 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-16' } },
				{ name: 'Caja Recuerde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-17' } },
				{ name: 'Caja Exploremos', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-18' } },
				{ name: 'Caja Textos', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-19' } },
				{ name: 'Caja Ortografía', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-20' } },
				{ name: 'Caja Marrón', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-21' } },
				{ name: 'Caja Actividad', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-22' } },
				{ name: 'Caja Descuadrada', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-23' } },
				{ name: 'Caja te cuento', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-24' } },
				{ name: 'Caja Textos 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-25' } },
				{ name: 'Caja Valores', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-26' } },
				{ name: 'Caja Valores 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-27' } },
				{ name: 'Caja Valores 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-28' } },
				{ name: 'Caja Sabías que', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-29' } }
			],stylesToRemove: ["Título 1", "Título 2","Título 3", "Enunciado actividad", "Caja 1" ,"Caja 2", "Caja 3"]
		},

		init: function () {
			this.parent.init.call(this.parent, this);
			this.parent.initInfoPopover();
			this.getActualUnitActivities();
			blink.activity.navigateBetweenActivities();
		},

		removeFinalSlide: function () {
			this.parent.removeFinalSlide.call(this.parent, this, true);
		},

		/**
		 * @summary Gets the activity type subunits of the actual unit.
		 * @return {Object} Object of the actual unit filtering the not activity type subunits
		 */
		getActualUnitActivities: function () {
			var curso = blink.getCourse(idcurso),
				that = this,
				units,
				unitSubunits,
				actualActivity,
				unitActivities = [];

			curso.done(function () {
				units = curso.responseJSON.units;

				$.each(units, function () {
					if (this.title && this.title == blink.courseInfo.unit) {
						unitSubunits = this.subunits.concat(this.resources);
					}
				});

				actualActivity = _.find(unitSubunits, function (subunit) {
					return subunit.id == idclase;
				});

				if (actualActivity.level == '6') {
					unitActivities.push(actualActivity);
				} else {
					unitActivities = _.filter(unitSubunits, function (subunit) {
						return subunit.type == 'actividad' && subunit.level !== '6';
					});
				}

				that.subunits = unitActivities;
			}).done(function () {
				blink.events.trigger('course_loaded');
			});
		},

		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
		 * @param {Array} $subunits Array of activity type objects
		 * @return {int} Slide position
		 */
		getActualSlideNumber: function (subunits) {
			var actualSlideIndex = $('.swipeview-active').attr('data-page-index'),
				actualSlide = 1;

			for (var i in subunits) {
				if (subunits[i].id && parseInt(subunits[i].id) != idclase) {
					actualSlide += parseInt(subunits[i].pags);
				} else {
					actualSlide += parseInt(actualSlideIndex);
					break;
				}
			}

			return actualSlide;
		},

		addSlideNavigators: function () {
			var $navigator = $('<div class="navigator"><div class="main-navigator"><div class="left"></div><div class="right"></div></div></div>'),
				$leftControl = $('.left.slider-control').clone(),
				$rightControl = $('.right.slider-control').clone()

			var esdeber = blink.activity.esdeber;
			var idClaseOriginal = blink.activity.idClaseOriginal;

			$leftControl.add($rightControl).find('span').remove();

			var slideIndex = 0; // se utiliza como indice para saltarnos los concatenados en el each
			var slidesNav = $('.item-container');
			// Filtramos para que solo coja las slides que no son final slide para iterar sobre ellas
			slidesNav = slidesNav.filter(function (element) {
				if ($(slidesNav[element]).find('#final').length > 0) {
					return false;
				}
				return true;
			});

			slidesNav.each(function (index, element) {
				var $itemNavigator = $navigator.clone(),
					$left, $right, hasLeft = false;

				var prevSlide,
					prevIndex = slideIndex - 1;
				// si  hay una slide anterior se recorre hacia atras hasta que no haya concatenados
				// si estoy en la slide 0 no se pinta
				while (prevIndex >= 0) {
					if (prevSlide = window['t' + prevIndex + '_slide']) {
						if (prevSlide.isConcatenate && (((esdeber) ? idClaseOriginal != 0 : true))) {
							prevIndex--;
						} else {
							$left = $leftControl.clone();
							$left.append('<span class="title">' + stripHTML(prevSlide.title) + '</span>');
							$itemNavigator.find('.left').append($left);
							hasLeft = true;
							break;
						}
					} else {
						break;
					}
				}

				slideIndex++;
				var nextSlide;
				// si  hay una slide siguiente se recorre hacia adelante hasta que no haya concatenados
				// si estoy en la slide ultima no se pinta boton next
				while (slideIndex < window.secuencia.length) {
					if (nextSlide = window['t' + slideIndex + '_slide']) {
						if (nextSlide.isConcatenate && (((esdeber) ? idClaseOriginal != 0 : true))) {
							slideIndex++;
						} else {
							$right = $rightControl.clone();
							$right.prepend('<span class="title">' + stripHTML(nextSlide.title) + '</span>');
							$itemNavigator.find('.right').append($right);
							hasLeft && $right.parent('.right').addClass('separator');
							break;
						}
					} else {
						break;
					}
				}
				$(element).append($itemNavigator);
			});
			//Quitamos el on click listener ya que lo coge de blink.activity.navigateBetweenActivities()
		},

		handleScrollEnd: function () {
			$('#top-navigator')
				.removeClass('show_left')
				.removeClass('show_right');

			if (this.x < 0) {
				$('#top-navigator').addClass('show_left');
			}
			if (this.x > this.maxScrollX) {
				$('#top-navigator').addClass('show_right');
			}

		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

	};

	SomosStyle.prototype = _.extend({}, new blink.theme.styles.fancy(), SomosStyle.prototype);

	blink.theme.styles.Somos = SomosStyle;

})(blink);

$(document).ready(function () {

	var src_logo = $('.content_type_clase_Somos').find('.logo_slide').attr('logo_dominio');
	if (typeof (src_logo) != 'undefined' && src_logo && src_logo != '' && src_logo.indexOf('gif1x1.gif') == -1) {
		$('.content_type_clase_Somos').find('.logo-publisher').css('background-image', "url('" + src_logo + "')");
	}

});
