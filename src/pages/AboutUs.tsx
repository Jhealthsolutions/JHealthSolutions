import { useTranslation } from "react-i18next";
import image from "../assets/images/contact/contact-image.png";

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us-container">
      <img src={image} alt="image of berlin" className="background-image"></img>
      <section className="texts">
        <article className="text-1">
          <p
            dangerouslySetInnerHTML={{
              __html: t("about-us.section1.company_info"),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t("about-us.section1.represented_by"),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t("about-us.section1.contact_info"),
            }}
          ></p>
          <p>{t("about-us.section1.responsible_content")}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: t("about-us.section1.responsible_person"),
            }}
          ></p>
        </article>
        <article className="text-2">
          <p
            dangerouslySetInnerHTML={{
              __html: t("about-us.section2.online_dispute"),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t("about-us.section2.disclaimer"),
            }}
          ></p>
        </article>
      </section>
    </div>
  );
};

export default AboutUs;
