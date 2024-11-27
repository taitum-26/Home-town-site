var array, input, requuirements;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


requuirements = ['Must have at least 3 distinct opinions about Table Mountain, Lion\'s Head, and Signal Hill', 'Every sentence should include at least one of these words. “Kwaai” (cool/awesome) and “Lekker” (nice/good) are essential vocabulary', 'You’re legally required to have an opinion on who has the best boerewors and be able to grill some yourself', 'Be prepared to use phrases like “Jol,” “Now-now,” “Ag shame,” and “Eish” in everyday conversation.', ' can handle the minibus taxis and the MyCiTi buses without flinching or getting lost', 'You’ll need to be comfortable with vague plans like "Let’s meet at the waterfront sometime soon" and “Catch you at a beach bar whenever,” '];


document.getElementById('press').addEventListener('click', (event) => {
  let element_lists = document.getElementById('lists');
  requuirements.forEach((requuirements) => {
    let new_li = document.createElement('li');
    new_li.innerText = requuirements;

    element_lists.appendChild(new_li);
  });
  let element_press = document.getElementById('press');
  element_press.style.visibility = (false) ? 'visible' : 'hidden';

});
input = document.getElementById('text').value;


document.getElementById('button').addEventListener('click', (event) => {
  input = convertToNumber(document.getElementById('text').value);
  let element_list = document.getElementById('list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = document.getElementById('text').value;

  element_list.appendChild(new_li2);

});
array;
