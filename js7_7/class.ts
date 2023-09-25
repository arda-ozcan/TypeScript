//class, object üretmek içiçn gerekli olan yapıyı bize sunar
interface Point {
    x:number,
    y:number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point:Point): void;
}

class Taxi implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point:Point): void{
        console.log(`taksi X:${point.x} Y:${point.y} konumuna gidiyor.`);
    };
}
class Bus implements Vehicle{
    // ..
    currentLocation: Point;
    travelTo(point:Point): void{
        console.log(`otobüs X:${point.x} Y:${point.y} konumuna gidiyor.`);
    };
}

//taxi_1 => 07 abc 07
//taxi_1.currentLocation =>
//taxi_1.travelTo() =>

//taxi_2 => 07 eef 07
//taxi_2.currentLocation =>
//taxi_2.travelTo() =>
