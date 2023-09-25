var Taxi = /** @class */ (function () {
    // private color: string;
    // private currentLocation: Point;
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
        // this.currentLocation = location;
        // this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X:".concat(this.location.x, " Y:").concat(this.location.y, "'dan X:").concat(point.x, " Y:").concat(point.y, " konumuna gidiyor."));
    };
    ;
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }, 'Blue');
taxi_1.travelTo({ x: 1, y: 2 });
