import { useTranslation } from "react-i18next";
import scienceImage from "../assets/images/home-page/science-image.jpg";
import scienceAnalysis from "../assets/images/science-technology/science-analysis.png";
import scienceMeasurement from "../assets/images/science-technology/science-measurement.png";
import scienceTransfer from "../assets/images/science-technology/science-transfer.png";
export const ScienceTechnology = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="science-technology-container">

        <section className="image-container">
          <img
            src={scienceImage}
            alt="Science and Technology"
            className="science-technology-image"
          />
          <div className="small-image-container">
            <div className="image-text-wrapper">
              <h4>{t("science-technology-page.data-analysis-process.measurement")}</h4>
              <img src={scienceMeasurement} alt="image of measurement equipment" />
            </div>
            
            <div className="arrow">
              <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
              
            <div className="image-text-wrapper">
              <h4>{t("science-technology-page.data-analysis-process.data-transfer")}</h4>
              <img src={scienceTransfer} alt="image of data transfer example" />
            </div>
            
            <div className="arrow">
              <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </div>
              
            <div className="image-text-wrapper">
              <h4>{t("science-technology-page.data-analysis-process.data-analysis")}</h4>
              <img src={scienceAnalysis} alt="image of chart of the data analysis" />
            </div>
          </div>
        </section>

        <section className="text-info-section">
          <h2>
            {t("science-technology-page.headline")}
          </h2>
          <article className="operating-principle">
            <h3>{t("science-technology-page.operating-principle.headline")}</h3>
            <ul>
              <li>
                <p>{t("science-technology-page.operating-principle.phase-1")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.operating-principle.phase-2")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.operating-principle.phase-3")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.operating-principle.phase-4")}</p>
              </li>
              </ul>
          </article>

          <article className="technology">
            <h3>{t("science-technology-page.technology.headline")}</h3>

            <h4>{t("science-technology-page.technology.first-text.headline")}</h4>
            <ul>
              <li>
                <p>{t("science-technology-page.technology.first-text.text-1")}</p>
              </li>
            </ul>

            <h4>{t("science-technology-page.technology.first-text.headline")}</h4>
            <ul>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-1")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-2")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-3")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-4")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-5")}</p>
              </li>
              <li>
                <p>{t("science-technology-page.technology.second-text.text-6")}</p>
              </li>
            </ul>

          </article>
          
        </section>
      </div>
    </>
  );
};

export default ScienceTechnology;
