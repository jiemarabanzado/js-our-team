const members=[
    {
        'NameMember' : "Wayne Barnett",
        'role' : 'Founder & CEO',
        'imgSource': 'wayne-barnett-founder-ceo.jpg'

    },
    {
        'NameMember' : "Walter Gordon",
        'role' : 'Office Manager',
        'imgSource': 'walter-gordon-office-manager.jpg'

    },
    {
        'NameMember' : "Angela Lopez",
        'role' : 'Social Media Manager',
        'imgSource': 'angela-lopez-social-media-manager.jpg'

    },
    {
        'NameMember' : "Scott Estrada",
        'role' : 'Developer',
        'imgSource': 'scott-estrada-developer.jpg'

    },
    {
        'NameMember' : "Barbara Ramos",
        'role' : 'Graphic Designer',
        'imgSource': 'barbara-ramos-graphic-designer.jpg'

    },
];
console.log(members)
for (let index = 0; index < members.length; index++) {
    const element = members[index];
    console.log(element.role);
}

let el=document.getElementById('members');
for (let index = 0; index < members.length; index++) {
    const element = members[index];
    el.innerHTML+=`
            <tr>
                <td>${element.NameMember}</td>
                <td>${element.role}</td>
                <td>${element.imgSource}</td>
            </tr>
    `
}