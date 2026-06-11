@echo off
:: KOLEX Cheerleaders — Open in Google Chrome
:: 사이트를 Chrome 브라우저로 실행합니다

set SITE_DIR=%~dp0index.html

:: Chrome 실행 경로 탐색
set CHROME="C:\Program Files\Google\Chrome\Application\chrome.exe"
set CHROME2="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

if exist %CHROME% (
    %CHROME% --new-window "%SITE_DIR%"
    echo Chrome opened: %SITE_DIR%
) else if exist %CHROME2% (
    %CHROME2% --new-window "%SITE_DIR%"
    echo Chrome opened: %SITE_DIR%
) else (
    :: fallback: Windows 기본 브라우저로 열기
    start "" "%SITE_DIR%"
    echo Chrome not found — opened with default browser
)
