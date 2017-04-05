// nick




function createCar(make1,model1,year1,color1){

  var speed = 10;


  return {
    make: make1,
    model: model1,
    year: year1,
    color: color1,
    getData: function(){
      return [this.make, this.model, this.year, this.color]
    },
    getSpeed: function(){
      return speed
    },
    increaseSpeed: function () {
      if (speed <= 85) {
        //console.log("too fast");
        speed += 10;
      // } else {
      //   console.log("too fast");
      // }
    }
  },
    // increaseSlow: function () {
    //   speed += 1;
    // },
    brake: function() {
      //speed -= 7;
      speed *= (Math.random() * 0.5)
      if (speed < 1){
        speed = 0
      }
    }

}
}


var blueCar = createCar("Ford", "Mustang", 2005, "Blue")


function drive(vehicle){
  var min = 0;
  var max = 85;


      while(vehicle.getSpeed() <= max){

        vehicle.increaseSpeed();
        console.log("we should now be increasing: " + vehicle.getSpeed())

        if (vehicle.getSpeed() >= max){
          console.log("going too fast");
          vehicle.brake();
// test

        if (vehicle.getSpeed() < 1){
             console.log("under one");
             break;
        }

           }

          // while(vehicle.getSpeed() >=.1 ){
          //   vehicle.brake()
          //   console.log("the vehicle is slowing" + vehicle.getSpeed())
          //
          //   if (vehicle.getSpeed() < .1){
          //      console.log("under one");
          //      break;
          //
          //   }
          // }
          console.log(vehicle.getSpeed())

        }
      }







    // while(vehicle.getSpeed() < (max-5)){
    //
    //   vehicle.increaseSpeed();
    //   console.log("increasing by 10: " + vehicle.getSpeed());
    //   // console.log(vehicle.getSpeed());
    //
    //
    //
    //   if (vehicle.getSpeed() == (max-5)) {
    //     console.log("we should be at 80 now " + vehicle.getSpeed());



//
