#!/usr/bin/python3

import http.server
import ssl

ip = "localhost"
port = 8080

server = http.server.HTTPServer((ip, port), http.server.SimpleHTTPRequestHandler)

# To use HTTPS we have to use the following instruction,
# but I didn't manage to create a certificate for localhost
# server.socket = ssl.wrap_socket(server.socket, certfile = "certificate.pem", server_side = True)

print("Server is running")
print("Visit the page localhost:8080")
server.serve_forever()
