var waypoint = new Waypoint({
  element: document.getElementById('intro'),
  handler: function() {
    console.log('Basic waypoint triggered');
  }
})
$(document).ready(function(){


    //   $("#header").scroll(function() {
    //   $(this).css( "display", "flex" ).fadeIn( "slow" );
    // });
    // init controller


    //------------SOTTOTITOLO: QUANTO POSSIAMO VIVERE MANGIANDO PLASTICA--
  var controller = new ScrollMagic.Controller();

//-------------PREPARA IL path
// function pathPrepare($el) {
//        var lineLength = $el[0].getTotalLength();
//        $el.css("stroke-dasharray", lineLength);
//        $el.css("stroke-dashoffset", lineLength);
//      }
//      //-------------------------------------------
//      ///// FUNZIONE PER LA SCRITTA CON SCROLL ScrollMagic
//      var $word = $("path#word");
//       var $dot = $("path#dot");
//       // crea il tratteggio
//       pathPrepare($word);
//       pathPrepare($dot);
//       //
//       var tweenSvg = new TimelineMax().add(TweenMax.to($word, 0.9, {
//           strokeDashoffset: 0,
//           ease: Linear.easeNone
//         })) // draw word for 0.9
//         .add(TweenMax.to($dot, 0.1, {
//           strokeDashoffset: 0,
//           ease: Linear.easeNone
//         })) // draw dot for 0.1
//         .add(TweenMax.to("path", 1, {
//           stroke: "#33629c",
//           ease: Linear.easeNone
//         }), 0); // change color during the whole thing
//       ///////////////////////////////////////////////
//       //Assegna il tween-svg a scrollmagic
//       new ScrollMagic.Scene({
//         triggerElement: "#write",
//         duration: 200,
//         tweenChanges: true
//       }).setTween(tweenSvg).addTo(controller);
//

      ////------------------------------------------


    var tween = TweenMax.from("#sottotitolo", 1.5, {
            css: {
            opacity:0
              // left: "1000px",
              // transform: "rotate(445deg)"
            }
          });
          new ScrollMagic.Scene({
            triggerElement: "#sottotitolo",
            // triggerOffset: 600,
            triggerHook: "onEnter",
            duration: 1200
          }).setTween(tween).addTo(controller);
//--------FOTO DELLA ROSALBA GIUGNI

         var tween = TweenMax.from("#parteTre", 1.5, {
         css: {
          left: "-1100px",
          transform: "rotate(450deg)",
          opacity:0
        }
      });
      new ScrollMagic.Scene({
        triggerElement: "#parteDue p ",
        triggerOffset: 700,
        //triggerHook: "onLeave",
        duration: 500
      }).setTween(tween).addTo(controller);
//--------- CATENA DI FORMAZIONE DELLA MICROPLASTICA
      var tween = TweenMax.from("#parteQuattro", 1.5, {
              css: {
              opacity:0,
              // left: "1000px",
              // transform: "rotate(445deg)"
              }
            });
            new ScrollMagic.Scene({
              triggerElement: "#parteQuattro",
              // triggerOffset: -600,
              triggerHook: "onEnter",
              duration: 1000
            }).setTween(tween).addTo(controller);
///////-------PIATTO NELLA SECONDA PARTE
            var tween = TweenMax.from("#parteCinque", 1.5, {
                    css: {
                    opacity:0,
                    // left: "1000px",
                    // transform: "rotate(445deg)"
                    }
                  });
                  new ScrollMagic.Scene({
                    triggerElement: "#parteQuattro",
                    // triggerOffset: -1000,
                    triggerHook: "#parteQuattro",
                    duration: 800
                  }).setTween(tween).addTo(controller);
//------------------------------------------------
//------INIZIO LINEA CON SCROLL

function pathPrepare($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}
    var $word = $("path#linea");
    pathPrepare($word);

    //
    var tweenSvg = new TimelineMax().add(TweenMax.to("#linea-maglietta path#linea", 0.5, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      })) // draw word for 0.9

    ///////////////////////////////////////////////
    //Assegna il tween-svg a scrollmagic
    new ScrollMagic.Scene({
      triggerElement: "#maglietta",
      offset: 500,
      duration: 300,
      triggerHook:"onEnter",
      tweenChanges: true
    }).setTween(tweenSvg).addTo(controller);

    /////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    var tweenSvg = new TimelineMax().add(TweenMax.to("#linea-lavatrice path#linea", 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      })) // draw word for 0.9

    ///////////////////////////////////////////////
    //Assegna il tween-svg a scrollmagic
    new ScrollMagic.Scene({
      triggerElement: "#lavatrice",
      offset: 500,
      duration: 300,
      triggerHook:"onEnter",
      tweenChanges: true
    }).setTween(tweenSvg).addTo(controller);/////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    var tweenSvg = new TimelineMax().add(TweenMax.to("#linea-scarico path#linea", 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      })) // draw word for 0.9

    ///////////////////////////////////////////////
    //Assegna il tween-svg a scrollmagic
    new ScrollMagic.Scene({
      triggerElement: "#scarico",
      offset: 500,
      duration: 300,
      triggerHook:"onEnter",
      tweenChanges: true
    }).setTween(tweenSvg).addTo(controller);/////////////////////////////////////////////
    var tweenSvg = new TimelineMax().add(TweenMax.to("#linea-depuratore path#linea", 0.9, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      })) // draw word for 0.9

    ///////////////////////////////////////////////
    //Assegna il tween-svg a scrollmagic
    new ScrollMagic.Scene({
      triggerElement: "#depuratore",
      offset: 500,
      duration: 300,
      triggerHook:"onEnter",
      tweenChanges: true
    }).setTween(tweenSvg).addTo(controller);



