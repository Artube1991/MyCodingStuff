const sekas = document.querySelectorAll(".sexx");

const obj = [{
    name: "Artube",
    year: 1991,
    isSmart: true,
    loveToAnya: Infinity,
},
    {
        name: "Anya",
        year: 1985,
        isSad: false,
        loveToLyosha: Infinity,
    }
]

console.log(obj[1].loveToLyosha);

console.log(sekas);

for (i of sekas) {
    console.log(i.checked);
    console.log(i.baseURI);
}

for (i of obj) {
    console.log("the ", obj.indexOf(i), " is ", i.name);
};