// use git config --global user.name to find the name in bash
// use git config --global user.email to find the name in bash

// There are four regions

//1. Untracted region
//2. Unmodified region
//3. modified region
//4. Staged region
/*

use >>git status to find the status
use >>git add -A to add all files from untracked to staging
use  >>git comit --m "First commit"  to commit file from statging to main branch
if any changes occurs in the file then it moves in modified zoneand needs to be staged and commited again

use >>git log -p -2 to check the last 2 commit changes
use >>git checkout "filename.txt"(for one file) || (--git checkout -f (for all file))   to make the file as previous committed file if any changes were made to file by user externally
use >>git diff to compare your in working directory code with  staging code
use >>git diff --staged to compare you staging code with last commit

use >> git commit -a -m "Skipped staging area and committed directly"

use >>git rm "filename.txt" deletes the file completely from directory and staging s well
use >>git rm --cached "filename.txt" to remoeve file from staging and puts to untracked files

use >>git status -s to check the file in which states using symbol

.gitignore file is created to store information where we don't want to push to server

--             Branhes to GIt

use >>git branch -b feature1 to create a branch of name feature1 and switch in that branch
use >>git branch  feature1 to create a branch of name feature1 and remain in master branch
use >>git branch to see number of branches
use >>git checkout feauture1 to switch our branch to featuure1
use >>git merge feature1 to merge the branches

*/