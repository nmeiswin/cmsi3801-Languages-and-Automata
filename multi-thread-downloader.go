package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"sync"
)

func websiteDownloader(url string, wg *sync.WaitGroup, ch chan string) {
	// Decrement the WaitGroup counter when the function exits
	defer wg.Done()

	// Make an HTTP GET request
	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error downloading %s: %v\n", url, err)
		ch <- "" // Signal an empty string on the channel in case of an error
		return
	}
	defer resp.Body.Close()

	// Read the response body
	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("Error reading response body for %s: %v\n", url, err)
		ch <- "" // Signal an empty string on the channel in case of an error
		return
	}

	// Convert the body bytes to a string and send it on the channel
	bodyString := string(bodyBytes)
	ch <- bodyString
}

func main() {
	// Check if the URL argument is provided
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <URL>")
		os.Exit(1)
	}

	// Get the URL from the command line arguments
	url := os.Args[1]

	// Number of goroutines (threads) to use
	numThreads := 5

	// Create a WaitGroup to wait for all goroutines to finish
	var wg sync.WaitGroup

	// Create a channel to communicate results between goroutines
	ch := make(chan string, numThreads)

	// Launch multiple goroutines to download different parts of the webpage
	for i := 0; i < numThreads; i++ {
		wg.Add(1)
		go websiteDownloader(url, &wg, ch)
	}

	// Close the channel when all goroutines are done
	go func() {
		wg.Wait()
		close(ch)
	}()

	// Collect results from the channel
	for result := range ch {
		// Handle the downloaded content (in this example, simply print it)
		fmt.Println(result)
	}

	// Wait for all goroutines to finish
	wg.Wait()
}
