# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods

name = "Brad"
age = 37

# Concatenate
# print("Hello I am " + name + " and I am " + str(age))

# String Formatting

# Arguments by position
# print("{},{},{}".format("a","b","c"))
# print("{1},{2},{0}".format("a","b","c"))

# Arguments by position
# print("My name is {name} and I am {age}".format(name=name, age=age))

# F-Strings (only in 3.6+)
# print(f'My name is {name} and I am {age}')

# String Methods
s = "hello there world"

# Capitalize first letter
print(s.capitalize())

# Make all uppercase
print(s.upper())

# Make all lower
print(s.lower())

# Swap case
print(s.swapcase())

# Get length
print(len(s))

# Replace
print(s.replace("world", "everyone"))

# Count
sub = "h"
print(s.count(sub))

# Starts with
# End with
# Split into a list
# Find position
# Is all alphanumeric?
# Is all alphabetic?
# Is all numeric?