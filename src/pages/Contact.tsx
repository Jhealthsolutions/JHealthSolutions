import { useTranslation } from "react-i18next";
import contactImage from "../assets/images/contact/contact-image.png";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <img
        className="background-image"
        src={contactImage}
        alt="image of berlin"
      />
      <article className="text-container">
        <h1>{t("contact-page.contact")}</h1>
        <h2>{t("contact-page.send-email")}</h2>
        <p>{t("contact-page.email")}</p>
      </article>
    </div>
  );
};

export default Contact;
