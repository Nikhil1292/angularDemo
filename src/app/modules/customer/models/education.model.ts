export class EducationModel {
    graduation: String = '';
    constructor(option?: EducationModel) {
        if (option) {
            this.graduation = option.graduation;
        }
    }
}