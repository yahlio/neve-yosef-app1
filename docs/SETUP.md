# הקמה: מאפס ועד אתר שמתעדכן לבד

## 1. התקנות (פעם אחת)
**Git**
- Windows: להוריד מ-https://git-scm.com/downloads/win ולהתקין עם ברירות המחדל.
- Mac: להקליד `git --version` בטרמינל. אם הוא לא מותקן, המחשב יציע להתקין.

**Claude Code** (דורש מנוי Pro, Max, Team או Enterprise)
- Windows, בחלון PowerShell:
  `irm https://claude.ai/install.ps1 | iex`
- Mac, בטרמינל:
  `curl -fsSL https://claude.ai/install.sh | bash`
- לפתוח טרמינל חדש ולהריץ `claude --version`. אם מופיע מספר גרסה, ההתקנה עבדה.
- בהרצה הראשונה של `claude` נפתח דפדפן להתחברות.
- מקור: https://code.claude.com/docs/en/setup

**חשבון GitHub**: נרשמים בחינם ב-https://github.com

## 2. להעלות את הפרויקט ל-GitHub
בתוך התיקייה מריצים `claude` וכותבים:
> צור git repo, תעשה commit ראשון, ותעזור לי להעלות אותו ל-GitHub כ-repo פרטי בשם neve-yosef-app

## 3. לחבר את Netlify ל-GitHub
1. ב-https://app.netlify.com פותחים את **האתר הקיים**. חשוב לא ליצור אתר חדש, כדי שהכתובת והנתונים יישארו.
2. Site configuration ← Build & deploy ← Link repository ← GitHub ← בוחרים את `neve-yosef-app`.
3. Build command: להשאיר ריק. Publish directory: `.`
4. מעכשיו כל push מעדכן את האתר תוך כדקה.

## 4. שגרת עבודה
1. `claude` בתיקייה, ומבקשים שינוי.
2. לבדוק ב-`index.html` מקומית.
3. לבקש: "תעשה commit ו-push".
4. אחרי דקה האתר מעודכן.
