import css from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Olha Yakymenko</p>
          <p>
            Contact me:
            <a href="<mailto:olhayakym@gmail.com>">OlhaYakym@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
