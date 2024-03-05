class Room {
    constructor(type, dwelling,lichilnik) {
        this.type = type;
        this.dwelling = dwelling
        this.lichilnik = lichilnik
    }
}

class RoomRectangular extends Room {
    constructor(type, formaRoom, lengthRoom, widthRoom, dwelling,lichilnik,) {
        super(type, dwelling, lichilnik); 
        this.lichilnikCounts = this.generateRandomLichilnikCounts()
        this.formaRoom = formaRoom;
        this.lengthRoom = lengthRoom;
        this.widthRoom = widthRoom;
        this.areaRoom = this.calculateArea();
    }

    calculateArea() {
        const result = this.lengthRoom * this.widthRoom;
        //console.log(`Площа ${this.type} = ${result} м^2`);
        return result;
    }
    
    generateRandomLichilnikCounts() {
        if(this.lichilnik == 'Нема'){
            return 0
        }
        let random =Math.floor(Math.random() * 1000)
        return random
    }

}

class RoomCircular extends Room {
    constructor(type, formaRoom, radius, dwelling,lichilnik) {
        super(type, dwelling,lichilnik);
        this.lichilnikCounts = this.generateRandomLichilnikCounts();
        this.formaRoom = formaRoom;
        this.radius = radius;
        this.areaRoom = this.calculateArea();
    }

    calculateArea() {
        const result = Math.floor(2 * Math.PI * this.radius);
        //console.log(`Площа ${this.type} = ${result} м^2`);
        return result;
    }

    generateRandomLichilnikCounts() {
        if(this.lichilnik == 'Нема'){
            return 0
        }
        let random =Math.floor(Math.random() * 1000)
        return random
    }
}

class House {
    constructor() {
        this.rooms = [];
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    getCountRoom() {
        return this.rooms.length;
    }

    getAreaHouse() {
        let totalArea = 0;
        for (let room of this.rooms) {
            totalArea += room.areaRoom;
        }
        return totalArea;
    }
    getAreaHouseLiving() {
        let totalArea = 0;
        for (let room of this.rooms) {
            if (room.dwelling === 'Жилий') { 
                totalArea += room.areaRoom; 
            }
        }
        return totalArea;
    }
    
    getAllRoom() {
        return this.rooms
    }

    countRoomOneForm() {
        let totalRectangular = 0
        let totalCircular = 0
        let totalBox = 0
        for(let room of this.rooms) {
            if(room.formaRoom === 'Прямокутна' || room.formaRoom === 'Прямокутний' || room.formaRoom === 'Прямокутник') {
                totalRectangular++;
            }
            if(room.formaRoom === 'Кругла' || room.formaRoom === 'Круглий' || room.formaRoom === 'Кругле' || room.formaRoom === 'Круг') {
                totalCircular++;
            }
            if(room.formaRoom === 'Квадрат' || room.formaRoom === 'Квадратна' || room.formaRoom === 'Квадратний') {
                totalBox++;
            }
        }
        console.log(`Кількість кімнат за формую *Прямоктник* : ${totalRectangular}`)
        console.log(`Кількість кімнат за формую *Круг* :${totalCircular}`)
        console.log(`Кількість кімнат за формую *Квадрат* :${totalBox}`)
    }

    

    countRoomOneType() {
        let totalKichen = 0
        let totalHol = 0
        let totalСorridor = 0
        let totalPantry = 0
        let totalBath = 0
        let totalBedroom = 0 
        let totalChildren = 0
        let totalDining = 0

        for(let room of this.rooms) {
            if(room.type === 'Кухня' ) {
                totalKichen++;
            }
            if(room.type === 'Зал') {
                totalHol++;
            }
            if(room.type === 'Коридор') {
                totalСorridor++;
            }
            if(room.type === 'Кладовка') {
                totalPantry++;
            }
            if(room.type === 'Ванна') {
                totalBath++;
            }
            if(room.type === 'Спальня') {
                totalBedroom++;
            }
            if(room.type === 'Дитяча') {
                totalChildren++;
            }
            if(room.type === 'Столова') {
                totalDining++;
            }
        }
        console.log(`Кількість *Кухонь* : ${totalKichen}`)
        console.log(`Кількість *Залів* : ${totalHol}`)
        console.log(`Кількість *Коридорів* : ${totalСorridor}`)
        console.log(`Кількість *Кладовок* : ${totalPantry}`)
        console.log(`Кількість *Ванн* : ${totalBath}`)
        console.log(`Кількість *Спальні* : ${totalBedroom}`)
        console.log(`Кількість *Дитячих* : ${totalChildren}`)
        console.log(`Кількість *Столових* : ${totalDining}`)
    }

    
}

//task 1
const house = new House();
console.log('--')
const roomKitchen = new RoomRectangular('Кухня', 'Прямокутна', 25, 20, 'Нежилий','Газу');
house.addRoom(roomKitchen);

const roomСorridor = new RoomRectangular('Коридор', 'Прямокутний', 10, 5, 'Нежилий','Світла');
house.addRoom(roomСorridor);

const roomHol = new RoomCircular('Зал', 'Кругла', 30, 'Жилий','Нема');
house.addRoom(roomHol);

const roomSleeping = new RoomCircular('Спальня', 'Кругла', 25, 'Жилий','Нема');
house.addRoom(roomSleeping);

const roomBath = new RoomRectangular('Ванна', 'Квадратна', 8, 8, 'Нежилий','Води');
house.addRoom(roomBath);

//task 2
console.log('----------')
console.log(`Загальна площа жилих приміщень : ${house.getAreaHouseLiving()} м^2`)

//task 3
console.log('----------')
console.log(`Загальна площа будинку: ${house.getAreaHouse()} м^2`);

//task 4
console.log('----------')
console.log(house.rooms)

//task 5
console.log('----------')
house.countRoomOneForm()

//task 6
console.log('----------')
house.countRoomOneType()

//task 7
//В класі вже оголошено та рахує

//task 8
console.log('----------')
console.log(`Кількість кімнат у будинку: ${house.getCountRoom()}`);

