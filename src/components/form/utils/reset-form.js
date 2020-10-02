export function resetForm({ formControls, ...form }) {
  const resetedControls = Object
    .keys(formControls)
    .reduce((result, key) => {
      result[key] = {
        ...formControls[key],
        value: '',
        valid: false,
        dirty: false,
      }
      return result;
    }, {});

  return {
    ...form,
    formValid: false,
    formControls: resetedControls,
  };
}