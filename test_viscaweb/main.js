// Sort Alphabetically
const powerPlay = document.getElementById('power_play'); 
const sport888 = document.getElementById('sport888');
const bet365 = document.getElementById('bet365');
const leoVegas = document.getElementById('leo_vegas');
const williamHill = document.getElementById('william_hill');
const companies = ['power_play', 'sport888', 'bet365', 'leo_vegas', 'william_hill'];

// Event listener to add function to existing HTML DOM element
const cardSorting = document.getElementById('sort_alphabet').addEventListener('click', sortAlphabet);

// Function called by event listener
function sortAlphabet(event){
  let newList = companies.sort();
  console.log(newList);
  // Cloone divs before replacing to avoid issues on sorting
  const clone1 = powerPlay.cloneNode(true);
  const clone2 = sport888.cloneNode(true);
  const clone3 = bet365.cloneNode(true);
  const clone4 = leoVegas.cloneNode(true);
  const clone5 = williamHill.cloneNode(true);
  //Replace divs for newList order
  powerPlay.replaceWith(clone3);
  sport888.replaceWith(clone4);
  bet365.replaceWith(clone1);
  leoVegas.replaceWith(clone2);
  williamHill.replaceWith(clone5);
};

  
// Change View
const view = document.getElementById('change_view').addEventListener('click', changeView);

function changeView(sheet){
  const link = document.getElementById('pagestyle');
  link.href = "../test_viscaweb/css/change_view.css";
};


// Show hidden navbar on mobile version, click header's logo
const nav = document.getElementById('logo_canada'),
  body = document.body;

const showNav = nav.addEventListener('click', function(e) {
    body.className = body.className? '' : 'show_nav';
    e.preventDefault();
});