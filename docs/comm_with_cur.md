Yes, you can absolutely do this, and it’s a very common pattern in web marketing. Here’s how you’d handle it technically:

### 1. **Exit Intent Popup**

* Use JavaScript to detect exit intent (when the mouse moves toward the top of the screen or when tab close is triggered).
* Show your popup form at that moment.

### 2. **Store User Response (Cache/Local Storage/Cookie)**

* When a user submits the form, set a flag in either:

  * **localStorage** (recommended: persists even after closing browser unless cleared),
  * or a **cookie** with an expiry (e.g., 6 months).

  Example:

  ```js
  localStorage.setItem("formSubmitted", "true");
  ```

### 3. **Check on Next Visit**

* When the user comes back, run a script on page load that checks:

  ```js
  if (localStorage.getItem("formSubmitted") === "true") {
      // Don’t show popup
  } else {
      // Enable popup logic (on exit intent)
  }
  ```

### 4. **Optional: Server-Side Backup**

* If you want this to work across devices (user fills form on laptop, comes back on phone), you’ll need to save their submission server-side (with email/phone as identifier).
* Then, before showing the popup, call your backend to confirm whether this user has already submitted.

---

✅ **In short:**
Yes, with **localStorage or cookies**, you can stop showing the popup if the form was filled earlier.
If you want cross-device persistence → add a **backend check**.

Do you want me to draft a ready-to-use **JavaScript snippet** that handles both the popup logic and the localStorage check?
