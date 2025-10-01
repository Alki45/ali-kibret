#!/bin/bash

###############################################################################
# Resume Compilation Script
# Author: Ali Kibret Muhamed
# Description: Compiles LaTeX resume with proper cleanup
###############################################################################

echo "🚀 Compiling Ali Kibret's Resume..."
echo "=================================="

# Check if pdflatex is installed
if ! command -v pdflatex &> /dev/null; then
    echo "❌ Error: pdflatex is not installed!"
    echo ""
    echo "📦 Install options:"
    echo "   Ubuntu/Debian: sudo apt-get install texlive-full"
    echo "   macOS: brew install --cask mactex"
    echo ""
    echo "Or use Overleaf: https://www.overleaf.com"
    exit 1
fi

# Resume filename
RESUME="Ali_Kibret_Resume"

# Compile twice for proper cross-references
echo "📄 First pass..."
pdflatex -interaction=nonstopmode "$RESUME.tex" > /dev/null 2>&1

echo "📄 Second pass..."
pdflatex -interaction=nonstopmode "$RESUME.tex" > /dev/null 2>&1

# Check if PDF was generated
if [ -f "$RESUME.pdf" ]; then
    echo "✅ Resume compiled successfully!"
    echo ""
    echo "📋 Output: $RESUME.pdf"
    
    # Clean up auxiliary files
    echo "🧹 Cleaning up auxiliary files..."
    rm -f *.aux *.log *.out *.fdb_latexmk *.fls *.synctex.gz
    
    echo "✨ Done!"
    echo ""
    echo "📊 File size: $(du -h "$RESUME.pdf" | cut -f1)"
    echo "📅 Created: $(date)"
    
    # Open PDF if on Mac
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo ""
        read -p "🔍 Open PDF? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            open "$RESUME.pdf"
        fi
    fi
    
    # Open PDF if on Linux with xdg-open
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo ""
        read -p "🔍 Open PDF? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            xdg-open "$RESUME.pdf" 2>/dev/null || echo "ℹ️  PDF generated at: $(pwd)/$RESUME.pdf"
        fi
    fi
    
else
    echo "❌ Error: Compilation failed!"
    echo ""
    echo "🔍 Check the log file for errors:"
    echo "   $RESUME.log"
    exit 1
fi

