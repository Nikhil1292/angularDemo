export class PersonalDetailModel {
    firstName: String = '';
    lastName: String = '';
    constructor(option?: PersonalDetailModel) {
        if (option) {
            this.firstName = option.firstName;
            this.lastName = option.lastName;
        }

    }
}