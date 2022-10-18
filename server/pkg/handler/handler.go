package handler

import (
	"fmt"
	"log"
	"net"
)

func Handler(conn net.Conn) {
	// Получаем адрес пользователя
	username := conn.LocalAddr().String()
	for {
		var input string
		// Получаем сообщение, отправленное пользователем
		fmt.Scanln(&input)
		if len(input) > 0 {
			msg := username + " say " + input
			//
			_, err := conn.Write([]byte(msg))
			if err != nil {
				err = conn.Close()
				if err != nil {
					log.Printf("Connection can't close %v", err)
				}
				break
			}
		}
	}
}

// Message Принимаем сообщение, отправленное пользователем
func Message(conn net.Conn, buf []byte, cns map[string]net.Conn, messages chan string) {
	for {
		length, err := conn.Read(buf)
		if err != nil {
			err = conn.Close()
			if err != nil {
				log.Printf("Connection can't close %v", err)
			}
			delete(cns, conn.RemoteAddr().String())
			break
		}
		messages <- string(buf[0:length]) // Помещаем информацию о пользователе в канал
	}
}
