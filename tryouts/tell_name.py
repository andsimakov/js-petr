def tell_name():
    name = "John"

    def print_name():
        print(name)

    return print_name()


name = "Pete"

if __name__ == "__main__":
    tell_name()
