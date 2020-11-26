# A class is like a blueprint for creating objects. An object has properties and methods(functions) associated with it. Almost everything in Python is an object

# Create class
class User:
    # Constructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
    
# Init user object
brad = User("Brad Traversy", "brad@gmail.com", 37)
janet = User("Janet Williams", "janet@gmail.com", 27)

#Edit property
brad.age =38

print(brad.age)