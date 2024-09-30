document.addEventListener('DOMContentLoaded',()=>{


    // index page animation
    gsap.from(".header-logo", {
        duration: 2,
        rotation: 360, // Full rotation
        scale: 0.5,    // Starts smaller
        opacity: 0,    // Starts hidden
        ease: "elastic.out(1, 0.5)" // Elastic bounce effect
    });

    // Optional: Hover effect for the logo
    document.querySelector('.header-logo').addEventListener('mouseenter', () => {
        gsap.to(".header-logo", {
            duration: 0.5,
            scale: 1.2,
            rotation: 360,
            ease: "power1.out",
            // backgroundColor: "blueviolet"
        });
    });

    document.querySelector('.header-logo').addEventListener('mouseleave', () => {
        gsap.to(".header-logo", {
            duration: 0.5,
            scale: 1,
            rotation: 0,
            ease: "power1.in"
        });
    });

    // hero section animation
    gsap.from('.left-heading',{
        x:-800,
        duration:2,
        ease: "expoScale.out",
    })
    gsap.from('.right-subheading',{
        x:800,
        duration:2,
        ease: "expoScale.out",
    })

    gsap.to('.bx-chevron-down',{
        scale:2,
        duration:1,
        repeat:-1,
        x:50,
        ease: "power2.out",
    })

    // banner section animation

    gsap.from('.welcome-container-content h1', {
        scrollTrigger:".welcome-container",
        x:-600,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });
    gsap.from('.welcome-container-content h3 ', {
        scrollTrigger:".welcome-container",
        x:-1500,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });

    gsap.from('.service-overlay',{
        scrollTrigger:'#Services',
        y:0,
        x:300,
        ease:'circ',
        duration:3,
        stagger:0.5,

    })

    gsap.from('.banner-content h1', {
        scrollTrigger:".banner-section",
        x:-600,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });
    gsap.from('.banner-content p', {
        scrollTrigger:".banner-section",
        x:-1500,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });


    // footer section animation



    gsap.from('.linkedin-section', {
        scrollTrigger:"#Footer",
        x: -1600,
        duration:2,
        ease: "power2.out",
        opacity:1,

    });
    gsap.from('.youtube-section', {
        scrollTrigger:"#Footer",
        x: -1200,
        duration:2,
        ease: "power2.out" ,
        opacity:1,

    });
    gsap.from('.instagram-section', {
        scrollTrigger:"#Footer",
        x: -800,
        duration:2,
        ease: "power2.out" ,
        opacity:1,

    });
    gsap.from('.facebook-section', {
        scrollTrigger:"#Footer",
        x: -400,
        duration:2,
        ease: "power2.out" ,
        opacity:1,
    });



    // career page animation

    gsap.from('.values-grid',{
        scrollTrigger:'.values-section',
        opacity:0,
        duration:1.5,
        repeat:-1,
        scale:1.2
    })

    //contact page animation

    gsap.from('#btn-box-1',{
        x:600,
        duration:1.5,
        ease:"expo.out",
    })
    gsap.from('#btn-box-2',{
        x:600,
        duration:1.5,
        ease:"expo.out",
        delay:1.5,
    })
    gsap.from('#btn-box-3',{
        x:600,
        duration:1.5,
        ease:"expo.out",
        delay:3,
    })



    // services page animation
    
    gsap.from('#stat-item-1, #stat-item-3',{
        scrollTrigger:'.ai-business-hero',
        x:200,
        opacity:0,
        duration:1.5,
        ease:'sine.out',
    })
    gsap.from('#stat-item-2,#stat-item-4',{
        scrollTrigger:'.ai-business-hero',
        x:-200,
        opacity:0,
        duration:1.5,
        ease:'sine.out',
    })
    gsap.from('.grid-item', {  
        scrollTrigger:'.grid-container',
        opacity: 0,  
        duration: 1,  
        stagger: 0.5,  
    }); 

    // industries page animation

    gsap.from('.service-item', {  
        scrollTrigger:'.services',
        opacity: 0, // Start from invisible  
        y: 30, // Start 20px down  
        stagger: 1, // Stagger each item's animation by 0.2 seconds  
        duration: 2, // Animation duration for each item  
        ease: 'expo.out' // Easing function for smoothness  
    });  
    const icon = document.querySelectorAll('.icon');  

    // Create a GSAP timeline to animate the icon  
    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Repeat infinitely and reverse animation  
    
    // Add animations to the timeline  
    tl.to(icon, { scale: 1.2, duration: 0.5, ease: "power1.inOut" }) // Scale up  
      .to(icon, { scale: 1, duration: 0.5, ease: "power1.inOut" }); // Scale back down  

})

