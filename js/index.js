const catagor = () => {
    const url='https://openapi.programming-hero.com/api/categories'
    fetch(url)
    .then(res => res.json())
    .then(data => localcatagor(data.categories))
}
const catagorCard =() =>{
    const url='https://openapi.programming-hero.com/api/plants'
    fetch(url)
    .then(res => res.json())
    .then(data => localcatagorCard(data.plants))
}

const cardModal =(id)=>{
    const url=`https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => cardModalDatils(data.plants))
}
const cardModalDatils =(card) =>{
    const modalContainar=document.getElementById('modal')
    modalContainar.innerHTML=`
    <h3 class="pl-4 text-xl my-2 font-bold">${card.name}</h3>
    <img src="${card.image}" alt="${card.name}" class="w-[461px] h-[256px] p-4 rounded-xl"/>
    <p class="font-semibold pl-4 py-1"><span class='font-semibold'>Category : </span>${card.category}</p>
    <p class="font-semibold pl-4 py-1"><span class='font-semibold'>Price : </span> ৳ <span>${card.price}</span></p>       
    <p class="pl-4 pr-1 mb-2"><span class='font-semibold'>Description : </span>${card.description}</p>
    `
    document.getElementById('my_modal_5').showModal();
}
const localcatagorCard = (catagoricard) =>{
    // console.log(catagoricard)
    const creatCatagoriCard=document.getElementById('cata-card')
    catagoricard.forEach(card =>{
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="w-[341px] h-full bg-white rounded-xl" onclick="cardModal(${card.id})">
            <img src="${card.image}" alt="${card.name}" class="w-[351px] h-[226px] p-4 rounded-xl"/>
            <h3 class="pl-4 my-2 font-bold">${card.name}</h3>
            <p class="pl-4 pr-1 mb-2">${card.description}</p>
            <div class="flex justify-between px-4 mb-3">
                <button class="btn btn-active bg-[#DCFCE7]">${card.category}</button>
                <p>৳ <span>${card.price}</span></p>
            </div>
            <div class="p-4"><button class="btn text-xl btn-success w-full text-white">Add to Cart</button></div>
        </div>
        `
        creatCatagoriCard.appendChild(div)
    })
}
const localcatagor =(catagori) =>{
// console.log(catagori)
const creatCatagori=document.getElementById('categories-section')
catagori.forEach(word => {
    // console.log(word.category_name)
    const div=document.createElement('div')
    div.innerHTML=`
    <div class="w-full h-[35px] hover:bg-[#15803D] flex items-center rounded-lg mb-1">
      <button class="pl-3 text-md  text-black ">${word.category_name}</button>
    </div>
    `
    creatCatagori.appendChild(div)
})
}
catagor();
catagorCard();