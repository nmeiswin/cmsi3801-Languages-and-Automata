package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	// Check if there is exactly one command-line argument
	if len(os.Args) != 2 {
		fmt.Println("Usage: go run main.go <integer>")
		os.Exit(1)
	}

	// Parse the command-line argument as an integer
	input, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("Error: Invalid integer argument")
		os.Exit(1)
	}

	// Calculate and display perfect squares up to the input integer
	fmt.Printf("Perfect squares up to %d:\n", input)
	for i := 1; i*i <= input; i++ {
		fmt.Println(i * i)
	}
}
