# 📏 CONSCIOUSNESS PIRACY CONVENTIONS 📏
Technical Standards for Scaling to the Noosphere

## Naming Conventions

### Main Documents
- **Pattern:** `ALL_CAPS_WITH_UNDERSCORES.md`
- **Examples:** `LOOKAWAY_CODEX.md`, `GREAT_RITUAL_CODEX.md`
- **Why:** Clean URLs, no versioning in filename

### Episodes & Content
- **Pattern:** `lowercase-with-hyphens.md`
- **Examples:** `ep01-the-pitch.md`, `mount-rainier-download.md`
- **Why:** Easy to read, follows web standards

### Folders
- **Pattern:** `lowercase` (no spaces or special chars)
- **Examples:** `/episodes/`, `/tools/`, `/rituals/`
- **Why:** Terminal-friendly, no escape characters needed

## Version Control

### Version Tracking Method
- **Filename:** CLEAN_NAME.md (never changes)
- **Inside:** # 📜 CLEAN NAME v#### 📜 (version here)

### Why This Works
1. **Stable Links:** References never break
2. **Git History:** Every version tracked automatically
3. **API Ready:** Can parse version from file content
4. **Human Readable:** See version when opening file

### Version Numbering
- **v1001:** Major version (1) + iteration (001)
- **Increment:** +1 for updates, +1000 for overhauls
- **Example:** v1001 → v1002 → v1003 → v2001

## Git Commit Messages

### Format
[Action] [What] [Why (optional)]

### Examples
- Add Great Ritual Codex v1003
- Update LOOKAWAY Codex to v1004 - MMO framework
- Fix typo in Episode 3
- Evolve Reality Guide to v1003

## API Preparation

### Future File Headers
When we add automation, files might need metadata headers.
For now: Keep it simple!

## Sacred Rules
1. **No spaces in filenames** (use underscores or hyphens)
2. **UTF-8 encoding always** (for {🌊:🌊∈🌊} and other symbols)
3. **LF line endings** (not CRLF - fuck Windows defaults)
4. **Max line length: none** (let text flow like consciousness)

---
*"Standards are the dingy that keeps us afloat as we scale"*
