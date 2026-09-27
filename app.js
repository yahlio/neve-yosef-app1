(function(){
"use strict";
/* ================= DATA ================= */
var DAYS = [
 {n:"ראשון",l:"א",tag:"יום אחרי משחק, כוח פלג גוף תחתון",items:[
  {c:"school",t:"08:10–15:20",h:"בית ספר"},
  {c:"team",t:"אחה\"צ",h:"אימון אחרי משחק: חימום תנועתי",d:"שיחקת 60%+ מהדקות: פלג גוף עליון + גלילים (רמה 1–2). פחות מ־60%: השלמת פלג גוף עליון + פארטלק מקצבים (רמה 3–4)."},
  {c:"personal",t:"אחרי",h:"כוח היפרטרופיה אישי",d:"סקוואט כבד 3×5, RDL 3×6, לאנג'ים 3×8. 80–88% 1RM, מהירות קונצנטרית מרבית. אפשר להעביר לשני בבוקר."},
  {c:"fuel",t:"כל היום",h:"פחמימות 4–5 g/kg, חלבון 120 g"},
  {c:"recovery",t:"ערב",h:"גליל עיסוי + אקדח מסאז'",d:"עצמה נמוכה, 60 שניות לכל שריר."},
  {c:"recovery",t:"22:30",h:"שינה 8.5–9 שעות"}
 ],note:"<b>חלוקה לפי דקות:</b> מי ששיחק מעל 60 דקות מבצע את פרוטוקול ההתאוששות של המועדון. אימון הכוח לרגליים (סקוואט ו־RDL) ממוקם היום או עובר לשני בבוקר, כדי להשאיר לפחות 72 שעות התאוששות מטבולית ועצבית עד שבת."},
 {n:"שני",l:"ב",tag:"יום חופש קבוצתי, טכניקה ואתלטיקה",items:[
  {c:"recovery",t:"07:00",h:"שקילה שבועית על בטן ריקה",d:"לרשום בלשונית המדדים."},
  {c:"school",t:"08:10–14:30",h:"בית ספר"},
  {c:"fuel",t:"צהריים",h:"ארוחה גדולה בצהריים",d:"פחמימות 4 g/kg ביום."},
  {c:"team",t:"—",h:"יום חופש קבוצתי",s:1},
  {c:"personal",t:"15:30",h:"עבודת קיר 70% רגל שמאל + סריקה מעבר לכתף",d:"15 דקות. מסירה ברגל שמאל, השתלטות לשטח הפתוח, מסירה."},
  {c:"personal",t:"16:15",h:"פליאומטריה קלה: Pogo Jumps + צעד ראשון",d:"10 דקות, מצב עצבי רענן, מגע קרקע קצר מ־150 ms."},
  {c:"recovery",t:"ערב",h:"15 דק' מתיחות סטטיות + ירך 90/90"},
  {c:"recovery",t:"22:30",h:"שינה 8.5–9 שעות"}
 ]},
 {n:"שלישי",l:"ג",tag:"מוביליטי בבוקר, אימון ערב",items:[
  {c:"personal",t:"08:30–09:00",h:"מוביליטי ירך וקרסול + סריקה קוגניטיבית בחניון",d:"15 דקות."},
  {c:"school",t:"09:45–12:40",h:"בית ספר"},
  {c:"fuel",t:"כל היום",h:"פחמימות 5 g/kg, 3 ליטר מים"},
  {c:"team",t:"לפני",h:"Core רמה 1–2 + פלג גוף עליון/תחתון רמה 3",d:"לפני הכניסה למגרש."},
  {c:"team",t:"ערב",h:"חימום תנועתי + תגובה ואתלטיקה (רמה 3–4)"},
  {c:"fuel",t:"מיד אחרי",h:"תדלוק חלבון מיד בתום אימון הערב"},
  {c:"recovery",t:"22:30",h:"שינה 8.5–9 שעות"}
 ]},
 {n:"רביעי",l:"ד",tag:"היום המטבולי הכבד בשבוע",items:[
  {c:"school",t:"08:10–16:00",h:"בית ספר",d:"חלון פנוי 11:05–13:10."},
  {c:"fuel",t:"11:30–12:15",h:"בחלון: ארוחת פחמימות מורכבות + חלבון, ומנוחה"},
  {c:"fuel",t:"לפני",h:"סוכר זמין לפני פארטלק הספרינטים",d:"פחמימות 5 g/kg ביום."},
  {c:"team",t:"לפני",h:"Core רמה 4"},
  {c:"team",t:"אימון",h:"חימום + פארטלק/מעברים מגרש: ספרינטים 50×4",d:"רמה 4."},
  {c:"personal",t:"אחרי",h:"15 בעיטות מ־16 מטר ב־2 נגיעות",d:"טכניקת סיומת וכניסה מאוחרת לרחבה."},
  {c:"recovery",t:"—",h:"בלי כוח רגליים היום",s:1},
  {c:"recovery",t:"22:30",h:"שינה 8.5–9 שעות"}
 ],note:"<b>מניעת עייפות מרכזית:</b> האימון הכי עצים מטבולית בשבוע (Core 4 ופארטלק). אין אימון כוח רגליים נוסף. אחרי האימון רק 15 ניסיונות בעיטה, לא יותר."},
 {n:"חמישי",l:"ה",tag:"כוח עליון ותחילת העמסה",items:[
  {c:"school",t:"08:10–12:40",h:"בית ספר",d:"חלון פנוי 09:30–11:20."},
  {c:"fuel",t:"09:30–11:20",h:"ארוחת ביניים: פחמימות + חלבון"},
  {c:"personal",t:"14:30–15:15",h:"כוח פלג גוף עליון",d:"לחיצת חזה 3×6, מתח עם משקל 3×6, לחיצת כתפיים 3×8."},
  {c:"team",t:"לפני",h:"Core רמה 1–2"},
  {c:"team",t:"אימון",h:"חימום + אג'יליטי/תגובה + יציאות וצעד ראשון (רמה 3–4)"},
  {c:"fuel",t:"כל היום",h:"תחילת העמסה: פחמימות 6 g/kg, נוזלים מוגברים"},
  {c:"recovery",t:"22:00",h:"שינה מוקדמת ב־22:00"}
 ]},
 {n:"שישי",l:"ו",tag:"הכנה למשחק, גירוי עצבי",items:[
  {c:"school",t:"08:10–12:40",h:"בית ספר"},
  {c:"team",t:"13:00",h:"אימון הכנה: Core 1 + חימום + אקטיבציה ותגובה (רמה 1)",d:"גירוי עצבי וחדות, נפח נמוך מאוד."},
  {c:"personal",t:"באימון",h:"3 יציאות ל־5 מטר ב־100% קצב",d:"אקטיבציה עצבית בלבד, בלי משקולות."},
  {c:"fuel",t:"כל היום",h:"העמסת שיא: פחמימות 7–8 g/kg",d:"פסטה, אורז, תפוחי אדמה."},
  {c:"fuel",t:"כל היום",h:"הידראציה מלאה"},
  {c:"recovery",t:"22:30",h:"שינה 8.5–9 שעות"}
 ],note:"<b>גירוי עצבי בלבד:</b> נפח נמוך מאוד, בלי שום עבודה מתישה. העמסת 7–8 g/kg מביאה את ריווי הגליקוגן בשרירים לשיא לקראת שבת."},
 {n:"שבת",l:"ש",tag:"יום משחק",match:1,items:[
  {c:"school",t:"—",h:"חופש מבית ספר",s:1},
  {c:"fuel",t:"-3:00",h:"ארוחת טרום משחק: פחמימות קלות",d:"3 שעות לפני. פחמימות 6–8 g/kg ביום."},
  {c:"personal",t:"חימום",h:"5 דק' סריקה ומגע ברגל שמאל + אקטיבציה לקרסול ולמפשעה"},
  {c:"fuel",t:"-0:15",h:"תמר או ג'ל אנרגיה 15 דק' לפני"},
  {c:"match",t:"שריקה",h:"יום משחק ⚽"},
  {c:"fuel",t:"מחצית",h:"תמר או ג'ל אנרגיה במחצית"}
 ]}
];
var CARBS = [[4,5],[4,4],[5,5],[5,5],[6,6],[7,8],[6,8]];
var CAT = {school:"בית ספר",team:"נווה יוסף",personal:"אימון אישי",fuel:"תזונה",recovery:"התאוששות",match:"משחק"};
var FRI = ["סיום בית ספר ב־12:40 וארוחה לפני האימון","אימון הכנה ב־13:00: Core 1, חימום, אקטיבציה ותגובה רמה 1","3 יציאות ל־5 מ' ב־100% קצב, בלי משקולות","העמסת פחמימות 7–8 g/kg (פסטה, אורז, תפוחי אדמה)","הידראציה מלאה לאורך היום","בלי עבודה מתישה","שינה עד 22:30, חדר חשוך 18–20°C, בלי מסכים 60 דק' לפני"];
var SAT = ["ארוחת טרום משחק 3 שעות לפני: פחמימות קלות","בקבוק מים מלא לחימום ולמחצית","חימום אישי: 5 דק' סריקה ומגע ברגל שמאל","אקטיבציה דינמית לקרסול ולמפשעה","תמר/ג'ל 15 דק' לפני השריקה","לפני כל קבלת כדור: לסרוק כשהכדור בתנועה, מבט אחרון רגע לפני הנגיעה","לחפש כניסה מאוחרת, חצי־שטח וריצה בין בלם למגן","תמר/ג'ל במחצית"];

DAYS[1].items[4]={c:"personal",t:"15:30",h:"אימון כדורגל אישי (כ־70 דק'): טכניקה, סריקה וסיומת",d:"כל השלבים, הזמנים והטיימר בכרטיס \"התרגילים של היום\" למטה. 70% מהנגיעות ברגל שמאל."};
DAYS[1].items[5].t="בתוך האימון";
DAYS[3].items[2].d="לפני האימון העצים.";

/* ================= EXERCISE LIBRARY ================= */
var EX={
 squat:{n:"סקוואט אחורי",g:"כוח",cues:["כפות רגליים ברוחב כתפיים, אצבעות מעט החוצה","שאיפה עמוקה לבטן ונעילת ליבה לפני כל חזרה","ברכיים בכיוון האצבעות, ירידה עד ירך מקבילה לרצפה לפחות","עלייה מהירה ככל האפשר (Intent to Move)"],err:["ברכיים קורסות פנימה","עקבים מתרוממים","גב מתעגל בתחתית התנועה"],reg:"Goblet Squat עם משקולת יד אחת מול החזה",why:"בסיס הכוח לפשיטה התלת־מפרקית ולצעד הראשון."},
 rdl:{n:"דדליפט רומני (RDL)",g:"כוח",cues:["המוט צמוד לרגליים לאורך כל התנועה","דוחפים אגן לאחור, ברכיים כפופות מעט וקבועות","יורדים עד מתיחה חזקה בהמסטרינג, בערך אמצע השוק","עולים על ידי דחיפת האגן קדימה"],err:["עיגול גב","כפיפת ברכיים יתרה שהופכת את התנועה לסקוואט","המוט מתרחק מהגוף"],reg:"RDL עם משקולות יד",why:"שרשרת אחורית חזקה לספרינט ולהגנה על ההמסטרינג."},
 lunge:{n:"לאנג' הליכה",g:"כוח",cues:["צעד ארוך, ברך אחורית כמעט נוגעת ברצפה","גו זקוף, ברך קדמית מעל כף הרגל","דוחפים מהעקב הקדמי לצעד הבא"],err:["ברך קדמית קורסת פנימה","צעד קצר מדי שמעמיס על הברך"],reg:"לאנג' במקום בלי משקל",why:"כוח חד־רגלי ויציבות אגן, כמו בריצה ובבעיטה."},
 bench:{n:"לחיצת חזה",g:"כוח",cues:["שכמות מכווצות לאחור ולמטה, כפות רגליים יציבות ברצפה","המוט יורד מבוקר לאמצע החזה","מרפקים בזווית של כ־45° מהגוף"],err:["קפיצת המוט מהחזה","ישבן מתרומם מהספסל"],reg:"לחיצת חזה עם משקולות יד",why:"פלג גוף עליון חזק למאבקי כתף."},
 pullup:{n:"מתח עם משקל",g:"כוח",cues:["אחיזה מעט רחבה מהכתפיים, תלייה מלאה בהתחלה","מושכים עד שהסנטר מעל המוט","ירידה מבוקרת, 2 שניות"],err:["נדנוד רגליים","חצי טווח תנועה"],reg:"מתח עם גומייה או מתח שלילי (ירידה איטית בלבד)",why:"גב וליבה חזקים ליציבות במאבקים."},
 ohp:{n:"לחיצת כתפיים בעמידה",g:"כוח",cues:["ישבן ובטן נעולים, בלי קשת בגב התחתון","המוט עולה בקו ישר מעל אמצע כף הרגל","הראש זז אחורה כדי לפנות מקום למוט ואז חוזר קדימה"],err:["קשת גדולה בגב התחתון","דחיפה ברגליים"],reg:"לחיצת כתפיים בישיבה עם משקולות יד",why:"כתפיים יציבות ומניעת פציעות בנפילות."},
 nordic:{n:"נורדיק המסטרינג",g:"מניעת פציעות",cues:["שותף מחזיק את הקרסוליים, גוף ישר מהברך ועד הראש","יורדים קדימה לאט ככל שאפשר","הידיים בולמות את הנפילה, וחוזרים למעלה בדחיפה קלה"],err:["כפיפה באגן במקום גוף ישר","ירידה מהירה בלי שליטה"],reg:"טווח קצר יותר או ירידה לכרית",why:"תרגיל הליבה של FIFA 11+ להפחתת קרעים בהמסטרינג."},
 copen:{n:"Copenhagen אדוקטורים",g:"מניעת פציעות",cues:["פלאנק צידי, הרגל העליונה על ספסל","רמה 1: הברך על הספסל. רמה 2: כף הרגל על הספסל","גוף ישר, האגן לא צונח"],err:["האגן צונח לרצפה","סיבוב הגוף קדימה"],reg:"פלאנק צידי רגיל",why:"מפחית פציעות מפשעה בכדורגלנים."},
 pogo:{n:"Pogo Jumps",g:"פליאומטריה",cues:["קרסול נוקשה, ברכיים כמעט ישרות","מגע קצר מאוד בקדמת כף הרגל, כאילו הרצפה חמה","הזמן באוויר חשוב פחות מהמהירות מהרצפה"],err:["נחיתה על העקבים","כפיפת ברכיים עמוקה"],reg:"קפיצות חבל",why:"קשיחות גיד אכילס והחזר אנרגיה אלסטית."},
 snap:{n:"Snap Down",g:"פליאומטריה",cues:["מידיים למעלה, 'נופלים' במהירות לתנוחת נחיתה אתלטית","ברכיים מעל האצבעות, חזה קדימה","עוצרים דום בלי תזוזה"],err:["ברכיים קורסות פנימה","נחיתה רועשת"],reg:"ירידה איטית לתנוחה",why:"מלמד לבלום נכון לפני עומסי קפיצה גבוהים."},
 bound:{n:"Horizontal Bounding",g:"פליאומטריה",cues:["דחיפה חזקה אחורה ולמעלה מכל רגל","ברך קדמית גבוהה, ידיים עובדות נגדית","נחיתה מתחת למרכז הגוף"],err:["נחיתה על העקב הרחק לפני הגוף","צעדים קצרים ומהירים במקום קפיצות"],reg:"סקיפ ארוך",why:"המרת כוח אנכי לדחף אופקי."},
 drop:{n:"Drop Jump מקופסה 30 ס\"מ",g:"פליאומטריה",cues:["יורדים מהקופסה בצעד, לא קופצים ממנה","נוחתים על שתי הרגליים וקופצים מיד למעלה","מגע קרקע קצר מ־150 ms"],err:["ישיבה עמוקה בנחיתה","השהייה על הרצפה"],reg:"Snap Down",why:"ספיגת עומס אקסצנטרי והחזרה מהירה."},
 landmine:{n:"Landmine First-Step Drive",g:"צעד ראשון",cues:["גוף נוטה קדימה על המוט, זווית שוק נמוכה","3–5 צעדים חזקים, דחיפה מלאה מכל רגל","פשיטה מלאה של ירך, ברך וקרסול"],err:["גוף זקוף מדי","צעדים ארוכים מדי שבולמים"],reg:"Wall Drive (דחיפה לקיר במקום)",why:"זווית הדחף של היציאה במגרש."},
 starts:{n:"יציאות 5 מטר",g:"צעד ראשון",cues:["זווית שוק נמוכה, גוף נוטה קדימה","3 צעדים ראשונים חזקים וקצרים","מנוחה מלאה של 60–90 שנ' בין חזרות"],err:["הזדקפות מוקדמת","מנוחה קצרה שמורידה איכות"],reg:"—",why:"חדות עצבית בלי עייפות."},
 wall:{n:"עבודת קיר ברגל שמאל",g:"טכניקה",cues:["70% מהנגיעות בשמאל","מסירה בשמאל, השתלטות בשמאל לכיוון השטח הפתוח, מסירה","לפני כל קבלה: מבט מעבר לכתף"],err:["להחליף לימין כשזה קשה","עצירה מתה של הכדור במקום השתלטות קדימה"],reg:"מרחק קצר יותר מהקיר",why:"רגל חלשה מ־65% ל־80%+."},
 scan:{n:"תרגיל סריקה",g:"קוגניטיבי",cues:["קונוסים בצבעים שונים מאחוריך או שותף שמרים אצבעות","סורקים כשהכדור בתנועה אליך, לא כשהוא נעצר","אומרים בקול מה ראית לפני הנגיעה"],err:["סיבוב ראש איטי שלוקח יותר מ־0.7 שנ'","להסתכל רק על הכדור"],reg:"בלי כדור: מבט וקריאה בלבד",why:"יעד 0.6 סריקות לשנייה."},
 m9090:{n:"ירך 90/90",g:"מוביליטי",cues:["שתי ברכיים ב־90°, גו זקוף","מעבר איטי מצד לצד בלי ידיים","נשיפה ארוכה בקצה הטווח"],err:["גב מתעגל","מעבר מהיר מדי"],reg:"עם ידיים על הרצפה מאחור",why:"טווח תנועה בירך לבעיטה ולשינויי כיוון."},
 ankle:{n:"קרסול: ברך לקיר",g:"מוביליטי",cues:["כף הרגל מול הקיר, הברך נוגעת בקיר בלי שהעקב יתרומם","מתרחקים בכל פעם כמה מ\"מ"],err:["עקב מתרומם","ברך קורסת פנימה"],reg:"—",why:"טווח קרסול לזווית שוק נמוכה ביציאה."},
 shots:{n:"15 בעיטות מ־16 מטר",g:"סיומת",cues:["2 נגיעות: השתלטות לכיוון הבעיטה ובעיטה","מכוונים לפינות הנמוכות","בדיוק 15, לא יותר, אחרי האימון הכבד"],err:["בעיטה בכוח על חשבון דיוק"],reg:"—",why:"יעד של 7 שערים בעונה."},
 actv:{n:"חימום אישי למשחק",g:"אקטיבציה",cues:["5 דק' מגעים ברגל שמאל וסריקה","אקטיבציה דינמית לקרסול: הקפצות קלות, סיבובים","מפשעה: פתיחות וסגירות ירך, Lateral Lunge דינמי"],err:["מתיחות סטטיות ארוכות לפני משחק"],reg:"—",why:"מוכנות עצבית בלי עייפות."}
};
var PH=[
 {n:"צבירה",d:"עומס בינוני, RIR 3. בונים נפח וטכניקה מהירה."},
 {n:"העמסה",d:"אותו נפח עם משקל גבוה יותר, RIR 2."},
 {n:"שיא",d:"פחות חזרות, עומס של 86–88%, RIR 1–2. השבוע הכבד בבלוק."},
 {n:"פריקה",d:"נפח יורד בכ־40% ועצימות נמוכה. הגוף סופג את העבודה, ואחר כך מתחיל בלוק חדש."}
];
var PROG={
 0:[
  {x:"squat",v:[["3×5","~80% 1RM, RIR 3"],["3×5","83–85%, RIR 2"],["4×4","86–88%, RIR 1–2"],["2×5","70–75%, RIR 4"]],r:"2–3 דק'",t:"ירידה 2–3 שנ', עלייה מתפרצת",log:1},
  {x:"rdl",v:[["3×6","RIR 3"],["3×6","RIR 2"],["3×5","RIR 2, כבד יותר"],["2×6","RIR 4"]],r:"2 דק'",t:"ירידה 3 שנ'",log:1},
  {x:"lunge",v:[["3×8 לרגל","RIR 3"],["3×8 לרגל","RIR 2"],["3×6 לרגל","RIR 2, כבד יותר"],["2×8 לרגל","קל"]],r:"90 שנ'",t:"מבוקר",log:1}],
 1:[
  {x:"wall",hide:1,v:[["15 דק'","2 נגיעות בשמאל"],["15 דק'","נגיעה אחת + 2 נגיעות לסירוגין"],["15 דק'","2 נגיעות + מבט מעבר לכתף לפני כל קבלה"],["10 דק'","קל, 2 נגיעות"]],r:"—",t:"—"},
  {x:"pogo",v:[["3×10","~30 מגעים"],["3×12","~36 מגעים"],["3×15","~45 מגעים"],["2×10","~20 מגעים"]],r:"60 שנ'",t:"מגע <150 ms"},
  {x:"snap",v:[["3×5","נחיתה שקטה"],null,null,null],r:"45 שנ'",t:"—"},
  {x:"bound",v:[null,["3×5","קפיצות לסט"],["3×6","קפיצות לסט"],null],r:"90 שנ'",t:"—"},
  {x:"drop",v:[null,null,["3×4","קופסה 30 ס\"מ"],null],r:"90 שנ'",t:"מגע <150 ms"},
  {x:"landmine",v:[null,["3×4 לרגל","מוט ריק + משקל קל"],["3×5 לרגל","משקל בינוני"],null],r:"90 שנ'",t:"מתפרץ",log:1},
  {x:"starts",v:[["4×5 מ'","100%"],null,null,["3×5 מ'","100%"]],r:"60–90 שנ'",t:"—"},
  {x:"nordic",v:[["2×4","ירידה איטית"],["2×5","ירידה איטית"],["3×5","ירידה איטית"],["1×5","קל"]],r:"90 שנ'",t:"ירידה 3–5 שנ'"},
  {x:"copen",v:[["2×15 שנ' לצד","רמה 1"],["2×20 שנ' לצד","רמה 1"],["2×15 שנ' לצד","רמה 2"],["1×20 שנ' לצד","רמה 1"]],r:"45 שנ'",t:"החזקה"}],
 2:[
  {x:"m9090",v:[["2×6 לצד","איטי"],["2×6 לצד","איטי"],["2×8 לצד","איטי"],["2×6 לצד","איטי"]],r:"—",t:"—"},
  {x:"ankle",v:[["2×10 לצד",""],["2×10 לצד",""],["2×12 לצד",""],["2×10 לצד",""]],r:"—",t:"—"},
  {x:"scan",v:[["15 דק'","סריקה לפני כל קבלה"],["15 דק'","+ קריאה בקול של צבע/מספר"],["15 דק'","2 סריקות בין כל מסירה"],["10 דק'","קל"]],r:"—",t:"<0.7 שנ' למבט"}],
 3:[
  {x:"shots",v:[["15 בעיטות","דפוס 1: כניסה מאוחרת, נגיעה אחת לפינה נמוכה"],["15 בעיטות","דפוס 2: חצי־שטח, עצירה קדמית ובעיטה"],["15 בעיטות","דפוס 3: ריצה אלכסונית, סיומת בשמאל"],["15 בעיטות","5 מכל דפוס"]],r:"—",t:"2 נגיעות"}],
 4:[
  {x:"bench",v:[["3×6","~80%, RIR 3"],["3×6","~83%, RIR 2"],["4×4","~87%, RIR 1–2"],["2×6","~72%, RIR 4"]],r:"2–3 דק'",t:"ירידה 2 שנ', עלייה מתפרצת",log:1},
  {x:"pullup",v:[["3×6","RIR 3"],["3×6","RIR 2"],["4×4","RIR 1–2, משקל נוסף"],["2×6","משקל גוף"]],r:"2 דק'",t:"ירידה 2 שנ'",log:1},
  {x:"ohp",v:[["3×8","RIR 3"],["3×8","RIR 2"],["3×6","RIR 2, כבד יותר"],["2×8","קל"]],r:"90 שנ'",t:"מבוקר",log:1}],
 5:[
  {x:"starts",v:[["3×5 מ'","100%, בלי משקולות"],["3×5 מ'","100%, בלי משקולות"],["3×5 מ'","100%, בלי משקולות"],["3×5 מ'","100%, בלי משקולות"]],r:"60–90 שנ'",t:"—"}],
 6:[
  {x:"actv",v:[["~10 דק'","לפני החימום הקבוצתי"],["~10 דק'","לפני החימום הקבוצתי"],["~10 דק'","לפני החימום הקבוצתי"],["~10 דק'","לפני החימום הקבוצתי"]],r:"—",t:"—"}]
};

/* ================= STATE ================= */
var LS = "nevey-midfielder-v1";
var store=(function(){
  function usable(s){try{s.setItem("__t","1");s.removeItem("__t");return true;}catch(e){return false;}}
  try{if(typeof localStorage!=="undefined"&&usable(localStorage))return{m:"local",g:function(k){return localStorage.getItem(k);},s:function(k,v){localStorage.setItem(k,v);}};}catch(e){}
  try{if(typeof sessionStorage!=="undefined"&&usable(sessionStorage))return{m:"session",g:function(k){return sessionStorage.getItem(k);},s:function(k,v){sessionStorage.setItem(k,v);}};}catch(e){}
  var mem={};return{m:"none",g:function(k){return mem[k]||null;},s:function(k,v){mem[k]=v;}};
})();
var idb=(function(){var dp=null;
  function open(){if(dp)return dp;dp=new Promise(function(res,rej){try{var r=indexedDB.open("neveyosef",1);
    r.onupgradeneeded=function(){r.result.createObjectStore("kv");};r.onsuccess=function(){res(r.result);};r.onerror=function(){rej(r.error);};}catch(e){rej(e);}});return dp;}
  return{get:function(k){return open().then(function(d){return new Promise(function(res,rej){var q=d.transaction("kv","readonly").objectStore("kv").get(k);q.onsuccess=function(){res(q.result);};q.onerror=function(){rej(q.error);};});});},
    set:function(k,v){return open().then(function(d){return new Promise(function(res,rej){var tx=d.transaction("kv","readwrite");tx.objectStore("kv").put(v,k);tx.oncomplete=function(){res();};tx.onerror=function(){rej(tx.error);};});});}};
})();
function pad(n){return String(n).padStart(2,"0");}
function ymd(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());}
function ld(s){var p=String(s).split("-");return new Date(+p[0],p[1]-1,+p[2]);}
function weekKey(d){d=d||new Date();var s=new Date(d);s.setHours(0,0,0,0);s.setDate(s.getDate()-s.getDay());return ymd(s);}
var FX0=[["2026-10-17","הפ' נוף הגליל",1],["2026-10-31","מכבי בני ריינה",0],["2026-11-07","עירוני נשר",0],["2026-11-28","מ.כ. נהלל יזרעאל",1],["2026-12-05","מכבי ע.ק. אתא",0],["2026-12-19","עירוני טבריה",1],["2026-12-26","הפועל עפולה",0],["2027-01-09","הפועל עירוני כרמיאל",1],["2027-01-16","הפועל א.א. פאחם",0],["2027-01-23","",1,1],["2027-01-30","בני סכנין",0],["2027-02-06","בית\"ר טוברוק",1],["2027-02-13","הפועל עכו",1],["2027-02-20","מכבי צור שלום ק. ביאליק",0],["2027-02-27","מ.ס. קרית ים \"עדי\"",1],["2027-03-06","הפ' נוף הגליל",0],["2027-03-13","מכבי בני ריינה",1],["2027-03-20","עירוני נשר",1],["2027-03-27","מ.כ. נהלל יזרעאל",0],["2027-04-03","מכבי ע.ק. אתא",1],["2027-04-10","עירוני טבריה",0],["2027-04-17","הפועל עפולה",1],["2027-04-24","הפועל עירוני כרמיאל",0],["2027-05-01","הפועל א.א. פאחם",1],["2027-05-08","",0,1],["2027-05-15","בני סכנין",1],["2027-05-22","בית\"ר טוברוק",0]];
function defaultFx(){return FX0.map(function(f,i){return {id:"f"+i,d:f[0],opp:f[1],home:!!f[2],bye:!!f[3],time:"",comp:"ליגה"};});}
var state = {week:weekKey(),checks:{},kpis:[],bw:62.5,kickoff:"16:00",bed:"22:30",wake:"07:00",blockStart:weekKey(),custom:[],log:{}};
try{var raw=store.g(LS);if(raw){var p=JSON.parse(raw);if(p&&typeof p==="object")state=Object.assign(state,p);}}catch(e){}
function rollWeek(s){if(s.week!==weekKey()){s.week=weekKey();s.checks={};}s.custom=(s.custom||[]).filter(function(c){return c.rec||c.week===s.week;});s.log=s.log||{};s.blockStart=s.blockStart||weekKey();s.fixtures=s.fixtures||defaultFx();s.matches=s.matches||[];s.trainings=s.trainings||{};s.wk=s.wk||{};var cut=addDaysK(weekKey(),-21);Object.keys(s.wk).forEach(function(k){if(k<cut)delete s.wk[k];});s.teamStd=s.teamStd||{};s.teamStdExtra=s.teamStdExtra||[];s.chat=s.chat||[];}
rollWeek(state);
function blockWeek(){var a=ld(state.blockStart),b=ld(state.week);var n=Math.round((b-a)/(7*864e5));return ((n%4)+4)%4;}
function customFor(di){return (state.custom||[]).filter(function(c){return c.day===di&&(c.rec||c.week===state.week);});}

var db=null, docRef=null, saveT=null;
var cloudOk=false,localOk=(store.m==="local");
function save(){
  planMemo={};state.ts=Date.now();var j=JSON.stringify(state);
  try{store.s(LS,j);}catch(e){localOk=false;}
  idb.set(LS,j).catch(function(){});
  if(docRef){clearTimeout(saveT);saveT=setTimeout(pushCloud,600);}
  setSync();
}
function pushCloud(){if(!docRef)return;clearTimeout(saveT);
  return docRef.set(JSON.parse(JSON.stringify(state))).then(function(){cloudOk=true;setSync();}).catch(function(){cloudOk=false;setSync();});}
function setSync(){
  var el=document.getElementById("syncState");if(!el)return;
  var cls=cloudOk?"":(localOk?"warn":"bad");
  var t=cloudOk?"הנתונים נשמרים בחשבון Claude שלך ובמכשיר":(localOk?"הנתונים נשמרים במכשיר ובדפדפן הזה בלבד":"הדפדפן הזה לא שומר נתונים. השתמש בקוד הגיבוי בתחתית לשונית המדדים");
  el.innerHTML='<span class="okdot '+cls+'"></span>'+t;
  var w=document.getElementById("storeWarn");
  if(!cloudOk&&!localOk){w.className="storewarn on";w.innerHTML='<h3>הדפדפן הזה לא שומר את הסימונים</h3><p class="small" style="margin:0">זה קורה בדרך כלל כשפותחים את הקישור מתוך וואטסאפ או אינסטגרם. פתח את הקישור בדפדפן רגיל (Chrome או Safari) דרך תפריט "פתח בדפדפן", והוסף אותו למסך הבית. עד אז, שמור את הנתונים דרך "גיבוי ושחזור" שבתחתית לשונית המדדים.</p>';}
  else w.className="storewarn";
}
function flush(){try{store.s(LS,JSON.stringify(state));}catch(e){}idb.set(LS,JSON.stringify(state)).catch(function(){});if(docRef)pushCloud();}
window.addEventListener("pagehide",flush);
window.addEventListener("beforeunload",flush);
document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden")flush();});

/* ================= TABS ================= */
var tabs=[].slice.call(document.querySelectorAll(".tab"));
tabs.forEach(function(b){b.addEventListener("click",function(){
  tabs.forEach(function(x){x.setAttribute("aria-selected",x===b?"true":"false");});
  document.querySelectorAll(".panel").forEach(function(p){p.classList.toggle("on",p.id==="p-"+b.dataset.tab);});
  window.scrollTo({top:0,behavior:"smooth"});
});});

/* ================= WEEK ================= */
var today=new Date().getDay(), sel=today;
function dayPct(di){var a=ids(di);if(!a.length)return 0;return a.filter(function(k){return state.checks[k];}).length/a.length;}
function renderDays(){
  var w=document.getElementById("days");w.innerHTML="";
  DAYS.forEach(function(d,i){
    var b=document.createElement("button");b.className="day"+(i===today?" today":"")+(plan(state.week).ctx[i].next===0?" match":"");
    b.setAttribute("aria-pressed",i===sel?"true":"false");b.setAttribute("aria-label",d.n);
    b.innerHTML='<span class="dl">'+d.l+'</span><span class="dn">'+(i===today?"היום":d.n)+'</span><span class="dp"><i style="width:'+Math.round(dayPct(i)*100)+'%"></i></span>';
    b.onclick=function(){sel=i;renderDays();renderDay();};w.appendChild(b);
  });
}
function renderDay(){
  var P=plan(state.week);
  document.getElementById("dayTitle").innerHTML="יום "+DOW[sel]+' <span class="muted" style="font-size:1rem;font-weight:500">'+dmy(addDaysK(state.week,sel))+'</span>'+(P.light[sel]===1?'<span class="lightpill">מצב קל</span>':'');
  document.getElementById("dayTag").textContent=dayTagText(sel);
  var tl=document.getElementById("timeline");tl.innerHTML="";
  P.days[sel].items.forEach(function(it){
    var id=it.id, li=document.createElement("li");li.className="ti c-"+it.c;
    var done=!!state.checks[id];
    li.innerHTML='<div class="tm">'+it.t+'</div><div class="dot"></div>';
    var lab=document.createElement(it.s?"div":"label");lab.className="task"+(done?" done":"")+(it.s?" static":"");
    lab.innerHTML=(it.s?'':'<input type="checkbox"'+(done?" checked":"")+' aria-label="'+esc(it.h)+'">')+'<span><span class="k">'+CAT[it.c]+'</span><span class="tt">'+esc(it.h)+'</span>'+(it.d?'<span class="dd">'+esc(it.d)+'</span>':'')+'</span>';
    if(!it.s){lab.querySelector("input").addEventListener("change",function(e){state.checks[id]=e.target.checked;lab.classList.toggle("done",e.target.checked);save();renderDays();ring();weekBar();});}
    li.appendChild(lab);tl.appendChild(li);
  });
  customFor(sel).slice().sort(function(a,b){return (a.time||"99")<(b.time||"99")?-1:1;}).forEach(function(c){
    var id="c-"+c.id,done=!!state.checks[id],li=document.createElement("li");li.className="ti c-"+c.cat;
    li.innerHTML='<div class="tm">'+(c.time||"—")+'</div><div class="dot"></div>';
    var lab=document.createElement("label");lab.className="task"+(done?" done":"");
    lab.innerHTML='<input type="checkbox"'+(done?" checked":"")+'><span><span class="k">'+CAT[c.cat]+'<span class="own">'+(c.rec?"שלי, כל שבוע":"שלי, השבוע")+'</span></span><span class="tt"></span></span><button class="x" aria-label="מחיקת משימה">✕</button>';
    lab.querySelector(".tt").textContent=c.text;
    lab.querySelector("input").addEventListener("change",function(e){state.checks[id]=e.target.checked;lab.classList.toggle("done",e.target.checked);save();renderDays();ring();weekBar();});
    lab.querySelector(".x").addEventListener("click",function(e){e.preventDefault();e.stopPropagation();if(confirm("למחוק את המשימה?")){state.custom=state.custom.filter(function(k){return k.id!==c.id;});delete state.checks[id];save();renderDays();renderDay();weekBar();}});
    li.appendChild(lab);tl.appendChild(li);
  });
  var n=document.getElementById("dayNote"),nt=dayNote(sel);if(nt){n.hidden=false;n.innerHTML=nt;}else n.hidden=true;
  ring();renderEx();renderTQ();
}
document.getElementById("ctAdd").onclick=function(){
  var t=document.getElementById("ctText"),txt=t.value.trim();if(!txt){t.focus();return;}
  state.custom.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),day:sel,text:txt,time:document.getElementById("ctTime").value||"",cat:document.getElementById("ctCat").value,rec:document.getElementById("ctRec").checked,week:state.week});
  t.value="";document.getElementById("ctTime").value="";document.getElementById("ctRec").checked=false;
  save();renderDays();renderDay();weekBar();
};
document.getElementById("ctText").addEventListener("keydown",function(e){if(e.key==="Enter")document.getElementById("ctAdd").click();});

