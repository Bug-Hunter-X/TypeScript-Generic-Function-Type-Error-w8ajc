function combineArrays<T extends (number | string)>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

const combined = combineArrays(arr1, arr2); // This will now compile without error because the generic type T is more flexible.