//----------------------------------------------------------------

//--------BORSA RIUTILIZZABILE
      var tweenHand = TweenMax.from("#borseRiutilizzabili", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#slogan2",
       offset: -500,
       triggerHook: "onLeave",
       duration: 1000
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO BORSE RIUTILIZZABILI
      var tweenHand = TweenMax.from("#parteSei #pUno", 1.5, {
       css: {
         left: "200px"
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#slogan2",
       offset: -500,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
     /////
      var tweenHand = TweenMax.from("#parteSei #pUno", 1.5, {
       css: {
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#parteCinque",
       offset: -500,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//----------CONTENITORI DI VETRO
      var tweenHand = TweenMax.from("#contenitoriVetro", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene ({
       triggerElement: "#borseRiutilizzabili",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO CONTENITORI DI VETRO
      var tweenHand = TweenMax.from("#parteSei #pDue", 1.5, {
       css: {
         right: "200px",
         // filter: "blur(30px)",
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#borseRiutilizzabili",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------

//--------CONTENITORI DI PLASTICA
      var tweenHand = TweenMax.from("#contenitoriPlastica", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#contenitoriVetro",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO CONTENITORI IN PLASTICA
      var tweenHand = TweenMax.from("#parteSei #pTre", 1.5, {
       css: {
         left: "200px",
         // filter: "blur(30px)"
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#contenitoriVetro",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//----------PLASTICA RICICLATA
      var tweenHand = TweenMax.from("#plasticaRiciclata", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene ({
       triggerElement: "#contenitoriPlastica",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO PLASTICA RICICLATA
      var tweenHand = TweenMax.from("#parteSei #pQuattro", 1.5, {
       css: {
         right: "200px",
         // filter: "blur(30px)"
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#contenitoriPlastica",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//--------BOTTIGLIE IN PLASTICA
      var tweenHand = TweenMax.from("#bottigliePlastica", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#plasticaRiciclata",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO BOTTIGLIE IN PLASTICA
      var tweenHand = TweenMax.from("#parteSei #pCinque", 1.5, {
       css: {
         left: "200px",
         // filter: "blur(30px)"
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#plasticaRiciclata",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//--------SCRABBING
      var tweenHand = TweenMax.from("#scrabbing", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#bottigliePlastica",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO SCRABBING
      var tweenHand = TweenMax.from("#parteSei #pSei", 1.5, {
       css: {
         right: "200px",
         // filter: "blur(30px)"
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#bottigliePlastica",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//--------SACCHETTI
      var tweenHand = TweenMax.from("#sacchetti", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#scrabbing",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO SACCHETTI
      var tweenHand = TweenMax.from("#parteSei #pSette", 1.5, {
       css: {
         left: "200px",
         // filter: "blur(30px)"
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#scrabbing",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//--------CORA BALL
      var tweenHand = TweenMax.from("#coraBall", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#sacchetti",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO CORA BALL
      var tweenHand = TweenMax.from("#parteSei #pOtto", 1.5, {
       css: {
         right: "200px",
         // filter: "blur(30px)"
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#sacchetti",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//--------PLANET CARE
      var tweenHand = TweenMax.from("#planetCare", 1.5, {
       css: {
         filter: "blur(10px)"
         // opacity:"0"
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#coraBall",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------
//---------TESTO PLANET CARE
      var tweenHand = TweenMax.from("#parteSei #pNove", 1.5, {
       css: {
         left: "200px",
         // filter: "blur(30px)"
         opacity:0
       }
     });
     new ScrollMagic.Scene({
       triggerElement: "#coraBall",
       offset: -600,
       triggerHook: "onLeave",
       duration: 800
     }).setTween(tweenHand).addTo(controller);
//------------------------------------------------------


});
