(function (blink) {
	'use strict';

	var SomosStyle = function () {
			blink.theme.styles.fancy.apply(this, arguments);
		},
		page = blink.currentPage;

	SomosStyle.prototype = {
		parent: blink.theme.styles.fancy.prototype,
		bodyClassName: 'content_type_clase_Somos',
		extraPlugins: ['image2'],
		toolbar: {
			name: 'editorial'
		},
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
				{ name: 'Título trabajo cotidiano', element: 'h4', attributes: { 'class': 'bck-title7'} },
				{ name: 'Título Analice', element: 'h4', attributes: { 'class': 'bck-title8'} },
				{ name: 'Lista Ordenada', element: 'ol', attributes: { 'class': 'bck-ol' } },
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
				{ name: 'Icono Sapiens', element: 'span', attributes: { 'class': 'icon icon-sapiens' } },
				{ name: 'Icono Aplico', element: 'span', attributes: { 'class': 'icon icon-aplico' } },
				{ name: 'Icono Mapa conceptual', element: 'span', attributes: { 'class': 'icon icon-aprendamosconelmapaconceptual' } },
				{ name: 'Icono Taller', element: 'span', attributes: { 'class': 'icon icon-taller' } },
				{ name: 'Icono Evaluacion', element: 'span', attributes: { 'class': 'icon icon-evaluacion' } },
				{ name: 'Icono Cine Foro', element: 'span', attributes: { 'class': 'icon icon-cineforoicon' } },
				{ name: 'Icono Trabajo Extra', element: 'span', attributes: { 'class': 'icon trabajo_extra' } },
				{ name: 'Icono Ya lo sé', element: 'span', attributes: { 'class': 'icon icon-yalose' } },
				{ name: 'Icono Refuerza', element: 'span', attributes: { 'class': 'icon icon-refuerza' } },
				{ name: 'Icono Evaluación Costa Rica', element: 'span', attributes: { 'class': 'icon icon-evaluacioncostarica' } },
				{ name: 'Icono Momento 1', element: 'span', attributes: { 'class': 'icon icon-momentouno' } },
				{ name: 'Icono Momento 1 antes de leer', element: 'span', attributes: { 'class': 'icon icon-momentounoantes' } },
				{ name: 'Icono Momento 2', element: 'span', attributes: { 'class': 'icon icon-momentodos' } },
				{ name: 'Icono Momento 2 EyA', element: 'span', attributes: { 'class': 'icon icon-momentodoseya' } },
				{ name: 'Icono Momento 3', element: 'span', attributes: { 'class': 'icon icon-momentotres' } },
				{ name: 'Icono Momento 4', element: 'span', attributes: { 'class': 'icon icon-momentocuatro' } },
				{ name: 'Icono Para aprender y divertirme', element: 'span', attributes: { 'class': 'icon icon-aprenderydivertirme' } },
				{ name: 'Icono Exploremos', element: 'span', attributes: { 'class': 'icon icon-exploremos' } },
				{ name: 'Icono Reconozca', element: 'span', attributes: { 'class': 'icon icon-reconozca' } },
				{ name: 'Icono La Clave', element: 'span', attributes: { 'class': 'icon icon-clave' } },
				{ name: 'Icono Argumente', element: 'span', attributes: { 'class': 'icon icon-argumente' } },
				{ name: 'Icono Interprete', element: 'span', attributes: { 'class': 'icon icon-interprete' } },
				{ name: 'Icono Produzca', element: 'span', attributes: { 'class': 'icon icon-produzca' } },
				{ name: 'Icono Practiquemos', element: 'span', attributes: { 'class': 'icon icon-practiquemos' } },
				{ name: 'Icono Lo que se lee', element: 'span', attributes: { 'class': 'icon icon-loqueselee' } },
				{ name: 'Icono Antes de leer', element: 'span', attributes: { 'class': 'icon icon-antesdeleer' } },
				{ name: 'Icono Apliquemos', element: 'span', attributes: { 'class': 'icon icon-apliquemos' } },
				{ name: 'Icono Apliquemos1.1', element: 'span', attributes: { 'class': 'icon icon-apliquemos1' } },
				{ name: 'Icono Apliquemos2', element: 'span', attributes: { 'class': 'icon icon-apliquemos2' } },
				{ name: 'Icono Apliquemos3', element: 'span', attributes: { 'class': 'icon icon-apliquemos3' } },
				{ name: 'Icono Competencias1', element: 'span', attributes: { 'class': 'icon icon-competencias1' } },
				{ name: 'Icono Competencias', element: 'span', attributes: { 'class': 'icon icon-competencias' } },
				{ name: 'Icono Competencias3', element: 'span', attributes: { 'class': 'icon icon-competencias3' } },
				{ name: 'Icono Dominios del saber', element: 'span', attributes: { 'class': 'icon icon-dominiosdelsaber' } },
				{ name: 'Icono Dominios del saber2', element: 'span', attributes: { 'class': 'icon icon-dominiosdelsaber2' } },
				{ name: 'Icono Dominios del saber3', element: 'span', attributes: { 'class': 'icon icon-dominiosdelsaber3' } },
				{ name: 'Icono Exploremos Español', element: 'span', attributes: { 'class': 'icon icon-exploremos2' } },
				{ name: 'Icono Juegos del lenguaje', element: 'span', attributes: { 'class': 'icon icon-juegos' } },
				{ name: 'Icono Leo', element: 'span', attributes: { 'class': 'icon icon-leo' } },
				{ name: 'Icono Maraton de escritura taller 2', element: 'span', attributes: { 'class': 'icon icon-maratondeescritura_taller2' } },
				{ name: 'Icono Maraton de escritura taller3', element: 'span', attributes: { 'class': 'icon icon-maratondeescritura_taller3' } },
				{ name: 'Icono Mi cartel de vocabulario taller1', element: 'span', attributes: { 'class': 'icon icon-micarteldevocabulario_taller1' } },
				{ name: 'Icono Mis manos van al gym_taller1', element: 'span', attributes: { 'class': 'icon icon-mismanosvanalgym_taller1' } },
				{ name: 'Icono Nuevas silabas nuevas palabras_taller2', element: 'span', attributes: { 'class': 'icon icon-nuevassilabasnuevaspalabras_taller2' } },
				{ name: 'Icono Nuevas silabas nuevas palabras_talle3', element: 'span', attributes: { 'class': 'icon icon-nuevassilabasnuevaspalabras_taller3' } },
				{ name: 'Icono Vamos a conversar_taller1', element: 'span', attributes: { 'class': 'icon icon-vamosaconversar_taller1' } },
				{ name: 'Icono Vamos a conversar_taller2', element: 'span', attributes: { 'class': 'icon icon-vamosaconversar_taller2' } },
				{ name: 'Icono Vamos a conversar_taller3', element: 'span', attributes: { 'class': 'icon icon-vamosaconversar_taller3' } },
				{ name: 'Icono Vamos a escribir_taller3', element: 'span', attributes: { 'class': 'icon icon-vamosaescribir_taller3' } },
				{ name: 'Icono Vamos a leer_taller3', element: 'span', attributes: { 'class': 'icon icon-vamosaleer_taller3' } },
				{ name: 'Icono Exploremos2', element: 'span', attributes: { 'class': 'icon icon-exploremos2' } },
				{ name: 'Icono Taller de ideas', element: 'span', attributes: { 'class': 'icon icon-tallerideas' } },
				{ name: 'Caja Aplico', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja Taller ambiental', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja Materiales', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-4' } },
				{ name: 'Caja Integración', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-5' } },
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
			],
			stylesToRemove: ["Título 1", "Título 2", "Título 3", "Caja 1", "Caja 2"]
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
