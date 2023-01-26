import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links_NOTUSED">
      {/* 11matt                    css              nav-links    */}
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {/* 22matt             css              nav-link    */}
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
