 $(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });

    $(document).ready(function(){
        var particles = Particles.init({
            selector: '.background',
            color: ['#DA0463', '#ff5757'],
            maxParticles: '150',
            connectParticles: 'true',

            responsive: [
              {
                breakpoint: '768',
                selector: '.background',
                options: {
                  color: ['#DA0463', '#ff5757'],
                  maxParticles: '75',
                  connectParticles: 'true',
                }
              }, {
                breakpoint: '425',
                selector: '.background',
                options: {
                  color: ['#DA0463', '#ff5757'],
                  maxParticles: '35',
                  connectParticles: 'true',
                }
              }, {
                breakpoint: '320',
                selector: '.background',
                options: {
                  color: ['#DA0463', '#ff5757'],
                  maxParticles: '20',
                  connectParticles: 'true',
                }
              }
            ]
        });
    });
