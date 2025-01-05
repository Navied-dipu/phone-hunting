// function phoneHunting(){
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
const loadPhone = async (searchText) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  // remove previous search

  phoneContainer.textContent = "";

  // add show all button to show 12 more result
  const showAllContainer = document.getElementById("show-container ");
  if(phones.length > 12){
    showAllContainer.classList.remove('hidden')
  }
  else{
    showAllContainer.classList.add('hidden')
  }


  // phone slice
  phones = phones.slice(0, 12);

  phones.forEach((phone) => {
    console.log(phone);
    // create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card card-compact bg-base-100 p-4 shadow-xl`;
    phoneCard.innerHTML = `
 <figure>
<img
src="${phone.image}"
alt="Shoes" />
</figure>
<div class="card-body">
<h2 class="card-title">${phone.phone_name}</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div class="card-actions justify-end">
<button class="btn btn-primary">Buy Now</button>
</div>
</div>
</div>
`;
    phoneContainer.appendChild(phoneCard);
  });
};

// handelSearch
const handelSearch = () => {
  const inputSearch = document.getElementById("inputSearch");
  const inputValue = inputSearch.value;
  // console.log(inputValue);
  loadPhone(inputValue);
};

loadPhone();
