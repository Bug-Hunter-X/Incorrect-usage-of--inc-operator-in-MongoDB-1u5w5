# Incorrect Usage of $inc Operator in MongoDB
This repository demonstrates a common error when using the `$inc` operator in MongoDB updates.  The `$inc` operator is designed to increment or decrement a numerical field by a specified value.  However, incorrect usage can lead to unexpected results or errors. 

## Bug Description
The bug arises from providing a non-numeric value to the `$inc` operator.  The `$inc` operator expects an integer or a double precision floating point number as a value for incrementing or decrementing the field. Incorrectly passing a string or other non-numeric value to the `$inc` operator will result in an error or unexpected behavior.