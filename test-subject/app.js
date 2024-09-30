

const impact=document.getElementById('career-impact')
const development=document.getElementById('career-development')
const support=document.getElementById('career-support')
const progress=document.getElementById('career-progress')


const careerContent=document.getElementById("career-option-content");
const careerHeading=careerContent.children[0].children[0]
const careerDescription=careerContent.children[0].children[1];
// console.log(careerHeading.textContent,careerDescription.textContent);

const careerImage=careerContent.children[1].children[0];
impact.addEventListener('click',(e)=>{
    e.preventDefault();
    careerContent.classList.add('fade-out');
    setTimeout(() => {
        careerHeading.textContent="Leading with purpose";
        careerDescription.textContent="Through the application of innovation and our contextual knowledge, we give associates the opportunity to deliver transformative outcomes that benefit society at large and prove that anything is possible.";
        careerImage.setAttribute('src','media/Rectangle 1122.png')
        // Remove the fade-out class to fade in the new content
        careerContent.classList.remove('fade-out');
    }, 1000); // Match the duration of the fade-out transition (1s)

})

development.addEventListener('click',(e)=>{
    e.preventDefault();
    careerContent.classList.add('fade-out');
    setTimeout(()=>{
        careerHeading.textContent="Empowering Growth Through Learning";
        careerDescription.textContent="Wyreflow is dedicated to fostering continuous learning by providing our team with opportunities to tap into a vast pool of collective knowledge. We equip our associates with the tools and insights needed to lead in a dynamic and ever-changing landscape.";
        careerImage.setAttribute('src','development.png')
        careerContent.classList.remove('fade-out');
    },1000)

})
support.addEventListener('click',(e)=>{
    e.preventDefault();
    careerContent.classList.add('fade-out')
    setTimeout(()=>{
        careerHeading.textContent="Guiding Careers to Their Full Potential";
        careerDescription.textContent="With ongoing upskilling, reskilling, and diverse opportunities, we support our team members at every stage of their journey to achieve their professional aspirations.";
        careerImage.setAttribute('src','support.png') 
        careerContent.classList.remove('fade-out')
        
    },1000)

})
progress.addEventListener('click',(e)=>{
    e.preventDefault();
    careerContent.classList.add('fade-out')
    setTimeout(()=>{
        careerHeading.textContent="Cultivating a Journey of Growth";
        careerDescription.textContent="We invest in our team for the long haul, supporting their development and encouraging them to strive for continuous improvement in their careers.";
        careerImage.setAttribute('src','progress.png')    
        careerContent.classList.remove('fade-out')

    },1000)   


})



// handle about bottom content section


const aboutBottomContent=[
    {
        id:'Vision',
        imgAddress:'Ellipse 5.png',
        description:"We will continue to Rise to be an agile,customer-centric, and purpose-led company,delivering best-in-class technology solutions to our stakeholders.",
    },
    {
        id:'Purpose',
        imgAddress:'Ellipse 5.png',
        description:"At Wyreflow, our vision is to lead the digital transformation journey by delivering innovative solutions that empower businesses to thrive in a dynamic world. We aim to drive growth, efficiency, and sustainability through cutting-edge technology and strategic insights.",
    },
    {
        id:'Value',
        imgAddress:'Ellipse 5.png',
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




