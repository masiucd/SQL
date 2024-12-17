# Spin words

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.

Spaces will be included only when more than one word is present.

### Examples:

```
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
```

## Thinking

1. Split the string into a list of words
2. Iterate over the list of words
3. If the word has 5 or more characters, reverse it
4. Join the list of words back into a string
5. Return the string
6. Done
