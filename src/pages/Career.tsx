import { useTranslation } from "react-i18next";
import careerImage from "../assets/images/career/career-image.png";

export const Career = () => {
  const { t } = useTranslation();

  return (
    <section className="career-container">
      <div className="image-container">
        <img src={careerImage} alt="Career Image" className="career-image" />
        <div
          className="text-overlay"
          dangerouslySetInnerHTML={{ __html: t("career-page.image_overlay") }}
        ></div>
      </div>

      <article className="text-section">
        <h2>{t("career-page.heading")}</h2>
        <p className="first-text">{t("career-page.first_text")}</p>
        <p
          className="second-text"
          dangerouslySetInnerHTML={{ __html: t("career-page.second_text") }}
        ></p>

        <h3>{t("career-page.doctor_heading")}</h3>
        <ul>
          <li>{t("career-page.doctor_list.one")}</li>
          <li>{t("career-page.doctor_list.two")}</li>
          <li>{t("career-page.doctor_list.three")}</li>
        </ul>

        <h4>{t("career-page.developer_heading")}</h4>
        <ul>
          <li>{t("career-page.developer_list.one")}</li>
          <li>{t("career-page.developer_list.two")}</li>
          <li>{t("career-page.developer_list.three")}</li>
        </ul>

        <p
          className="third-text"
          dangerouslySetInnerHTML={{ __html: t("career-page.third_text") }}
        ></p>
        <p className="fourth-text">{t("career-page.fourth_text")}</p>
      </article>
    </section>
  );
};

export default Career;
