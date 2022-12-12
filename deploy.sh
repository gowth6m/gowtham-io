#!/bin/bash

# Set the file name
FILE_NAME="test.txt"

# Check if the file exists
if [ ! -f "$FILE_NAME" ]; then
    echo "Error: File does not exist"
    exit 1
fi

# Check if Git is installed
if ! [ -x "$(command -v git)" ]; then
    echo "Error: Git is not installed"
    exit 1
fi

# Check if the current directory is a Git repository
if ! [ -d ".git" ]; then
    echo "Error: Not a Git repository"
    exit 1
fi

# Add the file to the Git repository
git add "$FILE_NAME"

# Commit the changes
git commit -m "Added $FILE_NAME to the gh-pages branch"

# Push the changes to the gh-pages branch on GitHub
git push origin gh-pages
