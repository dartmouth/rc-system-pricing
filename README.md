# rc-system-pricing

Research Computing System Pricing App

Tim Meehan email - meehanti23@gmail.com

## HTML and CSS Resources

This **MDN Web Docs** link has great information for both HTML and CSS. On the sidebar on the left side of the page, you will find tabs that explain HTML and CSS fundamentals. This Mozilla developer website is a great resource to familiarize yourself with as it has comprehensive documentation for many technologies.  
🔗 [MDN Web Docs – Core Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)

Once you have created a `style.css` file, you can follow the instructions on this page to link your HTML and CSS files:  
🔗 [MDN Web Docs – Getting Started with CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started)

I have also found this **cheatsheet** to be a useful tool when it comes to styling in both HTML and CSS:  
🔗 [HTML & CSS Cheatsheet](https://htmlcheatsheet.com/)

### Additional Resources
Some additional resources from **W3Schools**, another useful documentation site:
- 🔗 [W3Schools HTML Guide](https://www.w3schools.com/html/default.asp)
- 🔗 [W3Schools CSS Guide](https://www.w3schools.com/css/)

Documentation websites may be overwhelming at first, but familiarity with these resources will be invaluable.

### Introduction to JavaScript

I think it would be helpful moving forward for us all to create **Codecademy** accounts. There is a free **"Introduction to JavaScript"** course that has a helpful interactive interface to learn the language’s fundamentals. There are also great lessons for **Git** and **SQL** that might come in handy in the future. I have used Codecademy many times to familiarize myself with a new tool or language, and I hope you will find it useful.

Once you have created a Codecademy account, the course can be found here:  
🔗 [Introduction to JavaScript – Codecademy](https://www.codecademy.com/enrolled/courses/introduction-to-javascript)

I think the first two lessons, **"Introduction to JavaScript"** and **"Variables"**, would be a good starting point. I anticipate that these two lessons will take about **an hour**.  

- Feel free to **stop early** if they are too time-consuming.  
- If you finish early, you can **try a couple of the projects or quizzes** for extra practice.

### Blast Off Excersize for 3/26

## 📝 Objective
Write a function called `blastOff` that counts down from a given number and alerts `"Blast off!"` when it reaches zero.

---

## The Problem
We want to:
1. **Ask the user for a number** between **0 and 20**.
2. **Ensure** they enter a valid number (keep asking if they don’t).
3. **Count down** from that number to `0`.
4. **Alert `"Blast off!"`** when the countdown reaches zero.

## Additionally, let's try to have node downloaded for the next session
https://nodejs.org/en/download


# 💻 Challenge for 4/2: Submit Button Functionality

The challenge for this week is to **wire up the “Submit” button** on the form to a JavaScript function. The form includes multiple tools for data entry (`radio`, `range`) and a Submit button.

🟢 **Goal:**  
When the Submit button is clicked, the results of the entered data should be **printed to the screen** (not just logged in the console).

---

## ✅ How to Approach This

You will need to use JavaScript to:
1. Add an `EventListener` for the Submit button.
2. Prevent the page from refreshing (default behavior for form submission).
3. Grab the data from each input.
4. Display the values on the page using `textContent`, `innerHTML`, or `createElement`.

---

## 🔗 Helpful Resources

- [`addEventListener()` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  
- [HTML Form Reference – W3Schools](https://www.w3schools.com/js/js_validation.asp)  
- [HTML `<form>` element – MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

---

## 📁 Starter Files

I have pushed the form we created to the `main` branch in GitHub.  
Feel free to use that form as a starting point, or create your own.

---

## 🧪 Optional Bonus Challenges

- Add additional forms of data entry (e.g., text input, checkboxes, dropdowns)
- Add basic **error handling**, such as:
  - Prevent submission if a required field is blank
  - Prevent text input where a number is expected

---

## 🙌 Final Notes

Just do your best — this is practice!  
If you don’t get it working, **don’t stress** — we’ll go over the solution at the beginning of next week’s session.

Happy coding! 💫
