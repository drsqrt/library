```bash
Files : A minimal file & folder manager

Ideas : Create backend for persistence
      : Tree View
      : Search in files
      : Handling of recursive rendering efficiently
      : Configure iosevka font

Pivot : I often find very insightful resources online in form of article(html), research papers (pdfs), books (pdfs), and many other
      : Basically my own way of bookmarking resources such that i can find that on every single device i am on without much configurations...
      : All the resources will be having the credits to the original author.
      : I don't own any of these resources, they are just the way of storing all of them in a proper organized way and for effecient searching.
      :rename to library, as library makes more sense than files & folders
```

```bash
1. Visual Improvements
    1.1 Add Clear Hierarchy and Structure
        Breadcrumb Navigation: Display a breadcrumb trail (e.g., Home > Folder A > Subfolder B) at the top of each Panel to give users context about their current location.
        Indentation: Use indentation in folder and file lists to visually represent hierarchy, making it easier for users to understand relationships.
    1.2 Hover Effects
        Add subtle hover effects to folder and file items (e.g., change background color or underline text) to make the UI feel interactive.
    1.3 Icons and Styling
        Use distinct icons for folders and files (e.g., different icons for text files, images, PDFs).
        Color-code folder and file icons to help users quickly distinguish between them.
    1.4 Improve Folder and File Names
        Truncate long names with ellipses (...) and provide a tooltip with the full name when users hover over them.
    1.5 Spacing and Alignment
        Add padding between folder and file items for a cleaner layout.
        Ensure all items are aligned properly within their containers.

2. Functional Improvements
    2.1 Search
        Add a search bar to allow users to quickly find files or folders by name.
    2.2 Drag-and-Drop
        Implement drag-and-drop functionality to allow users to move files and folders between directories.
    2.3 Multi-Select
        Enable multi-selection of files and folders (using Shift or Ctrl/Command) to allow batch operations like moving, deleting, or downloading.
    2.4 File Previews
        For certain file types (e.g., images, PDFs), add a preview or thumbnail functionality instead of just a name.
    2.5 Empty State
        Show an "empty folder" message or illustration if a folder contains no files or subfolders.
    2.6 Loading Indicators
        Add a spinner or skeleton loader when data is being fetched or when a folder is clicked to enhance perceived performance.
    2.7 Right-Click Context Menu
        Allow users to right-click on files and folders to perform actions like rename, delete, or download.
    2.8 Keyboard Navigation
        Enable arrow key navigation for quickly moving between items, and use Enter to open a folder or file.
    2.9 Responsive Design
        Ensure the app works seamlessly on mobile devices by implementing a collapsible sidebar or toggleable panels.

3. Accessibility
    3.1 Keyboard and Screen Reader Support
        Ensure that all interactive elements (e.g., folders, files, links) are focusable and operable via the keyboard.
        Add ARIA roles and labels for folders and files for screen readers.
    3.2 Contrast and Font Size
        Use sufficient color contrast for text and background.
        Allow users to adjust font sizes or make the default font size accessible.

4. Advanced Features
    4.1 Folder/File Operations
        Add options to create new folders and upload files directly from the UI.
    4.2 History or Back Navigation
        Allow users to navigate back to the previous folder easily, in addition to breadcrumbs.
    4.3 Favorites/Shortcuts
        Enable users to mark certain folders or files as favorites for quick access.
    4.4 Notifications/Alerts
        Notify users of successful actions (e.g., "File downloaded successfully" or "Folder created").
    5. Performance Optimizations
        Implement lazy loading for folders and files to load content on demand and improve performance for large datasets.
        Cache frequently accessed folder data to reduce API calls.
```

```bash
    1. Highlight folders which are clicked
    2. Close functionality when 2nd time clicking the folder
```
