# TypeScript Generic Function Type Error
This repository demonstrates a common type error in TypeScript generic functions. The `combineArrays` function attempts to combine two arrays of any type, but it fails when the arrays have different types.

## Bug
The bug is that the generic type `T` is inferred as `number` from the first array (`arr1`), and then the second array (`arr2`), which has elements of type `string`, causes a type error because `string` is not assignable to `type number`.

## Solution
The solution is to make the generic type `T` more flexible to accommodate the different array types in the solution file.