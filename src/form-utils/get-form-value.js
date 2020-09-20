export function getFormValue(formControls) {
  return Object
    .keys(formControls)
    .reduce((result, key) => {
      result[key] = formControls[key].value;
      return result;
    }, {});
}