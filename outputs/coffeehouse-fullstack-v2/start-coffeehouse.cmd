@echo off
setlocal
set "PROJECT_DIR=%~dp0"

if not exist "%PROJECT_DIR%backend\.env" (
  echo Falta backend\.env
  echo Copia backend\.env.example como backend\.env y ajusta las credenciales de MySQL.
  pause
  exit /b 1
)

start "CoffeeHouse Backend" cmd /k "cd /d "%PROJECT_DIR%backend" && npm run dev"
start "CoffeeHouse Frontend" cmd /k "cd /d "%PROJECT_DIR%frontend" && npm start"

echo Servidores iniciados. Espera a que Angular indique que esta listo y abre:
echo http://localhost:4200
pause