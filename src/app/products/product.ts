export class Product {
    name: string = "";
    description: string = "";
    type: string = "Other";
    seller: {id: string} = {id: ""};
    address: string = "";
    price: number = null;
    available: boolean = true;
    features: Array<Feature> = [{key: "", value: ""}];
}

class Feature {
    key: string;
    value: string;
}