"""Servidor local seguro para executar o Pax Insights por HTTP.

Abra o projeto usando Iniciar-Pax-Insights.bat. Nao abra index.html
diretamente, pois navegadores bloqueiam os scripts do modulo Tarefas em file://.
"""

from __future__ import annotations

import mimetypes
import socket
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
HOST = "127.0.0.1"
START_PORT = 8080


class PaxRequestHandler(SimpleHTTPRequestHandler):
    """Serve only this repository, without directory listings or caching."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def list_directory(self, path):  # type: ignore[override]
        self.send_error(404, "Diretorio nao disponivel")
        return None

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "same-origin")
        self.send_header("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
            "style-src 'self' 'unsafe-inline'; "
            "img-src 'self' data: blob: https:; "
            "font-src 'self' data:; "
            "connect-src 'self' https://*.supabase.co wss://*.supabase.co; "
            "frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'",
        )
        super().end_headers()

    def log_message(self, format, *args):
        # Mantem o terminal legivel, sem esconder erros de servidor.
        print(f"[{self.log_date_time_string()}] {format % args}")


def next_available_port() -> int:
    for port in range(START_PORT, START_PORT + 20):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as probe:
            if probe.connect_ex((HOST, port)) != 0:
                return port
    raise RuntimeError("Nao foi possivel reservar uma porta local para o Pax Insights.")


def main() -> None:
    mimetypes.add_type("application/javascript", ".js")
    mimetypes.add_type("application/json", ".json")
    port = next_available_port()
    server = ThreadingHTTPServer((HOST, port), PaxRequestHandler)
    url = f"http://{HOST}:{port}/"
    print(f"Pax Insights em {url}")
    print("Pressione Ctrl+C para encerrar o servidor.")
    webbrowser.open(url, new=1)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
