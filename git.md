# Intro to GitHub with VSCode

**Duration:** 80 minutes  
**Level:** True Beginners  
**Goal:** Students can clone a repo, make changes, stage, commit, push, and resolve a basic merge conflict using VSCode's Source Control panel.

---

## Segment 1: Why Git? (10 min)

**The "undo" problem story** — ask students: "What would you do if you accidentally deleted all your code?" Let them respond, then explain how Git solves this.

Key concepts to cover conversationally:

- Git = a save history for your code
- GitHub = where that history lives in the cloud
- A **repository (repo)** = a project folder Git is tracking

No slides needed — keep it a short discussion.

---

## Segment 2: Tour of VSCode's Source Control Panel (10 min)

Open VSCode and walk through the UI together:

- The **branch icon** in the sidebar (Source Control)
- What the panel looks like _before_ and _after_ making a change
- The **status bar** at the bottom (branch name, sync icons)

Have students open a project folder they already have. Don't clone yet — just show them that the panel exists and what it tracks.

---

## Segment 3: Clone a Repo (10 min)

Walk through cloning step by step:

1. Open GitHub in the browser, find the repo
2. Copy the HTTPS clone URL
3. In VSCode: `Ctrl+Shift+P` → "Git: Clone" → paste URL
4. Choose a folder → Open the cloned repo

**Quick CLI peek (1–2 min):** Open the terminal and show `git status` so they see what's happening "under the hood." Tell them: _"The VSCode panel is doing this command for you visually."_

---

## Segment 4: Make a Change & Stage It (10 min)

Have students:

1. Open a file and make a small edit (e.g., change a heading or add a comment)
2. Notice the file turn **yellow/M** in the Source Control panel
3. Click the **+** icon to **stage** the file

Explain staging: _"It's like putting things in a box before you seal and mail it. You choose what goes in."_

**CLI peek:** Show `git add .` briefly — one line, don't dwell on it.

---

## Segment 5: Commit (10 min)

- Type a commit message in the message box
- Hit the **✔ Commit** button
- Show students the file is now clean (no M badge)

Talk about **good commit messages**: short, descriptive, present tense ("Add hero section" not "stuff" or "asdfgh").

Have them practice: make another small change → stage → commit with a meaningful message.

**CLI peek:** Show `git commit -m "message"`.

---

## Segment 6: Push & Pull (10 min)

**Push:**

- Click the **Sync Changes** button (or the cloud/up-arrow in the status bar)
- Go to GitHub in the browser — show them the commit appeared!

**CLI peek:** Show `git push`.

**Pull:**

- Edit a file directly on GitHub.com, then back in VSCode click **Sync** / down-arrow
- Show the change appeared locally

Explain: _"When working in teams, you always pull before you start working."_

**CLI peek:** `git pull`.

---

## Segment 7: Merge Conflicts (15 min)

**Setup — Create a conflict (you demo, they watch first):**

1. Edit line 1 of a file in VSCode → commit, but **don't push yet**
2. Go to GitHub.com → edit that **same line** in the same file → commit there
3. Back in VSCode → try to **Sync/Pull**
4. VSCode will flag the conflict — the file turns **red/C** in the Source Control panel

**Explain what happened:** _"Two versions of the same line exist and Git doesn't know which one to keep. It needs you to decide."_

**Show the conflict markers in the file:**

```
<<<<<<< HEAD
Your local change
=======
The change from GitHub
>>>>>>> origin/main
```

**VSCode makes this easier — show the inline options:**

- **Accept Current Change** (keep your local version)
- **Accept Incoming Change** (keep the GitHub version)
- **Accept Both Changes** (keep both, stacked)
- **Compare Changes** (side-by-side diff view)

Walk through clicking "Accept Incoming Change" together, then:

- Stage the resolved file → commit → push

**CLI peek:** Briefly show what the conflict markers look like in raw terminal output — reinforce that VSCode is just presenting this visually.

**Key takeaway to say out loud:** _"Merge conflicts sound scary but they're just Git asking you a question: which version do you want?"_

---

## Segment 8: Guided Practice (10 min)

Students work independently or in pairs:

1. Edit 2–3 files → stage, commit, push (reinforce earlier skills)
2. **Intentionally create a conflict:** edit the same line locally and on GitHub, then try to sync
3. Resolve it using the VSCode inline buttons
4. Verify on GitHub.com that the resolved commit appears

Circulate and watch for students accidentally dismissing the conflict UI or being unsure which version to keep — reassure them there's no wrong answer in a practice scenario.

---

## Wrap-Up & Questions (5 min)

Quick verbal review:

- _"What's the difference between staging and committing?"_
- _"What does pushing do?"_
- _"What causes a merge conflict?"_
- _"How does VSCode help you resolve one?"_

---

## Key Commands Reference Card

| VSCode Action            | CLI Equivalent                    |
| ------------------------ | --------------------------------- |
| Source Control panel → + | `git add .`                       |
| Type message → ✔ Commit  | `git commit -m "message"`         |
| Sync Changes ↑           | `git push`                        |
| Sync Changes ↓           | `git pull`                        |
| Git: Clone               | `git clone <url>`                 |
| File shows red/C badge   | Merge conflict — resolve manually |
| Bottom status bar        | `git status`                      |