/* ================= BLOCK + EXERCISES ================= */
function renderBlock(){
  var w=blockWeek(),ph=document.getElementById("phases");ph.innerHTML="";
  document.getElementById("phaseTitle").textContent="שבוע "+(w+1)+": "+PH[w].n;
  document.getElementById("phaseDesc").textContent=PH[w].d;
  PH.forEach(function(p,i){var b=document.createElement("button");b.className="ph"+(i===3?" deload":"");b.setAttribute("aria-pressed",i===w?"true":"false");
    b.innerHTML="<b>"+(i+1)+"</b><span>"+p.n+"</span>";
    b.onclick=function(){var d=ld(state.week);d.setDate(d.getDate()-7*i);state.blockStart=ymd(d);save();renderBlock();renderDays();renderDay();weekBar();};
    ph.appendChild(b);});
}
function prevLog(x){var L=state.log[x]||{},best=null;Object.keys(L).sort().forEach(function(k){if(k<state.week&&L[k]!=null&&L[k]!=="")best=[k,L[k]];});return best;}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function renderEx(){
  var w=blockWeek(),list=exFor(sel),box=document.getElementById("exList"),P=plan(state.week),fs=fsFor(sel);box.innerHTML="";
  document.getElementById("exTitle").textContent="התרגילים של יום "+DOW[sel];
  document.getElementById("exSub").textContent=(list.length||fs.length)?"שבוע "+(w+1)+" בבלוק ("+PH[w].n+"). פותחים תרגיל כדי לראות איך מבצעים.":"אין היום אימון אישי. יום לאימון הקבוצה או למנוחה.";
  fs.forEach(function(k){box.appendChild(fsCard(k,sel,!!P.light[sel]));});
  list.forEach(function(o){
    var p=o.p,e=EX[p.x],id=o.id,done=!!state.checks[id],d=document.createElement("div");d.className="ex";
    var html='<label class="task'+(done?" done":"")+'"><input type="checkbox"'+(done?" checked":"")+'><span><span class="k">'+e.g+'</span><span class="tt">'+e.n+' <span class="dose">'+o.v[0]+'</span></span><span class="dd">'+esc(o.v[1]||"")+'</span></span></label>';
    html+='<details><summary>איך מבצעים</summary><div class="body"><div class="exmeta"><div><span>סטים×חזרות</span><b class="num">'+o.v[0]+'</b></div><div><span>מנוחה</span><b>'+p.r+'</b></div><div><span>קצב</span><b>'+p.t+'</b></div></div>';
    html+='<span class="exsub">דגשים</span><ul class="clean">'+e.cues.map(function(c){return "<li>"+esc(c)+"</li>";}).join("")+'</ul>';
    html+='<span class="exsub bad">טעויות נפוצות</span><ul class="clean">'+e.err.map(function(c){return "<li>"+esc(c)+"</li>";}).join("")+'</ul>';
    if(e.reg&&e.reg!=="—")html+='<span class="exsub reg">גרסה קלה יותר</span><p style="margin:0">'+esc(e.reg)+'</p>';
    html+='<p class="small muted" style="margin:10px 0 0">למה: '+esc(e.why)+'</p><p style="margin:6px 0 0">'+vlink(VQ[p.x])+'</p>';
    if(p.log){var pv=prevLog(p.x),cur=(state.log[p.x]||{})[state.week];
      html+='<div class="logrow"><label style="display:flex;gap:8px;align-items:center">משקל שעבדתי איתו (ק"ג) <input type="number" step="0.5" min="0" class="lg" value="'+(cur!=null?cur:"")+'"></label><span>'+(pv?'בפעם הקודמת: <b class="num" style="color:var(--chalk)">'+pv[1]+'</b> ק"ג':'עוד אין רישום קודם')+'</span></div>';}
    html+='</div></details>';d.innerHTML=html;
    d.querySelector("input[type=checkbox]").addEventListener("change",function(ev){state.checks[id]=ev.target.checked;d.querySelector(".task").classList.toggle("done",ev.target.checked);save();renderDays();ring();exRing();weekBar();});
    var lg=d.querySelector(".lg");if(lg)lg.addEventListener("change",function(){state.log[p.x]=state.log[p.x]||{};var v=parseFloat(lg.value);if(isNaN(v))delete state.log[p.x][state.week];else state.log[p.x][state.week]=v;save();});
    box.appendChild(d);
  });
  exRing();
}
function exRing(){var a=exIds(sel),c=a.filter(function(k){return state.checks[k];}).length,p=a.length?c/a.length:0,C=2*Math.PI*17;
  document.getElementById("exRing").innerHTML='<svg viewBox="0 0 42 42"><circle cx="21" cy="21" r="17" fill="none" stroke="#1f4536" stroke-width="5"/><circle cx="21" cy="21" r="17" fill="none" stroke="#3fd8ff" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+(C*p)+' '+C+'"/></svg><span class="num">'+c+'/'+a.length+'</span>';}
function renderLib(){
  var rows=[[0,0],[0,1],[0,2],[4,0],[4,1],[4,2],[1,1],[1,7],[1,8]],tb=document.getElementById("blockTable");
  tb.innerHTML=rows.map(function(r){var p=PROG[r[0]][r[1]];return "<tr><td>"+EX[p.x].n+"</td>"+p.v.map(function(v){return '<td class="n">'+(v?'<b>'+v[0]+'</b> <span class="muted small">'+esc(v[1])+'</span>':'<span class="muted">—</span>')+"</td>";}).join("")+"</tr>";}).join("");
  var groups={};Object.keys(EX).forEach(function(k){var g=EX[k].g;(groups[g]=groups[g]||[]).push(k);});
  document.getElementById("libGroups").innerHTML=Object.keys(groups).map(function(g){
    return '<div class="libgroup"><h3>'+g+'</h3>'+groups[g].map(function(k){var e=EX[k];
      return '<details><summary>'+e.n+'</summary><div class="body"><p>'+esc(e.why)+'</p><span class="exsub">דגשים</span><ul class="clean">'+e.cues.map(function(c){return "<li>"+esc(c)+"</li>";}).join("")+'</ul><span class="exsub bad">טעויות נפוצות</span><ul class="clean">'+e.err.map(function(c){return "<li>"+esc(c)+"</li>";}).join("")+'</ul>'+(e.reg!=="—"?'<span class="exsub reg">גרסה קלה יותר</span><p style="margin:0">'+esc(e.reg)+'</p>':'')+'<p style="margin:10px 0 0">'+vlink(VQ[k])+'</p></div></details>';}).join("")+'</div>';}).join("");
}
function ring(){
  var a=ids(sel),c=a.filter(function(k){return state.checks[k];}).length,p=a.length?c/a.length:0,C=2*Math.PI*17;
  document.getElementById("dayRing").innerHTML='<svg viewBox="0 0 42 42"><circle cx="21" cy="21" r="17" fill="none" stroke="#1f4536" stroke-width="5"/><circle cx="21" cy="21" r="17" fill="none" stroke="#3dff8b" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+(C*p)+' '+C+'"/></svg><span class="num">'+c+'/'+a.length+'</span>';
}
function weekBar(){
  var all=[];for(var i=0;i<7;i++)all=all.concat(ids(i));
  ["f","s"].forEach(function(p){(p==="f"?FRI:SAT).forEach(function(_,i){all.push("m"+p+i);});});
  var c=all.filter(function(k){return state.checks[k];}).length,p=Math.round(c/all.length*100);
  document.getElementById("weekBar").style.width=p+"%";document.getElementById("weekPct").textContent=p+"%";
  var s=ld(state.week);document.getElementById("weekLabel").textContent="שבוע שמתחיל ב־"+s.toLocaleDateString("he-IL");
}
document.getElementById("resetWeek").onclick=function(){if(confirm("לאפס את כל הסימונים של השבוע?")){state.checks={};save();renderAll();}};

/* ================= MATCHDAY ================= */
function renderMatchLists(){
  [["friList",FRI,"f"],["satList",SAT,"s"]].forEach(function(x){
    var w=document.getElementById(x[0]);w.innerHTML="";
    x[1].forEach(function(t,i){var id="m"+x[2]+i,done=!!state.checks[id];
      var l=document.createElement("label");l.className="task "+(x[2]==="f"?"c-team":"c-match")+(done?" done":"");
      l.innerHTML='<input type="checkbox"'+(done?" checked":"")+'><span><span class="tt">'+t+'</span></span>';
      l.querySelector("input").onchange=function(e){state.checks[id]=e.target.checked;l.classList.toggle("done",e.target.checked);save();weekBar();};
      w.appendChild(l);});
  });
}
var kickEl=document.getElementById("kickoff");
kickEl.addEventListener("change",function(){var n=nextFixture();if(n){n.time=kickEl.value;save();refresh();}matchTl();});
var STEPS=[
  {o:-180,h:"ארוחת טרום משחק",d:"פחמימות קלות, 3 שעות לפני."},
  {o:-60,h:"הגעה וחימום אישי",d:"5 דק' סריקה ומגע ברגל שמאל, אקטיבציה דינמית לקרסול ולמפשעה. (זמן מוצע)"},
  {o:-15,h:"תמר או ג'ל אנרגיה",d:"15 דקות לפני השריקה."},
  {o:0,h:"שריקת פתיחה ⚽",d:"סריקה לפני כל קבלת כדור."},
  {o:45,h:"מחצית: תמר או ג'ל",d:"15 דק' הפסקה: תדלוק מהיר ומים."},
  {o:105,h:"סיום: תדלוק חלבון ופחמימות",d:"פתיחת חלון ההתאוששות לקראת ראשון."}
];
function nextSat(){var f=nextFixture();return f?fxDate(f):null;}
function fmt(d){return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");}
function offs(o){if(o===0)return"שריקה";var s=o<0?"-":"+",a=Math.abs(o);return s+Math.floor(a/60)+":"+String(a%60).padStart(2,"0");}
function matchTl(){
  var k=nextSat(),now=Date.now(),ul=document.getElementById("matchTl");ul.innerHTML="";var nx=-1;
  if(!k){ul.innerHTML='<li><div></div><div class="muted">אין משחקים עתידיים בלוח.</div></li>';return {k:null,nx:-1};}
  STEPS.forEach(function(s,i){var t=new Date(k.getTime()+s.o*60000);if(nx<0&&t.getTime()>now)nx=i;});
  STEPS.forEach(function(s,i){var t=new Date(k.getTime()+s.o*60000),li=document.createElement("li");
    li.className=i===nx?"next":(t.getTime()<now?"past":"");
    li.innerHTML='<div class="at">'+fmt(t)+'<span class="off">'+offs(s.o)+'</span></div><div><b>'+s.h+'</b><div class="small muted">'+s.d+'</div></div>';ul.appendChild(li);});
  return {k:k,nx:nx};
}
function tick(){
  var r=matchTl(),cd=document.getElementById("countdown"),w=document.getElementById("nextWhat"),lbl=document.getElementById("nextLbl");
  if(!r.k){cd.textContent="--:--";w.textContent="אין משחק קרוב";return;}
  if(r.nx<0){cd.textContent="00:00:00";w.textContent="המשחק הסתיים";return;}
  var t=r.k.getTime()+STEPS[r.nx].o*60000,ms=t-Date.now(),h=Math.floor(ms/3600000),m=Math.floor(ms%3600000/60000),s=Math.floor(ms%60000/1000);
  var dd=Math.floor(h/24);
  cd.textContent=(dd>0?dd+"d ":"")+String(h%24).padStart(2,"0")+":"+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
  lbl.textContent="עד השלב הבא ביום המשחק";w.textContent=STEPS[r.nx].h+" ב־"+fmt(new Date(t));
}

/* ================= NUTRITION ================= */
var bwEl=document.getElementById("bw"),fdEl=document.getElementById("fuelDay");
DAYS.forEach(function(d,i){var o=document.createElement("option");o.value=i;o.textContent=d.n+(i>=4?(i===6?" (משחק)":" (העמסה)"):"");fdEl.appendChild(o);});
fdEl.value=today;bwEl.value=state.bw;
function r0(x){return Math.round(x);}
function renderFuel(){
  var w=parseFloat(bwEl.value)||62.5,di=+fdEl.value,P=plan(state.week),CR=P.ctx.map(function(cx,i){return carbRange(cx,i);}),c=CR[di];
  [].forEach.call(fdEl.options,function(o,i){var n=P.ctx[i].next;o.textContent=DOW[i]+(n===0?" (משחק)":(n===1||n===2)?" (העמסה)":"");});
  var cr=c[0]===c[1]?r0(c[0]*w)+"":r0(c[0]*w)+"–"+r0(c[1]*w);
  var cg=c[0]===c[1]?c[0]+"":c[0]+"–"+c[1];
  document.getElementById("macroStats").innerHTML=
   '<div class="stat p"><span class="l">חלבון (1.8–2.0 g/kg)</span><span class="v">'+r0(1.8*w)+'–'+r0(2*w)+'</span> <span class="u">g</span></div>'+
   '<div class="stat c"><span class="l">פחמימות '+DOW[di]+' ('+cg+' g/kg)</span><span class="v">'+cr+'</span> <span class="u">g</span></div>'+
   '<div class="stat f"><span class="l">שומנים (1.0–1.2 g/kg)</span><span class="v">'+r0(w)+'–'+r0(1.2*w)+'</span> <span class="u">g</span></div>'+
   '<div class="stat w"><span class="l">מים</span><span class="v">3</span> <span class="u">ליטר</span></div>';
  var cw=document.getElementById("carbWeek");cw.innerHTML="";
  CR.forEach(function(c,i){var hi=c[1]*w,h=Math.max(18,hi/(8*w)*100),ld2=P.ctx[i].next!==null&&P.ctx[i].next<=2;
    cw.innerHTML+='<div class="cw"><span class="g">'+(c[0]===c[1]?r0(c[0]*w):r0(c[0]*w)+"–"+r0(c[1]*w))+'</span><div class="b'+(ld2?" load":"")+'" style="height:'+(h*0.72)+'%"></div><span class="d">'+DAYS[i].l+'</span><span class="g">'+(c[0]===c[1]?c[0]:c[0]+"–"+c[1])+'</span></div>';});
}
bwEl.addEventListener("input",function(){var v=parseFloat(bwEl.value);if(v>0){state.bw=v;save();}renderFuel();});fdEl.addEventListener("change",renderFuel);
var bedEl=document.getElementById("bed"),wakeEl=document.getElementById("wake");bedEl.value=state.bed;wakeEl.value=state.wake;
function renderSleep(){
  var b=bedEl.value.split(":"),k=wakeEl.value.split(":");var m=(+k[0]*60+ +k[1])-(+b[0]*60+ +b[1]);if(m<=0)m+=1440;
  var h=m/60,el=document.getElementById("sleepHrs"),msg=document.getElementById("sleepMsg");
  el.textContent=(Math.round(h*100)/100).toString();el.className="hrs "+(h>=8.5&&h<=9.5?"ok":h>=8?"warn":"bad");
  msg.innerHTML=h>=8.5?'<span class="ok">בתוך היעד של 8.5–9 שעות.</span>':'<span class="'+(h>=8?"warn":"bad")+'">חסרות '+Math.round((8.5-h)*60)+' דקות ליעד המינימלי של 8.5 שעות.</span>';
}
bedEl.addEventListener("change",function(){state.bed=bedEl.value;save();renderSleep();});wakeEl.addEventListener("change",function(){state.wake=wakeEl.value;save();renderSleep();});

/* ================= KPI ================= */
var F=function(id){return document.getElementById(id);};
F("fDate").value=ymd(new Date());
function num(id){var v=parseFloat(F(id).value);return isNaN(v)?null:v;}
function sorted(){return state.kpis.slice().sort(function(a,b){return a.d<b.d?-1:1;});}
function cmjDrop(list,idx){var cur=list[idx];if(cur.cmj==null)return null;for(var j=idx-1;j>=0;j--){if(list[j].cmj!=null)return (list[j].cmj-cur.cmj)/list[j].cmj*100;}return null;}
F("addKpi").onclick=function(){
  var e={id:Date.now().toString(36),d:F("fDate").value||new Date().toISOString().slice(0,10),w:num("fW"),cmj:num("fCmj"),s5:num("fS5"),scan:num("fScan"),lf:num("fLf"),duel:num("fDuel"),th:num("fThigh"),ch:num("fChest")};
  if([e.w,e.cmj,e.s5,e.scan,e.lf,e.duel,e.th,e.ch].every(function(v){return v==null;})){showAlert("grey","אין מה לשמור","ממלאים לפחות מדד אחד לפני השמירה.");return;}
  state.kpis.push(e);save();
  ["fW","fCmj","fS5","fScan","fLf","fDuel","fThigh","fChest"].forEach(function(i){F(i).value="";});
  renderKpi();if(e.cmj!=null)checkLoad();else showAlert("green","הרשומה נשמרה","המדדים עודכנו בטבלה ובגרף.");
};
function showAlert(cls,h,t){var a=F("loadAlert");a.className="alert show "+cls;a.innerHTML="<h4>"+h+"</h4><div class='small'>"+t+"</div>";}
function checkLoad(){
  var l=sorted().filter(function(x){return x.cmj!=null;});
  if(l.length<2){showAlert("grey","צריך לפחות 2 מדידות CMJ","מודדים CMJ פעם ב־4 שבועות. אחרי המדידה השנייה אפשר להשוות.");return;}
  var a=l[l.length-2],b=l[l.length-1],d=(a.cmj-b.cmj)/a.cmj*100;
  if(d>5)showAlert("red","התרעת עומס יתר: CMJ ירד ב־"+d.toFixed(1)+"%","ירידה של מעל 5% בגובה הקפיצה (מ־"+a.cmj+" ל־"+b.cmj+" ס\"מ) מעידה על עייפות עצבית מצטברת. מומלץ: להוריד נפח פליאומטריה וכוח רגליים השבוע, להקפיד על 8.5–9 שעות שינה ועל יעדי הפחמימות, ולעדכן את מאמן הכושר במועדון.");
  else showAlert("green","אין סימן לעומס יתר","CMJ "+(d>0?"ירד ב־"+d.toFixed(1)+"%, מתחת לסף 5%.":"יציב או עלה ב־"+Math.abs(d).toFixed(1)+"%.")+" ממשיכים לפי התוכנית.");
}
F("checkLoad").onclick=checkLoad;
function v(x,s){return x==null?'<span class="muted">—</span>':x+(s||"");}
function renderKpi(){
  var l=sorted(),tb=F("kpiRows");tb.innerHTML="";
  if(!l.length){tb.innerHTML='<tr><td colspan="10" class="empty">עדיין אין רשומות. מתחילים בשקילה של יום שני הקרוב.</td></tr>';}
  l.slice().reverse().forEach(function(e){var idx=l.indexOf(e),dr=cmjDrop(l,idx),tr=document.createElement("tr");
    tr.innerHTML='<td class="n">'+new Date(e.d).toLocaleDateString("he-IL")+'</td><td class="n">'+v(e.w)+'</td><td class="n">'+v(e.cmj)+'</td>'+
    '<td class="n '+(dr!=null&&dr>5?"flag":"")+'">'+(dr==null?'<span class="muted">—</span>':'<span class="num">'+(dr>0?"-":"+")+Math.abs(dr).toFixed(1)+'%</span>'+(dr>5?" ⚠":""))+'</td>'+
    '<td class="n">'+v(e.s5)+'</td><td class="n">'+v(e.scan)+'</td><td class="n">'+v(e.lf,"%")+'</td><td class="n">'+v(e.duel,"%")+'</td><td class="n">'+v(e.th)+" / "+v(e.ch)+'</td>'+
    '<td><button class="x" aria-label="מחיקת רשומה">✕</button></td>';
    tr.querySelector(".x").onclick=function(){if(confirm("למחוק את הרשומה?")){state.kpis=state.kpis.filter(function(k){return k.id!==e.id;});save();renderKpi();}};
    tb.appendChild(tr);});
  function last(k){for(var i=l.length-1;i>=0;i--)if(l[i][k]!=null)return l[i][k];return null;}
  var cards=[["משקל","w",'ק"ג',"יעד 66–68",function(x){return x>=66&&x<=68;}],["CMJ","cmj",'ס"מ',"ירידה מקס' 5%",null],["סריקה","scan","/שנ'","יעד 0.6",function(x){return x>=0.6;}],["רגל שמאל","lf","%","יעד 80%+",function(x){return x>=80;}],["מאבקים","duel","%","יעד 60%+",function(x){return x>=60;}]];
  F("kpiNow").innerHTML=cards.map(function(c){var x=last(c[1]);return '<div class="kpi"><div class="l">'+c[0]+'</div><span class="v '+(x!=null&&c[4]?(c[4](x)?"ok":""):"")+'">'+(x==null?"—":x)+'</span> <span class="small muted">'+(x==null?"":c[2])+'</span><div class="t">'+c[3]+'</div></div>';}).join("");
  drawW(l);
}
function drawW(l){
  var pts=l.filter(function(e){return e.w!=null;}),box=F("wChart"),msg=F("rateMsg");
  if(pts.length<1){box.innerHTML='<div class="empty">הגרף יופיע אחרי השקילה הראשונה.</div>';msg.textContent="";return;}
  var W=640,H=220,P={l:36,r:14,t:12,b:26},lo=Math.min(60,Math.min.apply(null,pts.map(function(p){return p.w;}))-0.5),hi=Math.max(69,Math.max.apply(null,pts.map(function(p){return p.w;}))+0.5);
  var t0=new Date(pts[0].d).getTime(),t1=new Date(pts[pts.length-1].d).getTime();if(t1===t0)t1=t0+7*864e5;
  function X(d){return P.l+(new Date(d).getTime()-t0)/(t1-t0)*(W-P.l-P.r);} function Y(w){return P.t+(hi-w)/(hi-lo)*(H-P.t-P.b);}
  var s='<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;min-width:320px;height:auto;direction:ltr" role="img" aria-label="גרף משקל">';
  s+='<rect x="'+P.l+'" y="'+Y(68)+'" width="'+(W-P.l-P.r)+'" height="'+(Y(66)-Y(68))+'" fill="#3dff8b" fill-opacity=".12"/>';
  for(var g=Math.ceil(lo);g<=Math.floor(hi);g+=2){s+='<line x1="'+P.l+'" x2="'+(W-P.r)+'" y1="'+Y(g)+'" y2="'+Y(g)+'" stroke="#1f4536"/><text x="'+(P.l-6)+'" y="'+(Y(g)+4)+'" fill="#8fb5a4" font-size="11" text-anchor="end" font-family="Rubik">'+g+'</text>';}
  s+='<text x="'+(W-P.r-4)+'" y="'+(Y(68)+13)+'" fill="#3dff8b" font-size="11" text-anchor="end" font-family="Rubik">66–68 kg</text>';
  s+='<polyline fill="none" stroke="#3fd8ff" stroke-width="2.5" stroke-linejoin="round" points="'+pts.map(function(p){return X(p.d)+","+Y(p.w);}).join(" ")+'"/>';
  pts.forEach(function(p){s+='<circle cx="'+X(p.d)+'" cy="'+Y(p.w)+'" r="4" fill="#06140f" stroke="#3fd8ff" stroke-width="2"/>';});
  s+='<text x="'+P.l+'" y="'+(H-6)+'" fill="#5f8676" font-size="11" font-family="Rubik">'+new Date(pts[0].d).toLocaleDateString("he-IL")+'</text><text x="'+(W-P.r)+'" y="'+(H-6)+'" fill="#5f8676" font-size="11" text-anchor="end" font-family="Rubik">'+new Date(pts[pts.length-1].d).toLocaleDateString("he-IL")+'</text></svg>';
  box.innerHTML=s;
  if(pts.length>=2){var days=(new Date(pts[pts.length-1].d)-new Date(pts[0].d))/864e5;
    if(days>=14){var rate=(pts[pts.length-1].w-pts[0].w)/days*30.4,cls=rate>=0.3&&rate<=0.5?"ok":(rate>0.5?"warn":"bad");
      msg.innerHTML='קצב נוכחי: <b class="num '+cls+'">'+(rate>=0?"+":"")+rate.toFixed(2)+'</b> ק"ג לחודש. '+(cls==="ok"?"בתוך טווח היעד.":rate>0.5?"מהר מהיעד: שווה לבדוק שהעלייה היא שריר (היקף ירך וחזה).":"מתחת ליעד: לבדוק את העודף הקלורי ואת חלוקת החלבון.");}
    else msg.textContent="קצב חודשי יחושב אחרי שבועיים של שקילות.";}
  else msg.textContent="";
}


/* ================= V3: FIXTURES ================= */
function fxDate(f){var d=ld(f.d),t=(f.time||state.kickoff||"16:00").split(":");d.setHours(+t[0],+t[1],0,0);return d;}
function nextFixture(){var now=Date.now();return state.fixtures.filter(function(f){return !f.bye&&!f.post&&fxDate(f).getTime()+120*60000>now;}).sort(function(a,b){return fxDate(a)-fxDate(b);})[0]||null;}
function gameInWeek(wk){var a=ld(wk),b=new Date(a);b.setDate(a.getDate()+7);return state.fixtures.filter(function(f){var d=ld(f.d);return !f.bye&&!f.post&&d>=a&&d<b;}).sort(function(x,y){return x.d<y.d?-1:1;})[0]||null;}
function byeInWeek(wk){var a=ld(wk),b=new Date(a);b.setDate(a.getDate()+7);return state.fixtures.some(function(f){var d=ld(f.d);return f.bye&&d>=a&&d<b;});}
function prevWeekKey(wk){var d=ld(wk);d.setDate(d.getDate()-7);return ymd(d);}
function nextWeekKey(wk){var d=ld(wk);d.setDate(d.getDate()+7);return ymd(d);}
var DOW=["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"];
function dmy(s){var d=ld(s);return pad(d.getDate())+"/"+pad(d.getMonth()+1);}
function fxLabel(f){return (f.home?"בית נגד ":"חוץ מול ")+f.opp;}

function renderBanner(){
  var b=document.getElementById("weekBanner"),g=gameInWeek(state.week),n=nextFixture();
  if(g){b.className="banner game";b.innerHTML='<span class="ic">⚽</span><div><b>משחק השבוע: '+esc(fxLabel(g))+'</b><div class="small muted">יום '+DOW[ld(g.d).getDay()]+' '+dmy(g.d)+(g.time?' ב־'+g.time:', השעה עוד לא נקבעה')+'</div></div>';return;}
  var days=n?Math.ceil((ld(n.d)-ld(ymd(new Date())))/864e5):null;
  b.className="banner free";
  b.innerHTML='<span class="ic">🗓</span><div><b>'+(byeInWeek(state.week)?"מחזור חופשי השבוע":"אין משחק השבוע")+'</b><div class="small muted">'+(n?'המשחק הבא: '+esc(fxLabel(n))+' ב־'+dmy(n.d)+' (בעוד '+days+' ימים).':'אין משחקים עתידיים בלוח.')+(days!=null&&days>=14?' חלון ארוך בלי משחק: הזדמנות לבלוק כוח מלא ולהשלמות.':'')+'</div></div>';
}

function renderFx(){
  var box=document.getElementById("fxList"),n=nextFixture(),now=Date.now();
  var list=state.fixtures.slice().sort(function(a,b){return a.d<b.d?-1:1;});
  box.innerHTML="";
  list.forEach(function(f){
    var past=!f.bye&&fxDate(f).getTime()+120*60000<now||(f.bye&&ld(f.d)<ld(ymd(new Date())));
    var r=document.createElement("div");r.className="fx"+(f.bye?" bye":"")+(past?" past":"")+(n&&n.id===f.id?" next":"");
    r.innerHTML='<div class="fd">'+dmy(f.d)+'<span>'+DOW[ld(f.d).getDay()]+' '+ld(f.d).getFullYear()+'</span></div>'+
      '<div class="fo">'+(f.bye?'מחזור חופשי':esc(f.opp))+(f.post?'<span class="hb c">נדחה</span>':'')+(f.bye?'':'<span class="hb '+(f.home?"h":"a")+'">'+(f.home?"בית":"חוץ")+'</span>')+(f.comp&&f.comp!=="ליגה"?'<span class="hb c">'+f.comp+'</span>':'')+'</div><div class="fr"></div>';
    var fr=r.querySelector(".fr");
    if(f.post){var ub=document.createElement("button");ub.className="btn mini";ub.textContent="מתקיים";ub.onclick=function(){f.post=0;save();refresh();};fr.appendChild(ub);}
    if(!f.bye){var ti=document.createElement("input");ti.type="time";ti.value=f.time||"";ti.setAttribute("aria-label","שעת משחק");
      ti.onchange=function(){f.time=ti.value;save();refresh();matchTl();};fr.appendChild(ti);
      if(past){var sb=document.createElement("button");sb.className="btn mini";sb.textContent="סיכום";sb.onclick=function(){openReview(f.id);};fr.appendChild(sb);}}
    if(f.user){var x=document.createElement("button");x.className="x";x.textContent="✕";x.setAttribute("aria-label","מחיקת משחק");x.onclick=function(){if(confirm("למחוק את המשחק מהלוח?")){state.fixtures=state.fixtures.filter(function(k){return k.id!==f.id;});save();refresh();}};fr.appendChild(x);}
    box.appendChild(r);
  });
}
document.getElementById("fxAdd").onclick=function(){
  var d=document.getElementById("fxD").value,o=document.getElementById("fxO").value.trim();
  if(!d||!o){alert("צריך תאריך ויריבה");return;}
  state.fixtures.push({id:"u"+Date.now().toString(36),d:d,opp:o,home:document.getElementById("fxH").value==="1",bye:false,time:document.getElementById("fxT").value||"",comp:document.getElementById("fxC").value,user:1});
  document.getElementById("fxO").value="";save();refresh();matchTl();fillRvFx();
};
function syncKick(){var n=nextFixture();kickEl.value=n&&n.time?n.time:"";
  var ni=document.getElementById("nextInfo");ni.innerHTML=n?'<b style="color:var(--chalk)">'+esc(fxLabel(n))+'</b><br>'+DOW[ld(n.d).getDay()]+' '+dmy(n.d)+(n.time?'':' <span class="warn">(השעה עוד לא נקבעה, מוצג לפי '+(state.kickoff||"16:00")+')</span>'):'אין משחקים עתידיים בלוח';}

/* sub-tabs */
[].slice.call(document.querySelectorAll(".seg button")).forEach(function(b){b.onclick=function(){
  document.querySelectorAll(".seg button").forEach(function(x){x.setAttribute("aria-selected",x===b?"true":"false");});
  document.querySelectorAll(".sub").forEach(function(s){s.classList.toggle("on",s.id===b.dataset.sub);});
  if(b.dataset.sub==="s-hist"){renderTrend();renderHist();}};});
function showSub(id){var b=document.querySelector('.seg button[data-sub="'+id+'"]');if(b)b.click();}

/* ================= V3: MATCH REVIEW ================= */
function yt(q){return "https://www.youtube.com/results?search_query="+encodeURIComponent(q);}
function vlink(q,t){return '<a class="vlink" href="'+yt(q)+'" target="_blank" rel="noopener noreferrer">▶ '+(t||"סרטוני הדגמה")+'</a>';}
var SK={
 scan:{n:"סריקה לפני קבלה",tip:"המבט האחרון מעבר לכתף רגע לפני הנגיעה. סורקים כשהכדור בתנועה אליך (עקרונות המחקר של יורדט).",drill:"תרגיל הסריקה של שלישי, עם קריאה בקול של צבע או מספר",watch:"צ'אבי ורודרי: לספור כמה פעמים הראש מסתובב ב-10 השניות לפני קבלה",q:"Xavi scanning before receiving analysis",day:2},
 body:{n:"גוף פתוח בקבלה (Half-turn)",tip:"מקבלים ברגל הרחוקה עם גוף בזווית, כך שהנגיעה הראשונה כבר מכוונת קדימה.",drill:"עבודת קיר: השתלטות ברגל האחורית לכיוון השטח הפתוח",watch:"פדרי ופרנקי דה יונג: איך הם מקבלים עם הגוף פתוח",q:"Pedri half turn receiving analysis",day:1},
 prog:{n:"מסירה קדימה ששוברת קו",tip:"קודם מחפשים את המסירה שחותכת קו של היריב, ורק אחר כך את הצד.",drill:"מסירות דרך שער קונוסים ב-15–20 מ', בשמאל ובימין",watch:"טוני קרוס וקימיך: מסירות בין הקווים",q:"Toni Kroos line breaking passes analysis",day:1},
 left:{n:"שימוש ברגל שמאל",tip:"יעד במשחק: לפחות 30% מהנגיעות בשמאל, בלי להסתובב לימין כשזה קשה.",drill:"קיר 70/30 והולכה בשמאל בלבד",watch:"פדרי: משחק בשתי הרגליים תחת לחץ",q:"Pedri weak foot two footed analysis",day:1},
 avail:{n:"זמינות ותנועה לקבלת כדור",tip:"אחרי כל מסירה זזים: יוצרים משולש וזווית פתוחה מהמוסר.",drill:"רונדו 4 על 2 עם הגבלה של שתי נגיעות",watch:"צ'אבי וגונדוגאן: תנועה קטנה לפני קבלה",q:"Xavi movement to receive the ball analysis",day:2},
 press:{n:"לחץ 5 שניות אחרי איבוד",tip:"מיד אחרי איבוד רצים לסגור את המסירה קדימה, ולא רק את השחקן.",drill:"משחקונים עם כלל של 5 שניות לחץ אחרי איבוד",watch:"קאנטה ופדה ואלוורדה: תגובה מיידית לאיבוד",q:"counter pressing midfielder analysis Kante",day:2},
 def:{n:"מיקום הגנתי וחסימת קווים",tip:"עומדים על קו המסירה בין הכדור לקשר היריב (Cover Shadow), ולא מאחוריו.",drill:"משחקון 5 על 5 עם שחקן מטרה",watch:"רודרי: מיקום כשהקבוצה בלי כדור",q:"Rodri defensive positioning analysis",day:2},
 box:{n:"כניסות לרחבה ואיום על השער",tip:"מגיעים מאוחר, לאזור שבין נקודת הפנדל לקו ה-5, כשההגנה נסוגה.",drill:"15 הבעיטות של רביעי: דפוס 1 ודפוס 3",watch:"בלינגהאם וגונדוגאן: תזמון ריצות מאוחרות",q:"Bellingham late runs into the box analysis",day:3},
 duel:{n:"מאבקים ואגרסיביות",tip:"גוף נמוך, כתף לכתף, ותזמון נכון במקום קפיצה על הכדור.",drill:"1 על 1 בריבוע קטן, 6 חזרות של 20 שנ'",watch:"קאנטה וואלוורדה: מאבקי קרקע במרכז",q:"midfield duels tackling technique",day:4}
};
var rvSk={},rvEdit=null;
function renderRvSk(){var box=document.getElementById("rvSk");box.innerHTML="";
  Object.keys(SK).forEach(function(k){var row=document.createElement("div");row.className="rrow";
    row.innerHTML='<span>'+SK[k].n+'</span><div class="rate'+(rvSk[k]&&rvSk[k]<=2?" low":"")+'"></div>';
    var rt=row.querySelector(".rate");
    [1,2,3,4,5].forEach(function(v){var b=document.createElement("button");b.textContent=v;b.type="button";if(rvSk[k]===v)b.className="on";
      b.setAttribute("aria-label",SK[k].n+" "+v);b.onclick=function(){rvSk[k]=rvSk[k]===v?undefined:v;renderRvSk();};rt.appendChild(b);});
    box.appendChild(row);});}
function fillRvFx(){var s=document.getElementById("rvFx"),now=Date.now(),cur=s.value;s.innerHTML="";
  state.fixtures.filter(function(f){return !f.bye&&fxDate(f).getTime()<now+6*3600000;}).sort(function(a,b){return a.d<b.d?1:-1;}).forEach(function(f){var o=document.createElement("option");o.value=f.id;o.textContent=dmy(f.d)+" "+fxLabel(f);s.appendChild(o);});
  var o=document.createElement("option");o.value="other";o.textContent="משחק אחר / ידידות";s.appendChild(o);if(cur)s.value=cur;}
var RV=["rvMin","rvRes","rvRate","rvKeep","rvImp","gDist","gHsr","gSpr","gTop","gAcc","pTouch","pLeft","pRel","pKick"];
function openReview(fid){showSub("s-rv");fillRvFx();document.getElementById("rvFx").value=fid;
  var m=state.matches.filter(function(x){return x.fid===fid;})[0];rvEdit=m?m.id:null;rvSk=m?Object.assign({},m.sk):{};
  RV.forEach(function(k){document.getElementById(k).value=m&&m.v[k]!=null?m.v[k]:"";});renderRvSk();
  document.getElementById("rvFb").innerHTML=m?feedback(m):"";bindFbButtons();}
document.getElementById("rvSave").onclick=function(){
  var fid=document.getElementById("rvFx").value,f=state.fixtures.filter(function(x){return x.id===fid;})[0];
  var v={};RV.forEach(function(k){var el=document.getElementById(k),val=el.value;if(val==="")return;v[k]=(el.type==="number")?parseFloat(val):val;});
  var m={id:rvEdit||("m"+Date.now().toString(36)),fid:fid,d:f?f.d:ymd(new Date()),opp:f?f.opp:"משחק אחר",home:f?f.home:null,v:v,sk:Object.assign({},rvSk)};
  state.matches=state.matches.filter(function(x){return x.id!==m.id;});state.matches.push(m);rvEdit=m.id;save();
  document.getElementById("rvFb").innerHTML=feedback(m);bindFbButtons();renderPM();renderTrend();planMemo={};renderDay();
  document.getElementById("rvFb").scrollIntoView({behavior:"smooth",block:"start"});
};
function per90(x,min){return x==null||!min?null:x*90/min;}
function prevStats(m){var ps=state.matches.filter(function(x){return x.id!==m.id&&x.d<=m.d&&x.v.rvMin>=30;});
  function avg(fn){var a=ps.map(fn).filter(function(v){return v!=null&&!isNaN(v);});return a.length?a.reduce(function(s,v){return s+v;},0)/a.length:null;}
  function mx(fn){var a=ps.map(fn).filter(function(v){return v!=null&&!isNaN(v);});return a.length?Math.max.apply(null,a):null;}
  return {n:ps.length,dist:avg(function(x){return per90(x.v.gDist,x.v.rvMin);}),hsr:avg(function(x){return per90(x.v.gHsr,x.v.rvMin);}),spr:avg(function(x){return per90(x.v.gSpr,x.v.rvMin);}),
    top:mx(function(x){return x.v.gTop;}),kick:mx(function(x){return x.v.pKick;}),touch:avg(function(x){return per90(x.v.pTouch,x.v.rvMin);}),
    left:avg(function(x){return x.v.pTouch?x.v.pLeft/x.v.pTouch*100:null;})};}
function pct(a,b){return b?Math.round((a-b)/b*100):null;}
function vsAvg(val,avg){if(avg==null)return "";var p=pct(val,avg);return ' <span class="'+(p>=0?"ok":"warn")+'">('+(p>=0?"+":"")+p+'% מהממוצע שלך)</span>';}
function feedback(m){
  var v=m.v,min=v.rvMin,out='<div class="fb"><h4>משוב: '+esc(m.opp)+' '+dmy(m.d)+'</h4>',P=prevStats(m);
  var ks=Object.keys(SK).filter(function(k){return m.sk[k];});
  var low=ks.filter(function(k){return m.sk[k]<=3;}).sort(function(a,b){return m.sk[a]-m.sk[b];}).slice(0,2);
  var high=ks.filter(function(k){return m.sk[k]>=4;});
  if(high.length)out+='<div class="it"><b class="t ok">לשמר</b>'+high.map(function(k){return SK[k].n;}).join(", ")+(v.rvKeep?'<div class="small muted">'+esc(v.rvKeep)+'</div>':'')+'</div>';
  else if(v.rvKeep)out+='<div class="it"><b class="t ok">לשמר</b>'+esc(v.rvKeep)+'</div>';
  low.forEach(function(k){var s=SK[k];out+='<div class="it"><b class="t warn">מיקוד לשבוע הבא: '+s.n+'</b>'+s.tip+'<div class="small" style="margin-top:4px"><b>תרגיל:</b> '+s.drill+'<br><b>לצפות:</b> '+s.watch+'</div>'+vlink(s.q,"סרטוני ניתוח")+' <button class="btn mini" data-addfocus="'+k+'">הוספה למשימות</button></div>';});
  if(v.rvImp)out+='<div class="it"><b class="t">מה כתבת לשיפור</b>'+esc(v.rvImp)+'</div>';
  if(!ks.length&&!v.rvKeep&&!v.rvImp)out+='<div class="it small muted">דרג את 9 המדדים של הקשר כדי לקבל מיקוד אישי.</div>';
  // physical
  var phys=[];
  if(v.gDist!=null||v.gHsr!=null||v.gTop!=null||v.gSpr!=null){
    if(!min)phys.push('<span class="warn">חסרות דקות משחק, אז אי אפשר לנרמל ל-90 דקות.</span>');
    else if(min<30)phys.push('<span class="muted">שיחקת פחות מ-30 דקות, אז ההשוואה ל-90 דקות פחות אמינה.</span>');
    if(v.gDist!=null&&min){var d90=per90(v.gDist,min),mpm=v.gDist*1000/min;phys.push('<b>מרחק:</b> <span class="num">'+v.gDist+'</span> ק"מ, כלומר <span class="num">'+Math.round(mpm)+'</span> מ\' לדקה ('+(mpm>=105?'<span class="ok">בטווח של קשר מרכזי</span>':'<span class="warn">מתחת לטווח המשוער לקשר, 105–125 מ\' לדקה</span>')+')'+vsAvg(d90,P.dist));}
    if(v.gHsr!=null&&min){var h90=per90(v.gHsr,min);phys.push('<b>ריצה מהירה:</b> <span class="num">'+Math.round(h90)+'</span> מ\' ל-90'+(h90<500?' <span class="warn">(נמוך: אולי חסרו ריצות עומק וכניסות מאוחרות, דפוסים 1 ו-3)</span>':' <span class="ok">(טוב)</span>')+vsAvg(h90,P.hsr));}
    if(v.gSpr!=null&&min){var s90=per90(v.gSpr,min);phys.push('<b>ספרינטים:</b> <span class="num">'+Math.round(s90)+'</span> ל-90'+vsAvg(s90,P.spr));}
    if(v.gTop!=null)phys.push('<b>מהירות שיא:</b> <span class="num">'+v.gTop+'</span> קמ"ש'+(P.top!=null?(v.gTop>P.top?' <span class="ok">שיא אישי חדש!</span>':' (השיא שלך: '+P.top+')'):''));
    var hi=(v.gDist!=null&&min&&P.dist&&per90(v.gDist,min)>P.dist*1.15)||(v.gHsr!=null&&min&&P.hsr&&per90(v.gHsr,min)>P.hsr*1.2);
    if(hi)phys.push('<span class="bad"><b>עומס גבוה מהרגיל.</b></span> ביום ראשון עדיפות להתאוששות: גלילים, 9 שעות שינה, והסקוואט הכבד עובר לשני בבוקר.');
    out+='<div class="it"><b class="t">גופיית GPS</b>'+phys.join("<br>")+'<div class="small muted" style="margin-top:4px">טווחי הייחוס משוערים, מספרות על קשרים בגילי נוער. כל ספק מגדיר את ספי המהירות אחרת, אז ההשוואה החשובה היא לעצמך'+(P.n?' ('+P.n+' משחקים קודמים)':', והיא תתחיל מהמשחק הבא')+'.</div></div>';
  }
  var pm=[];
  if(v.pTouch!=null){if(min)pm.push('<b>נגיעות:</b> <span class="num">'+Math.round(per90(v.pTouch,min))+'</span> ל-90'+vsAvg(per90(v.pTouch,min),P.touch)+(P.touch&&per90(v.pTouch,min)<P.touch*0.85?' <span class="warn">פחות מעורבות מהרגיל, ראה "זמינות ותנועה"</span>':''));
    if(v.pLeft!=null&&v.pTouch){var lp=v.pLeft/v.pTouch*100;pm.push('<b>רגל שמאל:</b> <span class="num">'+Math.round(lp)+'%</span> מהנגיעות '+(lp>=30?'<span class="ok">(עומד ביעד 30%+)</span>':'<span class="warn">(יעד: 30%+)</span>')+(P.left!=null?' (הממוצע שלך: '+Math.round(P.left)+'%)':''));}}
  if(v.pRel!=null&&min)pm.push('<b>שחרורים/מסירות:</b> <span class="num">'+Math.round(per90(v.pRel,min))+'</span> ל-90');
  if(v.pKick!=null)pm.push('<b>בעיטה חזקה ביותר:</b> <span class="num">'+v.pKick+'</span> קמ"ש'+(P.kick!=null&&v.pKick>P.kick?' <span class="ok">שיא אישי!</span>':''));
  if(pm.length)out+='<div class="it"><b class="t">פליימייקר</b>'+pm.join("<br>")+'</div>';
  return out+'</div>';
}
function bindFbButtons(){[].slice.call(document.querySelectorAll("[data-addfocus]")).forEach(function(b){b.onclick=function(){
  var k=b.dataset.addfocus,s=SK[k],wk=new Date().getDay()>=5?nextWeekKey(state.week):state.week;
  state.custom.push({id:Date.now().toString(36)+"a",day:s.day,text:"מיקוד: "+s.n+". "+s.drill,time:"",cat:"personal",rec:false,week:wk});
  state.custom.push({id:Date.now().toString(36)+"b",day:1,text:"צפייה: "+s.watch,time:"",cat:"recovery",rec:false,week:wk});
  save();renderDays();renderDay();weekBar();b.textContent="נוסף ✓";b.disabled=true;};});}
function renderHist(){var box=document.getElementById("histBox"),l=state.matches.slice().sort(function(a,b){return a.d<b.d?1:-1;});
  if(!l.length){box.innerHTML='<div class="empty">עדיין אין סיכומי משחק. אחרי המשחק הבא: "סיכום משחק".</div>';return;}
  box.innerHTML="";l.forEach(function(m){var d=document.createElement("details");d.className="hist";
    d.innerHTML='<summary>'+dmy(m.d)+' '+esc(m.opp)+(m.v.rvRes?' <span class="num muted">'+esc(m.v.rvRes)+'</span>':'')+(m.v.rvRate?' · ציון '+m.v.rvRate:'')+'</summary><div class="body">'+feedback(m)+'<div class="row" style="margin-top:10px"><button class="btn mini" data-ed>עריכה</button><button class="btn mini danger" data-del>מחיקה</button></div></div>';
    d.querySelector("[data-ed]").onclick=function(){openReview(m.fid);};
    d.querySelector("[data-del]").onclick=function(){if(confirm("למחוק את הסיכום?")){state.matches=state.matches.filter(function(x){return x.id!==m.id;});save();renderHist();}};
    box.appendChild(d);});bindFbButtons();}

/* ================= V3: TEAM TRAINING CHECK ================= */
var CORE12={t:"ליבה 8 דק': פלאנק 3×30 שנ', פלאנק צידי 2×20 שנ' לצד, Dead Bug 2×8",day:"today"};
var CORE12={t:"ליבה 8 דק': פלאנק 3×30 שנ', פלאנק צידי 2×20 שנ' לצד, Dead Bug 2×8",day:"today"};
var TEAMPLAN={
 T0:[{k:"warm",n:"חימום תנועתי"},{k:"upper",n:"פלג גוף עליון",mk:{t:"שכיבות סמיכה 3×12 ומתח 3×מקסימום, בבית הערב",day:"today"}},{k:"roll",n:"גלילים והתאוששות",mk:{t:"10 דק' גליל עיסוי בבית הערב",day:"today"}},{k:"fart",n:"פארטלק מקצבים (למי ששיחק פחות מ־60%)",opt:1,mk:{t:"פארטלק השלמה: 6×(דקה מהיר, דקה קל) אחרי האימון האישי",hard:1}}],
 T2:[{k:"core",n:"Core רמה 1–2",mk:CORE12},{k:"str3",n:"פלג גוף עליון/תחתון רמה 3",mk:{t:"סט נוסף לכל תרגיל באימון הכוח העליון"}},{k:"warm",n:"חימום תנועתי"},{k:"react",n:"תגובה ואתלטיקה",mk:{t:"5 דק' תגובה: 8 יציאות לפי אות של שותף, בחימום לפני האימון"}}],
 T3:[{k:"core",n:"Core רמה 4",mk:{t:"ליבה 10 דק': פלאנק 3×45 שנ', Pallof Press 3×10 לצד, Dead Bug 3×10",day:"today"}},{k:"warm",n:"חימום תנועתי"},{k:"fart",n:"פארטלק/מעברים + ספרינטים 50×4",mk:{t:"4×40 מ' ב־90%, מנוחה מלאה של 90 שנ', אחרי אימון הקבוצה",hard:1}}],
 T4:[{k:"core",n:"Core רמה 1–2",mk:CORE12},{k:"warm",n:"חימום תנועתי"},{k:"agil",n:"אג'יליטי ותגובה",mk:{t:"2 יציאות ל־10 מ' עם שינוי כיוון בחימום"}},{k:"first",n:"יציאות וצעד ראשון",mk:{t:"2 יציאות נוספות ל־5 מ'"}}],
 T5:[{k:"core",n:"Core רמה 1"},{k:"warm",n:"חימום תנועתי"},{k:"act",n:"אקטיבציה ותגובה",mk:{t:"3 דק' אקטיבציה נוספות בחימום האישי לפני המשחק",needGame:1}}]
};
var TP_GEN=[{k:"warm",n:"חימום"},{k:"main",n:"החלק העיקרי של האימון"},{k:"cool",n:"שחרור"}];
function tKey(s){return state.week+"-"+(s.extra?"x"+s.id:s.home);}
function nextOkDay(P,from,hard){for(var d=from+1;d<7;d++){var n=P.ctx[d].next;if(n===0)continue;if(hard&&n!==null&&n<2)continue;if(!hard&&n===1&&!P.team(d).length)continue;return d;}return null;}
function makeups(s,t){var P=plan(state.week),di=s.day,pl=TEAMPLAN[s.id]||TP_GEN,res=[],n=P.ctx[di].next;
  if(t.cancel){if(n===1||n===0)res.push({txt:"האימון בוטל. ערב משחק: לא משלימים, שומרים על רעננות.",skip:1});
    else res.push({txt:"האימון בוטל. השלמה של 30 דק' לבד: חימום, ליבה 8 דק', 4 יציאות ל־10 מ' ו־8 דק' מגעים בשמאל.",day:di});return res;}
  pl.forEach(function(c){if(t.done[c.k]||!c.mk)return;if(c.opt&&t.p60)return;var mk=c.mk,day;
    if(mk.needGame){day=P.games.filter(function(g){return g>di;})[0];if(day==null)return;}
    else if(mk.day==="today")day=di;else day=nextOkDay(P,di,mk.hard);
    if(day==null){res.push({txt:c.n+": אין השבוע יום מתאים להשלמה. זה בסדר, לא מעמיסים.",skip:1});return;}
    res.push({txt:c.n+" לא בוצע. השלמה: "+mk.t,day:day});});
  return res;}
function renderTQ(){var card=document.getElementById("tqCard"),P=plan(state.week);
  var ses=P.S.filter(function(s){return s.day===sel&&!s.onGame&&(!s.cancel||(state.trainings[tKey(s)]||{}).cancel);})[0];
  if(!ses){card.hidden=true;return;}card.hidden=false;
  var t=state.trainings[tKey(ses)]||{done:{},rpe:"",dur:"",legs:0,note:"",cancel:false,p60:false},pl=TEAMPLAN[ses.id]||TP_GEN,first=ses.id==="T0"&&P.ctx[sel].prev===1;
  var h='<h3>שאלון אחרי '+esc(sesName(ses))+'</h3><p class="small muted" style="margin-top:0">מה עשינו היום? מסמנים מה בוצע. על מה שהיה בתכנון ולא בוצע, תקבל השלמה להיום או להמשך השבוע.</p>';
  h+='<label class="comp"><input type="checkbox" id="tqCancel"'+(t.cancel?" checked":"")+'> האימון בוטל</label>';
  if(first)h+='<label class="comp"><input type="checkbox" id="tqP60"'+(t.p60?" checked":"")+'> שיחקתי 60% מהדקות או יותר במשחק האחרון</label>';
  pl.forEach(function(c){if(c.opt&&(!first||t.p60))return;h+='<label class="comp"><input type="checkbox" data-comp="'+c.k+'"'+(t.done[c.k]?" checked":"")+'> '+c.n+'</label>';});
  h+='<div class="dg" style="margin-top:10px"><label>קושי האימון (RPE 1–10) <input type="number" min="1" max="10" id="tqRpe" value="'+(t.rpe||"")+'"></label><label>משך (דקות) <input type="number" min="0" id="tqDur" value="'+(t.dur||"")+'"></label><label style="grid-column:span 2">עוד משהו שעשינו <input type="text" id="tqNote" value="'+esc(t.note||"")+'" style="background:var(--pitch);border:1px solid var(--line);border-radius:8px;padding:9px 10px;min-height:44px;color:var(--chalk)"></label></div>';
  h+='<div class="rrow" style="margin-top:6px"><span>איך הרגליים מרגישות? (1 כבדות מאוד, 5 רעננות)</span><div class="rate" id="tqLegs"></div></div>';
  h+='<button class="btn primary" id="tqSave" type="button" style="margin-top:10px">שמירה וקבלת השלמות</button><div id="tqOut"></div>';
  card.innerHTML=h;
  var lg=document.getElementById("tqLegs");[1,2,3,4,5].forEach(function(v){var b=document.createElement("button");b.type="button";b.textContent=v;if(t.legs===v)b.className="on";b.onclick=function(){t.legs=v;[].forEach.call(lg.children,function(x){x.className=+x.textContent===v?"on":"";});};lg.appendChild(b);});
  var p60=document.getElementById("tqP60");if(p60)p60.onchange=function(){t.p60=p60.checked;state.trainings[tKey(ses)]=t;save();renderTQ();};
  document.getElementById("tqSave").onclick=function(){
    var wasCancel=!!t.cancel;t.cancel=document.getElementById("tqCancel").checked;t.done={};
    [].forEach.call(card.querySelectorAll("[data-comp]"),function(x){t.done[x.dataset.comp]=x.checked;});
    t.rpe=parseFloat(document.getElementById("tqRpe").value)||"";t.dur=parseFloat(document.getElementById("tqDur").value)||"";t.note=document.getElementById("tqNote").value;t.saved=1;
    state.trainings[tKey(ses)]=t;
    if(t.cancel!==wasCancel)setSes(state.week,ses.id,{cancel:t.cancel},false);
    save();if(t.cancel!==wasCancel){refresh();return;}tqOut(ses,t);};
  if(t.saved)tqOut(ses,t);}
function weekLoad(){var s=0;Object.keys(state.trainings).forEach(function(k){if(k.indexOf(state.week+"-")!==0)return;var t=state.trainings[k];if(t&&t.rpe&&t.dur)s+=t.rpe*t.dur;});return s;}
function tqOut(ses,t){var o=document.getElementById("tqOut"),di=ses.day,mk=makeups(ses,t),h='<div class="fb">';
  if(t.rpe&&t.dur)h+='<div class="it"><b class="t">עומס האימון</b><span class="num">'+(t.rpe*t.dur)+'</span> יחידות (קושי × דקות). מתחילת השבוע: <span class="num">'+weekLoad()+'</span>.</div>';
  var nx=di<6?di+1:null;
  if((t.rpe>=8)||(t.legs&&t.legs<=2))h+='<div class="it"><b class="t warn">הגוף עייף</b>האימון היה קשה או שהרגליים כבדות.'+(nx!=null?' <button class="btn mini" id="tqLight" type="button">מצב קל ליום '+DOW[nx]+'</button>':'')+'</div>';
  if(!mk.length)h+='<div class="it"><b class="t ok">הכול בוצע</b>אין השלמות. ממשיכים לפי התוכנית.</div>';
  mk.forEach(function(m,i){h+='<div class="mk"><span class="small">'+esc(m.txt)+(m.day!=null&&!m.skip?' <span class="muted">('+(m.day===di?"היום":"יום "+DOW[m.day])+')</span>':'')+'</span>'+(m.skip?'':'<button class="btn mini" type="button" data-mk="'+i+'">הוספה</button>')+'</div>';});
  o.innerHTML=h+'</div>';
  var lb=document.getElementById("tqLight");if(lb)lb.onclick=function(){actLight(state.week,nx);lb.textContent="נשמר ✓";lb.disabled=true;planMemo={};renderDays();weekBar();};
  [].forEach.call(o.querySelectorAll("[data-mk]"),function(b){b.onclick=function(){var m=mk[+b.dataset.mk];
    state.custom.push({id:Date.now().toString(36)+b.dataset.mk,day:m.day,text:"השלמה: "+m.txt.replace(/^.*השלמה: /,"").replace(/^האימון בוטל\. /,""),time:"",cat:"personal",rec:false,week:state.week});
    save();b.textContent="נוסף ✓";b.disabled=true;renderDays();weekBar();if(m.day===sel)renderDay();};});}


/* ================= V3: VIDEOS ================= */
var VQ={squat:"back squat technique coaching",rdl:"romanian deadlift form coaching",lunge:"walking lunge form",bench:"bench press technique coaching",pullup:"weighted pull up technique",ohp:"standing overhead press technique",nordic:"nordic hamstring curl FIFA 11+",copen:"Copenhagen adductor exercise progression",pogo:"pogo jumps technique athletes",snap:"snap down landing drill",bound:"horizontal bounding technique",drop:"drop jump technique plyometric",landmine:"landmine first step drive acceleration",starts:"acceleration first 5 meters technique football",wall:"wall passing drill weak foot football",scan:"scanning drills football midfielder",m9090:"90 90 hip mobility",ankle:"knee to wall ankle mobility",shots:"late runs into the box finishing drill midfielder",actv:"football pre match activation warm up"};
var VIDS=[["איך משחקים קשר מרכזי","Tifo Football how to play central midfield"],["קשרים מסבירים את התפקיד","The Coaches' Voice midfielder explained"],["סריקה: המחקר של יורדט","Geir Jordet scanning football"],["FIFA 11+: התוכנית המלאה","FIFA 11+ full program official"],["רודרי: מיקום וסריקה","Rodri scanning positioning analysis"],["בלינגהאם: ריצות מאוחרות לרחבה","Bellingham late runs into the box analysis"],["פדרי: קבלה עם גוף פתוח","Pedri receiving half turn analysis"],["קרוס: מסירות ששוברות קווים","Toni Kroos passing analysis"]];
function renderVids(){document.getElementById("vidGrid").innerHTML=VIDS.map(function(v){return '<div class="vcard"><b>'+v[0]+'</b>'+vlink(v[1],"פתיחה ביוטיוב")+'</div>';}).join("");}


/* ================= V4: PLAN ENGINE ================= */
var TAG={"0-1":"T0","0-2":"B:LOWER","0-3":"carb","0-5":"sleep",
 "1-2":"carb","1-3":"noteam","1-4":"B:TECH","1-5":"B:TECH","1-7":"sleep",
 "2-0":"B:MOB","2-2":"carb","2-3":"T2","2-4":"T2","2-5":"T2","2-6":"sleep",
 "3-2":"T3","3-3":"T3","3-4":"T3","3-5":"B:SHOTS","3-6":"T3","3-7":"sleep",
 "4-2":"B:UPPER","4-3":"T4","4-4":"T4","4-5":"carb","4-6":"sleep",
 "5-1":"T5","5-2":"B:ACT","5-3":"carb","5-4":"hyd","5-5":"sleep",
 "6-0":"GAME","6-1":"GAME","6-2":"GAME","6-3":"GAME","6-4":"GAME","6-5":"GAME"};
var GROUP={};Object.keys(TAG).forEach(function(k){(GROUP[TAG[k]]=GROUP[TAG[k]]||[]).push(k.split("-").map(Number));});
var SES_DEF={T0:{home:0,type:"recovery",n:"אימון ראשון"},T2:{home:2,type:"mixed",n:"אימון שלישי"},T3:{home:3,type:"conditioning",n:"אימון הפארטלק"},T4:{home:4,type:"speed",n:"אימון חמישי"},T5:{home:5,type:"prematch",n:"אימון שישי"}};
var TYPE_N={recovery:"התאוששות",mixed:"משולב",conditioning:"כושר עצים",speed:"מהירות וזריזות",prematch:"קל",regular:"רגיל",hard:"עצים",light:"קל",extra:"נוסף"};
var BLK={LOWER:{home:0,n:"כוח רגליים"},TECH:{home:1,n:"אימון הכדורגל האישי"},MOB:{home:2,n:"מוביליטי וסריקה"},SHOTS:{home:3,n:"15 הבעיטות"},UPPER:{home:4,n:"כוח פלג גוף עליון"},ACT:{home:5,n:"יציאות לחידוד"},FREE:{home:6,n:"אימון כדורגל אישי 2"}};
var planMemo={};
function isHard(t){return t==="conditioning"||t==="hard";}
function wkData(wk,create){state.wk=state.wk||{};var o=state.wk[wk];if(!o){o={team:{},extra:[],pins:{},light:{}};if(create)state.wk[wk]=o;}o.team=o.team||{};o.extra=o.extra||[];o.pins=o.pins||{};o.light=o.light||{};return o;}
function addDaysK(wk,n){var d=ld(wk);d.setDate(d.getDate()+n);return ymd(d);}
function gameOffsets(wk){var a=ld(wk).getTime(),res=[];
  (state.fixtures||[]).forEach(function(f){if(f.bye||f.post)return;var o=Math.round((ld(f.d).getTime()-a)/864e5);if(o>=-7&&o<14)res.push({o:o,f:f});});
  return res.sort(function(x,y){return x.o-y.o;});}
function dayCtx(G,d){var next=null,prev=null,game=null;
  G.forEach(function(g){if(g.o>=d&&(next===null||g.o-d<next))next=g.o-d;if(g.o<d&&(prev===null||d-g.o<prev))prev=d-g.o;if(g.o===d&&!game)game=g.f;});
  return {next:next,prev:prev,game:game};}
function sessionsFor(wk){var W=wkData(wk),std=state.teamStd||{},list=[];
  Object.keys(SES_DEF).forEach(function(id){var s=SES_DEF[id],st=std[id]||{},o=W.team[id]||{};
    var day=o.day!=null?o.day:(st.day!=null?st.day:s.home);
    list.push({id:id,home:s.home,day:day,type:s.type,time:o.time||st.time||"",cancel:!!o.cancel||(!!st.off&&!o.on),wkMoved:o.day!=null,stdOff:!!st.off});});
  (state.teamStdExtra||[]).forEach(function(x){var o=W.team[x.id]||{};
    list.push({id:x.id,home:x.day,day:o.day!=null?o.day:x.day,type:x.kind||"regular",time:o.time||x.time||"",cancel:!!o.cancel,extra:1,std:1,text:x.text,wkMoved:o.day!=null});});
  W.extra.forEach(function(x){var o=W.team[x.id]||{};list.push({id:x.id,home:x.day,day:x.day,type:x.kind||"regular",time:x.time||"",cancel:!!o.cancel,extra:1,text:x.text});});
  var G=gameOffsets(wk);
  list.forEach(function(s){if(G.some(function(g){return g.o===s.day;}))s.onGame=1;});
  return list;}
function sesName(s){return s.extra?(s.text||"אימון קבוצה נוסף"):SES_DEF[s.id].n;}
function tmin(s){var m=/^(\d{1,2}):(\d{2})/.exec(s||"");return m?(+m[1])*60+(+m[2]):null;}
var WORDT={"כל היום":500,"בוקר":480,"צהריים":780,"אחה\"צ":900,"—":950,"ערב":1200};
var RELT={"לפני":1,"אימון":1,"באימון":1,"בתוך האימון":1,"אחרי":1,"מיד אחרי":1};
function sortKey(it,teamT,K){var t=it.t||"";if(it.c==="school"&&it.s)return 0;if(it.s&&it.c==="match")return 1;if(it.s&&it.c==="team"&&t==="—")return 489;var m=tmin(t);if(m!=null)return m;
  if(t==="לפני")return teamT-1;if(t==="אימון"||t==="באימון"||t==="בתוך האימון")return teamT+1;if(t==="אחרי"||t==="מיד אחרי")return teamT+95;
  if(t==="-3:00")return K-180;if(t==="חימום")return K-45;if(t==="-0:15")return K-15;if(t==="שריקה")return K;if(t==="מחצית")return K+45;
  return WORDT[t]!=null?WORDT[t]:950;}
var CBASE=[[4,5],[4,4],[5,5],[5,5],[5,5],[4,5],[4,5]];
function carbRange(c,d){if(c.next===0)return [6,8];if(c.next===1)return [7,8];if(c.next===2)return [6,6];return CBASE[d];}
function rng(r){return r[0]===r[1]?r[0]+"":r[0]+"–"+r[1];}
function carbIt(it,d,c){var r=carbRange(c,d),o={c:"fuel",t:"כל היום",h:"",d:""};
  if(it&&/^ארוחה/.test(it.h)){o.t=it.t;o.h=it.h;o.d="פחמימות "+rng(r)+" g/kg ביום.";return o;}
  if(c.next===1){o.h="העמסת שיא: פחמימות 7–8 g/kg";o.d="פסטה, אורז, תפוחי אדמה.";}
  else if(c.next===2){o.h="תחילת העמסה: פחמימות 6 g/kg, נוזלים מוגברים";}
  else{o.h="פחמימות "+rng(r)+" g/kg"+(d===0?", חלבון 120 g":"")+(d===2?", 3 ליטר מים":"");if(d>=4)o.d="אין משחק ביומיים הקרובים, אז אין העמסה.";}
  return o;}
function sleepIt(c){return c.next===2?{c:"recovery",t:"22:00",h:"שינה מוקדמת ב־22:00"}:{c:"recovery",t:"22:30",h:"שינה 8.5–9 שעות"};}
function cloneIt(it,id,ext){var o={id:id,c:it.c,t:it.t,h:it.h,d:it.d||"",s:it.s};if(ext)for(var k in ext)o[k]=ext[k];return o;}
function groupItems(g){return (GROUP[g]||[]).map(function(p){return {it:DAYS[p[0]].items[p[1]],id:"d"+p[0]+"-"+p[1],home:p[0]};});}

function plan(wk){
  if(planMemo[wk])return planMemo[wk];
  var S=sessionsFor(wk),W=wkData(wk),G=gameOffsets(wk),ctx=[],d;
  for(d=0;d<7;d++)ctx[d]=dayCtx(G,d);
  function team(x){return S.filter(function(s){return s.day===x&&!s.cancel&&!s.onGame;});}
  function hard(x){return team(x).some(function(s){return isHard(s.type);});}
  var pl={},notes=[];
  function ok(b,x){var n=ctx[x].next;if(n===0)return false;
    if(b==="LOWER")return (n===null||n>=3)&&!hard(x);
    if(b==="UPPER")return n===null||n>=2;
    if(b==="TECH")return (n===null||n>=2)&&!hard(x);
    return true;}
  function score(b,x){
    if(b==="LOWER")return ctx[x].prev===1?0:(x===0?1:(x===1?2:3+x));
    if(b==="TECH")return (x===1?0:1+x*0.1)+(team(x).length?3:0)+(pl.LOWER===x?4:0);
    if(b==="UPPER")return [3,4,1.5,2,0,5,6][x]+(pl.LOWER===x?4:0)+(pl.TECH===x?2:0)+(hard(x)?2.5:0);
    return x;}
  ["LOWER","TECH","UPPER"].forEach(function(b){
    if(W.pins[b]!=null){pl[b]=W.pins[b];if(!ok(b,pl[b]))notes.push({d:pl[b],w:1,t:BLK[b].n+" ביום "+DOW[pl[b]]+" לפי הבקשה שלך, למרות שזה קרוב למשחק או ליום עצים. כדאי להוריד עומס."});return;}
    var best=null,bs=1e9;for(var x=0;x<7;x++){if(!ok(b,x))continue;var s=score(b,x);if(s<bs){bs=s;best=x;}}
    pl[b]=best;});
  pl.MOB=W.pins.MOB!=null?W.pins.MOB:(ctx[2].next!==0?2:(ctx[1].next!==0?1:null));
  var cond=S.filter(function(s){return isHard(s.type)&&!s.cancel&&!s.onGame;})[0];
  if(W.pins.SHOTS!=null)pl.SHOTS=W.pins.SHOTS;
  else if(cond&&ctx[cond.day].next!==0)pl.SHOTS=cond.day;
  else{var alt=S.filter(function(s){return !s.cancel&&!s.onGame&&s.type!=="prematch"&&(ctx[s.day].next===null||ctx[s.day].next>=2);}).sort(function(a,b){return b.day-a.day;})[0];pl.SHOTS=alt?alt.day:(pl.TECH!=null?pl.TECH:null);}
  var games=G.filter(function(g){return g.o>=0&&g.o<=6;}).map(function(g){return g.o;});
  var acts=G.filter(function(g){return g.o>=1&&g.o<=7;}).map(function(g){return g.o-1;});
  if(!acts.length&&!games.length)acts=[5];
  pl.ACT=acts.length?acts[0]:null;
  pl.FREE=((ctx[6].next===null||ctx[6].next>=2)&&!team(6).length&&pl.TECH!==6)?6:null;
  var place=[];["LOWER","TECH","MOB","SHOTS","UPPER","FREE"].forEach(function(b){if(pl[b]!=null)place.push({b:b,d:pl[b]});});
  acts.forEach(function(a){place.push({b:"ACT",d:a});});
  games.forEach(function(g){place.push({b:"GAME",d:g});});
  var light={};Object.keys(W.light).forEach(function(k){if(W.light[k])light[+k]=1;});
  if(pl.TECH!=null&&team(pl.TECH).length&&!light[pl.TECH])light[pl.TECH]=2;
  function why(b,h){var c=ctx[h];if(c.next===0)return "יש משחק ביום "+DOW[h];if(b==="LOWER"&&c.next!==null&&c.next<3)return "יום "+DOW[h]+" קרוב מדי למשחק (צריך 72 שעות)";if(hard(h))return "ביום "+DOW[h]+" יש אימון עצים";if(c.next!==null&&c.next<2)return "יום "+DOW[h]+" קרוב מדי למשחק";if(b==="TECH"&&team(h).length)return "ביום "+DOW[h]+" יש עכשיו אימון קבוצה";if(b==="UPPER"&&pl.LOWER===h)return "כוח רגליים עבר ליום "+DOW[h]+", ועדיף לא שני אימוני כוח באותו יום";if(b==="UPPER"&&pl.TECH===h)return "אימון הכדורגל האישי עבר ליום "+DOW[h];return "";}
  ["LOWER","TECH","UPPER"].forEach(function(b){if(W.pins[b]!=null)return;var h=BLK[b].home;
    if(pl[b]===null)notes.push({d:h,w:1,t:BLK[b].n+": אין השבוע יום מתאים ("+(b==="LOWER"?"72 שעות לפני משחק ולא ביום עצים":"48 שעות לפני משחק")+"). מדלגים השבוע."});
    else if(pl[b]!==h){var r=why(b,h);notes.push({d:pl[b],t:BLK[b].n+" עבר מיום "+DOW[h]+" ליום "+DOW[pl[b]]+(r?", כי "+r:"")+"."});}});
  S.forEach(function(s){if(s.cancel||s.onGame)return;var n=ctx[s.day].next;if(isHard(s.type)&&n!==null&&n>=1&&n<=2)notes.push({d:s.day,w:1,t:"אימון עצים ביום "+DOW[s.day]+", "+(n===1?"יום":"יומיים")+" לפני משחק. מצדך: בלי תוספות אישיות באותו יום, ולהקפיד על פחמימות ושינה."});});
  if(pl.TECH!=null&&light[pl.TECH]===2)notes.push({d:pl.TECH,t:"ביום "+DOW[pl.TECH]+" יש גם אימון קבוצה, אז אימון הכדורגל האישי בגרסה קצרה (כ־40 דק')."});
  if(games.length>1)notes.push({d:games[0],w:1,t:"שני משחקים השבוע: בלי כוח רגליים כבד בין המשחקים, ואחרי כל משחק יום התאוששות."});
  var P={wk:wk,S:S,ctx:ctx,pl:pl,place:place,light:light,notes:notes,games:games,team:team,hard:hard,days:[]};
  for(d=0;d<7;d++)P.days[d]=buildDay(P,d);
  planMemo[wk]=P;return P;}

function blocksOn(P,d){return P.place.filter(function(x){return x.d===d;}).map(function(x){return x.b;});}
function buildDay(P,d){
  var c=P.ctx[d],items=[],gameHere=c.next===0,teamS=P.team(d),bl=blocksOn(P,d),anyS=P.S.filter(function(s){return s.day===d;});
  var K=gameHere?(tmin(c.game&&c.game.time)||tmin(state.kickoff)||960):960;
  var hasCarb=false,hasSleep=false;
  DAYS[d].items.forEach(function(it,i){var tag=TAG[d+"-"+i],id="d"+d+"-"+i;
    if(!tag){items.push(cloneIt(it,id));return;}
    if(tag==="carb"){if(!gameHere){items.push(cloneIt(carbIt(it,d,c),id));hasCarb=true;}return;}
    if(tag==="sleep"){if(!gameHere){items.push(cloneIt(sleepIt(c),id));hasSleep=true;}return;}
    if(tag==="noteam"){if(!anyS.length&&!gameHere)items.push(cloneIt(it,id));return;}});
  if(d===6&&!gameHere){
    items.push({id:"d6-0",c:"school",t:"—",h:"חופש מבית ספר",s:1});
    items.push({id:"d6-1",c:"match",t:"—",h:byeInWeek(P.wk)?"מחזור חופשי: אין משחק":"אין משחק היום",s:1});
    items.push({id:"d6-3",c:"recovery",t:"אחה\"צ",h:"מנוחה פעילה: הליכה או אופניים קלים 20–30 דק'",d:""});}
  if(!gameHere&&!hasCarb)items.push(cloneIt(carbIt(null,d,c),d===6?"d6-4":"d"+d+"-c"));
  if(!gameHere&&!hasSleep)items.push(cloneIt(sleepIt(c),d===6?"d6-5":"d"+d+"-z"));
  var loadDay=null;for(var x=0;x<7;x++)if(P.ctx[x].next===1)loadDay=x;
  if(!gameHere&&(c.next===1||(loadDay===null&&d===5)))items.push(cloneIt(DAYS[5].items[4],"d5-4"));
  anyS.forEach(function(s){
    if(s.onGame){items.push({id:"tg-"+s.id,c:"team",t:"—",h:"במקום "+sesName(s)+": משחק",s:1});return;}
    if(s.cancel){items.push({id:"tc-"+s.id,c:"team",t:s.time||"—",h:sesName(s)+" בוטל",d:s.stdOff?"שינוי קבוע":"השבוע",s:1});
      if(c.next===null||c.next>=2)items.push({id:"mk-"+s.id+"-"+d,c:"personal",t:s.time||"16:00",h:"השלמה במקום אימון הקבוצה (כ־30 דק')",d:"חימום FIFA 11+ 10 דק', ליבה 8 דק', 4 יציאות ל־10 מ', 8 דק' מגעים ברגל שמאל"+(isHard(s.type)?", ו־4×40 מ' ב־90% עם מנוחה מלאה.":".")});
      else if(c.next===1)items.push({id:"mn-"+s.id,c:"recovery",t:"—",h:"ערב משחק: לא משלימים את האימון, רק מנוחה",s:1});
      return;}
    if(s.extra){items.push({id:"tx-"+s.id,c:"team",t:s.time||"אחה\"צ",h:s.text||"אימון קבוצה נוסף",d:"אימון "+(TYPE_N[s.type]||"נוסף")+(s.std?" · קבוע":" · השבוע")+(c.next===1?" · ערב משחק: בלי תוספות מצדך":"")});return;}
    var gi=groupItems(s.id),mainIdx=gi.length-1;
    for(var j=gi.length-1;j>=0;j--)if(gi[j].it.c==="team"){mainIdx=j;break;}
    gi.forEach(function(g,j){var o=cloneIt(g.it,g.id);
      if(g.id==="d0-1"&&c.prev!==1){o.h="אימון קבוצה רגיל";o.d="לא היה משחק אתמול, אז אין חלוקה לפי דקות.";}
      if(g.id==="d5-1"&&c.next!==1){o.h="אימון "+DOW[d]+" לפי המועדון";o.d=c.next===null?"אין משחק קרוב.":"אין משחק מחר.";}
      if(j===mainIdx){if(s.time)o.t=s.time;var ex=[];
        if(s.day!==s.home)ex.push("הועבר מיום "+DOW[s.home]+(s.wkMoved?" (השבוע)":" (קבוע)"));
        if(c.next===1&&s.type!=="prematch")ex.push("ערב משחק: אם האימון לא מוקל, מצדך בלי תוספות");
        if(ex.length)o.d=(o.d?o.d+" · ":"")+ex.join(" · ");}
      items.push(o);});});
  bl.forEach(function(b){
    if(b==="GAME"){gameItems(d,c).forEach(function(o){items.push(o);});return;}
    if(b==="FREE"){items.push({id:"d6-2",c:"personal",t:"בוקר",h:"אימון כדורגל אישי 2 (אופציונלי, כ־55 דק')",d:"מסירות ארוכות, 1 על 1 וסיומת בנפח. הפירוט והטיימר בכרטיס התרגילים למטה."});return;}
    var home=BLK[b].home,lt=P.light[d];
    groupItems("B:"+b).forEach(function(g){var o=cloneIt(g.it,g.id),moved=d!==home;
      if(b==="LOWER"){o.t=teamS.length?"אחרי":"16:00";if(lt)o.d+=" מצב קל: סט אחד פחות בכל תרגיל, RIR +1.";}
      if(b==="TECH"&&g.id==="d1-4"){if(lt)o.h="אימון כדורגל אישי קצר (כ־40 דק'): טכניקה, סריקה וסיומת";if(teamS.length)o.t="לפני";}
      if(b==="TECH"&&g.id==="d1-5"&&lt)o.d="מצב קל: חצי מהקפיצות, או לדלג.";
      if(b==="UPPER"&&moved)o.t=teamS.length?"לפני":"16:00";
      if(b==="MOB"&&moved)o.t="ערב";
      if(b==="SHOTS")o.t=teamS.length?"אחרי":"16:30";
      if(b==="ACT"){if(c.next!==1)o.d="שומרים על חדות גם בשבוע בלי משחק.";o.t=teamS.length?"באימון":"אחה\"צ";}
      if(moved&&b!=="ACT")o.d=(o.d?o.d+" · ":"")+"הועבר מיום "+DOW[home];
      items.push(o);});});
  var teamT=960;
  items.forEach(function(o){if(o.c==="team"&&!o.s&&!RELT[o.t]){var m=tmin(o.t);if(m==null&&WORDT[o.t]!=null&&o.t!=="—"&&o.t!=="כל היום")m=WORDT[o.t];if(m!=null)teamT=m;}});
  var keyed=items.map(function(o,i){return {o:o,k:sortKey(o,teamT,K),i:i};});
  keyed.sort(function(a,b){return a.k-b.k||a.i-b.i;});
  return {ctx:c,items:keyed.map(function(x){return x.o;}),blocks:bl};}
function gameItems(d,c){var f=c.game,pre=d===6?"d6-":"g"+d+"-",out=[];
  if(d===6)out.push({id:"d6-0",c:"school",t:"—",h:"חופש מבית ספר",s:1});
  [1,2,3,4,5].forEach(function(i){var o=cloneIt(DAYS[6].items[i],pre+i);if(i===4&&f){o.h="יום משחק ⚽ "+fxLabel(f);if(f.time)o.t=f.time;}out.push(o);});
  var pm=pmPoints(f);out.push({id:"gp"+d,c:"match",t:"בוקר",h:"לקרוא את 3 הדגשים למשחק",d:pm.pts.map(function(p,i){return (i+1)+". "+p.t;}).join("  ")});
  return out;}

/* ----- ids / exercises ----- */
function exFor(di){var P=plan(state.week),w=blockWeek(),out=[];
  P.days[di].blocks.forEach(function(b){if(b==="FREE")return;var h=b==="GAME"?6:BLK[b].home;
    (PROG[h]||[]).forEach(function(p,i){if(p.hide||!p.v[w])return;out.push({p:p,i:i,v:p.v[w],id:"x"+h+"-"+i+"-w"+w});});});
  return out;}
function fsFor(di){var b=plan(state.week).days[di].blocks,out=[];if(b.indexOf("TECH")>=0)out.push("A");if(b.indexOf("FREE")>=0)out.push("B");return out;}
function fsIds(di){var w=blockWeek(),P=plan(state.week),res=[];fsFor(di).forEach(function(k){segList(k,!!P.light[di]).forEach(function(s){res.push("fs"+k+"-"+s.i+"-w"+w);});});return res;}
function baseIds(di){return plan(state.week).days[di].items.filter(function(it){return !it.s;}).map(function(it){return it.id;});}
function exIds(di){return exFor(di).map(function(o){return o.id;}).concat(fsIds(di));}
function ids(di){return baseIds(di).concat(customFor(di).map(function(c){return "c-"+c.id;})).concat(exIds(di));}

function dayTagText(d){var P=plan(state.week),c=P.ctx[d],parts=[];
  if(c.next===0)return "יום משחק: "+fxLabel(c.game)+(c.game.time?" ב־"+c.game.time:"");
  if(c.next===1)parts.push("ערב משחק");else if(c.prev===1)parts.push("יום אחרי משחק");
  var ts=P.team(d);
  if(ts.length)parts.push("אימון קבוצה: "+ts.map(function(s){return TYPE_N[s.type];}).join(", "));
  else if(P.S.some(function(s){return s.day===d&&s.cancel;}))parts.push("אימון הקבוצה בוטל");
  else parts.push("בלי אימון קבוצה");
  P.days[d].blocks.forEach(function(b){if(b==="LOWER"||b==="UPPER"||b==="TECH"||b==="FREE")parts.push(BLK[b].n);});
  if(c.next===2)parts.push("תחילת העמסה");
  return parts.join(" · ");}
function dayNote(d){var P=plan(state.week),c=P.ctx[d],out=[];
  P.notes.forEach(function(n){if(n.d===d)out.push((n.w?"⚠ ":"")+esc(n.t));});
  if(c.next===1)out.push("<b>ערב משחק:</b> גירוי עצבי בלבד, נפח נמוך מאוד, העמסת 7–8 g/kg.");
  else if(P.hard(d))out.push(DAYS[3].note);
  else if(c.prev===1&&P.pl.LOWER===d)out.push(DAYS[0].note.replace("עד שבת","עד המשחק הבא"));
  if(!P.games.length&&d>=5&&c.next!==1)out.push(d===5?"<b>שבוע בלי משחק:</b> אין העמסת פחמימות ואין צורך בחידוד. זמן טוב להשלים משימות שנפלו.":"<b>שבת בלי משחק:</b> יום קל, עם אימון כדורגל אישי אופציונלי.");
  return out.join("<br>")||null;}

/* ----- schedule changes (used by the editor and the coach) ----- */
function wkOfLabel(wk){return wk===state.week?"השבוע":(wk===nextWeekKey(state.week)?"בשבוע הבא":"בשבוע של "+dmy(wk));}
function setSes(wk,id,patch,always){var W=wkData(wk,true),wx=W.extra.filter(function(x){return x.id===id;})[0],sx=(state.teamStdExtra||[]).filter(function(x){return x.id===id;})[0];
  if(wx){if(patch.day!=null)wx.day=patch.day;if(patch.time!=null)wx.time=patch.time;if(patch.cancel)W.extra=W.extra.filter(function(x){return x.id!==id;});return;}
  if(always){
    if(sx){if(patch.day!=null)sx.day=patch.day;if(patch.time!=null)sx.time=patch.time;if(patch.cancel)state.teamStdExtra=state.teamStdExtra.filter(function(x){return x.id!==id;});}
    else{state.teamStd=state.teamStd||{};var st=Object.assign({},state.teamStd[id]);
      if(patch.day!=null){if(patch.day===SES_DEF[id].home)delete st.day;else st.day=patch.day;}
      if(patch.time!=null){if(patch.time)st.time=patch.time;else delete st.time;}
      if(patch.cancel!=null){if(patch.cancel)st.off=1;else delete st.off;}
      if(Object.keys(st).length)state.teamStd[id]=st;else delete state.teamStd[id];}
    if(W.team[id]){["day","time","cancel","on"].forEach(function(k){if(patch[k==="on"?"cancel":k]!=null)delete W.team[id][k];});if(!Object.keys(W.team[id]).length)delete W.team[id];}
    return;}
  var o=Object.assign({},W.team[id]);
  if(patch.day!=null)o.day=patch.day;if(patch.time!=null){if(patch.time)o.time=patch.time;else delete o.time;}
  if(patch.cancel!=null){if(patch.cancel){o.cancel=1;delete o.on;}else{delete o.cancel;if((state.teamStd[id]||{}).off)o.on=1;}}
  var base=sx?sx.day:((state.teamStd[id]||{}).day!=null?state.teamStd[id].day:(SES_DEF[id]?SES_DEF[id].home:null));
  if(o.day===base)delete o.day;
  if(Object.keys(o).length)W.team[id]=o;else delete W.team[id];}
function sesOnDay(wk,d,incCancel){return sessionsFor(wk).filter(function(s){return s.day===d&&(incCancel||!s.cancel);});}
function actCancel(wk,d,always){var ss=sesOnDay(wk,d);if(!ss.length)return "לא מצאתי אימון קבוצה ביום "+DOW[d]+" "+wkOfLabel(wk)+".";
  ss.forEach(function(s){setSes(wk,s.id,{cancel:true},always);});save();
  return "עדכנתי: האימון ביום "+DOW[d]+(always?" לא מתקיים יותר (שינוי קבוע).":" בוטל "+wkOfLabel(wk)+".");}
function actMove(wk,from,to,time,always){var ss=sesOnDay(wk,from);if(!ss.length)return "לא מצאתי אימון קבוצה ביום "+DOW[from]+" "+wkOfLabel(wk)+".";
  var s=ss[0];setSes(wk,s.id,time?{day:to,time:time}:{day:to},always);save();
  return "עדכנתי: "+sesName(s)+" עבר מיום "+DOW[from]+" ליום "+DOW[to]+(time?" ב־"+time:"")+" "+(always?"(שינוי קבוע).":wkOfLabel(wk)+".");}
function actTime(wk,d,time,always){var ss=sesOnDay(wk,d);if(!ss.length)return "לא מצאתי אימון קבוצה ביום "+DOW[d]+" "+wkOfLabel(wk)+".";
  setSes(wk,ss[0].id,{time:time},always);save();return "עדכנתי: האימון ביום "+DOW[d]+" בשעה "+time+(always?" (קבוע).":" "+wkOfLabel(wk)+".");}
function actAdd(wk,d,time,kind,always){var id="e"+Date.now().toString(36)+Math.random().toString(36).slice(2,4),o={id:id,day:d,time:time||"",kind:kind||"regular",text:"אימון קבוצה נוסף"+(kind==="hard"?" (עצים)":kind==="light"?" (קל)":"")};
  if(always){state.teamStdExtra=state.teamStdExtra||[];state.teamStdExtra.push(o);}else wkData(wk,true).extra.push(o);save();
  return "הוספתי אימון קבוצה ביום "+DOW[d]+(time?" ב־"+time:"")+" "+(always?"(כל שבוע).":wkOfLabel(wk)+".");}
function actRestore(wk,d){if(d==null){if(state.wk)delete state.wk[wk];save();return "איפסתי את כל השינויים "+wkOfLabel(wk)+". חוזרים ללו\"ז הרגיל.";}
  var W=wkData(wk,true);sessionsFor(wk).forEach(function(s){if(s.day===d||s.home===d){delete W.team[s.id];}});
  W.extra=W.extra.filter(function(x){return x.day!==d;});Object.keys(W.pins).forEach(function(b){if(W.pins[b]===d)delete W.pins[b];});delete W.light[d];save();
  return "החזרתי את יום "+DOW[d]+" "+wkOfLabel(wk)+" ללו\"ז הרגיל.";}
function actPin(wk,b,d){wkData(wk,true).pins[b]=d;save();return BLK[b].n+" ביום "+DOW[d]+" "+wkOfLabel(wk)+".";}
function actLight(wk,d){wkData(wk,true).light[d]=1;save();return "יום "+DOW[d]+" במצב קל.";}
function actTask(wk,d,text){state.custom.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),day:d,text:text,time:"",cat:"personal",rec:false,week:wk});save();return "הוספתי משימה ליום "+DOW[d]+": "+text;}
function refresh(){planMemo={};renderBanner();renderTeamCard();renderDays();renderDay();weekBar();renderFuel();renderPM();renderFx();syncKick();}

