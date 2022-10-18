package server

import (
	"TCP/server/pkg/handler"
	"TCP/server/pkg/messages"
	"fmt"
	"net"
	"os"
)

func StartServer(p string) {
	port := ":" + p
	// Возвращаем tcp-адрес
	tcpAddr, err := net.ResolveTCPAddr("tcp", port)
	fmt.Println(tcpAddr)
	if err != nil {
		os.Exit(0)
		return
	}
	// Мониторинг tcp-адреса
	listener, err := net.ListenTCP("tcp", tcpAddr)
	if err != nil {
		os.Exit(0)
		return
	}

	buf := make([]byte, 1024)
	conns := make(map[string]net.Conn)       // Пул пользователей
	mes := make(chan string, 10)             // Канал сообщений
	go messages.BroadCastMessage(conns, mes) //
	// Каждый раз, когда клиент входит, помещаем его в пул пользователей
	for {
		conn, err := listener.AcceptTCP()
		if err != nil {
			fmt.Println("Accept failed")
			continue
		}

		conns[conn.RemoteAddr().String()] = conn  // Помещаем новых пользователей в пул пользователей
		go handler.Message(conn, buf, conns, mes) // Откройте сопрограмму, чтобы отслеживать, отправляет ли пользователь сообщение
	}

}
