const button = document.getElementById('button')

let name = document.getElementById('name')
let height = document.getElementById('height')
let gender = document.getElementById('gender')
let birth_year = document.getElementById('birth-year')
let home_world = document.getElementById('home-world')


button.addEventListener('click',(event) => {
    name.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>'
    home_world.innerHTML = ''
    height.innerHTML = ''
    gender.innerHTML = ''
    birth_year.innerHTML = ''
    
    
    setTimeout(fetchData(),4000)})

async function fetchData() {
    try {
      let idx = (Math.floor(Math.random() * 10))+1
      const response = await fetch(`https://www.swapi.tech/api/people/${idx}`);
      const data = await response.json();
        let personage = data['result']['properties']

        name.innerText =`${personage.name}`
        height.innerText =`Height:${personage.height}`
        gender.innerText =`Gender:${personage.gender}`
        birth_year.innerText =`Birth-year:${personage.birth_year}`
        const home = await fetch(`${personage.homeworld}`)
        const datworld = await home.json();
        home_world.innerText = datworld['result']['properties'].name;
    } catch (error) {
      console.error(error);
    }
  }
  
  

