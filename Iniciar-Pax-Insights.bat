@echo off
setlocal
cd /d "%~dp0"
py -3 server.py
if errorlevel 1 (
  echo.
  echo Nao foi possivel iniciar o Pax Insights. Confirme se o Python esta instalado.
  pause
)
