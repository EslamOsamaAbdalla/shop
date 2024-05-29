export interface CategouryObj{
    "name": string,
    "image": string,
}

export interface Products {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": {
        "id": number,
        "name": string,
        "image": string
    },
    "images": [
        string,
        string,
        string
    ]
}
export interface SingleProduct {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "images": [],
    "creationAt": string,
    "updatedAt": string,
    "category": {
        "id": number,
        "name": string,
        "image": string,
        "creationAt": string,
        "updatedAt": string
    }
}