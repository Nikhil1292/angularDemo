import { PersonalDetailModel } from "./personalDetails.model";
import { AddressModel } from "./address.model";
import { EducationModel } from "./education.model";

export class CustomerModel {
    personalDetail: PersonalDetailModel = new PersonalDetailModel();
    address: Array<AddressModel> = new Array<AddressModel>();
    // address: AddressModel[] = [];
    Education: EducationModel = new EducationModel();
    constructor(option?: CustomerModel) {
        if (option) {
            this.personalDetail = option.personalDetail;
            this.address = option.address;
            this.Education = option.Education;
        }
    }
}