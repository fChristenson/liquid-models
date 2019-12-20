# Liquid models

## What we will cover

- The problem with permutations
- How most solve this problem
- An alternative approach

## Notes

Dealing with many different types of data can be a hassle, if you have something like an order for example.

Each order has different information that is needed from the user and for each order type you need to create
a model that can store that data.

This usually leads to orders and other more dynamic models to be part of logic that uses switch statements to
determine what type of logic should be used.

When dealing with very dynamic models it can be a better idea to loosen the type system and be more liquid.
