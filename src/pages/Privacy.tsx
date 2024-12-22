import { useTranslation } from "react-i18next";
import image from "../assets/images/contact/contact-image.png";

export const Privacy = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="privacy-container">
        <img src={image} alt="background image of Berlin" className="background-image"></img>
        <div className="texts">
          <article className="text-1">
            <h3>{t("privacy-page.headline")}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: t("privacy-page.first-text") }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("privacy-page.second-text"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t("privacy-page.third-text") }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("privacy-page.fourth-text"),
              }}
            />
          </article>

          <article className="text-2">
            <p
              dangerouslySetInnerHTML={{ __html: t("privacy-page.fifth-text") }}
            />
            <p
              dangerouslySetInnerHTML={{ __html: t("privacy-page.sixth-text") }}
            />
          </article>
        </div>
      </div>
    </>
  );
};

export default Privacy;