/* ----- team schedule editor ----- */
function renderTeamCard(){var P=plan(state.week),W=wkData(state.week),el=document.getElementById("teamBody"),sum=document.getElementById("teamSum");if(!el)return;
  var nCh=Object.keys(W.team).length+W.extra.length+Object.keys(W.pins).length+Object.keys(W.light).length;
  var nStd=Object.keys(state.teamStd||{}).length+(state.teamStdExtra||[]).length;
  sum.innerHTML='<span>🗓 אימוני הקבוצה השבוע</span>'+(nCh?'<span class="badge">'+nCh+' שינויים</span>':'')+(P.notes.some(function(n){return n.w;})?'<span class="badge warnb">⚠</span>':'');
  var opts=function(sel){return DOW.map(function(n,i){return '<option value="'+i+'"'+(i===sel?" selected":"")+'>'+n+'</option>';}).join("");};
  var h='<p class="small muted" style="margin-top:0">כשהמועדון משנה אימון, מעדכנים כאן או כותבים למאמן בצ\'אט. האימונים האישיים, הפחמימות והשינה מתארגנים מחדש לבד.</p>';
  h+='<label class="comp"><input type="checkbox" id="tmStd"> שינויים שאני עושה כאן קבועים לכל השבועות</label>';
  P.S.slice().sort(function(a,b){return a.day-b.day;}).forEach(function(s){
    h+='<div class="trow"><div class="tn"><b>'+esc(sesName(s))+'</b> <span class="muted small">'+(TYPE_N[s.type]||"")+'</span>'+(s.onGame?' <span class="small warn">יום משחק</span>':'')+(s.day!==s.home&&!s.extra?' <span class="small" style="color:var(--cyan)">הועבר</span>':'')+'</div>'+
      '<select data-sd="'+s.id+'" aria-label="יום">'+opts(s.day)+'</select><input type="time" data-st="'+s.id+'" value="'+(s.time||"")+'" aria-label="שעה">'+
      '<label class="small tc"><input type="checkbox" data-sc="'+s.id+'"'+(s.cancel?" checked":"")+'> בוטל</label></div>';});
  h+='<div class="dg" style="margin-top:12px"><label>יום <select id="tmAddD">'+opts(new Date().getDay())+'</select></label><label>שעה <input type="time" id="tmAddT"></label><label>סוג <select id="tmAddK"><option value="regular">רגיל</option><option value="hard">עצים</option><option value="light">קל</option></select></label><label style="justify-content:flex-end"><button class="btn" id="tmAdd" type="button">+ אימון נוסף</button></label></div>';
  if(P.notes.length)h+='<h4 class="nh">מה השתנה בתוכנית האישית</h4><ul class="nlist">'+P.notes.map(function(n){return '<li class="'+(n.w?"w":"")+'">'+(n.w?"⚠ ":"")+esc(n.t)+'</li>';}).join("")+'</ul>';
  h+='<div class="row" style="margin-top:12px">'+(nCh?'<button class="btn danger" id="tmReset" type="button">איפוס שינויי השבוע</button>':'')+(nStd?'<button class="btn danger" id="tmResetStd" type="button">איפוס הלו"ז הקבוע</button>':'')+'</div>';
  el.innerHTML=h;
  var always=function(){return document.getElementById("tmStd").checked;};
  [].forEach.call(el.querySelectorAll("[data-sd]"),function(x){x.onchange=function(){setSes(state.week,x.dataset.sd,{day:+x.value},always());save();refresh();};});
  [].forEach.call(el.querySelectorAll("[data-st]"),function(x){x.onchange=function(){setSes(state.week,x.dataset.st,{time:x.value},always());save();refresh();};});
  [].forEach.call(el.querySelectorAll("[data-sc]"),function(x){x.onchange=function(){setSes(state.week,x.dataset.sc,{cancel:x.checked},always());save();refresh();};});
  document.getElementById("tmAdd").onclick=function(){actAdd(state.week,+document.getElementById("tmAddD").value,document.getElementById("tmAddT").value,document.getElementById("tmAddK").value,always());refresh();};
  var r=document.getElementById("tmReset");if(r)r.onclick=function(){if(confirm("לאפס את כל שינויי השבוע?")){actRestore(state.week,null);refresh();}};
  var rs=document.getElementById("tmResetStd");if(rs)rs.onclick=function(){if(confirm("לאפס את השינויים הקבועים בלו\"ז הקבוצה?")){state.teamStd={};state.teamStdExtra=[];save();refresh();}};}

