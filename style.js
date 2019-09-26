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
				{ name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},

				{ name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				{ name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },
				{ name: 'Celda dos', element: 'td', attributes: { 'class': 'bck-td-2' } },

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
	
				{ name: 'Icono Ideias', element: 'span', attributes: { 'class': 'icon icon-ideias' } },
				
				{ name: 'Caja Aplico', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja Taller ambiental', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } },
				{ name: 'Caja inicioModulo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-4' } },
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
			],stylesToRemove: ["Título 1", "Título 2","Título 3", "Enunciado actividad", "Caja 1" ,"Caja 2", "Caja 3"]
		},

		init: function () {
			var that = this;
			this.parent.init.call(this);
			this.addActivityTitle();
			this.addPageNumber();
			this.getActualUnitActivities();
			blink.events.on("course_loaded", function(){
           			that.enableSliders();
      	  		});
			this.formatCarouselindicators();
			this.addSlideNavigators();
			this.parent.initInfoPopover();
		},

		removeFinalSlide: function () {
			this.parent.removeFinalSlide.call(this, true);
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		addPageNumber: function() {
			$('.js-slider-item').each(function(i,e) {
				var idPage = $(e).attr('id');
				var page = parseInt(idPage.replace("slider-item-", ""))+1;
				$(e).find('.header').prepend('<div class="single-pagination"><div class="page">'+page+'</div></div>');
			});
		},


		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');
			$navbarBottom.find('li').tooltip('destroy');

			var dropDown = '' +
					'<div class="dropdown">' +
						'<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'Índice' +
							'<span class="caret"></span>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			var navigatorIndex = 0;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title;

				if (slide.isConcatenate) continue;

				dropDown += '<li role="presentation"><a role="menuitem">' + (navigatorIndex+1) + '. ' + stripHTML(slideTitle) + '</a></li>';
				$navbarBottom.find('li').eq(navigatorIndex).html('<span title="'+ stripHTML(slideTitle) +'">'+(navigatorIndex+1)+'</span>');
				navigatorIndex++;

			};

			dropDown += '' +
						'</ul>' +
					'</div>';

			$navbarBottom
				.attr('class', 'publisher-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator"/>')
					.end()
				.find('.dropdown').find('li')
					.on('click', function (event) {
						$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
					});

			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}
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
                unitActivities;

            curso.done(function () {
                units = curso.responseJSON.units;
                $.each(units, function () {
                    if (this.id && this.id == blink.courseInfo.IDUnit) {
                        unitSubunits = this.subunits.concat(this.resources);
                    }
                });
                unitActivities = _.filter(unitSubunits, function(subunit) {
                    //BK-16866 Quitamos las actividades ocultas y las solo visibles para profesor para que no se pueda navegar a ellas.
                    return subunit.type == 'actividad' && (!subunit.ocultar && !subunit.onlyVisibleTeachers);
                });
                that.subunits = unitActivities;
	    	for (var i in that.subunits) {
	    		if (that.subunits[i].id && that.subunits[i].id == idclase) {
                        	$(".publisher-navbar").append('<span class="slide-counter" data-subunit-index="' + i +
                            		'" data-subunit-pags="' + parseInt(that.subunits[i].pags) + '" style="visibility: hidden;">');
			}
                }
            }).done(function(){
                blink.events.trigger('course_loaded');
            });
        },
	/**
         * @summary Getting active slide position in relation with the total of the
         * unit slides.
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
		
	
		
		  /**
         * @summary Enables all slider controls and disables when appropiate
         */
        enableSliders: function () {
            //BK-15715 Traemos subunit_index para saber si la actividad esta oculta. Si subunit_index es NaN, la actividad es oculta y no tiene que navegar entre actividades, solo entre las slides de la actividad
            var subunit_index = parseInt($('.slide-counter').attr('data-subunit-index'));
            // Removes disabled class to all navigation buttons and applies
            // just if its first or last slide of all activities
            $('.slider-control, .slider-navigator').removeClass('disabled');

            // Navigation change depending on whether the slides are accessed from
            // a book or from a homework link or similar
            // BK-15715 Comprobamos a mayores que subunit_index no sea NaN para habilitar la navegacion entre actividades.
            if (this.subunits.length !== 0 && !isNaN(subunit_index)) {
                if (this.getActualSlideNumber(this.subunits) == 1) {
                    $('.slider-control.left, .slider-navigator.left').addClass('disabled');
                }
                if (this.getActualSlideNumber(this.subunits) == this.totalSlides) {
                    $('.slider-control.right, .slider-navigator.right').addClass('disabled');
                }
            } else {
                if (window.activeSlide == 0) {
                    $('.slider-control.left, .slider-navigator.left').addClass('disabled');
                }
                if (window.activeSlide + 1 == window.secuencia.length) {
                    $('.slider-control.right, .slider-navigator.right').addClass('disabled');
                }
            }
        },
		
	addSlideNavigators: function () {
            var idgrupo = window.idgrupo,
                idalumno = window.idalumno,
                slideNavParams = '';

            if (idgrupo) slideNavParams += '&idgrupo=' + idgrupo;
            if (idalumno) slideNavParams += '&idalumno=' + idalumno;

            blink.events.on("course_loaded", function(){
                var that = blink.activity.currentStyle,
                    subunit_index = parseInt($('.slide-counter').attr('data-subunit-index'));

                $('.slider-control').off('click');

                // Navigation change depending on whether the slides are accessed from
                // a book or from a homework link or similar
                if (that.subunits.length !== 0) {
                    // Slider controls must allow navigation among all the activity subunits
                    // in the current unit.
                    $('.left.slider-control, .left.slider-navigator').click(function () {
                        if (!$(this).hasClass('disabled')) {
                            if(activeSlide == 0) {
                                redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
                                    idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo=0&numSec=' +
                                    that.subunits[subunit_index - 1].pags + slideNavParams, false, undefined);
                            } else {
                                blink.activity.showPrevSection();
                        }
                        }
                    });
                    $('.right.slider-control, .right.slider-navigator').click(function () {
                        if (!$(this).hasClass('disabled')) {
                            //BK-15715 Añadimos la condicion que subunit_index no sea NaN para que se active la navegacion entre slides
                            if(!isNaN(subunit_index) && activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
                                if (!that.subunits[subunit_index + 1].ocultar)
                                redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
                                    idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo=0&numSec=1'+slideNavParams,
                                    false, undefined);
                            } else {
                                blink.activity.showNextSection();
                            }
                        }
                    });
                } else {
                    $('.left.slider-control, .left.slider-navigator').click(function () {
                        blink.activity.showPrevSection();
                    });
                    $('.right.slider-control, .right.slider-navigator').click(function () {
                        blink.activity.showNextSection();
                    });
                }

                $(document).ready(function() {
                    blink.events.on('showSlide:after', function() {
                        that.enableSliders();
                    });
		});
            });
        },
		
	};

	SomosStyle.prototype = _.extend({}, new blink.theme.styles.basic(), SomosStyle.prototype);

	blink.theme.styles.Somos = SomosStyle;

})( blink );

$(document).ready(function () {

    $('.item').find('.header').find('.title')
		.filter(function () {
			return $(this).find('.empty').length;
		}).hideBlink();

    $('.item').find('.header').find('.title')
		.filter(function () {
			return !$(this).find('.empty').length;
		})
		.each(function () {
			var $header = $(this).find('h3');
			$header.length && $header.html($header.html().replace(' ', ''));
		});

	// BK-8433 cambiamos el logo de las slides por el del dominio
	var src_logo = $('.content_type_clase_Somos').find('.logo_slide').attr('logo_dominio');
	if (typeof(src_logo) != 'undefined' && src_logo && src_logo != '' && src_logo.indexOf('gif1x1.gif') == -1) {
		$('.content_type_clase_Somos').find('.logo-publisher').css('background-image', "url('"+src_logo+"')");
	}

});

