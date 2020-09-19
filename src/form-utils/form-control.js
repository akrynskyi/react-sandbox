export class FormControl {
  constructor(value, label, type, validation = {}) {
    this.label = label;
    this.type = type;
    this.value = value;
    this.valid = false;
    this.dirty = false;
    this.validation = validation;
    this.errors = {};
  }
}