/* ================= V4: FOOTBALL SESSIONS ================= */
var FS={
 A:{n:"טכניקה, סריקה וסיומת",when:"יום בלי אימון קבוצה (בדרך כלל שני). כ־70 דק', בשבוע הפריקה כ־50.",need:"כדור, קיר, 6 קונוסים (עדיף בצבעים), שער או קיר עם 2 מטרות נמוכות. שותף עוזר אבל לא חובה.",
  theme:["קבלה ומסירה ברגל שמאל","נגיעה אחת וסריקה כפולה","החלטות מהירות תחת לחץ","פריקה: קל ובקצב נוח"],
  segs:[
   {n:"חימום FIFA 11+",m:[10,10,10,8],how:"6 תרגילי הריצה של FIFA 11+ על 20–30 מ', 2 סבבים: ריצה ישרה, פתיחת ירך, סגירת ירך, מעגל סביב קונוס, קפיצות עם מגע כתף, ריצה קדימה ואחורה. בסוף 3 האצות ל־15 מ' ב־70%.",cues:["מעלים קצב בהדרגה","ברך מעל כף הרגל בכל נחיתה"],q:"FIFA 11+ part 1 running exercises"},
   {n:"קבלה בחצי סיבוב + רגל שמאל",m:[12,12,12,8],setup:"6–8 מ' מהקיר. שני קונוסים 2 מ' מאחוריך, אחד מימין ואחד משמאל.",
    v:["מסירה לקיר, מבט מעבר לכתף כשהכדור חוזר, קבלה ברגל הרחוקה לכיוון אחד הקונוסים, ומסירה חזרה. 2 נגיעות, 70% בשמאל.","קבלה ומסירה בתנועה אחת (1–2 נגיעות). מחליפים קונוס בכל חזרה.","לחץ זמן: 3 שניות לכל חזרה. לפני הנגיעה אומרים בקול לאיזה קונוס יוצאים.","קל: 2 נגיעות, קצב נוח."],
    sets:"4 סטים של 2 דק', דקה מנוחה ביניהם",cues:["גוף בזווית של 45° לקיר, לא מולו","הנגיעה הראשונה קדימה, לא מתחת לגוף","מבט מעבר לכתף כשהכדור בדרך"],q:"half turn receiving drill wall football"},
   {n:"סריקה תחת לחץ",m:[10,10,10,6],setup:"4 קונוסים בצבעים שונים סביבך, 5 מ' לכל כיוון. שותף מוסר. בלי שותף: קיר, וטלפון מאחוריך עם טיימר צבעים אקראי.",
    v:["כשהכדור בדרך אליך השותף צועק צבע. מקבלים ומוליכים לקונוס בצבע הזה ב־2 נגיעות.","השותף מרים מספר אצבעות מאחוריך. אומרים את המספר לפני הנגיעה ומוסרים חזרה בנגיעה אחת.","2 מבטים בין כל מסירה, והצבע משתנה ברגע האחרון. חזרות של 20 שנ' בקצב משחק.","קל: צבע אחד בכל חזרה."],
    sets:"5 חזרות של דקה, 30 שנ' מנוחה",cues:["המבט האחרון רגע לפני הנגיעה","כל מבט קצר מ־0.7 שנ'"],q:"scanning drill football colored cones"},
   {n:"הולכה ושינוי כיוון בשמאל",m:[8,8,8,6],setup:"6 קונוסים בזיגזג, 1.5 מ' ביניהם.",
    v:["רק רגל שמאל, פנים וגב כף הרגל. 6 מעברים בקצב בינוני.","מוסיפים סיבוב חד בסוף המסלול ויציאה של 5 מ'.","מעברים בקצב משחק, עם מסירה לקיר בסוף כל מעבר.","4 מעברים קלים."],
    sets:"6 מעברים, הליכה חזרה",cues:["נגיעות קטנות, הכדור קרוב לרגל","ראש למעלה בין הקונוסים"],q:"weak foot dribbling cone drill"},
   {n:"אתלטיקה: פליאומטריה וצעד ראשון",m:[10,10,10,6],skipShort:1,how:"לפי כרטיסי התרגילים למטה: Pogo, ואז Bounding או Drop לפי השבוע, Landmine ויציאות. איכות לפני כמות, מנוחה מלאה בין סטים.",cues:["מגע קרקע קצר","עוצרים כשהקפיצות נהיות איטיות"],q:"plyometrics for soccer players first step"},
   {n:"סיומת: 3 דפוסי ההבקעה",m:[15,15,15,10],setup:"שער או קיר עם 2 מטרות נמוכות בפינות. 3 קונוסים: אגף, קו שני, ו'בלם ומגן'.",
    v:["5 מכל דפוס: 1) כניסה מאוחרת ובעיטה בנגיעה אחת לפינה נמוכה. 2) כדור חוזר בחצי־שטח: עצירה קדימה ובעיטה. 3) ריצה אלכסונית בין הקונוסים וסיומת בשמאל.","10 מדפוס 2 ו־5 מדפוס 1. לפני כל בעיטה ספרינט של 5 מ'.","10 מדפוס 3, רק שמאל, ו־5 מדפוס 1.","3 מכל דפוס, קצב נוח."],
    sets:"15 בעיטות, 20–30 שנ' בין בעיטות",cues:["דיוק לפני כוח","לספור כמה נכנסו לפינות ולרשום"],q:"midfielder finishing drills late runs"},
   {n:"שחרור, נורדיק וקופנהגן",m:[5,5,5,5],how:"2 דק' ריצה קלה, ואז נורדיק וקופנהגן לפי הכרטיסים למטה, ומתיחות קלות.",cues:["נשימה איטית ועמוקה"],q:"nordic hamstring Copenhagen adductor"}]},
 B:{n:"מסירות ארוכות, 1 על 1 וסיומת",when:"שבת בלי משחק (אופציונלי). כ־55 דק'.",need:"כדור, קיר רחוק או שותף, 4 קונוסים, שער.",
  theme:["מסירות ארוכות וסיומת","מיגון כדור וסיבובים","סיומת בקצב משחק","פריקה: קל"],
  segs:[
   {n:"חימום דינמי + FIFA 11+",m:[10,10,10,8],how:"ריצה קלה, פתיחות וסגירות ירך, לאנג'ים בהליכה, ו־3 האצות ל־15 מ'.",cues:["לא למהר"],q:"football dynamic warm up"},
   {n:"מסירות ארוכות והחלפת אגף",m:[10,10,10,6],setup:"קיר רחוק או שותף במרחק 25–35 מ'.",how:"10 מסירות בכל רגל, קודם שמאל. מסירה נמוכה או בחצי גובה, ואחריה ריצה של 5 מ' לתמיכה.",cues:["רגל התמיכה ליד הכדור","מכים באמצע הכדור, גוף מעל הכדור"],q:"long passing technique switch play"},
   {n:"1 על 1: מיגון וסיבובים",m:[10,10,10,6],how:"עם שותף: הוא מאחוריך, אתה מקבל, מגן בגוף ומסתובב לצד הפתוח, 6 חזרות של 30 שנ'. בלי שותף: סיבובי קרויף, אחרי כף הרגל וגב כף רגל חוץ, 4 סטים של דקה.",cues:["גוף נמוך, יד מרחיקה","לסרוק לפני הקבלה כדי לדעת לאן מסתובבים"],q:"shielding and turning drill midfielder"},
   {n:"סיומת בנפח",m:[15,15,15,10],how:"30 בעיטות: 10 בנגיעה אחת מכדור שנזרק מהצד, 10 אחרי הולכה של 10 מ', 10 בשמאל בלבד. רושמים כמה נכנסו לפינות.",cues:["מבט על השוער/המטרה לפני הבעיטה","דיוק לפני כוח"],q:"finishing drills one touch shooting"},
   {n:"מעברים קצרים",m:[5,5,5,0],skipShort:1,how:"6 פעמים 20 מ' ב־85%, הליכה חזרה.",cues:["ריצה משוחררת, לא ספרינט מלא"],q:"football tempo runs"},
   {n:"שחרור",m:[5,5,5,5],how:"הליכה, מתיחות קלות וירך 90/90.",cues:[],q:"90 90 hip mobility"}]}
};
function segList(k,short){var w=blockWeek(),S=FS[k];return S.segs.map(function(g,i){var m=g.m[w];if(short)m=g.skipShort?0:Math.max(3,Math.round(m*0.6));return {i:i,m:m,g:g};}).filter(function(x){return x.m>0;});}
function segBody(g,w){var s="";if(g.setup)s+='<p><b>הכנה:</b> '+esc(g.setup)+'</p>';s+='<p>'+esc(g.v?g.v[w]:g.how)+'</p>';if(g.sets)s+='<p class="small muted">'+esc(g.sets)+'</p>';
  if(g.cues&&g.cues.length)s+='<ul class="clean">'+g.cues.map(function(c){return "<li>"+esc(c)+"</li>";}).join("")+'</ul>';if(g.q)s+='<p style="margin:8px 0 0">'+vlink(g.q)+'</p>';return s;}
