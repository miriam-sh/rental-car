import { HomeNav } from "./HomeNav"
import MyStepper from "./Stepper"

export const Home = () => {

    return <div className="flex-column home">
        <HomeNav></HomeNav>
        <div className="home1">
            <div className="mainTitle">
                <br></br><br></br>
                <h1>Car Rental</h1>
                <h3>השכרת רכב לפי שעה</h3>
            </div>

            <img className="img" src={`${process.env.PUBLIC_URL}/images/cars/c3.png`}></img>

            <div className="about-us flex-row">
                <div className="text">
                    <h3 className="title">נעים להכיר</h3>
                    <p>
                        רכב שיתופי מבית Car Rental הוא העידן החדש בתחום הניידות האישית. המודל החדשני והפרקטי של Car Rental מעמיד לרשותכם מאות רכבים שזמינים לשימוש בקלות ונוחות לפי בחירתכם, בחיוב לפי שעה, או יום בכל זמן ובכל מקום. מימוש ויישום הבשורה שכבשה את התחבורה עולמית נעשה בישראל על ידי Car Rental ברמת החדשנות הגבוהה ביותר, בדגש על חווית משתמש חסרת תקדים.
                        כללי המשחק של הרכב השיתופי בישראל השתנו עם כניסתה של Car Rental לפעילות בארץ, כי רק אצלנו, תקבלו רכבים חדשים ומתוחזקים ברמה הכי מפנקת, שיטת תמחור קלה להבנה וסופר משתלמת, מערכת Waze  בעברית בכל רכב, רכבים בכל הגדלים כולל רכבי 7 מקומות מפנקים ובעיקר שירות מושלם, מסור ומקצועי.
                    </p>
                    <p>אתם מוזמנים להצטרף לאלפי המנויים שלנו ולחוות עולם חדש וממכר: להשתמש ברכב מתי שאתם רק רוצים. באמצעות חיוג פשוט למערכת האוטומטית או דרך אפליקציה סלולרית, דלתות הרכבים החדשים שלנו יפתחו עבורכם, בדיוק היכן ומתי שאתם צריכים.
                    </p>
                </div>
                <img className="img" src={`${process.env.PUBLIC_URL}/images/cars/home.png`}></img>
            </div>

            <br></br>

            <div className="steps">
                <h3 className="title">איך מצטרפים?</h3>
                <br></br>
                <MyStepper></MyStepper>
            </div>

            <br></br>

            <div className="ourCars">
                <h3 className="title">הרכבים שלנו </h3>
                <div className="types" >
                    <div className="type flex-row">
                        <div className="side-text"><p>רכבים משפחתיים</p></div>
                        <img className="img" src={`${process.env.PUBLIC_URL}/images/cars/Mitsubishi_Outlander.png`}></img>
                    </div>

                    <div className="type flex-row">
                        <div className="side-text"><p>רכבים פרטיים</p></div>
                        <img className="img" src={`${process.env.PUBLIC_URL}/images/cars/Mazda3.png`}></img>
                    </div>

                    <div className="type flex-row">
                        <div className="side-text"><p>רכבי מנהלים</p></div>
                        <img className="img" src={`${process.env.PUBLIC_URL}/images/cars/Tesla_Model3.png`}></img>
                    </div>

                    <div className="type flex-row">
                        <div className="side-text"><p>רכבים מסחריים</p></div>
                        <img className="img" src={`${process.env.PUBLIC_URL}/images/cars/peugeot_boxer2.png`}></img>

                    </div>

                </div>
            </div>
            <br></br>
            <footer>
                <p>developed by Miri&Tamar ©️</p>
            </footer>

        </div>
    </div>
}