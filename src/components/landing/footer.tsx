export function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 py-6 px-4">
      <div className="container mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Student Pro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}