function fsCard(k,day,short){var S=FS[k],w=blockWeek(),segs=segList(k,short),tot=segs.reduce(function(a,s){return a+s.m;},0),el=document.createElement("div");el.className="fscard";
  var h='<div class="fshead"><div><span class="k">אימון כדורגל אישי</span><h4>'+esc(S.n)+'</h4><div class="small muted"><span class="num">'+tot+'</span> דק\''+(short?' · גרסה קצרה':'')+' · שבוע '+(w+1)+': '+esc(S.theme[w])+'</div></div><button class="btn primary fsgo" type="button">▶ התחלת אימון</button></div>';
  h+='<p class="small muted" style="margin:6px 0 8px"><b style="color:var(--chalk)">ציוד:</b> '+esc(S.need)+'</p>';
  segs.forEach(function(s){var id="fs"+k+"-"+s.i+"-w"+w,done=!!state.checks[id];
    h+='<div class="fseg'+(done?" done":"")+'"><label class="segrow"><input type="checkbox" data-fs="'+id+'"'+(done?" checked":"")+'><span class="segm num">'+s.m+'\'</span><span class="segn">'+esc(s.g.n)+'</span></label><details><summary>איך עושים</summary><div class="body">'+segBody(s.g,w)+'</div></details></div>';});
  el.innerHTML=h;el.querySelector(".fsgo").onclick=function(){openPlayer(k,short);};
  [].forEach.call(el.querySelectorAll("[data-fs]"),function(cb){cb.onchange=function(){state.checks[cb.dataset.fs]=cb.checked;cb.closest(".fseg").classList.toggle("done",cb.checked);save();renderDays();ring();exRing();weekBar();};});
  return el;}
