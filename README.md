#KnockoutJS-Trivia

#Contributors
David Tarvin
Ethan Townsend
Jason Sullenger
Christopher Wilson

Team Name:

Team Alpha Queue

The App:

This is a group assignment for a javascript course @ Bellevue University. This
is a single page app, using MVVM patterns, for a 10 question trivia game with
questions focused on last semester's javascript I course and its material. The
user will have the ability to move back to previous questions, and move to the
next question. Once finished, the user will submit the questions to be graded
to then be either reprimanded/scolded, or awarded a gold star for paying attention
in school.

Git flow:

To help students get familiar with working on funcionality at the same time as
each other, and to mitigate the joys of 'rebase hell', we will use a slightly
non-normal git flow. Each dev will have a fork of this repo serving as their
'origin', and will also add the main repo as their 'upstream'. When working on
milestones, each devloper will make sure that they pull the latest changes from
the upstream master branch, and then will cut a new branch from their origin
master, the new feature branch will be named based on what issue/feature they
are working with. Detailed instructions will be laid out below.

\*\*Note: If you haven't already, please install the following VSCode extensions:

1. Prettier - Code Formatter
2. EditorConfig for VS Code

/////////////////////////////////////////////// Git Instructions:

Initial Setup -

Navigate to https://github.com/TransientCW/KnockoutJS-Trivia

1. On the top-right portion of the page, select the 'fork' button.

2. When it asks, 'Where should we fork.......', select your proper github account.
   If you do not see your account, make sure you are logged in.

3. Once it is done forking, you will now see it as one of your own repos on your
   github page.

4. Click the green 'Clone or Download' button from your fork's page, and copy
   the URL. (Use whichever protocol (http or ssl) that you normally do (explaining
   the difference is outside the scope of this project)).

5. Open a command prompt or terminal on your local computer at home. Navigate
   to the folder where you want to clone your fork. Type 'git clone (paste the
   URL that you copied in the last step)'
   and hit enter.

6. You now have a cloned copy of your fork residing on your local computer, with
   'origin master' pointing to the origin master of your remote fork. Navigate into
   the new directory that has been cloned onto your computer.

7. Next we want to add our 'upstream'. The upstream will be pointing to the main
   repo at the URL above. This serves as our main, final master branch. Throughout
   the duration of the project, when changes get merged into this upstream master
   branch by other teammates, you will be constantly pulling in these changes
   into your fork so that when you are working on new features, you have all the
   latest changes.
   Type the following into your command prompt/terminal:

   git remote add upstream git@github.com:TransientCW/KnockoutJS-Trivia.git

   Now if you type git remote -v, you will see that you essentially have an
   origin (fetch and push), which points to your fork, and an upstream (fetch and push),
   which points to the main repo on my github account.

///////////////////// Creating New Feature Branches For Your Tickets -

Now that you have an origin pointing to your fork, and an upstream pointing to
the main repo on my account, you are all set to start coding. We will be assigning
tickets to each dev to allow for making small, incremental changes like you will
most likely be doing at work in an Agile environment.

1. Make sure you pull all changes from the upstream master branch. In a command
   prompt/terminal, navigate to your forks directory on your local computer. Once inside
   your fork directory, type:

   git pull --ff-only upstream master

   If there are changes that have been merged into upstream master, you will
   see a bunch of code be pulled in. To now add these changes to your origin
   master remote branch (the fork's origin master living remotely on
   the github pages), type 'git push origin master'. Now all changes are pushed remotely
   to your fork living on github.com. You are now able to cut a new feature branch
   to start your work.

2. Create a new feature branch by typing:

   git checkout -b issue-blahblahblah

   From our waffleboard, you will have ticket numbers assigned to you, so you'll
   replace blahblahblah with the actual ticket number (Top left of your ticket
   is a number).

3. CODE!!! Once you have added your code and finished the feature/ticket you
   are assigned, and you are confident that you are happy with the way the
   application is running, you are now ready to commit all your code changes,
   and submit a pull request to have those changes approved and merged into the
   upstream master branch. type:

   git add -A (hit enter)
   git commit -m "type a message explaining details of what you did, doesn't
   have to be super detailed" (hit enter)
   git push origin issue-blahblah

   Your code changes will be pushed up to your fork on the github pages.

   Now navigate to the URL associated with your fork in a web browser. You will
   notice that towards the top of your page there is now a pull request box,
   with a green button that says 'compare and pull request'. Click the green button.
   This takes you to the new pull request page. Under the 'Open a pull request'
   header, you will see a gray box. Select the following values

   (On the left hand side of the gray arrow inbetween the dropdown boxes) -

   base repository: TransientCW/KnockoutJS-Trivia
   base: master

   (On the right hand side of the gray arrow inbetween the dropdown boxes) -

   head repository: YourGitUserName/KnockoutJS-Trivia
   compare: issue-blahblah

   Note -
   What the above is doing, is saying that you want to take your code changes
   from the feature branch (issue-blahblah) that is a part of your fork, and
   request to have someone review the changes, and then merge those changes into
   the master branch of the main (upstream) repository.

   Lastly, underneath the boxes that you just worked with, you will want to leave
   a title - It's up to you, just put something descriptive.

   Underneath the title is the 'Leave a comment'..... Here, please use the following
   format:

   Fixes #xxxx

   Where xxxx is the actual ticket number from your assigned ticket on the waffleboard
   (very top left of the ticket is a number)

   This will link the pull request on the github pages, to the actual ticket on the
   waffleboard and will make it easier for the dev's reviewing your code to find
   the pull request on github - it adds a little green github icon on your ticket
   providing a direct link to your PR.

For any issues or behaviors that are troubling you, I will always have our slack
channel open whether at home or at work.
