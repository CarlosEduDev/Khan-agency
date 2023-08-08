//Jquery

$(document).ready(function() { /* instruçao jquery = inicia script somente quando o doc estiver pronto = carregar todo*/

    //progress bar
    let containerA = document.getElementById("circleA");

    /*objeto de circulo da biblioteca (progress roller)
    com as caracteristicas que ele precisa 
    */
    let circleA = new ProgressBar.Circle(containerA, {
    //objetos internos para limitar area 
        color: '#65DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 1400,
        from: { color: '#AAA'}, //inicia com essa cor
        to: { color: '#65DAF9'}, //termina com essa cor

        //Animaçao do circulo = da BIBLIOTECA
        step: function(state, circle) { //state e circle = funçao que eu passei
            circle.path.setAttribute('stroke', state.color);//parte da biblioteca que precisa para criar um circulo animado (js)
            
            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");

    /*objeto de circulo da biblioteca (progress roller)
    com as caracteristicas que ele precisa 
    */
    let circleB = new ProgressBar.Circle(containerB, {
    //objetos internos para limitar area 
        color: '#65DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 1600,
        from: { color: '#AAA'}, //inicia com essa cor
        to: { color: '#65DAF9'}, //termina com essa cor

        //Animaçao do circulo = da BIBLIOTECA
        step: function(state, circle) { //state e circle = funçao que eu passei
            circle.path.setAttribute('stroke', state.color);//parte da biblioteca que precisa para criar um circulo animado (js)
            
            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });
    let containerC = document.getElementById("circleC");

    /*objeto de circulo da biblioteca (progress roller)
    com as caracteristicas que ele precisa 
    */
    let circleC = new ProgressBar.Circle(containerC, {
    //objetos internos para limitar area 
        color: '#65DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 2000,
        from: { color: '#AAA'}, //inicia com essa cor
        to: { color: '#65DAF9'}, //termina com essa cor

        //Animaçao do circulo = da BIBLIOTECA
        step: function(state, circle) { //state e circle = funçao que eu passei
            circle.path.setAttribute('stroke', state.color);//parte da biblioteca que precisa para criar um circulo animado (js)
            
            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");

    /*objeto de circulo da biblioteca (progress roller)
    com as caracteristicas que ele precisa 
    */
    let circleD = new ProgressBar.Circle(containerD, {
    //objetos internos para limitar area 
        color: '#65DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 2200,
        from: { color: '#AAA'}, //inicia com essa cor
        to: { color: '#65DAF9'}, //termina com essa cor

        //Animaçao do circulo = da BIBLIOTECA
        step: function(state, circle) { //state e circle = funçao que eu passei
            circle.path.setAttribute('stroke', state.color);//parte da biblioteca que precisa para criar um circulo animado (js)
            
            let value = Math.round(circle.value() * 460);

            circle.setText(value);
        }
    });

    // Iniciando o loader quando o usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0){
            //Executa a animação
            circleA.animate(1.0)
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)

            stop = 1;
        }
    })
    //Parallax
    setTimeout(function(){
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'})
    }, 250);

    //Filtro do portifólio

    $('.filter-btn').on('click', function(){
        let type = $(this).attr('id');
        let boxes = $('.project-box')

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'dsg-btn'){
            eachBoxes('dsg', boxes)
        }else if(type == 'dev-btn'){
            eachBoxes('dev', boxes);
        }else if(type == 'seo-btn'){
            eachBoxes('seo', boxes)
        }else{
            eachBoxes('all', boxes);
        }
    });

    function eachBoxes(type, boxes){
        if(type == 'all'){
            $(boxes).fadeIn();
        }else{
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow')
                }else{
                    $(this).fadeIn();
                }
            })
        }
    };
    // scroll para seções
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let serviceSection = $('#services-area');
    let teamSection = $('#team-area');
    let portifolioSection = $('#portifolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){
        let btnId = $(this).attr('id')

        console.log(btnId)

        if(btnId == 'about-menu'){
            scrollTo = aboutSection;
        }else if(btnId == 'service-menu'){
            scrollTo = serviceSection;
        }else if(btnId == 'team-menu'){
            scrollTo = teamSection;
        }else if(btnId == 'portifolio-menu'){
            scrollTo = portifolioSection;
        }else if(btnId == 'contact-menu'){
            scrollTo = contactSection;
        }else{
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({scrollTop: $(scrollTo).offset().top - 70}, 1500);
    });

   

   });