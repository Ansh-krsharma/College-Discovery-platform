export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-muted dark:border-slate-800">
      &copy; {new Date().getFullYear()} UniPath. All rights reserved.
    </footer>
  );
}
