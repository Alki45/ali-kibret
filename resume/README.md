# Ali Kibret Muhamed - Professional Resume

This directory contains a professional LaTeX resume with clickable links to all projects, certificates, and professional profiles.

## 📄 Files

- `Ali_Kibret_Resume.tex` - Main LaTeX resume file
- `Ali_Kibret_Resume.pdf` - Compiled PDF (generated after compilation)

## 🔗 Features

### Clickable Links Included:
- ✅ **Contact Information**
  - Email: alikibretmuhamed@gmail.com
  - LinkedIn: linkedin.com/in/ali-kibret
  - GitHub: github.com/Alki45
  - Portfolio Website

- ✅ **All Project GitHub Links**
  - Amharic Sign Language Transcription
  - Solar Data Discovery
  - Stock Prediction with NLP
  - Insurance Risk Analytics
  - Book-Family
  - Lab Schedule Management

- ✅ **Live Demo Links**
  - Book-Family: alki45.github.io/book_family
  - Lab Schedule: alki45.github.io/Lab_schedule

- ✅ **Certificate Links**
  - ALX Data Science Certificate
  - 10 Academy KAIM AI Mastery Certificate & Program Details
  - HackerRank Problem Solving Certificate
  - ICPC ACPC Achievement Certificate

## 🚀 How to Compile

### Option 1: Online (Easiest)
1. Go to [Overleaf](https://www.overleaf.com)
2. Create a new project → Upload Project
3. Upload `Ali_Kibret_Resume.tex`
4. Click "Recompile" 
5. Download PDF

### Option 2: Local Installation (Linux/Mac)

#### Install LaTeX
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install texlive-full

# macOS (with Homebrew)
brew install --cask mactex
```

#### Compile Resume
```bash
cd /home/alikibret/Project/ali-kibret/resume
pdflatex Ali_Kibret_Resume.tex
pdflatex Ali_Kibret_Resume.tex  # Run twice for proper formatting
```

#### Quick Compile Script
```bash
#!/bin/bash
pdflatex Ali_Kibret_Resume.tex && \
pdflatex Ali_Kibret_Resume.tex && \
rm -f *.aux *.log *.out  # Clean up auxiliary files
echo "✅ Resume compiled successfully!"
```

### Option 3: VS Code with LaTeX Workshop

1. Install VS Code extension: "LaTeX Workshop"
2. Open `Ali_Kibret_Resume.tex`
3. Press `Ctrl+Alt+B` (or `Cmd+Alt+B` on Mac) to build
4. PDF will auto-generate

### Option 4: Docker (No Installation)

```bash
docker run --rm -v "$(pwd):/workspace" -w /workspace \
    texlive/texlive:latest \
    pdflatex Ali_Kibret_Resume.tex
```

## 📋 ATS Compatibility

This resume is optimized for Applicant Tracking Systems (ATS):
- ✅ Clean, parseable format
- ✅ Standard section headings
- ✅ No complex tables or graphics
- ✅ Machine-readable text
- ✅ Proper semantic structure
- ✅ Unicode-enabled for proper character rendering

## 🎨 Customization

### Change Colors
Find the color definitions and modify:
```latex
\color{black}  % Change to your preferred color
```

### Modify Sections
Sections are clearly marked with comments:
```latex
%-----------SECTION NAME-----------
```

### Add More Items
Use the existing item formats:
```latex
\resumeItem{Your new bullet point here}
```

## 📝 Tips for Best Results

### Before Applying
1. **Tailor for each job**: Adjust bullet points to match job description
2. **Update dates**: Keep experience timeline current
3. **Proofread**: Check all links work
4. **Test ATS**: Use jobscan.co to test ATS compatibility
5. **Update metrics**: Add quantifiable achievements

### Keeping It Updated
- ✅ Add new projects as you complete them
- ✅ Update skills based on recent work
- ✅ Include new certifications with links
- ✅ Update GitHub repositories
- ✅ Refresh achievement metrics

## 🔗 All Links Verification

### Professional Profiles
- Email: ✅ mailto link
- LinkedIn: ✅ https://linkedin.com/in/ali-kibret
- GitHub: ✅ https://github.com/Alki45
- Portfolio: ✅ (Update with your actual domain)

### Project Repositories
1. ✅ Amharic Sign Language: github.com/Alki45/Amharic-sign-Language-Transcription
2. ✅ Solar Discovery: github.com/Alki45/solar-data-discovery-Week0
3. ✅ Stock Prediction NLP: github.com/Alki45/stock-prediction-nlp-week1
4. ✅ Insurance Analytics: github.com/Alki45/insurance-risk-analytics-predictive-modeling
5. ✅ Book-Family: github.com/Alki45/book_family
6. ✅ Lab Schedule: github.com/Alki45/Lab_schedule

### Live Demos
1. ✅ Book-Family: alki45.github.io/book_family
2. ✅ Lab Schedule: alki45.github.io/Lab_schedule

### Certificates (Drive Links)
1. ✅ ALX Data Science: drive.google.com/file/d/1TmKqdZELGmUmk-dWgbLrNv3s2dXES6l4
2. ✅ KAIM Certificate: drive.google.com/file/d/14XulDaSwaGjd2oosu8bpTIoa96Igh97B
3. ✅ KAIM Details: drive.google.com/file/d/1VTKqlDtebEbMS1SNq-QU0k7zJCy03d7f
4. ✅ HackerRank: drive.google.com/file/d/1RhEhGNUJbAxOLp0SyO50XFkbNxrqo3Mw
5. ✅ ICPC ACPC: drive.google.com/file/d/1GQcsoPU4a9X6iA2bsD8ltgYEoCP77kfx

## 🎯 Where to Submit

### Recommended Platforms
- LinkedIn (optimize profile with same content)
- Indeed
- Glassdoor
- AngelList (for startups)
- Wellfound (formerly AngelList Talent)
- Remote.co
- We Work Remotely
- Stack Overflow Jobs
- GitHub Jobs
- Kaggle Jobs (for data science roles)

### Direct Applications
- Company career pages
- Startup directories
- Tech company career sites
- Research institutions
- International opportunities

## 📞 Support

If you need to update any information:
1. Edit `Ali_Kibret_Resume.tex`
2. Recompile
3. Review PDF
4. Update portfolio website accordingly

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Format**: LaTeX (ATS-Compatible)  
**Author**: Ali Kibret Muhamed

