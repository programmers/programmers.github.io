const fs = require('fs');
const path = require('path');

const pageNames = [
    "arianna",
    "aron",
    "nile"
];

// Paths to header and footer
const headerPath = path.join(__dirname, 'src', 'sections', 'header.html');
const footerPath = path.join(__dirname, 'src', 'sections', 'footer.html');

// Read the header and footer content
const headerContent = fs.readFileSync(headerPath, 'utf8');
const footerContent = fs.readFileSync(footerPath, 'utf8');

pageNames.forEach(name => {
    // Path to the content file
    const contentPath = path.join(__dirname, 'content', `${name}.html`);
    
    const pageContent = fs.readFileSync(contentPath, 'utf8');

    // Combine header, page content, and footer
    const finalContent = `${headerContent}\n${pageContent}\n${footerContent}`;

    const outputPath = path.join(__dirname, `${name}.html`);

    fs.writeFileSync(outputPath, finalContent, 'utf8');

    console.log(`Created ${outputPath}`);
});

console.log('All files have been created successfully.');
