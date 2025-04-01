# Markdown Crash Course 🔥

Yo, here's your quick-and-easy Markdown guide to style your GitHub.io pages effortlessly.

---

## Headings 🧢

# Big-ass Title (#)
## Smaller Heading (##)
### Even Smaller (###)
#### You get the point (####)

---

## Text Styles 🎨

**Bold text** using **Bold text**

*Italicized text* using *Italicized text*

~~Strikethrough~~ using ~~Strikethrough~~

---

## Diagrams
mermaid
graph TD;
    A[Start] --> B{Is it working?};
    B -- Yes --> C[Great!];
    B -- No --> D[Check the code];
    D --> B;



## Lists (Because organization is hot) 📝

### Bullet points
- First thing
- Another thing
- Yet another badass thing

### Numbered List
1. Step one
2. Step two
3. Profit!

---

## Links (so clickable it hurts) 🔗

Here's a [link to GitHub](https://github.com/) using [link text](URL)

---

## Images (Eye candy) 🖼️

Add images easily:

![Alt text](image_url_here.png)

Example:

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## Image Row (Side-by-side) 🧱

<div style="display: flex; gap: 10px;">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="100">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="100">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="100">
</div>


---

## Code Snippets (Geeky but essential) 🤓

Inline code:  
Wrap text in backticks \like this\.

Example: const vibes = "awesome";

Block code:

\\\javascript  
function chillOut() {
  console.log("Life is good.");
}
\\\

Produces:

javascript
function chillOut() {
  console.log("Life is good.");
}
