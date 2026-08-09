import sys
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        errors = []
        page.on("pageerror", lambda err: errors.append(f"Page Error: {err.message}"))
        page.on("console", lambda msg: errors.append(f"Console Error: {msg.text}") if msg.type == "error" else None)
        
        print("Navigating to http://localhost:5173...")
        page.goto('http://localhost:5173')
        page.wait_for_load_state('networkidle')
        
        print("Taking screenshot...")
        page.screenshot(path='screenshot.png', full_page=True)
        
        if errors:
            print("Errors found during verification:")
            for err in errors:
                # ignore vite/react dev server warnings if they are not critical
                if "favicon" not in err.lower():
                    print(err)
            print("Verification complete with some errors.")
        else:
            print("Verification successful. No console errors found.")
            
        browser.close()

if __name__ == "__main__":
    run()
