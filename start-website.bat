@echo off
title CSP Soil Protection Website
cd /d "%~dp0"

echo.
echo ========================================
echo   CSP Website - Starting Server...
echo ========================================
echo.

if not exist "node_modules\" (
    echo Installing dependencies first...
    call npm install
    echo.
)

echo Open this link in your browser:
echo   http://localhost:3000
echo.
echo Keep this window OPEN while using the site.
echo Press Ctrl+C to stop the server.
echo.

call npm run dev

pause
