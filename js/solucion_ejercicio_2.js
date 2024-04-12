//Ejercicio de practica Javascript

//Objeto base para los personajes
class Character {
  constructor(name, health, damage) {
    //Atributos
    this.name = name;
    this.health = health;
    this.maxhealth = health;
    this.damage = damage;
  }
  //Verifica si el personaje esta vivo
  isAlive() {
    return this.health > 0;
  }

  //Ataca a otro personaje seleccionado
  attack(target) {
    console.log(`${this.name} deals ${this.damage} DMG to ${target.name}`);
    target.health -= this.damage;
  }

  //Retorna la información actual del personaje
  status() {
    return `${this.name} - HP ${this.health}/${this.maxhealth}`;
  }
}

//Función para combatir
function fight(firstCharacter, secondCharacter) {
  console.log("Empieza el combate!");
  console.log(hero.status());
  console.log(enemy.status());
  //while(firstCharacter.isAlive() && secondCharacter.isAlive()){

  //}
  while (true) {

    //Primer personaje ataca si esta vivo
    if (firstCharacter.isAlive()) {
      firstCharacter.attack(secondCharacter);
      bajarVida(secondCharacter);
      console.log(hero.status());
      console.log(enemy.status());
    } else {
      console.log(`${firstCharacter.name} died!`);
      firstCharacter.health=0;
      bajarVida(firstCharacter);
      break;
    }

    //Segundo personaje ataca si esta vivo
    if (secondCharacter.isAlive()) {
      secondCharacter.attack(firstCharacter);
      bajarVida(firstCharacter)
      console.log(hero.status());
      console.log(enemy.status());
    } else {
      console.log(`${secondCharacter.name} died!`);
      firstCharacter.health=0;
      bajarVida(secondCharacter);
      break;
    }
  }
}

//Creación de personajes
const hero = new Character("Heroe", 100, 110);
const enemy = new Character("Limo", 500, 40);

//Comenzar combate

function bajarVida(personaje){
  let pvr = personaje.health/(personaje.maxhealth/100)
  if(personaje.name == "Heroe"){
    document.getElementById("1").getElementsByClassName("vida-restante")[0].style.width = pvr + "%";
  }else{
    document.getElementById("2").getElementsByClassName("vida-restante")[0].style.width = pvr + "%";
  }
}
document.addEventListener("keydown", function(event) {
  if(event.key === "x"){
    console.log("Se pulso la x")
    ataque1()
  }else if(event.key === "n"){
    ataque2()
  }
});
function ataque1(){
  if (hero.isAlive()) {
    hero.attack(enemy);
    bajarVida(enemy);
    console.log(hero.status());
    console.log(enemy.status());

    if(!enemy.isAlive()){
    console.log(`${enemy.name} died!`);
    enemy.health=0;
    bajarVida(enemy);
    }
  }
}
function ataque2(){
  if (enemy.isAlive()) {
    enemy.attack(hero);
    bajarVida(hero);
    console.log(enemy.status());
    console.log(hero.status());

    if(!enemy.isAlive()){
    console.log(`${hero.name} died!`);
    hero.health=0;
    bajarVida(hero);
    }
  }
}