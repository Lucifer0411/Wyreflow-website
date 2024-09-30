document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.video-wrapper').forEach(wrapper=> {
        const video = wrapper.querySelector('.background-video');
        
        wrapper.addEventListener('mouseover', () => {
            video.play();
        });
        
        wrapper.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0;
        })
    })

    const card = document.querySelectorAll('.card').forEach((card)=>{
   // Hover In
   card.addEventListener('mouseenter', () => {
    gsap.to(card, {
        y: "-20",          // Move the card back down off-screen
        duration: 0.5,      // Animation duration
        ease: "power2.in"   // Easing function for a smooth effect
    });
});

// Hover Out
card.addEventListener('mouseleave', () => {


    gsap.to(card, {
        y: 0,               // Move the card up to its original position
        duration: 0.5,      // Animation duration
        ease: "power2.out"  // Easing function
    });
    });
    })

    gsap.from('.main-left',{
        x:-800,
        duration:2,
        ease: "bounce.out",
    })
    gsap.from('.main-right',{
        x:800,
        duration:2,
        ease: "bounce.out",
    })
    gsap.to('#main-btn',{
        scale:1.5,
        duration:1,
        repeat:-1,
        x:50,
        ease: "power2.out",
    })

    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('#video-text-1', {
        scrollTrigger:".video-section",
        y:-400,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });
    gsap.from('#video-text-2', {
        scrollTrigger:".video-section",
        y:400,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });
    gsap.from('#video-text-3', {
        scrollTrigger:"#video-text-3",
        y:-400,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });
    gsap.from('#video-text-4', {
        scrollTrigger:"#video-text-3",
        y:400,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });

    


    gsap.from('.banner-content h3', {
        scrollTrigger:".banner",
        x:-600,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });
    gsap.from('.banner-content p', {
        scrollTrigger:".banner",
        x:-1500,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });



    // gsap.from('#option-row-first',{
    //     scrollTrigger:'.option-section',
    //     x:-800,
    //     duration:4,
    //     opacity:1,
    //     // ease: "power2.out" ,
    //     ease: "elastic",
    // })
    // gsap.from('#option-row-second',{
    //     scrollTrigger:'.option-section',
    //     x:800,
    //     duration:4,
    //     opacity:1,
    //     //  ease: "power2.out" ,
    //     ease: "elastic",
    // })

    gsap.to('#join-btn',{
        scale:1.5,
        repeat:-1,
        duration:1.5,
        // rotate:50,
    })
    // gsap.from('#join-btn',{
    //     // scale:2,
    //     repeat:-1,
    //     duration:2,
    //     rotate:100,
    // })




    gsap.from('.mycarousel',{
        scrollTrigger:'.mycarousel',
        x:800,
        duration:2,
        opacity:1,
    })
    gsap.from('.carousel-left',{
        scrollTrigger:'.option-section',
        x:-1000,
        duration:2,
        opacity:1,
        delay:1,
    })



    // gsap.from('#odd-card',{
    //     scrollTrigger:'.myservicies',
    //     x:-500,
    //     duration:2,
    //     opacity:1,
    //     ease: "power2.out",
    // })
    // gsap.from('#even-card',{
    //     scrollTrigger:'.myservicies',
    //     delay:2,
    //     x:500,
    //     duration:2,
    //     ease: "power2.out",
    //     opacity:1,
    // })
    


    // const tl = gsap.timeline({
    //     scrollTrigger:".footer-icon-section",
    // });
    gsap.from('.linkedin-section', {
        scrollTrigger:".footer-top",
        x: -1600,
        duration:2,
        ease: "power2.out" ,
        opacity:1,

    });
    gsap.from('.youtube-section', {
        scrollTrigger:".footer-top",
        x: -1200,
        duration:2,
        ease: "power2.out" ,
        opacity:1,

    });
    gsap.from('.instagram-section', {
        scrollTrigger:".footer-top",
        x: -800,
        duration:2,
        ease: "power2.out" ,
        opacity:1,

    });
    gsap.from('.facebook-section', {
        scrollTrigger:".footer-top",
        x: -400,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });






    gsap.from('#industry-list p',{
        scrollTrigger:"footer",
        x:-500,
        duration:2,
        opacity:0,
    })
    gsap.from('#service-list p',{
        scrollTrigger:"footer",
        y:-500,
        duration:2,
        opacity:0,
    })
    gsap.from('#more-list p',{
        scrollTrigger:"footer",
        x:500,
        duration:2,
        opacity:0,
    })
    
})


// service animation starts here


gsap.from('#service-item-num-2',{
    // scrollTrigger:'.service-detail-section',
    scrollTrigger:{
        trigger:'.service-detail-section',
        toggleActions:"play none none none",
        start:'top bottom',
        end:'center center',
        
        // markers:true,
        
    },
    x:-400,
    duration:2,
    delay:0.5,
    ease: "power2.out" ,
    opacity:0,
})
gsap.from('#service-item-num-3',{
    // scrollTrigger:'.service-detail-section',
    scrollTrigger:{
        trigger:'.service-detail-section',
        toggleActions:"play none none none",
        start:'top bottom',
        end:'center center',
        
        // markers:true,
        
    },
    x:400,
    duration:2,
    delay:0.5,
    ease: "power2.out" ,
    opacity:0,
})




gsap.from('#service-upper-card-1',{
    // scrollTrigger:'.service-card-section',
    scrollTrigger:{
        trigger:'.service-card-section',
        toggleActions:"play none none none",
        start:'top bottom',
        end:'center center',
        
        // markers:true,
        
    },
    y:-400,
    duration:2,
    ease:"power2.out",
    opacity:0,
})
gsap.from('#service-lower-card-2',{
    // scrollTrigger:'.service-card-section',
    scrollTrigger:{
        trigger:'.service-card-section',
        toggleActions:"play none none none",
        start:'top bottom',
        end:'center center',
        
        // markers:true,
        
    },
    y:400,
    duration:2,
    ease:"power2.out",
    opacity:0,
})
gsap.from('#service-upper-card-3',{
    // scrollTrigger:'.service-card-section',
      scrollTrigger:{
        trigger:'.service-card-section',
        toggleActions:"play none none none",
        start:'top bottom',
        end:'center center',
        
        // markers:true,
        
    },
    y:-400,
    duration:2,
    ease:"power2.out",
    opacity:0,
})

gsap.from('#service-lower-card-1',{
    // scrollTrigger:'.service-card-section',
      scrollTrigger:{
        trigger:'.service-card-section',
        toggleActions:"play none none none",
        start:'top bottom',
        end:'center center',
        // markers:true,
        
    },
    y:400,
    delay:1,
    duration:2,
    ease:"power2.out",
    opacity:0,
})
gsap.from('#service-upper-card-2',{
    // scrollTrigger:'.service-card-section',
      scrollTrigger:{
        trigger:'.service-card-section',
        toggleActions:"play none none none",
        start:'top bottom',
        end:'center center',
        // markers:true,
        
    },
    y:-400,
    delay:1,
    duration:2,
    ease:"power2.out",
    opacity:0,
})
gsap.from('#service-lower-card-3',{
    // scrollTrigger:'.service-card-section',
    scrollTrigger:{
        trigger:'.service-card-section',
        toggleActions:"play none none none",
        start:'top bottom',
        end:'center center',
        // markers:true,
        
    },
    y:400,
    delay:1,
    duration:2,
    ease:"power2.out",
    opacity:0,
})

