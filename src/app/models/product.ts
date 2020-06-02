export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;

    constructor(id, name, description = '', price = 0, imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6-VfDagiV2G00G3UfPFswOuWDa697wSVZU3LpjmfiDhI7_RdN&usqp=CAU'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
    }
}
