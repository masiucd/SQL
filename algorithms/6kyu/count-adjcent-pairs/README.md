# Count Adjacent Pairs

You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?
As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.
Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

## Example

For example, in the sentence "dog cat" the result is 0, because there are no repeating words.
For example, in the sentence "dog dog cat" the result is 1, because there is one section of two adjacent "dog" words.
For example, in the sentence "dog dog cat cat cat" the result is 2, because there are two sections of two adjacent "dog" and "cat" words.
