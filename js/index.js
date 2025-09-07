
const catagor = () => {
    const url=`https://openapi.programming-hero.com/api/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => localcatagor(data.categories))
}
const loading = (load) =>{
    if(load === true){
        document.getElementById('loading').classList.remove('hidden')
        document.getElementById('cata-card').classList.add('hidden')
    }else{
        document.getElementById('cata-card').classList.remove('hidden')
        document.getElementById('loading').classList.add('hidden')
    }
}

const catagorCard =() =>{
    loading(true);
    const url='https://openapi.programming-hero.com/api/plants'
    fetch(url)
    .then(res => res.json())
    .then(data =>localcatagorCard(data.plants))
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
    <p class=" pl-4 py-1"><span class='font-semibold'>Category : </span>${card.category}</p>
    <p class=" pl-4 py-1"><span class='font-semibold'>Price : </span> ৳ <span>${card.price}</span></p>       
    <p class="pl-4 pr-1 mb-2"><span class='font-semibold'>Description : </span>${card.description}</p>
    `
    document.getElementById('my_modal_5').showModal();
}
const localcatagorCard = (catagoricard) =>{
    // console.log(catagoricard)
    const creatCatagoriCard=document.getElementById('cata-card')
    creatCatagoriCard.innerHTML=''
    catagoricard.forEach(card =>{
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="w-[341px] h-full bg-white rounded-xl">
            <img src="${card.image}" alt="${card.name}" class="w-[351px] h-[226px] p-4 rounded-xl"  onclick="cardModal(${card.id})"/>
            <h3  onclick="cardModal(${card.id})" class="pl-4 my-2 font-bold">${card.name}</h3>
            <p  onclick="cardModal(${card.id})" class="pl-4 pr-1 mb-2">${card.description}</p>
            <div class="flex justify-between px-4 mb-3">
                <button  onclick="cardModal(${card.id})" class="btn btn-active bg-[#DCFCE7]">${card.category}</button>
                <p>৳ <span>${card.price}</span></p>
            </div>
            <div class="p-4"><button class="btn text-xl btn-success w-full text-white">Add to Cart</button></div>
        </div>
        `
        creatCatagoriCard.appendChild(div)
    })
    loading(false);
}

const itemCategorySection = (word) =>{
    // console.log(word)
    const items =document.getElementById('cata-card')
    items.innerHTML=''
    word.forEach( card => {
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="w-[341px] h-full bg-white rounded-xl">
            <img src="${card.image}" alt="${card.name}" class="w-[351px] h-[226px] p-4 rounded-xl"  onclick="cardModal(${card.id})"/>
            <h3  onclick="cardModal(${card.id})" class="pl-4 my-2 font-bold">${card.name}</h3>
            <p  onclick="cardModal(${card.id})" class="pl-4 pr-1 mb-2">${card.description}</p>
            <div class="flex justify-between px-4 mb-3">
                <button  onclick="cardModal(${card.id})" class="btn btn-active bg-[#DCFCE7]">${card.category}</button>
                <p>৳ <span>${card.price}</span></p>
            </div>
            <div class="p-4"><button class="btn text-xl btn-success w-full text-white">Add to Cart</button></div>
        </div>
        `
        items.appendChild(div)
    })
    loading(false)
}

const creatIdremove=()=>{
    const removeClass=document.querySelectorAll('.tree-section')
    removeClass.forEach(btn => btn.classList.remove('active'))
}

const itemCategory =(id) => {
    loading(true);
    const url=`https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        creatIdremove();
        const itMyCatagoryColor =document.getElementById(`btn-tree-${id}`)
        // console.log(itemss)
        itMyCatagoryColor.classList.add('active')
        itemCategorySection(data.plants);
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
      <button id="btn-tree-${word.id}" class="pl-3 text-md  text-black tree-section" onclick="itemCategory(${word.id})">${word.category_name}</button>
    </div>
    `
    creatCatagori.appendChild(div)
})
}
catagor();
catagorCard();