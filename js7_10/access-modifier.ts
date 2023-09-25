interface Point {
    x:number,
    y:number
}

interface Vehicle {
    // currentLocation: Point;
    travelTo(point:Point): void;
}

class Taxi implements Vehicle {
    
    // private color: string;
    // private currentLocation: Point;

    constructor(private location?: Point, private color?: string) {
        // this.currentLocation = location;
        // this.color = color;
    }

    
    travelTo(point:Point): void{
        console.log(`taksi X:${this.location.x} Y:${this.location.y}'dan X:${point.x} Y:${point.y} konumuna gidiyor.`);
    };
}

let taxi_1: Taxi = new Taxi({x:2,y:5},'Blue');
taxi_1.travelTo({ x:1, y:2});