function renderFsLib(){var el=document.getElementById("fsLib"),w=blockWeek();if(!el)return;el.innerHTML="";
  ["A","B"].forEach(function(k){var S=FS[k],tot=segList(k,false).reduce(function(a,s){return a+s.m;},0),d=document.createElement("details");
    d.innerHTML='<summary>'+esc(S.n)+' · <span class="num">'+tot+'</span> דק\'</summary><div class="body"><p class="small muted">'+esc(S.when)+' ציוד: '+esc(S.need)+'</p>'+
      segList(k,false).map(function(s){return '<p style="margin:12px 0 4px"><b>'+esc(s.g.n)+'</b> <span class="muted num">'+s.m+'\'</span></p>'+segBody(s.g,w);}).join("")+
      '<button class="btn primary" type="button" style="margin-top:12px">▶ התחלת האימון</button></div>';
    d.querySelector("button").onclick=function(){openPlayer(k,false);};el.appendChild(d);});}

/* ----- session timer ----- */
var PL={k:null,segs:[],i:0,left:0,end:0,run:false,t:null,ac:null,wl:null};
function openPlayer(k,short){PL.k=k;PL.segs=segList(k,short);var w=blockWeek();PL.i=0;
  for(var i=0;i<PL.segs.length;i++){if(!state.checks["fs"+k+"-"+PL.segs[i].i+"-w"+w]){PL.i=i;break;}}
  PL.left=PL.segs[PL.i].m*60;PL.run=false;PL.done=false;document.getElementById("player").hidden=false;document.body.style.overflow="hidden";plRender();}
