import socialMediaData from "../data/social-media";

export default function SocialMedia(props) {
  return (
    <ul className="flex items-center gap-8">
      {socialMediaData.map(([key, href, title, icon]) => (
        <li key={key}>
          <a target={"_blank"} rel={"noreferrer"} href={href} title={title}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
