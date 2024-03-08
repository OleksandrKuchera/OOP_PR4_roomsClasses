class Room {
    constructor(type, dwelling,lichilnik) {
        this.type = type;
        this.dwelling = dwelling
        this.lichilnik = lichilnik
    }
}

class RoomRectangular extends Room {
    constructor(type, lengthRoom, widthRoom, dwelling,lichilnik,) {
        super(type, dwelling, lichilnik); 
        this.lichilnikCounts = this.generateRandomLichilnikCounts()
        this.formaRoom = this.getForm();
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

    getForm(){
        return 'Прямокутна кімната'
    }

}

class RoomCircular extends Room {
    constructor(type, radius, dwelling,lichilnik) {
        super(type, dwelling,lichilnik);
        this.lichilnikCounts = this.generateRandomLichilnikCounts();
        this.formaRoom = this.getForm();
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

    getForm(){
        return 'Кругал кімната'
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
        let roomForms = {
            'Прямокутна кімната': 0,
            'Кругал кімната': 0
        };
        for(let room of this.rooms) {
            roomForms[room.formaRoom]++;
        }
        for (let form in roomForms) {
            console.log(`Кількість кімнат за формую *${form}* : ${roomForms[form]}`)
    }
}

    

    countRoomOneType() {
        let roomTypes = {
            'Кухня': 0,
            'Зал': 0,
            'Коридор': 0,
            'Кладовка': 0,
            'Ванна': 0,
            'Спальня': 0,
            'Дитяча': 0,
            'Столова': 0
        };

        for (let room of this.rooms) {
            if (room.type in roomTypes) {
                roomTypes[room.type]++;
            }
        }
        for (let room in roomTypes) {
            console.log(`Кількість кімнат за формую *${room}* : ${roomTypes[room]}`)
    }
    }

    
}

//task 1
const house = new House();
console.log('--')
const roomKitchen = new RoomRectangular('Кухня', 25, 20, 'Нежилий','Газу');
house.addRoom(roomKitchen);

const roomСorridor = new RoomRectangular('Коридор', 10, 5, 'Нежилий','Світла');
house.addRoom(roomСorridor);

const roomHol = new RoomCircular('Зал', 30, 'Жилий','Нема');
house.addRoom(roomHol);

const roomSleeping = new RoomCircular('Спальня', 25, 'Жилий','Нема');
house.addRoom(roomSleeping);

const roomBath = new RoomRectangular('Ванна',8, 8, 'Нежилий','Води');
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

