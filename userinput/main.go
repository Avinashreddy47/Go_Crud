package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {
	welcome := "welcome to user input"
	fmt.Println(welcome)

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter the rating:")

	input, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Error reading input:", err)
		return
	}

	fmt.Println("Thanks for rating", input)
	fmt.Printf("Type of input: %T\n", input)

	numRating, err := strconv.ParseFloat(strings.TrimSpace(input), 64)
	if err != nil {
		fmt.Println("Error parsing rating:", err)
		return
	}

	fmt.Println("Added 1 to rating:", 1+numRating)

	presentTime := time.Now()
	fmt.Println("Current time:", presentTime)
	fmt.Println("Formatted time:", presentTime.Format("01-02-2006 15:04:05 Monday"))
}
