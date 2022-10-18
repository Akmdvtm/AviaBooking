package main

import (
	"TCP/server"
	"TCP/server/pkg/handler"
	"fmt"
	"log"
	"net"
	"os"
)

func main() {
	port := "9090"
	server.StartServer(port)
	tcpAddr, _ := net.ResolveTCPAddr("tcp", ":9090")
	// Звоним на сервер
	conn, _ := net.DialTCP("tcp", nil, tcpAddr)
	go handler.Handler(conn)
	// Принимаем сообщения от сервера
	buf := make([]byte, 1024)
	for {
		length, err := conn.Read(buf)
		fmt.Println(length)
		if err != nil {
			log.Printf("recv server msg failed :%v\n", err)
			conn.Close()
			os.Exit(0)
			break
		}
		fmt.Println(string(buf[0:length]))
	}
}
