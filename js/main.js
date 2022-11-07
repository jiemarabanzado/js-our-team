const members=[
    {
        'NameMember' : "Wayne Barnett",
        'role' : 'Founder & CEO',
        'imgSource': 'img/wayne-barnett-founder-ceo.jpg'

    },
    {
        'NameMember' : "Walter Gordon",
        'role' : 'Office Manager',
        'imgSource': 'img/walter-gordon-office-manager.jpg'

    },
    {
        'NameMember' : "Angela Carrol",
        'role' : 'Chief Editor',
        'imgSource': 'img/angela-caroll-chief-editor.jpg'

    },
    {
        'NameMember' : "Angela Lopez",
        'role' : 'Social Media Manager',
        'imgSource': 'img/angela-lopez-social-media-manager.jpg'

    },
    {
        'NameMember' : "Scott Estrada",
        'role' : 'Developer',
        'imgSource': 'img/scott-estrada-developer.jpg'

    },
    {
        'NameMember' : "Barbara Ramos",
        'role' : 'Graphic Designer',
        'imgSource': 'img/barbara-ramos-graphic-designer.jpg'

    },
];
console.log(members)
for (let index = 0; index < members.length; index++) {
    const element = members[index];
    console.log(element.role);
}
let el=document.getElementById('card-grid');
for (let index = 0; index < members.length; index++) {
    const element = members[index];
    el.innerHTML+=`
    <div class="card">
        <div class="card-img">
            <img src="${element.imgSource}" alt="">
        </div>
        <div class="who">
            <h3>${element.NameMember}</h3>
            <div>${element.role}</div>
        </div>
    </div>
    `
}
let newArray=document.querySelectorAll('.card');
let focus=0;
setInterval(ImgFocus,2000)
function ImgFocus(){
    for (let index = 0; index < newArray.length; index++) {
        newArray[index].classList.remove('grow');  
    }
    if(focus==newArray.length){
        focus=0;
    }
    newArray[focus].classList.add('grow');
    focus+=1;
}
