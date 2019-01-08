export class AddressModel {
    city: String = '';
    constructor(option?: AddressModel) {
        if (option) {
            this.city = option.city;
        }
    }
}