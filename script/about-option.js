
// handle about option section
const commitment=document.getElementById('about-commitment')
const context=document.getElementById('about-context')
const belief=document.getElementById('about-belief')
const roadmap=document.getElementById('about-roadmap')

const aboutContent=document.getElementById("about-option-content");
// console.log(aboutContent);


const aboutHeading=aboutContent.children[0].children[0]
const aboutDescription=aboutContent.children[0].children[1];
// console.log(careerHeading.textContent,careerDescription.textContent);

const aboutImage=aboutContent.children[1].children[0];
commitment.addEventListener('click',(e)=>{
    e.preventDefault();
    aboutContent.classList.add('fade-out');
    setTimeout(() => {
        aboutHeading.textContent="Fostering Lasting Connections";
        aboutDescription.textContent="We prioritize a long-term perspective, cultivating lasting relationships that drive mutual growth and foster sustainable outcomes.";
        aboutImage.setAttribute('src','media/commitment.png')
        commitment.classList.remove('active-option')
        context.classList.remove('active-option')
        belief.classList.remove('active-option')
        roadmap.classList.remove('active-option')
        commitment.classList.add('active-option')
        aboutContent.classList.remove('fade-out');
    }, 500); // Match the duration of the fade-out transition (1s)

})

context.addEventListener('click',(e)=>{
    e.preventDefault();
    aboutContent.classList.add('fade-out');
    setTimeout(() => {
        aboutHeading.textContent="Shaping Future-Focused Relationships";
        aboutDescription.textContent="We prioritize enduring partnerships that drive innovation, growth, and long-term success for all involved.";
        aboutImage.setAttribute('src','media/context.png')
        commitment.classList.remove('active-option')
        context.classList.remove('active-option')
        belief.classList.remove('active-option')
        roadmap.classList.remove('active-option')

        context.classList.add('active-option')
        aboutContent.classList.remove('fade-out');
    }, 500); // Match the duration of the fade-out transition (1s)

})
belief.addEventListener('click',(e)=>{
    e.preventDefault();
    aboutContent.classList.add('fade-out');
    setTimeout(() => {
        aboutHeading.textContent="Committed to the Impact We Have on Every Life";
        aboutDescription.textContent="Our guiding beliefs in integrity, excellence, and innovation drive our commitment to achieving impactful results and building lasting trust.";
        aboutImage.setAttribute('src','media/belief.png')
        commitment.classList.remove('active-option')
        context.classList.remove('active-option')
        belief.classList.remove('active-option')
        roadmap.classList.remove('active-option')

        belief.classList.add('active-option')
        // Remove the fade-out class to fade in the new content
        aboutContent.classList.remove('fade-out');
    }, 500); // Match the duration of the fade-out transition (1s)

})
roadmap.addEventListener('click',(e)=>{
    e.preventDefault();
    aboutContent.classList.add('fade-out');
    setTimeout(() => {
        aboutHeading.textContent="Build and Share Knowledge Pathways";
        aboutDescription.textContent="Develop comprehensive knowledge pathways and facilitate their dissemination, ensuring seamless access to critical insights and expertise across your organization";
        aboutImage.setAttribute('src','media/roadmap.png')
        commitment.classList.remove('active-option')
        context.classList.remove('active-option')
        belief.classList.remove('active-option')
        roadmap.classList.remove('active-option')

        roadmap.classList.add('active-option')
        // Remove the fade-out class to fade in the new content
        aboutContent.classList.remove('fade-out');
    }, 500); // Match the duration of the fade-out transition (1s)

})




// handle about bottom content section


const aboutBottomContent=[
    {
        id:'Vision',
        imgAddress:'/media/Ellipse 5.png',
        description:"We will continue to Rise to be an agile,customer-centric, and purpose-led company,delivering best-in-class technology solutions to our stakeholders.",
    },
    {
        id:'Purpose',
        imgAddress:'/media/about-Ellipse-2.png',
        description:"At Wyreflow, our vision is to lead the digital transformation journey by delivering innovative solutions that empower businesses to thrive in a dynamic world. We aim to drive growth, efficiency, and sustainability through cutting-edge technology and strategic insights.",
    },
    {
        id:'Value',
        imgAddress:'/media/Ellipse 5.png',
        description:"We will continue to Rise to be an agile,customer-centric, and purpose-led company,delivering best-in-class technology solutions to our stakeholders.",
    },
]

const activeOption=document.querySelectorAll('.active-option')[1].textContent

const prevBtn=document.getElementById('btn-prev')
const nextBtn=document.getElementById('btn-next')

const aboutBottomImg=document.getElementById('about-bottom-img');
const aboutBottomDescription=document.getElementById('about-option-description')
const aboutBottomOption=document.querySelectorAll('.about-bottom-option');
const changeSection=document.getElementById('about-bottom-content')
let currentIndex=0;


function activeClassRemover(){
    aboutBottomOption[0].classList.remove('active-option')
    aboutBottomOption[1].classList.remove('active-option')
    aboutBottomOption[2].classList.remove('active-option')
}
function changeContent(currentIndex){
    aboutBottomImg.setAttribute('src',aboutBottomContent[currentIndex].imgAddress)
    aboutBottomDescription.textContent=aboutBottomContent[currentIndex].description;
    aboutBottomOption[currentIndex].classList.add('active-option')
}


aboutBottomOption[0].addEventListener('click',(e)=>{
    e.preventDefault();
    changeSection.classList.add('fade-out')
    setTimeout(()=>{
        activeClassRemover()
        currentIndex=0;
        changeContent(currentIndex);
        changeSection.classList.remove('fade-out')
    },800)
})

aboutBottomOption[1].addEventListener('click',(e)=>{
    e.preventDefault();
    changeSection.classList.add('fade-out')
    setTimeout(()=>{
        activeClassRemover()
        currentIndex=1;
        changeContent(currentIndex);
        changeSection.classList.remove('fade-out')
    },800)
})

aboutBottomOption[2].addEventListener('click',(e)=>{
    e.preventDefault();
    changeSection.classList.add('fade-out')
    setTimeout(()=>{
        activeClassRemover()
        currentIndex=2;
        changeContent(currentIndex);
        changeSection.classList.remove('fade-out')
    },800)

    
})

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    changeSection.classList.add('fade-out')
    setTimeout(()=>{
        activeClassRemover();
        if (currentIndex > 0) {
            currentIndex--;
            changeContent(currentIndex);
        }
        else{
            aboutBottomOption[currentIndex].classList.add('active-option')
        }
        changeSection.classList.remove('fade-out')

    },800)
});

nextBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    changeSection.classList.add('fade-out')
    setTimeout(()=>{
        activeClassRemover();
        if (currentIndex < aboutBottomContent.length - 1) {
            currentIndex++;
            changeContent(currentIndex);
        }else{
            aboutBottomOption[currentIndex].classList.add('active-option')
        }
        changeSection.classList.remove('fade-out')
    },800)
    
        
})


