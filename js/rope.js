class Rope {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }

        // this.bodyB = bodyB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body) {
        this.sling.bodyB = body;
    }

   

    display() {

        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();

            stroke(48, 22, 8);

            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);






            pop();
        }
    }

}