

const impact=document.getElementById('about-impact')
const development=document.getElementById('about-development')
const support=document.getElementById('about-support')
const progress=document.getElementById('about-progress')


const aboutContent=document.getElementById("about-option-content");
const aboutHeading=aboutContent.children[0].children[0]
const aboutDescription=aboutContent.children[0].children[1];
console.log(aboutHeading.textContent,aboutDescription.textContent);

const aboutImage=aboutContent.children[1].children[0];
impact.addEventListener('click',(e)=>{
    e.preventDefault();
    aboutContent.classList.add('fade-inout');
    aboutHeading.textContent="Leading with purpose";
    aboutDescription.textContent="Through the application of innovation and our contextual knowledge, we give associates the opportunity to deliver transformative outcomes that benefit society at large and prove that anything is possible.";
    aboutImage.setAttribute('src','/media/Rectangle 1122.png')
    setTimeout(()=>{
        aboutContent.classList.remove('fade-inout');
    },3000)

})

development.addEventListener('click',(e)=>{
    e.preventDefault();
    aboutContent.classList.add('fade-inout');
    aboutHeading.textContent="Empowering Growth Through Learning";
    aboutDescription.textContent="Wyreflow is dedicated to fostering continuous learning by providing our team with opportunities to tap into a vast pool of collective knowledge. We equip our associates with the tools and insights needed to lead in a dynamic and ever-changing landscape.";
    aboutImage.setAttribute('src','development.png')
    setTimeout(()=>{
        aboutContent.classList.remove('fade-inout');
       },3000)

})
support.addEventListener('click',(e)=>{
    e.preventDefault();

    aboutContent.classList.add('fade-inout')
    aboutHeading.textContent="Guiding Careers to Their Full Potential";
    aboutDescription.textContent="With ongoing upskilling, reskilling, and diverse opportunities, we support our team members at every stage of their journey to achieve their professional aspirations.";
    aboutImage.setAttribute('src','support.png') 
    setTimeout(()=>{
        aboutContent.classList.remove('fade-inout')
    },3000)

})
progress.addEventListener('click',(e)=>{
    e.preventDefault();
    aboutContent.classList.add('fade-inout')
    aboutHeading.textContent="Cultivating a Journey of Growth";
    aboutDescription.textContent="We invest in our team for the long haul, supporting their development and encouraging them to strive for continuous improvement in their careers.";
    aboutImage.setAttribute('src','progress.png')    
    setTimeout(() => {
        aboutContent.classList.remove('fade-inout')
    }, 3000);



})


