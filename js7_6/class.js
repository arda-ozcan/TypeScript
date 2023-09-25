var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X:".concat(point.x, " Y:").concat(point.y, " konumuna gidiyor."));
    };
    ;
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X:".concat(point.x, " Y:").concat(point.y, " konumuna gidiyor."));
    };
    ;
    return Bus;
}()); 
//taxi_1 => 07 abc 07
//taxi_1.currentLocation =>
//taxi_1.travelTo() =>
//taxi_2 => 07 eef 07
//taxi_2.currentLocation =>
//taxi_2.travelTo() =>
