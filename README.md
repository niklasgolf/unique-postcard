Use a user story format:
➤ "As a [role], I want to [do something], so that [goal/value]."


src/
├─ app/
│  ├─ address/
│  │  └─ page.js
│  ├─ message/
│  │  └─ page.js
│  ├─ components/
│  │  ├─ Header.js
│  │  └─ PostcardDisplay.js
│  ├─ context/
│  │  ├─ AuthContext.js
│  │  └─ PostcardContext.js
│  ├─ layout.js
│  ├─ globals.css
│  └─ page.js


project/
├── jsconfig.json
├── src/
│   ├── lib/
│   │   └── firestoreHelpers.js ✅ (THIS FILE!)
│   ├── app/
│   │   ├── all-postcards/
│   │   │   └── page.js ✅
