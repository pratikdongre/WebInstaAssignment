## 🧱 WebInstaAssignment – Visual Page Builder

A React-based drag-and-drop canvas builder where users can add, move, and style elements like text, buttons, and images.

---

### 📐 Architecture

The project follows a modular, component-based architecture:

- Builder.jsx # Main builder interface and layout │ 
- CanvasElement.jsx # Draggable and resizable elements │ 
- PropertyForm.jsx # Sidebar form for editing element content │ 
- DroppableCanvas.jsx # Main canvas drop zone 
- Sidebar.jsx # Element selector for adding new items 
- Pages/ 
- Home.jsx # Entry page with template options 
- App.jsx # Routing and layout

## 🛠️ Tech Stack

- React
- React Router
- @dnd-kit/core and rnd
- Tailwind CSS

## Done 
- Drag and Drop Elements Using Dnd and react-rnd
- TO edit the properites of an elements
- Able to move the element inside the canvas
- use Simple custom template which can be further modified

### 💡 Rationale

- **React** offers fast and interactive UIs with component reusability.
- **@dnd-kit and rnd** provides powerful drag-and-drop mechanics and customization.
- **Tailwind CSS** speeds up development with predefined utility classes.
- **LocalStorage** ensures users don't lose their progress on refresh.
- **Clean separation of logic** through components improves scalability and maintainability.

---

