const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl=document.querySelector('#ingredients')

for (let i = 0; i < ingredients.length; i += 1) {  
  const itemEl = document.createElement('li');
  itemEl.classList.add('item')  
  itemEl.textContent = ingredients[i];
  listEl.append(itemEl)
  
}




 








