package messages

import "net"

// BroadCastMessage Отправляем полученную информацию каждому клиенту
func BroadCastMessage(cns map[string]net.Conn, messages chan string) {
	for {
		messtr := <-messages // Получение сообщений в канале
		// Отправляем полученное сообщение каждому пользователю в пользовательском пуле
		for k, v := range cns {
			_, err := v.Write([]byte(messtr)) // Отправляем сообщение
			if err != nil {
				delete(cns, k) // В случае ошибки удаляем пользователя и завершаем этот цикл
				v.Close()
				continue
			}
		}
	}
}
