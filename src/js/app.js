export default function orderByProps(object, array) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const order = {};
    if (array[i] in object) {
      order.key = array[i];
      order.value = object[array[i]];
      result.push(order);
      // eslint-disable-next-line no-param-reassign
      delete object[array[i]];
    }
  }
  const entries = Object.entries(object).sort();
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of entries) {
    result.push({ key, value });
  }
  return result;
}
