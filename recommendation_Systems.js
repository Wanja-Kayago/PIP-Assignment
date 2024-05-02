// Desing a recommendation system for an e-commerce platform that allows fast retrieval
// of recommendations for a given user. Each user has a set of preferred items, and you
// need to efficiently retrieve recommendations based on their preferences.

class Store {
    constructor() {
      this.cars = ["Jeep","Sedan","SUV","Minivan","Coupe"];
      this.furnitures = ["Chair","Beds","Furnituress","Couches","Clocks"];
      this.accesories = ["necklaces","bracelets","piercings","rings","eyewear"];
      this.userPreferences = [];
    }
  
    addPreferences(item) {
      this.userPreferences.push(item);
    }
  
    recommendations(item) {
      if (this.cars.includes(item)) {
        console.log(this.cars);
      } else if (this.furnitures.includes(item)) {
        console.log(this.furnitures);
      } else if (this.accesories.includes(item)){
        console.log(this.accesories);
      }
      else {
        console.log("item not found!");
      }
    }
  }
  
  const store = new Store();
  
  store.addPreferences("beds");
  store.addPreferences("Jeep");
  store.addPreferences("bracelets");
  const preferredItem = "bracelets";
  const recommenItem = "Jeep"
  const wantItem = "beds"
  store.recommendations(preferredItem);
  store.recommendations(recommenItem);
  store.recommendations("beds")