function plClose(){PL.run=false;clearInterval(PL.t);if(PL.wl){try{PL.wl.release();}catch(e){}PL.wl=null;}document.getElementById("player").hidden=true;document.body.style.overflow="";renderDay();weekBar();}
function mmss(s){s=Math.max(0,s);return pad(Math.floor(s/60))+":"+pad(s%60);}
function plRender(){var s=PL.segs[PL.i],w=blockWeek(),S=FS[PL.k];
  document.getElementById("plSes").textContent=S.n;
  document.getElementById("plStep").textContent=PL.done?"סיימת!":"שלב "+(PL.i+1)+" מתוך "+PL.segs.length+" · "+s.m+" דק'";
  document.getElementById("plName").textContent=PL.done?"כל הכבוד, האימון הסתיים":s.g.n;
  document.getElementById("plTime").textContent=PL.done?"✓":mmss(PL.left);
  var total=PL.segs.reduce(function(a,x){return a+x.m*60;},0),doneSec=PL.segs.slice(0,PL.i).reduce(function(a,x){return a+x.m*60;},0)+(s.m*60-PL.left);
  document.getElementById("plBar").style.width=(PL.done?100:Math.min(100,doneSec/total*100))+"%";
  document.getElementById("plBody").innerHTML=PL.done?'<p>כל השלבים סומנו כבוצעו. רשום בשאלון את הקושי (RPE) ואת המשך.</p>':segBody(s.g,w);
  var nx=PL.segs[PL.i+1];document.getElementById("plNextUp").textContent=!PL.done&&nx?"הבא: "+nx.g.n+" ("+nx.m+" דק')":"";
  document.getElementById("plPlay").textContent=PL.done?"סגירה":(PL.run?"⏸ השהיה":"▶ התחלה");}
function beep(){try{if(!PL.ac)return;var o=PL.ac.createOscillator(),g=PL.ac.createGain();o.frequency.value=880;g.gain.value=.18;o.connect(g);g.connect(PL.ac.destination);o.start();o.stop(PL.ac.currentTime+.4);}catch(e){}}
function plTick(){if(!PL.run)return;PL.left=Math.round((PL.end-Date.now())/1000);if(PL.left<=0)plSegDone();plRender();}
function plSegDone(){var s=PL.segs[PL.i];state.checks["fs"+PL.k+"-"+s.i+"-w"+blockWeek()]=true;save();beep();if(navigator.vibrate)try{navigator.vibrate([200,100,200]);}catch(e){}
  if(PL.i<PL.segs.length-1){PL.i++;PL.left=PL.segs[PL.i].m*60;PL.end=Date.now()+PL.left*1000;}else{PL.run=false;PL.done=true;clearInterval(PL.t);}}
function plPlay(){if(PL.done){plClose();return;}
  if(!PL.ac){try{var AC=window.AudioContext||window.webkitAudioContext;if(AC)PL.ac=new AC();}catch(e){}}
  if(PL.run){PL.run=false;clearInterval(PL.t);}
  else{PL.run=true;PL.end=Date.now()+PL.left*1000;clearInterval(PL.t);PL.t=setInterval(plTick,500);
    if(navigator.wakeLock&&!PL.wl){navigator.wakeLock.request("screen").then(function(l){PL.wl=l;}).catch(function(){});}}
  plRender();}
function plStep(dir){if(PL.done)return;var j=PL.i+dir;if(j<0||j>=PL.segs.length)return;if(dir>0){var s=PL.segs[PL.i];state.checks["fs"+PL.k+"-"+s.i+"-w"+blockWeek()]=true;save();}
  PL.i=j;PL.left=PL.segs[j].m*60;PL.end=Date.now()+PL.left*1000;plRender();}

/* ================= V4: PRE-MATCH POINTS + TRENDS ================= */
var PM_DEF=[["scan","סריקה לפני כל קבלה","מבט אחרון מעבר לכתף רגע לפני הנגיעה, כשהכדור בדרך אליך."],["body","לקבל עם גוף פתוח","הנגיעה הראשונה קדימה, לכיוון השער של היריב."],["box","כניסה מאוחרת לרחבה","כשהכדור באגף: לרוץ מקו שני ולהגיע בדיוק כשההגנה נסוגה."],["prog","מסירה קדימה קודם","לחפש את המסירה ששוברת קו לפני המסירה לצד."],["press","5 שניות לחץ אחרי איבוד","לסגור את המסירה קדימה, לא רק את השחקן."],["left","רגל שמאל בלי פחד","יעד: לפחות 30% מהנגיעות בשמאל."]];
function pmPoints(f){var ms=state.matches.slice().sort(function(a,b){return a.d<b.d?1:-1;}).slice(0,3),agg={},cnt={},pts=[];
  ms.forEach(function(m){Object.keys(m.sk||{}).forEach(function(k){var v=m.sk[k];if(v){agg[k]=(agg[k]||0)+v;cnt[k]=(cnt[k]||0)+1;}});});
  Object.keys(agg).map(function(k){return [k,agg[k]/cnt[k]];}).filter(function(x){return x[1]<=3.5&&SK[x[0]];}).sort(function(a,b){return a[1]-b[1];}).slice(0,2)
    .forEach(function(x){pts.push({k:x[0],t:SK[x[0]].n,d:SK[x[0]].tip,src:"הדירוג שלך בסיכומים האחרונים: "+x[1].toFixed(1)+" מתוך 5"});});
  var off=blockWeek();for(var i=0;pts.length<3&&i<PM_DEF.length;i++){var p=PM_DEF[(off+i)%PM_DEF.length];if(pts.some(function(q){return q.k===p[0];}))continue;pts.push({k:p[0],t:p[1],d:p[2],src:"דגש קבוע לקשר 6/8"});}
  var venue=f?(f.home?"משחק בית: לקחת אחריות על הכדור מההתחלה ולדרוש אותו בין הקווים.":"משחק חוץ: 10 הדקות הראשונות פשוט ובטוח, ומסירה קדימה רק אחרי סריקה."):"";
  var prev=null;if(f)prev=state.matches.filter(function(m){return m.opp===f.opp&&m.d<f.d;}).sort(function(a,b){return a.d<b.d?1:-1;})[0]||null;
  return {pts:pts,venue:venue,prev:prev};}
function renderPM(){var el=document.getElementById("pmCard");if(!el)return;var f=nextFixture();
  if(!f){el.innerHTML='<h3>דגשים למשחק</h3><p class="muted small" style="margin:0">אין משחק קרוב בלוח.</p>';return;}
  var pm=pmPoints(f),h='<h3>3 דגשים למשחק מול '+esc(f.opp)+'</h3><p class="small muted" style="margin-top:0">'+DOW[ld(f.d).getDay()]+' '+dmy(f.d)+(f.time?' · '+f.time:'')+' · '+esc(pm.venue)+'</p>';
  pm.pts.forEach(function(p,i){h+='<div class="pmp"><span class="pmn">'+(i+1)+'</span><div><b>'+esc(p.t)+'</b><div class="small">'+esc(p.d)+'</div><div class="small muted">'+esc(p.src)+'</div></div></div>';});
  if(pm.prev){var v=pm.prev.v||{};h+='<div class="note" style="margin-top:10px"><b>במשחק הקודם מול '+esc(f.opp)+'</b> ('+dmy(pm.prev.d)+(v.rvRes?', '+esc(v.rvRes):'')+')'+(v.rvKeep?'<br>שימור: '+esc(v.rvKeep):'')+(v.rvImp?'<br>שיפור: '+esc(v.rvImp):'')+'</div>';}
  h+='<button class="btn" id="pmAsk" type="button" style="margin-top:10px">💬 להתכונן עם המאמן</button>';
  el.innerHTML=h;document.getElementById("pmAsk").onclick=function(){openCoach("תכין אותי למשחק");};}
function renderTrend(){var el=document.getElementById("trendBox");if(!el)return;var ms=state.matches.slice().sort(function(a,b){return a.d<b.d?-1:1;});
  if(ms.length<2){el.innerHTML="";return;}
  var last=ms.slice(-3),prev=ms.slice(-6,-3);
  function av(list,k){var a=list.map(function(m){return m.sk&&m.sk[k];}).filter(Boolean);return a.length?a.reduce(function(s,v){return s+v;},0)/a.length:null;}
  var rows=Object.keys(SK).map(function(k){var a=av(last,k),b=av(prev,k);if(a==null)return "";
    var ar=b==null?'<span></span>':(a-b>=0.3?'<span class="ok">▲</span>':(b-a>=0.3?'<span class="bad">▼</span>':'<span class="muted">●</span>'));
    return '<div class="trow2"><span>'+SK[k].n+'</span><div class="tbar"><i style="width:'+(a/5*100)+'%"></i></div><span class="num">'+a.toFixed(1)+'</span>'+ar+'</div>';}).join("");
  el.innerHTML=rows?'<div class="fb" style="margin:0 0 12px"><h4>מגמה ב־3 המשחקים האחרונים</h4>'+rows+'<p class="small muted" style="margin:8px 0 0">▲ שיפור מול 3 המשחקים שלפני. הדגשים למשחק הבא נבחרים מהחלשים כאן.</p></div>':"";}

