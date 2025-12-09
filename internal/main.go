package main

import (
	"database/sql"
	"log"
	"time"

	_ "github.com/mattn/go-oci8"
	_ "github.com/sijms/go-ora/v2"
)

func benchmark(driver, dsn string, iterations int) {
	db, err := sql.Open(driver, dsn)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()

	start := time.Now()
	for i := 0; i < iterations; i++ {
		_, err := db.Query("SELECT * FROM your_table") // Replace with your query
		if err != nil {
			log.Fatalf("Query failed: %v", err)
		}
	}
	elapsed := time.Since(start)
	log.Printf("%s took %s for %d iterations\n", driver, elapsed, iterations)
}

func main() {
	iterations := 100                                // Number of iterations for the benchmark
	dsnOra := "user/password@host:port/service_name" // Update with your Oracle DSN for go-ora
	dsnOCI := "user/password@host:port/service_name" // Update with your Oracle DSN for go-oci8

	benchmark("go-ora", dsnOra, iterations)
	benchmark("oci8", dsnOCI, iterations)
}
