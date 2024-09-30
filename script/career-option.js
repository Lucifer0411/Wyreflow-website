
// handle career option section
const impact=document.getElementById('career-impact')
const development=document.getElementById('career-development')
const support=document.getElementById('career-support')
const progress=document.getElementById('career-progress')

const careerContent=document.getElementById("career-option-content");
const careerHeading=careerContent.children[0].children[0]
const careerDescription=careerContent.children[0].children[1];
console.log(careerHeading.textContent,careerDescription.textContent);

const careerImage=careerContent.children[1].children[0];
impact.addEventListener('click',(e)=>{
    e.preventDefault();
    careerContent.classList.add('fade-out');
    setTimeout(() => {
        careerHeading.textContent="Leading with purpose";
        careerDescription.textContent="Through the application of innovation and our contextual knowledge, we give associates the opportunity to deliver transformative outcomes that benefit society at large and prove that anything is possible.";
        careerImage.setAttribute('src','media/career-option-icon/impact.png')
        impact.classList.remove('active-option')
        development.classList.remove('active-option')
        support.classList.remove('active-option')
        progress.classList.remove('active-option')

        impact.classList.add('active-option')
        // Remove the fade-out class to fade in the new content
        careerContent.classList.remove('fade-out');
    }, 500); // Match the duration of the fade-out transition (1s)

})

development.addEventListener('click',(e)=>{
    e.preventDefault();
    careerContent.classList.add('fade-out');
    setTimeout(()=>{
        careerHeading.textContent="Empowering Growth Through Learning";
        careerDescription.textContent="Wyreflow is dedicated to fostering continuous learning by providing our team with opportunities to tap into a vast pool of collective knowledge. We equip our associates with the tools and insights needed to lead in a dynamic and ever-changing landscape.";
        careerImage.setAttribute('src','media/career-option-icon/development.png')
        impact.classList.remove('active-option')
        development.classList.remove('active-option')
        support.classList.remove('active-option')
        progress.classList.remove('active-option')

        development.classList.add('active-option')
        careerContent.classList.remove('fade-out');
    },500)

})
support.addEventListener('click',(e)=>{
    e.preventDefault();
    careerContent.classList.add('fade-out')
    setTimeout(()=>{
        careerHeading.textContent="Guiding Careers to Their Full Potential";
        careerDescription.textContent="With ongoing upskilling, reskilling, and diverse opportunities, we support our team members at every stage of their journey to achieve their professional aspirations.";
        careerImage.setAttribute('src','media/career-option-icon/support.png') 
        impact.classList.remove('active-option')
        development.classList.remove('active-option')
        support.classList.remove('active-option')
        progress.classList.remove('active-option')
        
        support.classList.add('active-option')
        careerContent.classList.remove('fade-out')
        
    },500)

})
progress.addEventListener('click',(e)=>{
    e.preventDefault();
    careerContent.classList.add('fade-out')
    setTimeout(()=>{
        careerHeading.textContent="Cultivating a Journey of Growth";
        careerDescription.textContent="We invest in our team for the long haul, supporting their development and encouraging them to strive for continuous improvement in their careers.";
        careerImage.setAttribute('src','media/career-option-icon/progress.png')    
        impact.classList.remove('active-option')
        development.classList.remove('active-option')
        support.classList.remove('active-option')
        progress.classList.remove('active-option')

        progress.classList.add('active-option')
        careerContent.classList.remove('fade-out')

    },500)   


})