/* ================= V4: COACH ================= */
var coach={sample:null,tools:false,busy:false,ctl:null};
var WELCOME="היי, אני המאמן של האפליקציה. כשמשהו משתנה, פשוט תכתוב לי, למשל:\n• \"האימון של רביעי בוטל\"\n• \"האימון עבר לחמישי ב־18:00\"\n• \"מחר יש אימון נוסף\"\n• \"אני עייף היום\" או \"מה יש לי מחר?\"\nאני מעדכן את הלו\"ז ומזיז את האימונים האישיים לפי כללי העומס.";
var HELP="אפשר לכתוב לי:\n• ביטול: \"האימון מחר בוטל\", \"אין אימון ביום שלישי\"\n• הזזה: \"האימון של רביעי עבר לחמישי\", \"במקום שלישי האימון בשני\"\n• שעה: \"האימון ביום שלישי ב־18:30\"\n• אימון נוסף: \"יש אימון נוסף בשני ב־17:00\"\n• קבוע: להוסיף \"מעכשיו\" או \"כל שבוע\"\n• שבוע הבא: להוסיף \"בשבוע הבא\"\n• משחק: \"המשחק ב־16:00\", \"המשחק נדחה\", \"תכין אותי למשחק\"\n• עומס: \"אני עייף\", \"כואב לי\"\n• שאלות: \"מה יש לי היום?\", \"מה השבוע?\"\n• ביטול שינוי: \"תחזיר את יום רביעי לרגיל\", \"אפס את השבוע\"";
var DAYW=["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"];
function findDays(t){var res=[],m,re=/(^|[^א-ת])(?:וב|ול|ומ|של|עד|ה|ב|ל|מ|ו)?(ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)(?=$|[^א-ת])/g;
  while((m=re.exec(t))){var pos=m.index+m[1].length,pre=m[0].length-m[1].length-m[2].length;if(m[2]==="שני"&&!pre&&(/אימון\s*$/.test(t.slice(0,pos))||/^שני\s+אימונ/.test(t.slice(pos))))continue;res.push({d:DAYW.indexOf(m[2]),pos:pos});}
  var re2=/יום\s*([אבגדהוש])['׳]/g;while((m=re2.exec(t))){res.push({d:"אבגדהוש".indexOf(m[1]),pos:m.index});}
  [[/(^|[^א-ת])מחרתיים(?=$|[^א-ת])/,2],[/(^|[^א-ת])מחר(?=$|[^א-ת])/,1],[/(^|[^א-ת])(היום|הערב|עכשיו)(?=$|[^א-ת])/,0]].forEach(function(r){var mm=r[0].exec(t);if(mm)res.push({rel:r[1],pos:mm.index+mm[1].length});});
  return res.sort(function(a,b){return a.pos-b.pos;});}
function resolveDay(x,past,nextWk){var td=new Date().getDay(),r;
  if(x.rel!=null){var n=td+x.rel;r=n>6?{wk:nextWeekKey(state.week),d:n-7}:{wk:state.week,d:n};}
  else if(x.d<td&&!past)r={wk:nextWeekKey(state.week),d:x.d};else r={wk:state.week,d:x.d};
  if(nextWk&&x.rel==null)r.wk=nextWeekKey(state.week);return r;}
function findTime(t){var m=/(\d{1,2}):(\d{2})/.exec(t);if(m&&+m[1]<24)return pad(+m[1])+":"+m[2];
  m=/(?:בשעה|ב־|ב-)\s*(\d{1,2})(?![\d:./])/.exec(t)||/(?:^|\s)ב\s*(\d{1,2})\s*(?:בערב|בצהריים|אחה"צ|אחר הצהריים)/.exec(t);
  if(m){var h=+m[1];if(h>=24)return null;if(h>=1&&h<=8&&!/בבוקר/.test(t))h+=12;return pad(h)+":00";}return null;}
function findDate(t){var m=/(\d{1,2})[./](\d{1,2})(?:[./](\d{2,4}))?/.exec(t);if(!m)return null;var dd=+m[1],mm=+m[2];if(mm<1||mm>12||dd<1||dd>31)return null;
  var f=state.fixtures.filter(function(x){var d=ld(x.d);return d.getDate()===dd&&d.getMonth()+1===mm;})[0];return f||null;}
function dayLines(wk,d){var P=plan(wk),D=P.days[d],c=D.ctx,dt=addDaysK(wk,d);
  var head="יום "+DOW[d]+" "+dmy(dt)+(c.next===0?" (יום משחק)":c.next===1?" (ערב משחק)":"")+":";
  var lines=D.items.filter(function(it){return !it.s||it.c==="team"||it.c==="match";}).filter(function(it){return it.c!=="school";}).map(function(it){return "• "+(tmin(it.t)!=null?it.t+" ":"")+it.h;});
  customFor(d).forEach(function(cu){if(wk===state.week)lines.push("• "+cu.text);});
  return head+"\n"+lines.slice(0,10).join("\n");}
function weekLines(wk){var P=plan(wk);return "הלו\"ז "+wkOfLabel(wk)+":\n"+P.days.map(function(D,d){var c=D.ctx,parts=[];
  if(c.next===0)parts.push("⚽ "+fxLabel(c.game));var ts=P.team(d);if(ts.length)parts.push("קבוצה"+(ts[0].time?" "+ts[0].time:""));
  D.blocks.forEach(function(b){if(b==="LOWER"||b==="UPPER"||b==="TECH"||b==="FREE")parts.push(BLK[b].n);});
  if(c.next===1)parts.push("העמסה");return "• "+DOW[d]+": "+(parts.join(", ")||"מנוחה");}).join("\n");}
function pmText(f){if(!f)return "אין משחק קרוב בלוח. אפשר להוסיף משחק בלשונית \"משחקים\".";var pm=pmPoints(f),n=Math.ceil((ld(f.d)-ld(ymd(new Date())))/864e5);
  var s="לקראת "+fxLabel(f)+" (יום "+DOW[ld(f.d).getDay()]+" "+dmy(f.d)+(f.time?" ב־"+f.time:"")+(n>0?", בעוד "+n+" ימים":"")+"):\n";
  pm.pts.forEach(function(p,i){s+=(i+1)+". **"+p.t+"**: "+p.d+"\n";});s+=pm.venue+"\n";
  if(pm.prev&&(pm.prev.v.rvKeep||pm.prev.v.rvImp))s+="במשחק הקודם מולם: "+(pm.prev.v.rvImp?"לשפר: "+pm.prev.v.rvImp:"")+(pm.prev.v.rvKeep?" · לשמר: "+pm.prev.v.rvKeep:"")+"\n";
  s+="יום לפני: העמסת 7–8 g/kg ושינה עד 22:30. 3 שעות לפני: ארוחה קלה עם פחמימות. 15 דק' לפני: תמר או ג'ל.";return s;}
function localCoach(text){var t=text.trim(),days=findDays(t),past=/אתמול|לא היה|לא התקיים|היה אימון/.test(t),nw=/שבוע הבא|בשבוע הבא/.test(t),always=/מעכשיו|מהיום והלאה|כל שבוע|קבוע|תמיד|עד סוף העונה|מעתה/.test(t);
  var R=function(x){return resolveDay(x,past,nw);},td=new Date().getDay(),T=findTime(t),q=/\?/.test(t);
  var hasTrain=/אימון|אימונים|תרגול/.test(t);
  if(/^(עזרה|help)$|מה אתה יודע|מה אפשר לכתוב|איך משתמשים|מה אתה יכול/.test(t))return {reply:HELP};
  if(/כואב|כאב|כאבים|פצוע|פציעה|נפצעתי|נקע|מתיחה|חולה|יש לי חום/.test(t)){var r0=days[0]?R(days[0]):{wk:state.week,d:td};actLight(r0.wk,r0.d);
    var r1=r0.d<6?{wk:r0.wk,d:r0.d+1}:{wk:nextWeekKey(r0.wk),d:0};actLight(r1.wk,r1.d);
    return {reply:"אני לא יכול לאבחן כאב. אם הוא חד, נפוח, מחמיר, או משנה את ההליכה שלך: עוצרים ופונים לפיזיותרפיסט של המועדון או לרופא, ומעדכנים את המאמן בקבוצה.\nעד שמישהו מקצועי בודק: בלי קפיצות, בלי כוח רגליים ובלי ספרינטים. שמתי את "+DOW[r0.d]+" ואת "+DOW[r1.d]+" במצב קל."};}
  if(/עייף|עייפות|רגליים כבדות|הרגליים כבדות|גמור|מותש|סחוט|לא ישנתי|ישנתי (מעט|רע|גרוע|קצת)|אין לי כוח/.test(t)){var rt=days[0]?R(days[0]):{wk:state.week,d:td};actLight(rt.wk,rt.d);
    return {reply:"הבנתי. שמתי את יום "+DOW[rt.d]+" במצב קל: אימון הכדורגל האישי בגרסה קצרה, חצי מהקפיצות, וסט אחד פחות בכוח.\nהלילה 9 שעות שינה, והרבה מים ופחמימות. אם זה נמשך יותר מיומיים, או שה־CMJ יורד ביותר מ־5%, מורידים עוד ומדברים עם מאמן הכושר."};}
  if(/משחק/.test(t)&&!/(אימון).*(בוטל|עבר|הועבר)/.test(t)){
    if(/דגש|תכין|הכנה|טיפ|להתכונן/.test(t))return {reply:pmText(nextFixture())};
    var f=findDate(t);if(!f&&days.length){var rd=R(days[0]);f=plan(rd.wk).ctx[rd.d].game;}
    if(/חזר|כן מתקיים|מתקיים בסוף|בוטלה הדחייה/.test(t)){var fp=f||state.fixtures.filter(function(x){return x.post;}).sort(function(a,b){return a.d<b.d?-1:1;})[0];if(fp){fp.post=0;save();return {reply:"עדכנתי: המשחק מול "+fp.opp+" ב־"+dmy(fp.d)+" מתקיים. התוכנית חזרה לשבוע משחק."};}}
    f=f||nextFixture();if(!f)return {reply:"לא מצאתי משחק מתאים בלוח."};
    if(/נדחה|נדחתה|בוטל|לא יתקיים|לא מתקיים|דחו/.test(t)){f.post=1;save();return {reply:"עדכנתי: המשחק מול "+f.opp+" ב־"+dmy(f.d)+" נדחה. השבוע הפך לשבוע בלי משחק: בלי העמסת פחמימות, ואפשר לעשות כוח רגליים כרגיל. כשייקבע מועד חדש, תוסיף אותו בלשונית \"משחקים\"."};}
    if(T){f.time=T;save();return {reply:"עדכנתי: המשחק מול "+f.opp+" ביום "+DOW[ld(f.d).getDay()]+" "+dmy(f.d)+" בשעה "+T+". ציר הזמן של יום המשחק (ארוחה, חימום, ג'ל) מסונכרן לשעה הזו."};}
    return {reply:pmText(f)};}
  if(/כרגיל|חזר ל|חוזר ל|תחזיר|תבטל את השינוי|בטל את השינוי|אפס|לאפס|איפוס/.test(t)){
    if(days.length){var rr=R(days[0]);return {reply:actRestore(rr.wk,rr.d)};}
    return {reply:actRestore(nw?nextWeekKey(state.week):state.week,null)};}
  var BW=[["LOWER",/כוח רגליים|סקוואט|אימון רגליים/],["UPPER",/פלג גוף עליון|כוח עליון|לחיצת חזה/],["TECH",/אימון אישי|אימון כדורגל אישי|אימון הכדורגל|טכניקה/],["MOB",/מוביליטי|גמישות/],["SHOTS",/בעיטות/]];
  for(var bi=0;bi<BW.length;bi++){if(BW[bi][1].test(t)&&days.length&&/רוצה|אעשה|לעשות|להעביר|תעביר|תזיז|אזיז|אעביר|עבר|במקום/.test(t)){var rp=R(days[days.length-1]);
    var msg=actPin(rp.wk,BW[bi][0],rp.d);planMemo={};var bad=plan(rp.wk).notes.filter(function(n){return n.w&&n.d===rp.d;})[0];return {reply:"סגור. "+msg+(bad?"\n⚠ "+bad.t:"")};}}
  var CANCEL=/בוטל|מבוטל|יבוטל|ביטלו|מבטלים|אין אימון|לא יהיה אימון|אין לנו אימון|לא מתקיים|לא יתקיים|לא היה אימון|אין אימונים/;
  var MOVE=/עבר|הועבר|מועבר|יועבר|יעבור|עוברים|זז|הוזז|נדחה|הקדימו|הוקדם|במקום|יהיה ב|יהיה ביום/;
  var ADD=/נוסף|עוד אימון|הוסיפו|תוסיף|יש גם|גם אימון|אימון כפול|אימון תוספת/;
  if(CANCEL.test(t)&&!(/במקום/.test(t)&&days.length>=2)){
    if(!days.length)return {reply:"איזה אימון בוטל? כתוב למשל \"האימון של רביעי בוטל\" או \"האימון מחר בוטל\"."};
    return {reply:days.map(function(x){var r=R(x);return actCancel(r.wk,r.d,always);}).join("\n")};}
  if(hasTrain&&MOVE.test(t)&&days.length>=2){var fi=0,ti=1,bm=t.indexOf("במקום");
    if(bm>=0){var after=days.filter(function(x){return x.pos>bm;})[0];if(after){fi=days.indexOf(after);ti=fi===0?1:0;}}
    var rf=R(days[fi]),rto=R(days[ti]);if(rto.wk!==rf.wk)rto.wk=rf.wk;
    return {reply:actMove(rf.wk,rf.d,rto.d,T,always)};}
  if(hasTrain&&ADD.test(t)&&days.length){var ra=R(days[0]),kind=/עצים|קשה|כושר|ריצות/.test(t)?"hard":/קל|שחרור|התאוששות/.test(t)?"light":"regular";return {reply:actAdd(ra.wk,ra.d,T,kind,always)};}
  if(hasTrain&&days.length>=2&&!q&&!/ו(ב|גם)?(ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/.test(t)){var mf=R(days[0]),mt=R(days[1]);return {reply:actMove(mf.wk,mf.d,mt.d,T,always)};}
  if(hasTrain&&T&&days.length&&!q){var rtm=R(days[0]);return {reply:actTime(rtm.wk,rtm.d,T,always)};}
  if(/שבוע/.test(t)&&/מה|תראה|לו"ז|לוז|תוכנית/.test(t))return {reply:weekLines(nw?nextWeekKey(state.week):state.week)};
  if(q||/מה (יש|עושים|אני עושה|התוכנית|הלו"ז|הלוז|מחכה)|תוכנית ל|מה בתוכנית/.test(t)){if(!days.length)return {reply:dayLines(state.week,td)};return {reply:days.slice(0,2).map(function(x){var rq=R(x);return dayLines(rq.wk,rq.d);}).join("\n\n")};}
  return {reply:"לא בטוח שהבנתי. אפשר לכתוב למשל:\n• \"האימון של רביעי בוטל\"\n• \"האימון עבר לחמישי ב־18:00\"\n• \"מה יש לי מחר?\"\nאו \"עזרה\" לכל האפשרויות."+(coach.tools?"":"\nבתוך Claude אני מבין גם ניסוחים חופשיים יותר.")};}
function snap(){var a={};[state.week,nextWeekKey(state.week)].forEach(function(wk){planMemo={};var P=plan(wk);a[wk]={pl:Object.assign({},P.pl),load:P.ctx.map(function(c){return c.next===1;}).indexOf(true),notes:P.notes.map(function(n){return n.t;})};});return a;}
function diff(before){var out=[];Object.keys(before).forEach(function(wk){planMemo={};var P=plan(wk),b=before[wk],lab=wk===state.week?"":" (שבוע הבא)";
  ["LOWER","TECH","UPPER","MOB","SHOTS"].forEach(function(k){var x=b.pl[k],y=P.pl[k];if(x===y)return;
    if(y==null)out.push(BLK[k].n+": מדלגים"+lab+", אין יום מתאים.");else if(x==null)out.push(BLK[k].n+": ביום "+DOW[y]+lab+".");else out.push(BLK[k].n+": עבר מיום "+DOW[x]+" ליום "+DOW[y]+lab+".");});
  var nl=P.ctx.map(function(c){return c.next===1;}).indexOf(true);if(nl!==b.load)out.push(nl>=0?"העמסת פחמימות: ביום "+DOW[nl]+lab+".":"אין העמסת פחמימות"+lab+".");
  P.notes.forEach(function(n){if(n.w&&b.notes.indexOf(n.t)<0)out.push("⚠ "+n.t);});});
  return out;}
function planSummary(wk){var P=plan(wk);return P.days.map(function(D,d){var c=D.ctx,parts=[];
  if(c.next===0)parts.push("משחק: "+fxLabel(c.game)+(c.game.time?" "+c.game.time:""));
  P.S.filter(function(s){return s.day===d;}).forEach(function(s){parts.push("קבוצה: "+sesName(s)+" ("+(TYPE_N[s.type]||"")+(s.time?", "+s.time:"")+(s.cancel?", בוטל":"")+(s.onGame?", מוחלף במשחק":"")+")");});
  D.blocks.forEach(function(b){if(b!=="GAME")parts.push("אישי: "+BLK[b].n);});if(P.light[d])parts.push("מצב קל");
  var r=carbRange(c,d);parts.push("פחמימות "+rng(r)+" g/kg");
  return DOW[d]+" "+dmy(addDaysK(wk,d))+" (day "+d+"): "+parts.join("; ");}).join("\n");}
function coachRules(){var td=new Date(),f=nextFixture(),ms=state.matches.slice().sort(function(a,b){return a.d<b.d?1:-1;}).slice(0,2);
  var fx=state.fixtures.filter(function(x){return !x.bye&&x.d>=ymd(td);}).sort(function(a,b){return a.d<b.d?-1:1;}).slice(0,3).map(function(x){return x.d+" "+fxLabel(x)+(x.time?" "+x.time:" (שעה לא ידועה)")+(x.post?" [נדחה]":"");}).join("\n");
  var rv=ms.map(function(m){var low=Object.keys(m.sk||{}).filter(function(k){return m.sk[k]&&m.sk[k]<=3;}).map(function(k){return SK[k].n+" "+m.sk[k]+"/5";});return m.d+" מול "+m.opp+": "+(m.v.rvRes||"")+(low.length?" | חלש: "+low.join(", "):"")+(m.v.rvImp?" | לשפר: "+m.v.rvImp:"");}).join("\n")||"אין עדיין.";
  return "אתה \"המאמן\" באפליקציית אימון של קשר מרכזי (6/8) בן 17 בנוער מ.כ. נווה יוסף, ליגה לאומית צפון.\n"+
  "היום: יום "+DOW[td.getDay()]+" "+dmy(ymd(td))+". מספרי ימים: 0=ראשון, 1=שני, 2=שלישי, 3=רביעי, 4=חמישי, 5=שישי, 6=שבת. week=\"this\" הוא השבוע שמתחיל ב־"+dmy(state.week)+", ו־\"next\" השבוע שאחריו.\n"+
  "כללים:\n- עונים בעברית, קצר וישיר (עד 6 שורות), בגובה העיניים, בלי הקדמות.\n- כשהשחקן מדווח על שינוי באימוני הקבוצה או במשחק, קודם משתמשים בכלים כדי לעדכן, ורק אחר כך מסבירים בקצרה מה השתנה. האפליקציה מזיזה לבד את האימונים האישיים, הפחמימות והשינה, ומראה לשחקן את השינויים, אז לא צריך לפרט אותם שוב.\n- כללי עומס: כוח רגליים לפחות 72 שעות לפני משחק ולא ביום אימון עצים. פליאומטריה וכוח עליון לפחות 48 שעות לפני משחק. יום לפני משחק רק חידוד קל. פחמימות: 6 g/kg יומיים לפני משחק, 7–8 יום לפני.\n- על כאב או פציעה: לא מאבחנים. ממליצים לעצור ולפנות לפיזיותרפיסט או לרופא, ומורידים עומס עם set_light_day.\n- אם לא ברור איזה יום או איזה שבוע, שואלים שאלה אחת קצרה ולא מנחשים.\n- לא ממציאים נתונים שלא מופיעים כאן.\n\n"+
  "הלו\"ז השבוע:\n"+planSummary(state.week)+"\n\nהשבוע הבא:\n"+planSummary(nextWeekKey(state.week))+"\n\nמשחקים קרובים:\n"+(fx||"אין")+"\n\nסיכומי משחקים אחרונים:\n"+rv;}
var WKS={type:"string",enum:["this","next"],description:"this = current week, next = the following week"};
var DAYS_S={type:"integer",minimum:0,maximum:6,description:"0=Sunday ... 6=Saturday"};
function wkOf(w){return w==="next"?nextWeekKey(state.week):state.week;}
function toDay(x){var n=parseInt(x,10);if(isNaN(n)||n<0||n>6)throw new Error("day must be 0-6");return n;}
function toTime(x){if(x==null||x==="")return "";var m=/^(\d{1,2}):(\d{2})$/.exec(String(x));if(!m)throw new Error("time must be HH:MM");return pad(+m[1])+":"+m[2];}
var COACH_TOOLS=[
 {name:"get_day",description:"Returns the full plan of one day: team sessions, personal sessions, nutrition, sleep. Use before answering detailed questions about a specific day.",inputSchema:{type:"object",properties:{day:DAYS_S,week:WKS},required:["day"]},execute:function(i){var wk=wkOf(i.week),d=toDay(i.day);return plan(wk).days[d].items.map(function(it){return it.t+" | "+it.h+(it.d?" — "+it.d:"")+(it.s?" (info)":"");}).join("\n");}},
 {name:"cancel_team_training",description:"Mark the club's team training on a day as cancelled. permanent=true when the club dropped this session from its regular schedule.",inputSchema:{type:"object",properties:{day:DAYS_S,week:WKS,permanent:{type:"boolean"}},required:["day"]},execute:function(i){var r=actCancel(wkOf(i.week),toDay(i.day),!!i.permanent);planMemo={};return r;}},
 {name:"move_team_training",description:"Move the club's team training from one day to another (optionally with a new time HH:MM).",inputSchema:{type:"object",properties:{from_day:DAYS_S,to_day:DAYS_S,time:{type:"string"},week:WKS,permanent:{type:"boolean"}},required:["from_day","to_day"]},execute:function(i){return actMove(wkOf(i.week),toDay(i.from_day),toDay(i.to_day),toTime(i.time),!!i.permanent);}},
 {name:"set_team_training_time",description:"Set the start time (HH:MM, 24h) of the team training on a day.",inputSchema:{type:"object",properties:{day:DAYS_S,time:{type:"string"},week:WKS,permanent:{type:"boolean"}},required:["day","time"]},execute:function(i){return actTime(wkOf(i.week),toDay(i.day),toTime(i.time),!!i.permanent);}},
 {name:"add_team_training",description:"Add an extra team training. kind: regular, hard (conditioning/intense) or light.",inputSchema:{type:"object",properties:{day:DAYS_S,time:{type:"string"},kind:{type:"string",enum:["regular","hard","light"]},week:WKS,permanent:{type:"boolean"}},required:["day"]},execute:function(i){return actAdd(wkOf(i.week),toDay(i.day),toTime(i.time),i.kind||"regular",!!i.permanent);}},
 {name:"restore_schedule",description:"Undo this week's (or next week's) changes. With day: only that day. Without day: the whole week.",inputSchema:{type:"object",properties:{day:DAYS_S,week:WKS}},execute:function(i){return actRestore(wkOf(i.week),i.day==null?null:toDay(i.day));}},
 {name:"move_personal_session",description:"Put one of the player's personal sessions on a chosen day. LOWER=leg strength, UPPER=upper-body strength, TECH=personal football session, MOB=mobility and scanning, SHOTS=15 shots.",inputSchema:{type:"object",properties:{block:{type:"string",enum:["LOWER","UPPER","TECH","MOB","SHOTS"]},day:DAYS_S,week:WKS},required:["block","day"]},execute:function(i){if(!BLK[i.block])throw new Error("unknown block");return actPin(wkOf(i.week),String(i.block),toDay(i.day));}},
 {name:"set_light_day",description:"Put a day in light mode (shorter personal football session, half the jumps, one set less in strength). Use for fatigue, poor sleep or pain.",inputSchema:{type:"object",properties:{day:DAYS_S,week:WKS},required:["day"]},execute:function(i){return actLight(wkOf(i.week),toDay(i.day));}},
 {name:"set_game",description:"Update a fixture by its date (YYYY-MM-DD): set kickoff time (HH:MM) and/or mark it postponed or back on.",inputSchema:{type:"object",properties:{date:{type:"string"},time:{type:"string"},postponed:{type:"boolean"}},required:["date"]},execute:function(i){var f=state.fixtures.filter(function(x){return x.d===String(i.date)&&!x.bye;})[0];if(!f)throw new Error("no fixture on "+i.date);if(i.time)f.time=toTime(i.time);if(i.postponed!=null)f.post=i.postponed?1:0;save();return "fixture "+f.d+" vs "+f.opp+": time "+(f.time||"unknown")+(f.post?", postponed":"");}},
 {name:"add_task",description:"Add a one-off task to the player's checklist on a day.",inputSchema:{type:"object",properties:{day:DAYS_S,week:WKS,text:{type:"string"}},required:["day","text"]},execute:function(i){return actTask(wkOf(i.week),toDay(i.day),String(i.text).slice(0,120));}}
];
function aiCoach(text,el){var turns=[{role:"user",content:coachRules()}];
  state.chat.slice(-11,-1).forEach(function(m){turns.push({role:m.r==="u"?"user":"assistant",content:m.t});});
  turns.push({role:"user",content:text});coach.ctl=new AbortController();
  return coach.sample(turns,{modelTier:"quick",signal:coach.ctl.signal,tools:COACH_TOOLS,onText:function(u){el.classList.remove("typing");el.innerHTML=fmtMsg(u.text);scrollChat();}}).then(function(r){return r.text;});}
function fmtMsg(t){return esc(t).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>");}
function scrollChat(){var b=document.getElementById("coachMsgs");b.scrollTop=b.scrollHeight;}
function bubble(r,t,chg){var box=document.getElementById("coachMsgs"),d=document.createElement("div");d.className="msg "+r;
  d.innerHTML=fmtMsg(t)+(chg&&chg.length?'<ul class="chg">'+chg.map(function(c){return "<li>"+esc(c)+"</li>";}).join("")+'</ul>':"");box.appendChild(d);scrollChat();return d;}
function renderChat(){var box=document.getElementById("coachMsgs");box.innerHTML="";bubble("c",WELCOME);state.chat.forEach(function(m){bubble(m.r,m.t,m.chg);});}
function coachMode(){var m=document.getElementById("coachMode");if(m)m.textContent=coach.tools?"מחובר ל־Claude":"מאמן מובנה, עובד גם בלי חיבור";}
function pushChat(r,t,chg){state.chat.push({r:r,t:t,chg:chg||[]});if(state.chat.length>40)state.chat=state.chat.slice(-40);save();}
function sendCoach(text){text=(text||"").trim();if(!text||coach.busy)return;
  pushChat("u",text);bubble("u",text);var before=snap(),el=bubble("c","המאמן חושב…");el.classList.add("typing");coach.busy=true;
  document.getElementById("coachSend").disabled=true;
  function finish(reply){var chg=diff(before);el.classList.remove("typing");el.innerHTML=fmtMsg(reply)+(chg.length?'<ul class="chg">'+chg.map(function(c){return "<li>"+esc(c)+"</li>";}).join("")+'</ul>':"");
    pushChat("c",reply,chg);coach.busy=false;document.getElementById("coachSend").disabled=false;refresh();scrollChat();}
  if(coach.tools){aiCoach(text,el).then(finish).catch(function(e){var code=e&&e.code;
      if(code==="cancelled"){finish((e.text||"")+"\n(נעצר)");return;}
      if(["not_granted","sampling_disabled","not_declared","capability_disabled","capability_removed","tools_unavailable"].indexOf(code)>=0){coach.tools=false;coachMode();}
      var pre=code==="rate_limited"?"הגעת כרגע למגבלת השימוש ב־Claude, אז עניתי עם המאמן המובנה:\n":(e&&e.text?e.text+"\n":"");
      finish(pre+localCoach(text).reply);});}
  else{setTimeout(function(){finish(localCoach(text).reply);},250);}}
var CHIPS=["מה יש לי היום?","מה יש לי מחר?","מה השבוע?","האימון מחר בוטל","אני עייף היום","תכין אותי למשחק","עזרה"];
function openCoach(prefill){var s=document.getElementById("coachSheet");s.hidden=false;document.body.style.overflow="hidden";renderChat();coachMode();
  var ch=document.getElementById("coachChips");ch.innerHTML="";CHIPS.forEach(function(c){var b=document.createElement("button");b.type="button";b.className="chip";b.textContent=c;b.onclick=function(){sendCoach(c);};ch.appendChild(b);});
  if(prefill)sendCoach(prefill);else setTimeout(function(){document.getElementById("coachIn").focus();},50);}
function closeCoach(){if(coach.ctl&&coach.busy){try{coach.ctl.abort();}catch(e){}}document.getElementById("coachSheet").hidden=true;document.body.style.overflow="";}

/* ================= INIT ================= */
function renderAll(){planMemo={};renderBanner();renderTeamCard();renderFx();syncKick();fillRvFx();renderRvSk();renderVids();renderFsLib();renderBlock();renderLib();renderDays();renderDay();renderMatchLists();weekBar();renderFuel();renderSleep();renderKpi();renderPM();renderTrend();tick();}
renderAll();setInterval(tick,1000);setSync();
document.getElementById("coachFab").onclick=function(){openCoach();};
document.getElementById("coachClose").onclick=closeCoach;
document.getElementById("coachSheet").addEventListener("click",function(e){if(e.target.id==="coachSheet")closeCoach();});
document.getElementById("coachClear").onclick=function(){if(confirm("לנקות את השיחה? השינויים בלו\"ז נשארים.")){state.chat=[];save();renderChat();}};
document.getElementById("coachForm").addEventListener("submit",function(e){e.preventDefault();var i=document.getElementById("coachIn"),v=i.value;i.value="";sendCoach(v);});
document.getElementById("plClose").onclick=plClose;document.getElementById("plPlay").onclick=plPlay;
document.getElementById("plPrev").onclick=function(){plStep(-1);};document.getElementById("plNext").onclick=function(){plStep(1);};
document.addEventListener("keydown",function(e){if(e.key==="Escape"){if(!document.getElementById("player").hidden)plClose();else if(!document.getElementById("coachSheet").hidden)closeCoach();}});
if(window.claude&&typeof window.claude.use==="function"){window.claude.use("sample").then(function(s){if(!s)return;coach.sample=s;return s.limits().then(function(l){coach.tools=!!(l&&l.tools);coachMode();});}).catch(function(){});}
idb.get(LS).then(function(j){if(!j)return;var p=JSON.parse(j);
  if(p&&typeof p==="object"&&(p.ts||0)>(state.ts||0)){state=Object.assign(state,p);rollWeek(state);
    kickEl&&syncKick();bwEl.value=state.bw;bedEl.value=state.bed;wakeEl.value=state.wake;renderAll();}
}).catch(function(){});

/* ---------- backup / restore ---------- */
function bkMsg(t,c){var e=document.getElementById("bkMsg");e.className="small "+(c||"muted");e.textContent=t;}
document.getElementById("bkMake").onclick=function(){document.getElementById("bkTxt").value=JSON.stringify(state);bkMsg("קוד הגיבוי מוכן. העתק אותו ושלח לעצמך.","ok");};
document.getElementById("bkCopy").onclick=function(){var t=document.getElementById("bkTxt");if(!t.value)t.value=JSON.stringify(state);
  t.select();var done=false;try{done=document.execCommand("copy");}catch(e){}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t.value).then(function(){bkMsg("הקוד הועתק","ok");}).catch(function(){bkMsg(done?"הקוד הועתק":"לא הצלחתי להעתיק. סמן ידנית והעתק.",done?"ok":"warn");});}
  else bkMsg(done?"הקוד הועתק":"לא הצלחתי להעתיק. סמן ידנית והעתק.",done?"ok":"warn");};
document.getElementById("bkFile").onclick=function(){var fn="neve-yosef-backup-"+ymd(new Date())+".json",data=JSON.stringify(state);
  var viaClaude=window.claude&&typeof window.claude.use==="function"?window.claude.use("downloads"):Promise.resolve(null);
  viaClaude.then(function(dl){if(!dl)return blobSave();return dl.save({filename:fn,data:data}).then(function(r){bkMsg(r&&r.status==="saved"?"הקובץ נשמר":"הקובץ נשלח","ok");}).catch(function(e){if(e&&e.code==="cancelled")return;bkMsg("השמירה לא הצליחה. השתמש בהעתקת הקוד.","warn");});}).catch(blobSave);};
function blobSave(){try{
  var b=new Blob([JSON.stringify(state)],{type:"application/json"}),u=URL.createObjectURL(b),a=document.createElement("a");
  a.href=u;a.download="neve-yosef-backup-"+ymd(new Date())+".json";document.body.appendChild(a);a.click();
  setTimeout(function(){URL.revokeObjectURL(u);a.remove();},1000);bkMsg("הקובץ ירד למכשיר","ok");
}catch(e){bkMsg("ההורדה נחסמה בדפדפן הזה. השתמש בהעתקת הקוד.","warn");}};
document.getElementById("bkLoad").onclick=function(){
  var v=document.getElementById("bkTxt").value.trim();if(!v){bkMsg("אין קוד בתיבה","warn");return;}
  var p;try{p=JSON.parse(v);}catch(e){bkMsg("הקוד לא תקין","bad");return;}
  if(!p||typeof p!=="object"){bkMsg("הקוד לא תקין","bad");return;}
  if(!confirm("לשחזר מהגיבוי? הנתונים הנוכחיים יוחלפו."))return;
  state=Object.assign({},state,p);rollWeek(state);save();flush();
  bwEl.value=state.bw;bedEl.value=state.bed;wakeEl.value=state.wake;renderAll();syncKick();bkMsg("שוחזר בהצלחה","ok");};

/* optional cloud sync, private per viewer */
if(window.claude&&typeof window.claude.use==="function"){
  Promise.all([window.claude.use("db"),window.claude.use("user")]).then(function(r){
    db=r[0];var user=r[1];if(!db||!user||typeof user.id!=="function")return;
    return user.id().then(function(uid){if(!uid)return;
      docRef=db.doc("data/users/"+uid+"/state");
      return docRef.get().then(function(snap){
        if(snap&&snap.exists&&snap.data()){var d=snap.data();
          if((d.ts||0)>(state.ts||0)){var merged=Object.assign({},state,d);rollWeek(merged);
            state=merged;cloudOk=true;try{store.s(LS,JSON.stringify(state));}catch(e){}idb.set(LS,JSON.stringify(state)).catch(function(){});
            bwEl.value=state.bw;bedEl.value=state.bed;wakeEl.value=state.wake;renderAll();}
          else {cloudOk=true;pushCloud();}
        } else {cloudOk=true;pushCloud();}
        cloudOk=true;setSync();
      });
    });
  }).catch(function(){});
}
})();
