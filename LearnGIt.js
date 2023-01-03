// use git config --global user.name to find the name in bash
// use git config --global user.email to find the name in bash

// There are four regions

//1. Untracted region
//2. Unmodified region
//3. modified region
//4. Staged region

// use --git status to find the status
// use --git add -A to add all files from untracked to staging
//use  --git comit --m "First commit"  to commit file from statging to main branch
// if any changes occurs in the file then it moves in modified zoneand needs to be staged and commited again

//use --git checkout "filename.txt"(for one file) || (--git checkout -f (for all file))   to make the file as previous committed file if any changes were made to file by user externally
//use >>git diff to compare your in working directory code with  staging code
//use >>git diff --staged to compare you staging code with last commit

//use >> git commit -a -m "Skipped staging area and committed directly"
